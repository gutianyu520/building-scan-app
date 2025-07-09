import React, { useState } from 'react';
import Modal from './Modal'; // Import the reusable Modal component
// import { Link } from 'react-router-dom'; // If needed for other navigation

function EvaluationResultsPage() {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  const openMapModal = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    setIsMapModalOpen(true);
  };
  const closeMapModal = () => setIsMapModalOpen(false);

  // Placeholder data
  const dangerLevel = "Aランク";
  const advice = "定期的な点検が必要です。";
  const quantitativeIndicators = [
    { label: "損傷率", value: "15%" },
    { label: "壁の傾斜角度", value: "0.5度" },
    { label: "最大ひび割れ幅", value: "2mm" },
    { label: "不同沈下量", value: "10mm" },
  ];

  return (
    <div className="page-container evaluation-results-page">
      <h2 className="page-title"><span role="img" aria-label="bar chart icon">📊</span> 評価完了</h2>

      {/* Summary Area - Placeholder Structure */}
      <div className="summary-area">
        <p>危険度：{dangerLevel}</p>
        <p>アドバイス：{advice}</p>
      </div>

      {/* Quantitative Indicators - Placeholder Structure */}
      <div className="quantitative-indicators-section">
        <h3 className="section-title">定量指標</h3>
        <ul>
          {quantitativeIndicators.map(item => (
            <li key={item.label}>{item.label}：{item.value}</li>
          ))}
        </ul>
      </div>

      {/* Damage Distribution Map Link */}
      <div className="map-link-section">
        <a href="#map" onClick={openMapModal} className="simple-link">損傷分布図</a>
      </div>

      <Modal
        isOpen={isMapModalOpen}
        onClose={closeMapModal}
        onConfirm={closeMapModal} // Confirm just closes this informational modal
        message="損傷分布図" // Title for the modal content
        confirmText="確認"
        showCancelButton={false} // Hide the cancel button for this specific modal
      >
        {/* Children prop for custom content in modal */}
        <img
          src="https://via.placeholder.com/350x250.png?text=損傷分布図プレースホルダー"
          alt="損傷分布図"
          style={{maxWidth: '100%', height: 'auto', marginTop: '10px', marginBottom: '10px'}}
        />
      </Modal>

      {/* Navigation (e.g., back to home or dashboard) can be added later if needed */}
      {/* <Link to="/" className="simple-link" style={{ marginTop: '30px', display: 'inline-block' }}>ホームページへ</Link> */}
    </div>
  );
}

export default EvaluationResultsPage;
