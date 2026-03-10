import { useState, useEffect } from 'react'

const JSONPreviewModal = ({ 
  isOpen, 
  jsonData, 
  onClose, 
  flowTitle,
  folder,
  flowKey
}) => {
  const [editedJSON, setEditedJSON] = useState('')
  const [error, setError] = useState(null)
  
  useEffect(() => {
    if (jsonData) {
      setEditedJSON(JSON.stringify(jsonData, null, 2))
    }
  }, [jsonData])
  
  const handleExport = () => {
    try {
      JSON.parse(editedJSON) // Validar que sea JSON valido
      
      // Crear blob y descargar
      const blob = new Blob([editedJSON], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `Orange_Staffing_${folder}_${flowKey}.json`
      link.click()
      URL.revokeObjectURL(url)
      onClose()
    } catch (e) {
      setError('JSON invalido: ' + e.message)
    }
  }

  const handleCopyToClipboard = () => {
    try {
      JSON.parse(editedJSON) // Validar primero
      navigator.clipboard.writeText(editedJSON)
      // Feedback visual temporal
      const btn = document.getElementById('copy-btn')
      if (btn) {
        const originalText = btn.innerText
        btn.innerText = 'Copiado!'
        setTimeout(() => { btn.innerText = originalText }, 2000)
      }
    } catch (e) {
      setError('JSON invalido: ' + e.message)
    }
  }
  
  if (!isOpen) return null
  
  return (
    <div style={overlayStyles}>
      <div style={modalStyles}>
        {/* Header */}
        <div style={headerStyles}>
          <div>
            <h3 style={{ margin: 0, fontSize: '18px', color: '#333' }}>
              Exportar JSON para LLM
            </h3>
            <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#666' }}>
              {flowTitle} - {folder}
            </p>
          </div>
          <button 
            onClick={onClose}
            style={closeButtonStyles}
          >
            x
          </button>
        </div>
        
        {/* Body - Textarea editable */}
        <div style={bodyStyles}>
          <div style={infoBarStyles}>
            <span>Revisa y edita el contexto antes de exportar</span>
            <span style={{ fontSize: '11px', color: '#888' }}>
              {editedJSON.length.toLocaleString()} caracteres
            </span>
          </div>
          <textarea
            value={editedJSON}
            onChange={(e) => {
              setEditedJSON(e.target.value)
              setError(null)
            }}
            style={textareaStyles}
            spellCheck={false}
          />
          {error && <div style={errorStyles}>{error}</div>}
        </div>
        
        {/* Footer - Botones */}
        <div style={footerStyles}>
          <button 
            onClick={onClose} 
            style={cancelButtonStyles}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f5f5f5'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'white'
            }}
          >
            Cancelar
          </button>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button 
              id="copy-btn"
              onClick={handleCopyToClipboard} 
              style={copyButtonStyles}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#e0f2f1'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white'
              }}
            >
              Copiar al Clipboard
            </button>
            <button 
              onClick={handleExport} 
              style={exportButtonStyles}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)'
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 137, 123, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 137, 123, 0.3)'
              }}
            >
              Descargar JSON
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Estilos
const overlayStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 2000,
  backdropFilter: 'blur(4px)'
}

const modalStyles = {
  background: 'white',
  borderRadius: '12px',
  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
  width: '90%',
  maxWidth: '900px',
  maxHeight: '85vh',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden'
}

const headerStyles = {
  padding: '20px 24px',
  borderBottom: '1px solid #eee',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start'
}

const closeButtonStyles = {
  background: 'none',
  border: 'none',
  fontSize: '24px',
  cursor: 'pointer',
  color: '#999',
  padding: '0 8px',
  lineHeight: 1
}

const bodyStyles = {
  flex: 1,
  padding: '16px 24px',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column'
}

const infoBarStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '12px',
  fontSize: '13px',
  color: '#666'
}

const textareaStyles = {
  flex: 1,
  width: '100%',
  minHeight: '400px',
  padding: '16px',
  fontFamily: "'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
  fontSize: '12px',
  lineHeight: 1.5,
  border: '1px solid #ddd',
  borderRadius: '8px',
  resize: 'none',
  outline: 'none',
  background: '#fafafa'
}

const errorStyles = {
  marginTop: '12px',
  padding: '12px 16px',
  background: '#ffebee',
  border: '1px solid #ffcdd2',
  borderRadius: '6px',
  color: '#c62828',
  fontSize: '13px'
}

const footerStyles = {
  padding: '16px 24px',
  borderTop: '1px solid #eee',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}

const cancelButtonStyles = {
  padding: '10px 20px',
  border: '1px solid #ddd',
  borderRadius: '6px',
  background: 'white',
  color: '#666',
  fontSize: '14px',
  cursor: 'pointer',
  transition: 'all 0.15s'
}

const copyButtonStyles = {
  padding: '10px 20px',
  border: '2px solid #00897b',
  borderRadius: '6px',
  background: 'white',
  color: '#00897b',
  fontSize: '14px',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'all 0.15s'
}

const exportButtonStyles = {
  padding: '10px 24px',
  border: 'none',
  borderRadius: '6px',
  background: 'linear-gradient(135deg, #00897b 0%, #00695c 100%)',
  color: 'white',
  fontSize: '14px',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'all 0.15s',
  boxShadow: '0 2px 8px rgba(0, 137, 123, 0.3)'
}

export default JSONPreviewModal
