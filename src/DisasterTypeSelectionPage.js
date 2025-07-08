import React from 'react';
import { Link } from 'react-router-dom';

function DisasterTypeSelectionPage() {
  return (
    <div className="page-placeholder">
      <h2>災害種類選択ページ</h2>
      <p>ここは災害の種類を選択するページです。</p>
      <Link to="/" className="nav-button" style={{backgroundColor: '#6c757d', marginTop: '20px'}}>ホームページに戻る</Link>
    </div>
  );
}

export default DisasterTypeSelectionPage;
