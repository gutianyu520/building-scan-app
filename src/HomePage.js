import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  // Mock data for latest evaluations
  const latestEvaluations = [
    { name: "〇〇ビル", level: "安全", date: "2023/10/26" },
    { name: "△△アパート", level: "要注意", date: "2023/10/25" },
  ];

  // Mock status data
  const networkStatus = "オンライン"; // Online
  const gpsStatus = "有効"; // Enabled

  return (
    <div>
      <div className="logo">🏢</div> {/* Building emoji as a placeholder logo */}
      <h1 className="app-title">建築安全評価</h1>
      <p className="app-subtitle">AIに基づく災害評価システム</p>

      <div className="status-area">
        <div className="status-item">ネットワーク状態: {networkStatus}</div>
        <div className="status-item">GPS状態: {gpsStatus}</div>
      </div>

      <Link to="/select-disaster" className="nav-button evaluation-start-button">🚀 評価開始</Link>
      <Link to="/history" className="nav-button">履歴表示</Link>
      <Link to="/settings" className="nav-button">設定</Link>

      <div className="history-preview">
        <h3>最新の評価履歴</h3>
        {latestEvaluations.map((item, index) => (
          <div key={index} className="history-item">
            {item.name} - {item.level} ({item.date})
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
