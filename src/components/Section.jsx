import './Section.css';

export default function Section({ title, variant = 'default', children }) {
  const className = variant === 'highlight' 
    ? 'section section--highlight' 
    : 'section section--default';
  
  return (
    <section className={className}>
      {title && <h2 className="section-title">{title}</h2>}
      {children}
    </section>
  );
}
