import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function DisasterTypeSelectionPage() {
  const navigate = useNavigate();

  const handleSelection = (disasterType) => {
    // Later, this could pass the disasterType to the photography page,
    // e.g., navigate(`/building-photography?type=${encodeURIComponent(disasterType)}`);
    // For now, it just navigates.
    console.log("選択された災害種類:", disasterType);
    navigate('/building-photography');
  };

  const disasterTypes = [
    { id: 1, label: "建物の破壊・倒壊" },
    { id: 2, label: "地盤沈下・液状化" },
    { id: 3, label: "外壁等の損傷" },
    { id: 4, label: "建物内部の状況" },
  ];

  return (
    <div className="page-container"> {/* Using a more generic container class if needed, or style directly */}
      <h2 style={{ marginBottom: '10px' }}>🔍 災害種類選択</h2>
      <p style={{ marginBottom: '30px', color: '#555' }}>評価する災害の種類を選択してください。</p>

      <div className="disaster-options-container">
        {disasterTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => handleSelection(type.label)}
            className="nav-button disaster-type-button" // Reusing nav-button for base style, adding specific class
          >
            {type.label}
          </button>
        ))}
      </div>

      <Link to="/" className="nav-button" style={{backgroundColor: '#6c757d', marginTop: '30px', width: 'auto', padding: '10px 20px'}}>ホームページに戻る</Link>
    </div>
  );
}

export default DisasterTypeSelectionPage;
