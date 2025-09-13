import React, { useState, createContext } from "react";

export const LanguageContext = createContext();
export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const translations = {
    en: {
      "nav.about": "About",
      "nav.features": "Features",
      "nav.faq": "FAQ",
      "nav.language": "Choose Language",
      "hero.primary": "Thoughtful",
      "hero.secondary": "Agriculture",
      "hero.subtitle":
        "Shaping the future of farming with AI. Built to help you cultivate with clarity and harvest with intention.",
      "hero.button": "Go to Yield Predictor",
      "about.title": "What You're Awakening",
      "about.mission":
        "Our mission is to transform agriculture through cutting-edge AI technology, providing farmers and agricultural professionals with precise yield predictions to optimize crop planning, resource allocation, and sustainable farming practices.",
      "about.vision":
        "We serve as your intelligent companion, designed to observe, comprehend, and respond with remarkable accuracy. It goes beyond merely providing answers; it grows and adapts alongside you, enhancing your agricultural experience and understanding.",
      "about.team": "Team AgriTech Innovators",
      "features.title": "Intelligent Components",
      "features.data.title": "Data Processing Engine",
      "features.data.description":
        "The adaptive mind of our system — interprets context, connects patterns, and evolves with every agricultural interaction.",
      "features.data.details":
        "Our AI processes over 50 environmental variables including satellite imagery, weather patterns, soil composition, and crop genetics to ensure maximum accuracy.",
      "features.perception.title": "Perception Layer",
      "features.perception.description":
        "A multi-sensory interface — merges motion, visuals, and micro-interactions for instinctive agricultural navigation.",
      "features.perception.details":
        "Deep learning models trained on millions of agricultural data points provide predictions with 94% accuracy, continuously improving through automated learning cycles.",
      "features.dialogue.title": "Dialogue Core",
      "features.dialogue.description":
        "Transforms queries into conversations — a natural, human-like exchange that reveals more agricultural insights than it answers.",
      "features.dialogue.details":
        "Receive detailed recommendations for irrigation, fertilization, and harvest timing, along with risk assessments and market optimization strategies.",
      "faq.title": "Understanding Deeper",
      "faq.q1.question": "How accurate are the yield predictions?",
      "faq.q1.answer":
        "Our AI models achieve an average accuracy of 94% based on extensive testing across different crop types and geographic regions. The accuracy continues to improve as the system processes more data over time.",
      "faq.q2.question": "What data do I need to provide?",
      "faq.q2.answer":
        "You'll need basic information about your location, crop type, planting area, and soil conditions. Our system automatically incorporates weather data, satellite imagery, and other environmental factors to enhance predictions.",
      "faq.q3.question": "Is my farm data secure and private?",
      "faq.q3.answer":
        "Absolutely. We use end-to-end encryption and follow strict data privacy protocols. Your farm data is never shared with third parties and is used solely to provide you with personalized predictions and recommendations.",
      "faq.q4.question": "Does the system anticipate rather than just respond?",
      "faq.q4.answer":
        "Yes, our platform uses predictive intelligence that anticipates your needs based on agricultural patterns, seasonal changes, and historical data to provide proactive insights.",
      "faq.q5.question": "How far in advance can you predict yields?",
      "faq.q5.answer":
        "Our system can provide reliable predictions up to 6 months before harvest, with accuracy increasing as the growing season progresses.",
      "predictor.back": "Back to Home",
      "predictor.title": "Yield Predictor",
      "predictor.subtitle":
        "Enter your crop and field information to get AI-powered yield predictions",
      "predictor.form.crop": "Crop Type",
      "predictor.form.location": "Location",
      "predictor.form.area": "Farm Area (hectares)",
      "predictor.form.soil": "Soil Type",
      "predictor.form.irrigation": "Irrigation System",
      "predictor.form.planting": "Planting Date",
      "predictor.form.submit": "Get Yield Prediction",
      "predictor.loading": "Analyzing your data and generating predictions...",
      "predictor.result.title": "Predicted Yield",
      "predictor.result.unit": "tons per hectare",
      "predictor.result.confidence": "Confidence Level:",
    },
    es: {
      "nav.about": "Acerca de",
      "nav.features": "Características",
      "nav.faq": "Preguntas Frecuentes",
      "nav.language": "Elegir Idioma",
      "hero.primary": "Agricultura",
      "hero.secondary": "Reflexiva",
      "hero.subtitle":
        "Dando forma al futuro de la agricultura con IA. Construido para ayudarte a cultivar con claridad y cosechar con intención.",
      "hero.button": "Ir al Predictor de Rendimiento",
      "about.title": "Lo que Estás Despertando",
      "about.team": "Equipo AgriTech Innovadores",
      "predictor.back": "Volver al Inicio",
      "predictor.title": "Predictor de Rendimiento",
      "predictor.form.submit": "Obtener Predicción de Rendimiento",
    },
    fr: {
      "nav.about": "À propos",
      "nav.features": "Fonctionnalités",
      "nav.faq": "FAQ",
      "nav.language": "Choisir la langue",
      "hero.primary": "Agriculture",
      "hero.secondary": "Réfléchie",
      "about.title": "Ce que Vous Éveillez",
      "about.team": "Équipe AgriTech Innovateurs",
      "predictor.back": "Retour à l'accueil",
      "predictor.title": "Prédicteur de Rendement",
    },
    hi: {
      "nav.about": "हमारे बारे में",
      "nav.features": "विशेषताएं",
      "nav.faq": "सामान्य प्रश्न",
      "nav.language": "भाषा चुनें",
      "hero.primary": "विचारशील",
      "hero.secondary": "कृषि",
      "about.title": "आप क्या जगा रहे हैं",
      "about.team": "टीम एग्रीटेक इनोवेटर्स",
      "predictor.back": "होम पर वापस",
      "predictor.title": "उत्पादन पूर्वानुमानकर्ता",
    },
    zh: {
      "nav.about": "关于我们",
      "nav.features": "特点",
      "nav.faq": "常见问题",
      "nav.language": "选择语言",
      "hero.primary": "深思熟虑的",
      "hero.secondary": "农业",
      "about.title": "你正在唤醒什么",
      "about.team": "AgriTech创新团队",
      "predictor.back": "返回首页",
      "predictor.title": "产量预测器",
    },
  };

  const t = (key) => {
    return translations[currentLanguage]?.[key] || translations.en[key] || key;
  };

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
  };

  const languages = [
    { code: "en", name: "🇺🇸 English" },
    { code: "es", name: "🇪🇸 Español" },
    { code: "fr", name: "🇫🇷 Français" },
    { code: "de", name: "🇩🇪 Deutsch" },
    { code: "zh", name: "🇨🇳 中文" },
    { code: "hi", name: "🇮🇳 हिंदी" },
  ];

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        changeLanguage,
        t,
        languages,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// hooks/useLanguage.js
export const useLanguage = () => {
  const context = React.useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
