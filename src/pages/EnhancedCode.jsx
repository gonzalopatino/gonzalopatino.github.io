import { Link } from 'react-router-dom';
import Section from '../components/Section';

export default function EnhancedCode() {
  return (
    <>
      <Section title="A. Introduction" variant="highlight">
        <p>
          This page contains links to the enhanced, post-review versions of the thermostat 
          ecosystem. These artifacts demonstrate the improvements made as a result of the 
          code review process, including embedded firmware running on an ESP32 microcontroller 
          and a full-stack backend for telemetry and management.
        </p>
      </Section>

      <Section title="B. Enhanced Project Components">
        <ul className="component-list">
          <li>
            <a href="#">ESP32 FreeRTOS Thermostat Firmware (C/C++)</a>
            <p className="text-muted">
              [PLACEHOLDER: Brief description of the enhanced embedded firmware with FreeRTOS task architecture.]
            </p>
          </li>
          <li>
            <a href="#">Django + PostgreSQL Telemetry Backend</a>
            <p className="text-muted">
              [PLACEHOLDER: Brief description of the backend system for telemetry collection, storage, and API endpoints.]
            </p>
          </li>
          <li>
            <a href="#">Shared Data Models, Messages, and APIs</a>
            <p className="text-muted">
              [PLACEHOLDER: Brief description of the communication protocols and data structures shared between firmware and backend.]
            </p>
          </li>
        </ul>
      </Section>

      <Section title="C. Relationship to Artifacts">
        <p>
          Each enhanced component is explained in more detail on the{' '}
          <Link to="/software-engineering">Software Engineering</Link>,{' '}
          <Link to="/algorithms">Algorithms</Link>, and{' '}
          <Link to="/database">Databases</Link> artifact pages. 
          This page serves as a central hub to locate the enhanced code repositories 
          and navigate to the relevant documentation.
        </p>
      </Section>
    </>
  );
}
