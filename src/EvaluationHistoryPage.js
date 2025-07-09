import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; // Keep for later if needed

function EvaluationHistoryPage() {
  const [activeTab, setActiveTab] = useState('すべて'); // 'すべて', '今週', '今月'

  // Helper to format date as YYYY/MM/DD HH:MM
  const formatDate = (date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    const h = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    return `${y}/${m}/${d} ${h}:${min}`;
  };

  // Create some dynamic dates for mock data
  const today = new Date();
  const twoDaysAgo = new Date(today);
  twoDaysAgo.setDate(today.getDate() - 2); // Definitely this week

  const eightDaysAgo = new Date(today);
  eightDaysAgo.setDate(today.getDate() - 8); // Likely last week, but this month (depends on current day)

  const fifteenDaysAgo = new Date(today);
  fifteenDaysAgo.setDate(today.getDate() - 15); // Possibly this month or last month

  const thirtyFiveDaysAgo = new Date(today);
  thirtyFiveDaysAgo.setDate(today.getDate() - 35); // Likely last month

  const sixtyDaysAgo = new Date(today);
  sixtyDaysAgo.setDate(today.getDate() - 60); // Definitely older

  // Updated mock data with varied dates
  const allHistoryItems = [
    { id: 1, buildingName: "東京タワー", evaluationTime: formatDate(today), evaluationGrade: "Aランク" },
    { id: 2, buildingName: "スカイツリー", evaluationTime: formatDate(twoDaysAgo), evaluationGrade: "Bランク" },
    { id: 3, buildingName: "渋谷スクランブルスクエア", evaluationTime: formatDate(eightDaysAgo), evaluationGrade: "Aランク" },
    { id: 4, buildingName: "六本木ヒルズ森タワー", evaluationTime: formatDate(fifteenDaysAgo), evaluationGrade: "Cランク" },
    { id: 5, buildingName: "都庁第一本庁舎", evaluationTime: formatDate(thirtyFiveDaysAgo), evaluationGrade: "Aランク" },
    { id: 6, buildingName: "レインボーブリッジ", evaluationTime: formatDate(sixtyDaysAgo), evaluationGrade: "Bランク" },
    { id: 7, buildingName: "東京駅", evaluationTime: "2023/01/10 12:00", evaluationGrade: "Cランク" }, // Much older
  ];

  // Basic filtering logic (can be expanded later)
  const getFilteredItems = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth(); // 0-11

    // Get the date for the start of the current week (assuming Sunday is the first day)
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay());
    startOfWeek.setHours(0, 0, 0, 0);

    // Get the date for the end of the current week (assuming Saturday is the last day)
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);

    switch (activeTab) {
      case '今週':
        return allHistoryItems.filter(item => {
          const itemDate = new Date(item.evaluationTime.split(' ')[0]); // Get YYYY/MM/DD part
          return itemDate >= startOfWeek && itemDate <= endOfWeek;
        });
      case '今月':
        return allHistoryItems.filter(item => {
          const itemDate = new Date(item.evaluationTime.split(' ')[0]);
          return itemDate.getFullYear() === currentYear && itemDate.getMonth() === currentMonth;
        });
      case 'すべて':
      default:
        return allHistoryItems;
    }
  };

  const filteredItems = getFilteredItems();

  return (
    <div className="page-container evaluation-history-page">
      <h2 className="page-title"><span role="img" aria-label="history icon">📜</span> 評価履歴</h2>

      <div className="tabs-container">
        {/* Tab buttons will be implemented in the next step with styling */}
        <button onClick={() => setActiveTab('すべて')} className={activeTab === 'すべて' ? 'tab-button active' : 'tab-button'}>
          すべて
        </button>
        <button onClick={() => setActiveTab('今週')} className={activeTab === '今週' ? 'tab-button active' : 'tab-button'}>
          今週
        </button>
        <button onClick={() => setActiveTab('今月')} className={activeTab === '今月' ? 'tab-button active' : 'tab-button'}>
          今月
        </button>
      </div>

      <div className="history-list-container">
        {/* List items will be rendered here in the next step */}
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <div key={item.id} className="history-list-item">
              {/* Structure for item: (Name, Time) left, Grade right - to be styled */}
              <div className="item-details-left">
                <div className="item-building-name">{item.buildingName}</div>
                <div className="item-evaluation-time">{item.evaluationTime}</div>
              </div>
              <div className="item-evaluation-grade">{item.evaluationGrade}</div>
            </div>
          ))
        ) : (
          <p className="no-history-message">該当する履歴はありません。</p>
        )}
      </div>
       {/* Link to go back to Home, if needed. For now, focus on page content. */}
       {/* <Link to="/" className="simple-link" style={{ marginTop: '20px', display: 'inline-block' }}>ホームページへ</Link> */}

      <div className="history-actions-container">
        <button className="history-action-btn" onClick={() => alert('統計表示機能は未実装です。')}>
          <span role="img" aria-label="statistics icon">📈</span> 統計表示
        </button>
        <button className="history-action-btn" onClick={() => alert('データエクスポート機能は未実装です。')}>
          <span role="img" aria-label="export icon">📤</span> エクスポート
        </button>
      </div>
    </div>
  );
}

export default EvaluationHistoryPage;
