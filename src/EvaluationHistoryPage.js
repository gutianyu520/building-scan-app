import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; // Keep for later if needed

function EvaluationHistoryPage() {
  const [activeTab, setActiveTab] = useState('すべて'); // 'すべて', '今週', '今月'

  // Placeholder mock data - ensure more than 3 items to test scrolling
  const allHistoryItems = [
    { id: 1, buildingName: "東京タワー", evaluationTime: "2024/03/15 10:30", evaluationGrade: "Aランク" },
    { id: 2, buildingName: "スカイツリー", evaluationTime: "2024/03/14 14:00", evaluationGrade: "Bランク" },
    { id: 3, buildingName: "渋谷スクランブルスクエア", evaluationTime: "2024/03/13 09:15", evaluationGrade: "Aランク" },
    { id: 4, buildingName: "六本木ヒルズ森タワー", evaluationTime: "2024/03/10 17:45", evaluationGrade: "Cランク" },
    { id: 5, buildingName: "都庁第一本庁舎", evaluationTime: "2024/02/28 11:00", evaluationGrade: "Aランク" },
    { id: 6, buildingName: "レインボーブリッジ", evaluationTime: "2024/02/25 16:20", evaluationGrade: "Bランク" },
  ];

  // Basic filtering logic (can be expanded later)
  const getFilteredItems = () => {
    // For now, all tabs show all items.
    // Actual filtering by week/month would require date manipulation.
    switch (activeTab) {
      case '今週':
        // Placeholder: return first 2 for demo, replace with actual date filtering
        // return allHistoryItems.filter(item => /* item is in this week */);
        return allHistoryItems; // Show all for now
      case '今月':
        // Placeholder: return first 4 for demo, replace with actual date filtering
        // return allHistoryItems.filter(item => /* item is in this month */);
        return allHistoryItems; // Show all for now
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
    </div>
  );
}

export default EvaluationHistoryPage;
