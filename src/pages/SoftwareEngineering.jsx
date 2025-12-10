import { Link } from 'react-router-dom';
import Section from '../components/Section';

export default function SoftwareEngineering() {
  return (
    <>
      <Section title="Artifact Introduction" variant="highlight">
        <p>
          This artifact focuses on software engineering principles as applied to embedded systems 
          development. It demonstrates modular design, component-based architecture, maintainability, 
          and real-world engineering practices that transform prototype code into production-ready 
          software. The work originates from the thermostat project and showcases the application 
          of professional software engineering techniques.
        </p>
      </Section>

      <Section title="Original Artifact Overview">
        <p>
          [PLACEHOLDER: Description of the original software architecture and design from the 
          CS-350 thermostat project. This section will detail the initial code structure, 
          organization, and any limitations in the original design.]
        </p>
      </Section>

      <Section title="Enhanced Artifact Overview">
        <p>
          [PLACEHOLDER: Description of the enhanced software engineering implementation, including 
          modular component design, ESP-IDF framework integration, FreeRTOS task architecture, 
          and professional development practices applied to the codebase.]
        </p>
      </Section>

      <Section title="Enhancement Summary">
        <p>
          [PLACEHOLDER: Summary of the key software engineering enhancements made, including 
          specific techniques applied, design patterns used, and measurable improvements in 
          code quality, maintainability, and extensibility.]
        </p>
      </Section>

      <Section title="Course Outcomes Mapping">
        <p>This artifact addresses the following CS-499 course outcomes:</p>
        <ul>
          <li><strong>Outcome 1:</strong> [PLACEHOLDER: Explanation of how this artifact demonstrates outcome 1]</li>
          <li><strong>Outcome 2:</strong> [PLACEHOLDER: Explanation of how this artifact demonstrates outcome 2]</li>
          <li><strong>Outcome 4:</strong> [PLACEHOLDER: Explanation of how this artifact demonstrates outcome 4]</li>
          <li><strong>Outcome 5:</strong> [PLACEHOLDER: Explanation of how this artifact demonstrates outcome 5]</li>
        </ul>
      </Section>

      <Section title="Related Documents & Diagrams">
        <p>
          Supporting materials for this artifact:
        </p>
        <ul>
          <li><Link to="/original-code">Original Code Repository</Link></li>
          <li><Link to="/enhanced-code">Enhanced Code Repository</Link></li>
          <li>[PLACEHOLDER: Link to architecture diagrams]</li>
          <li>[PLACEHOLDER: Link to component documentation]</li>
        </ul>
      </Section>
    </>
  );
}
