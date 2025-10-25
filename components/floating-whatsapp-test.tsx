"use client"

import { useState } from "react"

export function FloatingWhatsAppTest() {
  const [isOpen, setIsOpen] = useState(false)
  
  console.log('FloatingWhatsAppTest component rendered, isOpen:', isOpen)

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 99999,
        pointerEvents: 'auto'
      }}
    >
      <button
        onClick={() => {
          console.log('TEST BUTTON CLICKED!')
          setIsOpen(!isOpen)
        }}
        style={{
          width: '60px',
          height: '60px',
          backgroundColor: 'red',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          cursor: 'pointer',
          fontSize: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {isOpen ? 'X' : 'W'}
      </button>
      
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            bottom: '70px',
            right: '0',
            width: '200px',
            backgroundColor: 'white',
            border: '2px solid black',
            padding: '10px',
            borderRadius: '8px'
          }}
        >
          <p>WhatsApp Panel is OPEN!</p>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      )}
    </div>
  )
}
