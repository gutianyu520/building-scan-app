import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import DisasterTypeSelectionPage from './DisasterTypeSelectionPage';
import EvaluationHistoryPage from './EvaluationHistoryPage';
import SettingsPage from './SettingsPage';
import BuildingPhotographyPage from './BuildingPhotographyPage';
import AIAnalysisPage from './AIAnalysisPage'; // Import the new AI Analysis Page
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
          <Route path="/building-photography" element={<BuildingPhotographyPage />} />
          <Route path="/ai-analysis" element={<AIAnalysisPage />} /> {/* Add route for AI Analysis Page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
