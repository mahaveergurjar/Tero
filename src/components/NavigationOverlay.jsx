// components/NavigationOverlay.jsx
import { useLanguage } from "../hooks/useLanguage";
export const NavigationOverlay = ({ isOpen, onClose, onShowHome }) => {
  const { t, languages, changeLanguage } = useLanguage();

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    onClose();
  };

  return (
    <div
      className={`fixed top-0 right-0 w-full md:w-96 h-full bg-stone-700/95 backdrop-blur-2xl z-50
                    transform transition-transform duration-500 ${
                      isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
    >
      <div className="p-10 pt-24">
        <div className="space-y-8">
          <button
            onClick={onShowHome}
            className="block text-2xl font-light text-stone-100 hover:opacity-80 transition-all hover:translate-x-2"
          >
            {t("nav.about")}
          </button>
          <a
            href="#features"
            onClick={onClose}
            className="block text-2xl font-light text-stone-100 hover:opacity-80 transition-all hover:translate-x-2"
          >
            {t("nav.features")}
          </a>
          <a
            href="#faq"
            onClick={onClose}
            className="block text-2xl font-light text-stone-100 hover:opacity-80 transition-all hover:translate-x-2"
          >
            {t("nav.faq")}
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-stone-300/20">
          <div className="text-stone-300 mb-5">{t("nav.language")}</div>
          <div className="grid grid-cols-2 gap-4">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className="p-3 bg-stone-100/5 border border-stone-300/10 rounded text-sm
                          hover:bg-stone-100/10 hover:border-stone-300/30 transition-all text-center"
              >
                {lang.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
