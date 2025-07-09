import React from 'react';
import { Link } from 'react-router-dom';

function AIAnalysisPage() {
  return (
    <div className="page-placeholder">
      <h2>AI分析進行ページ</h2>
      <p>AIによる評価分析が進行中です...</p>
      {/* This page would typically show a progress bar or animation */}
      <div style={{marginTop: '20px', fontSize: '24px'}}>🔄</div>
      <Link to="/building-photography" className="nav-button" style={{backgroundColor: '#6c757d', marginTop: '30px'}}>建物撮影に戻る</Link>
    </div>
  );
}

export default AIAnalysisPage;
