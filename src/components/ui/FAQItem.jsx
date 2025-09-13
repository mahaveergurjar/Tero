// components/ui/FAQItem.jsx
const FAQItem = ({ question, answer, index, isActive, onToggle }) => (
  <div
    className="border-b border-stone-300 border-opacity-10 transition-all duration-300 
                  hover:bg-stone-50 hover:bg-opacity-2"
  >
    <div
      className="py-8 cursor-pointer flex justify-between items-center text-stone-100 font-medium text-lg
                 transition-opacity duration-300 hover:opacity-80"
      onClick={() => onToggle(index)}
    >
      <span>{question}</span>
      <div
        className={`w-6 h-6 flex items-center justify-center text-xl transition-transform duration-300 
                      ${isActive ? "rotate-45" : ""}`}
      >
        +
      </div>
    </div>
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isActive ? "max-h-96 pb-8" : "max-h-0"
      }`}
    >
      <p className="text-stone-300 text-opacity-70 leading-relaxed">{answer}</p>
    </div>
  </div>
);
