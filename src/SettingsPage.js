import React from 'react';
import { Link } from 'react-router-dom';

function SettingsPage() {
  return (
    <div className="page-placeholder">
      <h2>設定ページ</h2>
      <p>ここは設定を行うページです。</p>
      <Link to="/" className="nav-button" style={{backgroundColor: '#6c757d', marginTop: '20px'}}>ホームページに戻る</Link>
    </div>
  );
}

export default SettingsPage;
