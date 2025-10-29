import React from 'react'
import { useReactFlow } from 'reactflow'

export default function CanvasControls() {
  const rf = useReactFlow()

  return (
    <div className="canvas-controls" role="toolbar" aria-label="Canvas controls">
      <button className="control-btn" title="Zoom in" onClick={() => rf.zoomIn({ duration: 180 })} aria-label="Zoom in">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
        </svg>
      </button>
      <button className="control-btn" title="Zoom out" onClick={() => rf.zoomOut({ duration: 180 })} aria-label="Zoom out">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12h14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
        </svg>
      </button>
      <button className="control-btn" title="Fit view" onClick={() => rf.fitView({ padding: 0.22, duration: 240 })} aria-label="Fit view">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
        </svg>
      </button>
      <button className="control-btn" title="Reset" onClick={() => rf.setViewport({ x: 0, y: 0, zoom: 1 }, { duration: 200 })} aria-label="Reset">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12a9 9 0 1 0 3.3-6.9" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
          <path d="M3 4v5h5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
        </svg>
      </button>
    </div>
  )
}
