import React from 'react'

const FlowSelector = ({ flows, selectedFlow, selectedFolder, onSelectFlow, onSelectFolder }) => {
  return (
    <div style={{
      background: 'white',
      borderBottom: '2px solid #e0e0e0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    }}>
      {/* Tabs for Proceso Actual / Proceso App */}
      <div style={{
        display: 'flex',
        borderBottom: '1px solid #e0e0e0',
        background: '#fafafa'
      }}>
        <button
          onClick={() => onSelectFolder('proceso-actual')}
          style={{
            flex: 1,
            padding: '16px 24px',
            border: 'none',
            background: selectedFolder === 'proceso-actual' ? 'white' : 'transparent',
            borderBottom: selectedFolder === 'proceso-actual' ? '3px solid #1976d2' : '3px solid transparent',
            color: selectedFolder === 'proceso-actual' ? '#1976d2' : '#666',
            fontSize: '16px',
            fontWeight: selectedFolder === 'proceso-actual' ? 700 : 500,
            cursor: 'pointer',
            transition: 'all 0.2s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
          onMouseEnter={(e) => {
            if (selectedFolder !== 'proceso-actual') {
              e.target.style.background = '#f5f5f5'
            }
          }}
          onMouseLeave={(e) => {
            if (selectedFolder !== 'proceso-actual') {
              e.target.style.background = 'transparent'
            }
          }}
        >
          <span>📊</span>
          <span>Proceso Actual</span>
        </button>
        
        <button
          onClick={() => onSelectFolder('proceso-app')}
          style={{
            flex: 1,
            padding: '16px 24px',
            border: 'none',
            background: selectedFolder === 'proceso-app' ? 'white' : 'transparent',
            borderBottom: selectedFolder === 'proceso-app' ? '3px solid #00c853' : '3px solid transparent',
            color: selectedFolder === 'proceso-app' ? '#00c853' : '#666',
            fontSize: '16px',
            fontWeight: selectedFolder === 'proceso-app' ? 700 : 500,
            cursor: 'pointer',
            transition: 'all 0.2s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
          onMouseEnter={(e) => {
            if (selectedFolder !== 'proceso-app') {
              e.target.style.background = '#f5f5f5'
            }
          }}
          onMouseLeave={(e) => {
            if (selectedFolder !== 'proceso-app') {
              e.target.style.background = 'transparent'
            }
          }}
        >
          <span>⚡</span>
          <span>Proceso App (Optimizado)</span>
        </button>
        
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
          <span>Roles App</span>
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
          {Object.entries(flows).map(([key, flow]) => (
            <button
              key={key}
              onClick={() => onSelectFlow(key)}
              style={{
                padding: '8px 16px',
                border: selectedFlow === key ? `2px solid ${selectedFolder === 'proceso-rol' ? '#FF6D00' : selectedFolder === 'proceso-app' ? '#00c853' : '#1976d2'}` : '2px solid #e0e0e0',
                borderRadius: '8px',
                background: selectedFlow === key ? (selectedFolder === 'proceso-rol' ? '#FFF3E0' : selectedFolder === 'proceso-app' ? '#E8F5E9' : '#e3f2fd') : 'white',
                color: selectedFlow === key ? (selectedFolder === 'proceso-rol' ? '#FF6D00' : selectedFolder === 'proceso-app' ? '#00c853' : '#1976d2') : '#666',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: selectedFlow === key ? 600 : 400,
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
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
            </button>
          ))}
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
