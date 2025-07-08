import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import DisasterTypeSelectionPage from './DisasterTypeSelectionPage';
import EvaluationHistoryPage from './EvaluationHistoryPage';
import SettingsPage from './SettingsPage';
import BuildingPhotographyPage from './BuildingPhotographyPage'; // Import the new page
import './style.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/select-disaster" element={<DisasterTypeSelectionPage />} />
          <Route path="/history" element={<EvaluationHistoryPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/building-photography" element={<BuildingPhotographyPage />} /> {/* Add route for the new page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
