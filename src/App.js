import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import DisasterTypeSelectionPage from './DisasterTypeSelectionPage';
import EvaluationHistoryPage from './EvaluationHistoryPage';
import SettingsPage from './SettingsPage';
import BuildingPhotographyPage from './BuildingPhotographyPage';
import AIAnalysisPage from './AIAnalysisPage';
import EvaluationResultsPage from './EvaluationResultsPage'; // Import the new Evaluation Results Page
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
          <Route path="/ai-analysis" element={<AIAnalysisPage />} />
          <Route path="/evaluation-results" element={<EvaluationResultsPage />} /> {/* Add route for Evaluation Results Page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
