import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; // If needed for a back button

function SettingsPage() {
  // State for each setting
  const [photoQuality, setPhotoQuality] = useState('高'); // Default '高'
  const [gpsAutoRecord, setGpsAutoRecord] = useState(true);
  const [showGuidelines, setShowGuidelines] = useState(true);
  const [preferWifiUpload, setPreferWifiUpload] = useState(true);
  const [dataSaverMode, setDataSaverMode] = useState(false); // Assuming false means normal data usage
  const [evaluationCompleteNotification, setEvaluationCompleteNotification] = useState(true);
  const [highRiskAlert, setHighRiskAlert] = useState(true);

  const handleSaveSettings = () => {
    // Placeholder for save logic
    alert('設定が保存されました！ (Settings Saved! - Placeholder)\n' +
      `写真品質: ${photoQuality}\n` +
      `GPS自動記録: ${gpsAutoRecord}\n` +
      `撮影ガイドライン表示: ${showGuidelines}\n` +
      `Wi-Fi優先アップロード: ${preferWifiUpload}\n` +
      `データ通信モード: ${dataSaverMode}\n` +
      `評価完了通知: ${evaluationCompleteNotification}\n` +
      `高リスク警告: ${highRiskAlert}`
    );
  };

  return (
    <div className="page-container settings-page">
      <h2 className="page-title"><span role="img" aria-label="settings icon">⚙️</span> システム設定</h2>

      {/* Photography Settings */}
      <div className="settings-category">
        <h3 className="settings-category-title">撮影設定</h3>
        <div className="setting-item">
          <label htmlFor="photo-quality">写真品質選択:</label>
          <select
            id="photo-quality"
            value={photoQuality}
            onChange={(e) => setPhotoQuality(e.target.value)}
            className="settings-select"
          >
            <option value="高">高 (推奨)</option>
            <option value="中">中</option>
            <option value="低">低</option>
          </select>
        </div>
        <div className="setting-item checkbox-item">
          <input
            type="checkbox"
            id="gps-auto-record"
            checked={gpsAutoRecord}
            onChange={(e) => setGpsAutoRecord(e.target.checked)}
            className="settings-checkbox"
          />
          <label htmlFor="gps-auto-record">GPS自動記録</label>
        </div>
        <div className="setting-item checkbox-item">
          <input
            type="checkbox"
            id="show-guidelines"
            checked={showGuidelines}
            onChange={(e) => setShowGuidelines(e.target.checked)}
            className="settings-checkbox"
          />
          <label htmlFor="show-guidelines">撮影ガイドライン表示</label>
        </div>
      </div>

      {/* Network Settings */}
      <div className="settings-category">
        <h3 className="settings-category-title">ネットワーク設定</h3>
        <div className="setting-item checkbox-item">
          <input
            type="checkbox"
            id="prefer-wifi"
            checked={preferWifiUpload}
            onChange={(e) => setPreferWifiUpload(e.target.checked)}
            className="settings-checkbox"
          />
          <label htmlFor="prefer-wifi">Wi-Fi優先アップロード</label>
        </div>
        <div className="setting-item checkbox-item">
          <input
            type="checkbox"
            id="data-saver"
            checked={dataSaverMode}
            onChange={(e) => setDataSaverMode(e.target.checked)}
            className="settings-checkbox"
          />
          <label htmlFor="data-saver">データ通信モード</label>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="settings-category">
        <h3 className="settings-category-title">通知設定</h3>
        <div className="setting-item checkbox-item">
          <input
            type="checkbox"
            id="eval-complete-notify"
            checked={evaluationCompleteNotification}
            onChange={(e) => setEvaluationCompleteNotification(e.target.checked)}
            className="settings-checkbox"
          />
          <label htmlFor="eval-complete-notify">評価完了通知</label>
        </div>
        <div className="setting-item checkbox-item">
          <input
            type="checkbox"
            id="high-risk-alert"
            checked={highRiskAlert}
            onChange={(e) => setHighRiskAlert(e.target.checked)}
            className="settings-checkbox"
          />
          <label htmlFor="high-risk-alert">高リスク警告</label>
        </div>
      </div>

      <div className="settings-save-button-container">
        <button className="nav-button settings-save-button" onClick={handleSaveSettings}>
          <span role="img" aria-label="save icon">💾</span> 設定保存
        </button>
      </div>

      {/* Optional: Link to go back to Home */}
      {/* <Link to="/" className="simple-link" style={{ marginTop: '20px', display: 'inline-block' }}>ホームページへ</Link> */}
    </div>
  );
}

export default SettingsPage;
