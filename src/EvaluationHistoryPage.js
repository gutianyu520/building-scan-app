import React from 'react';
import { Link } from 'react-router-dom';

function EvaluationHistoryPage() {
  return (
    <div className="page-placeholder">
      <h2>評価履歴ページ</h2>
      <p>ここは評価の履歴を表示するページです。</p>
      <Link to="/" className="nav-button" style={{backgroundColor: '#6c757d', marginTop: '20px'}}>ホームページに戻る</Link>
    </div>
  );
}

export default EvaluationHistoryPage;
