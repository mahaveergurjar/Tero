// src/pages/HomePage.jsx

import React, { useState } from "react"; // This line is now correct
import { useLanguage } from "../hooks/useLanguage";

// You can break these into separate component files if they get larger
const FeatureCard = ({ title, description, details }) => (
  <div className="bg-stone-100/5 border border-stone-300/10 p-8">
    <h3 className="text-xl font-medium mb-4 text-amber-300">{title}</h3>
    <p className="opacity-80 mb-6">{description}</p>
    <p className="text-sm opacity-60">{details}</p>
  </div>
);

const FAQItem = ({ question, answer, index, isActive, onToggle }) => (
  <div className="border-b border-stone-300/10">
    <button
      onClick={() => onToggle(index)}
      className="w-full text-left p-6 flex justify-between items-center hover:bg-stone-100/5"
    >
      <span className="text-lg font-light">{question}</span>
      <span
        className={`transform transition-transform duration-300 ${
          isActive ? "rotate-45" : "rotate-0"
        }`}
      >
        +
      </span>
    </button>
    <div
      className={`overflow-hidden transition-all duration-500 ${
        isActive ? "max-h-96" : "max-h-0"
      }`}
    >
      <div className="p-6 pt-0 opacity-80 leading-relaxed">{answer}</div>
    </div>
  </div>
);

const HomePage = ({ onShowPredictor }) => {
  const { t } = useLanguage();
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const faqItems = [
    { q: t("faq.q1.question"), a: t("faq.q1.answer") },
    { q: t("faq.q2.question"), a: t("faq.q2.answer") },
    { q: t("faq.q3.question"), a: t("faq.q3.answer") },
    { q: t("faq.q4.question"), a: t("faq.q4.answer") },
    { q: t("faq.q5.question"), a: t("faq.q5.answer") },
  ];

  return (
    <>
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-5 leading-tight">
            <span className="block font-semibold">{t("hero.primary")}</span>
            <span className="block italic opacity-80">
              {t("hero.secondary")}
            </span>
          </h1>
          <p className="text-sm md:text-base opacity-70 max-w-2xl mx-auto mb-16 mt-10 tracking-widest uppercase leading-loose">
            {t("hero.subtitle")}
          </p>
          <button
            onClick={onShowPredictor}
            className="border border-stone-300/40 px-10 py-4 text-base
                       hover:bg-stone-100/10 hover:border-stone-300/80 hover:-translate-y-1
                       transition-all duration-300 tracking-wide"
          >
            {t("hero.button")}
          </button>
        </div>
      </section>

      <section id="about" className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 text-center">
          <h2 className="text-4xl md:text-6xl font-light mb-16 text-stone-100">
            {t("about.title")}
          </h2>
          <p className="text-lg opacity-80 mb-10 leading-relaxed">
            {t("about.mission")}
          </p>
          <p className="text-lg opacity-80 mb-12 leading-relaxed">
            {t("about.vision")}
          </p>
          <div className="text-xl text-stone-100 font-medium opacity-90">
            {t("about.team")}
          </div>
        </div>
      </section>

      <section id="features" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <h2 className="text-4xl md:text-6xl font-light mb-20 text-center text-stone-100">
            {t("features.title")}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <FeatureCard
              title={t("features.data.title")}
              description={t("features.data.description")}
              details={t("features.data.details")}
            />
            <FeatureCard
              title={t("features.perception.title")}
              description={t("features.perception.description")}
              details={t("features.perception.details")}
            />
            <FeatureCard
              title={t("features.dialogue.title")}
              description={t("features.dialogue.description")}
              details={t("features.dialogue.details")}
            />
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <h2 className="text-4xl md:text-6xl font-light mb-16 text-center text-stone-100">
            {t("faq.title")}
          </h2>
          <div className="bg-stone-50/3 border border-stone-300/10">
            {faqItems.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.q}
                answer={faq.a}
                index={index}
                isActive={activeFAQ === index}
                onToggle={toggleFAQ}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
