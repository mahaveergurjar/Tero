import { useLanguage } from "../hooks/useLanguage";

const Header = ({ onToggleNav, onShowHome }) => {
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-stone-800/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-20 flex justify-between items-center">
        <button
          onClick={onShowHome}
          className="text-xl font-semibold tracking-wider hover:opacity-80 transition-opacity"
        >
          AgriTech<span className="text-amber-400">.AI</span>
        </button>

        <nav className="hidden md:flex items-center space-x-10">
          <a
            href="#about"
            className="text-sm uppercase tracking-widest text-stone-300 hover:text-stone-100 transition-colors"
          >
            {t("nav.about")}
          </a>
          <a
            href="#features"
            className="text-sm uppercase tracking-widest text-stone-300 hover:text-stone-100 transition-colors"
          >
            {t("nav.features")}
          </a>
          <a
            href="#faq"
            className="text-sm uppercase tracking-widest text-stone-300 hover:text-stone-100 transition-colors"
          >
            {t("nav.faq")}
          </a>
        </nav>

        <button
          onClick={onToggleNav}
          className="md:hidden p-2"
          aria-label="Open navigation menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
