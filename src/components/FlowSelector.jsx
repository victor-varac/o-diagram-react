import React from 'react'

const FlowSelector = ({ flows, selectedFlow, selectedFolder, onSelectFlow, onSelectFolder }) => {
  const isDigital = selectedFolder === 'proceso-digital'
  
  // Color scheme based on folder
  const accentColor = isDigital ? '#1565C0' : '#FF6D00'
  const accentBg = isDigital ? '#E3F2FD' : '#FFF3E0'

  return (
    <div style={{
      background: 'white',
      borderBottom: '2px solid #e0e0e0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    }}>
      {/* Tab for folder selection */}
      <div style={{
        display: 'flex',
        borderBottom: '1px solid #e0e0e0',
        background: '#fafafa'
      }}>
        <button
          onClick={() => onSelectFolder('proceso-rol')}
          style={{
            flex: 1,
            padding: '16px 24px',
            border: 'none',
            background: selectedFolder === 'proceso-rol' ? 'white' : 'transparent',
            borderBottom: selectedFolder === 'proceso-rol' ? '3px solid #FF6D00' : '3px solid transparent',
            color: selectedFolder === 'proceso-rol' ? '#FF6D00' : '#666',
            fontSize: '16px',
            fontWeight: selectedFolder === 'proceso-rol' ? 700 : 500,
            cursor: 'pointer',
            transition: 'all 0.2s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
          onMouseEnter={(e) => {
            if (selectedFolder !== 'proceso-rol') {
              e.target.style.background = '#f5f5f5'
            }
          }}
          onMouseLeave={(e) => {
            if (selectedFolder !== 'proceso-rol') {
              e.target.style.background = 'transparent'
            }
          }}
        >
          <span>🎭</span>
          <span>Diagramas por Rol</span>
        </button>

        <button
          onClick={() => onSelectFolder('proceso-digital')}
          style={{
            flex: 1,
            padding: '16px 24px',
            border: 'none',
            background: selectedFolder === 'proceso-digital' ? 'white' : 'transparent',
            borderBottom: selectedFolder === 'proceso-digital' ? '3px solid #1565C0' : '3px solid transparent',
            color: selectedFolder === 'proceso-digital' ? '#1565C0' : '#666',
            fontSize: '16px',
            fontWeight: selectedFolder === 'proceso-digital' ? 700 : 500,
            cursor: 'pointer',
            transition: 'all 0.2s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
          onMouseEnter={(e) => {
            if (selectedFolder !== 'proceso-digital') {
              e.target.style.background = '#f5f5f5'
            }
          }}
          onMouseLeave={(e) => {
            if (selectedFolder !== 'proceso-digital') {
              e.target.style.background = 'transparent'
            }
          }}
        >
          <span>⚡</span>
          <span>Proceso Digital</span>
        </button>
      </div>

      {/* Flow selector */}
      <div style={{
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        flexWrap: 'wrap'
      }}>
        <div style={{ fontWeight: 700, fontSize: '18px', color: '#333', marginRight: '16px' }}>
          🏢 Orange Staffing
        </div>
        
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', flex: 1 }}>
          {Object.entries(flows).map(([key, flow]) => {
            const isPlaceholder = flow.status === 'placeholder'
            return (
              <button
                key={key}
                onClick={() => onSelectFlow(key)}
                style={{
                  padding: '8px 16px',
                  border: selectedFlow === key ? `2px solid ${accentColor}` : '2px solid #e0e0e0',
                  borderRadius: '8px',
                  background: selectedFlow === key ? accentBg : 'white',
                  color: selectedFlow === key ? accentColor : (isPlaceholder ? '#aaa' : '#666'),
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: selectedFlow === key ? 600 : 400,
                  fontStyle: isPlaceholder ? 'italic' : 'normal',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  opacity: isPlaceholder && selectedFlow !== key ? 0.7 : 1,
                }}
                onMouseEnter={(e) => {
                  if (selectedFlow !== key) {
                    e.target.style.borderColor = '#bbb'
                    e.target.style.background = '#f5f5f5'
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedFlow !== key) {
                    e.target.style.borderColor = '#e0e0e0'
                    e.target.style.background = 'white'
                  }
                }}
              >
                <span>{flow.icon}</span>
                <span>{flow.title.split('.')[1]?.trim() || flow.title}</span>
                {isPlaceholder && <span style={{ fontSize: '10px', opacity: 0.6 }}>🚧</span>}
              </button>
            )
          })}
        </div>
        
        <div style={{
          padding: '8px 16px',
          background: '#f5f5f5',
          borderRadius: '8px',
          fontSize: '12px',
          color: '#666',
          maxWidth: '400px'
        }}>
          {flows[selectedFlow].description}
        </div>
      </div>
    </div>
  )
}

export default FlowSelector
