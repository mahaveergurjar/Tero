// App.jsx
import React, { useState } from "react";
import Header from "./components/Header";
import { NavigationOverlay } from "./components/NavigationOverlay";
import HomePage from "./pages/HomePage";
import PredictorPage from "./pages/PredictorPage";
import { LanguageProvider } from "./contexts/LanguageContext";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const closeNav = () => setIsNavOpen(false);
  const showHome = () => {
    setCurrentPage("home");
    closeNav();
  };
  const showPredictor = () => {
    setCurrentPage("predictor");
    closeNav();
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-stone-700 via-stone-600 to-amber-800 text-stone-100 relative overflow-hidden">
        {/* Background Effects */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 via-transparent to-green-900/10"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-700/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-800/5 rounded-full blur-3xl"></div>
        </div>

        <Header onToggleNav={toggleNav} onShowHome={showHome} />

        <NavigationOverlay
          isOpen={isNavOpen}
          onClose={closeNav}
          onShowHome={showHome}
        />

        {/* Overlay backdrop */}
        {isNavOpen && (
          <div className="fixed inset-0 bg-black/50 z-40" onClick={closeNav} />
        )}

        <main className="pt-20 relative z-10">
          {currentPage === "home" && (
            <HomePage onShowPredictor={showPredictor} />
          )}
          {currentPage === "predictor" && (
            <PredictorPage onShowHome={showHome} />
          )}
        </main>
      </div>
    </LanguageProvider>
  );
};

export default App;
