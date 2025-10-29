import React, { useMemo, useState } from 'react'

export default function DownloadDialog({ initial, onCancel, onConfirm }) {
  const [filename, setFilename] = useState(initial?.filename || 'jsontree')
  const [format, setFormat] = useState(initial?.format || 'png')
  const [transparent, setTransparent] = useState(!!initial?.transparent)

  const canDownload = useMemo(() => filename && /[^\\/:*?"<>|]/.test(filename), [filename])

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal">
        <div className="modal__header">
          <h3>Download Image</h3>
          <button className="modal__close" onClick={onCancel} aria-label="Close">×</button>
        </div>
        <div className="modal__body">
          <label className="field">
            <span className="field__label">File name</span>
            <input
              className="field__input"
              value={filename}
              onChange={(e) => setFilename(e.target.value.replace(/\.(png|svg)$/i, ''))}
              placeholder="jsontree"
            />
          </label>

          <div className="field">
            <span className="field__label">Format</span>
            <div className="segmented">
              <button type="button" className={format === 'png' ? 'segmented__btn active' : 'segmented__btn'} onClick={() => setFormat('png')}>PNG</button>
              <button type="button" className={format === 'svg' ? 'segmented__btn active' : 'segmented__btn'} onClick={() => setFormat('svg')}>SVG</button>
            </div>
          </div>

          <label className="switch">
            <input type="checkbox" checked={transparent} onChange={e => setTransparent(e.target.checked)} />
            <span className="switch__label">Transparent background</span>
          </label>
        </div>
        <div className="modal__footer">
          <button className="btn ghost" onClick={onCancel}>Cancel</button>
          <button className="btn primary" disabled={!canDownload} onClick={() => onConfirm({ filename, format, transparent })}>Download</button>
        </div>
      </div>
    </div>
  )
}
