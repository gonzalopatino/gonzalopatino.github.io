import { Link } from 'react-router-dom';
import Section from '../components/Section';

export default function Database() {
  return (
    <>
      <Section title="Artifact Introduction" variant="highlight">
        <p>
          This artifact focuses on databases, data modeling, and persistent storage as applied 
          to IoT systems. It originates from the cloud backend and telemetry storage components 
          of the thermostat project, demonstrating how relational database design and proper 
          data management enable scalable, reliable device monitoring and control.
        </p>
      </Section>

      <Section title="Original Data Handling Approach">
        <p>
          [PLACEHOLDER: Description of the original data handling approach in the CS-350 
          project. This section will detail any initial data storage methods, limitations, 
          and areas identified for improvement during the code review.]
        </p>
      </Section>

      <Section title="Enhanced Database Design">
        <p>
          [PLACEHOLDER: Description of the PostgreSQL database design, Django ORM integration, 
          schema design decisions, and data modeling approach. Include discussion of tables, 
          relationships, and key design choices.]
        </p>
      </Section>

      <Section title="Data Management and Querying">
        <p>
          [PLACEHOLDER: Discussion of data management practices including migrations, indexing 
          strategies, query optimization, and efficient data retrieval patterns for telemetry 
          and device management.]
        </p>
      </Section>

      <Section title="Security and Reliability Considerations">
        <p>
          [PLACEHOLDER: Discussion of database security measures including parameterized queries, 
          access control, data validation, backup strategies, and reliability considerations 
          for production deployment.]
        </p>
      </Section>

      <Section title="Course Outcomes Mapping">
        <p>This artifact addresses the following CS-499 course outcomes:</p>
        <ul>
          <li><strong>Outcome 3:</strong> [PLACEHOLDER: Explanation of how this artifact demonstrates outcome 3]</li>
          <li><strong>Outcome 4:</strong> [PLACEHOLDER: Explanation of how this artifact demonstrates outcome 4]</li>
          <li><strong>Outcome 5:</strong> [PLACEHOLDER: Explanation of how this artifact demonstrates outcome 5]</li>
        </ul>
      </Section>

      <Section title="Related Schema & Documents">
        <p>
          Supporting materials for this artifact:
        </p>
        <ul>
          <li><Link to="/original-code">Original Code Repository</Link></li>
          <li><Link to="/enhanced-code">Enhanced Code Repository</Link></li>
          <li>[PLACEHOLDER: Link to database schema diagrams]</li>
          <li>[PLACEHOLDER: Link to API documentation]</li>
        </ul>
      </Section>
    </>
  );
}
