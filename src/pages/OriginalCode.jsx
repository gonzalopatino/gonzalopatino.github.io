import { Link } from 'react-router-dom';
import Section from '../components/Section';

export default function OriginalCode() {
  return (
    <>
      <Section title="A. Introduction" variant="highlight">
        <p>
          This page contains links to the original, pre-enhancement versions of the thermostat 
          project components. These artifacts represent the baseline codebase used during the 
          code review process and serve as the foundation for all subsequent enhancements 
          documented in this ePortfolio.
        </p>
      </Section>

      <Section title="B. Original Project Components">
        <ul className="component-list">
          <li>
            <a href="#">Original Thermostat Application (CS-350 Python)</a>
            <p className="text-muted">
              [PLACEHOLDER: Brief description of the original Python-based thermostat application from CS-350.]
            </p>
          </li>
          <li>
            <a href="#">Original Control Logic Module</a>
            <p className="text-muted">
              [PLACEHOLDER: Brief description of the original control logic and decision-making implementation.]
            </p>
          </li>
          <li>
            <a href="#">Original Data Handling / Logging Implementation</a>
            <p className="text-muted">
              [PLACEHOLDER: Brief description of the original data handling and logging approach.]
            </p>
          </li>
        </ul>
      </Section>

      <Section title="C. Notes for Evaluators">
        <p>
          This page allows evaluators to inspect the pre-enhancement code that served as the 
          starting point for this capstone project. For detailed discussion of the issues 
          identified and the rationale for enhancements, please refer to the{' '}
          <Link to="/code-review">Code Review</Link> page and the individual 
          artifact pages (<Link to="/software-engineering">Software Engineering</Link>,{' '}
          <Link to="/algorithms">Algorithms</Link>, and <Link to="/database">Databases</Link>).
        </p>
      </Section>
    </>
  );
}
