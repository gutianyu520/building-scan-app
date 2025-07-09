import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  // Helper function to format the date
  const formatDate = (dateString) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    const evalDate = new Date(dateString);

    // Reset time part for accurate date comparison
    today.setHours(0, 0, 0, 0);
    yesterday.setHours(0, 0, 0, 0);
    evalDate.setHours(0, 0, 0, 0);

    if (evalDate.getTime() === today.getTime()) {
      return "今日";
    } else if (evalDate.getTime() === yesterday.getTime()) {
      return "昨日";
    } else {
      return dateString; // Already in YYYY/MM/DD format
    }
  };

  // Helper function to get status dot color class
  const getStatusDotClass = (level) => {
    switch (level) {
      case 'A': return 'status-green';
      case 'B': return 'status-orange';
      case 'C': return 'status-yellow';
      case 'D': return 'status-red';
      default: return ''; // Should not happen with valid data
    }
  };

  // Get current date for mock data
  const todayDate = new Date();
  const yesterdayDate = new Date(todayDate);
  yesterdayDate.setDate(todayDate.getDate() - 1);
  const twoDaysAgoDate = new Date(todayDate);
  twoDaysAgoDate.setDate(todayDate.getDate() - 2);

  const formatDateToYYYYMMDD = (date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}/${m}/${d}`;
  }

  // Mock data for latest evaluations - using A, B, C, D for levels
  const latestEvaluations = [
    { name: "〇〇ビル", level: "A", date: formatDateToYYYYMMDD(todayDate) }, // Today
    { name: "△△アパート", level: "B", date: formatDateToYYYYMMDD(yesterdayDate) }, // Yesterday
    { name: "公共施設X", level: "C", date: formatDateToYYYYMMDD(twoDaysAgoDate) }, // Two days ago
    { name: "古い倉庫", level: "D", date: "2023/10/20" },
  ].slice(0, 2); // Ensure only two items are shown

  // Mock status data
  const networkStatus = "オンライン"; // Online
  const gpsStatus = "有効"; // Enabled

  return (
    <div>
      <div className="logo">🏢</div> {/* Building emoji as a placeholder logo */}
      <h1 className="app-title">建築安全評価</h1>
      <p className="app-subtitle">AIに基づく災害評価システム</p>

      <div className="status-area">
        <div className="status-item">📶 ネットワーク状態: {networkStatus}</div>
        <div className="status-item">GPS状態: {gpsStatus}</div>
      </div>

      <Link to="/select-disaster" className="nav-button evaluation-start-button">🚀 評価開始</Link>
      <Link to="/history" className="nav-button history-button">📄 履歴表示</Link>
      <Link to="/settings" className="nav-button settings-button">⚙️ 設定</Link>

      <div className="history-preview">
        <h3>最新の評価履歴</h3>
        {latestEvaluations.map((item, index) => (
          <div key={index} className="history-item">
            <span className={`status-dot ${getStatusDotClass(item.level)}`}></span>
            {item.name} - {item.level}ランク ({formatDate(item.date)})
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
