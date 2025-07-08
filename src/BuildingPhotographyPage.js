import React from 'react';
import { Link } from 'react-router-dom';

function BuildingPhotographyPage() {
  // For aspect ratio, we'll set width in CSS and calculate height here,
  // or more robustly, use padding-bottom trick in CSS if content allows.
  // For simplicity in JS, if we set width to 80vw, height would be (80vw * 2/3).
  // However, it's better to handle this primarily in CSS.

  return (
    <div className="page-container">
      <h2 style={{ marginBottom: '20px' }}>📷 建物撮影</h2>

      <div className="photography-frame">
        <div className="frame-content-wrapper">
          <div className="frame-logo">🏢</div> {/* Using the same building icon for consistency */}
          <p className="frame-instruction">建物を中央に配置してください。</p>
        </div>
      </div>

      {/* Placeholder for actual camera functionality/upload button */}
      <button
        className="nav-button"
        style={{backgroundColor: '#28a745', marginTop: '30px'}}
        onClick={() => alert('撮影機能は未実装です。')}
      >
        撮影開始
      </button>

      <Link to="/select-disaster" className="simple-link" style={{ marginTop: '20px', display: 'inline-block' }}>災害種類選択に戻る</Link>
    </div>
  );
}

export default BuildingPhotographyPage;
