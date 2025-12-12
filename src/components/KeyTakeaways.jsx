import { FileText, Layers, Zap, CheckCircle, Lightbulb } from 'lucide-react';
import './KeyTakeaways.css';

/**
 * KeyTakeaways - Visual summary cards for artifact pages
 * Shows Original, Enhanced, Why It Matters, and Outcomes
 */
export default function KeyTakeaways({ items = [] }) {
  const icons = {
    original: <FileText size={22} />,
    enhanced: <Layers size={22} />,
    impact: <Zap size={22} />,
    outcomes: <CheckCircle size={22} />,
    default: <Lightbulb size={22} />
  };

  const getIcon = (type) => icons[type] || icons.default;

  return (
    <div className="key-takeaways">
      <h2 className="key-takeaways__title">
        <Lightbulb size={24} className="key-takeaways__title-icon" />
        Key Takeaways
      </h2>
      <div className="key-takeaways__grid">
        {items.map((item, index) => (
          <article 
            key={index} 
            className={`takeaway-card takeaway-card--${item.type || 'default'}`}
          >
            <div className="takeaway-card__icon" aria-hidden="true">
              {getIcon(item.type)}
            </div>
            <h3 className="takeaway-card__heading">{item.title}</h3>
            <p className="takeaway-card__content">{item.content}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
