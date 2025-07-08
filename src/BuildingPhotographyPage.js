import React from 'react';
import { Link } from 'react-router-dom';

function BuildingPhotographyPage() {
  return (
    <div className="page-placeholder">
      <h2>建物撮影ページ</h2>
      <p>ここは建物の写真を撮影・アップロードするページです。</p>
      <p>選択された災害タイプに基づいて評価を行います。</p>
      <Link to="/select-disaster" className="nav-button" style={{backgroundColor: '#6c757d', marginTop: '20px'}}>災害種類選択に戻る</Link>
    </div>
  );
}

export default BuildingPhotographyPage;
