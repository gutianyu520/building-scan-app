import React from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from './ProgressBar'; // Import the ProgressBar component

function AIAnalysisPage() {
  // Placeholder data for progress and results
  const progressItems = [
    { id: 1, label: "画像前処理", percentage: 100 }, // Image Preprocessing
    { id: 2, label: "YOLO物体検出", percentage: 75 },  // YOLO Object Detection
    { id: 3, label: "損傷定量分析", percentage: 50 },  // Damage Quantification Analysis
    { id: 4, label: "マルチモーダルLLM評価", percentage: 25 } // Multimodal LLM Evaluation
  ];

  const detectedResults = [
    "結果項目1: 詳細...", // Result Item 1: Details...
    "結果項目2: 詳細...", // Result Item 2: Details...
    "結果項目3: 詳細..."  // Result Item 3: Details...
  ];

  const estimatedTimeRemaining = "約5分"; // Approx. 5 minutes

  return (
    <div className="page-container ai-analysis-page">
      <h2 className="page-title"><span role="img" aria-label="robot icon">🤖</span> AI分析中...</h2>

      <div className="progress-section">
        {progressItems.map(item => (
          <div key={item.id} className="progress-item">
            <span className="progress-label">{item.label}</span>
            <ProgressBar percentage={item.percentage} />
          </div>
        ))}
      </div>

      <div className="results-section">
        <h3 className="results-title">検出結果</h3>
        <ul className="results-list">
          {detectedResults.map((result, index) => (
            <li key={index} className="results-list-item">{result}</li>
          ))}
          {detectedResults.length === 0 && <li className="results-list-item">結果はまだありません。</li>}
        </ul>
      </div>

      <div className="eta-section">
        <p className="eta-text">予測残り分析時間: {estimatedTimeRemaining}</p>
      </div>

      <Link to="/building-photography" className="simple-link" style={{ marginTop: '30px', display: 'inline-block' }}>建物撮影に戻る</Link>
    </div>
  );
}

export default AIAnalysisPage;
