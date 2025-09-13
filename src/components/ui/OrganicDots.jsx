// components/ui/OrganicDots.jsx
const OrganicDots = () => (
  <>
    <div className="absolute top-1/4 left-1/12 w-2 h-2 bg-stone-300 bg-opacity-30 rounded-full animate-pulse"></div>
    <div className="absolute top-3/5 right-1/6 w-2 h-2 bg-stone-300 bg-opacity-40 rounded-full animate-pulse delay-1000"></div>
    <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-stone-300 bg-opacity-35 rounded-full animate-pulse delay-2000"></div>
  </>
);

// components/ui/FeatureCard.jsx
const FeatureCard = ({ title, description, details, delay = 0 }) => (
  <div
    className="group bg-stone-50 bg-opacity-3 border border-stone-300 border-opacity-10 p-10 
               transition-all duration-500 hover:bg-opacity-5 hover:border-opacity-30 hover:-translate-y-1 cursor-pointer"
    style={{ transitionDelay: `${delay}ms` }}
  >
    <h3 className="text-xl font-semibold mb-5 text-stone-100 uppercase tracking-wide">
      {title}
    </h3>
    <p className="text-stone-300 text-opacity-70 text-sm mb-5 leading-relaxed">
      {description}
    </p>
    <p className="text-stone-400 text-opacity-60 text-sm leading-relaxed">
      {details}
    </p>
  </div>
);
