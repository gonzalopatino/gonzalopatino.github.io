import { Link } from 'react-router-dom';
import Section from '../components/Section';

export default function Algorithms() {
  return (
    <>
      <Section title="Artifact Introduction" variant="highlight">
        <p>
          This artifact focuses on algorithms, data structures, and computational thinking 
          as applied to real-time embedded systems. It originates from the thermostat project's 
          control logic and event processing pipeline, demonstrating how careful algorithmic 
          design enables efficient, deterministic behavior in resource-constrained environments.
        </p>
      </Section>

      <Section title="Original Algorithmic Approach">
        <p>
          [PLACEHOLDER: Description of the original algorithmic approach in the CS-350 
          thermostat project. This section will detail the initial control logic, data 
          handling methods, and any inefficiencies in the original implementation.]
        </p>
      </Section>

      <Section title="Enhanced Algorithmic Design">
        <p>
          [PLACEHOLDER: Description of the enhanced algorithmic implementation, including 
          finite state machine (FSM) design, hysteresis implementation, event queues, 
          and optimized data processing pipelines.]
        </p>
      </Section>

      <Section title="Complexity and Data Structures">
        <p>
          [PLACEHOLDER: Analysis of time and space complexity for key algorithms. Discussion 
          of data structures chosen (queues, state machines, lookup tables) and rationale 
          for their selection in the embedded systems context.]
        </p>
      </Section>

      <Section title="Course Outcomes Mapping">
        <p>This artifact addresses the following CS-499 course outcomes:</p>
        <ul>
          <li><strong>Outcome 2:</strong> [PLACEHOLDER: Explanation of how this artifact demonstrates outcome 2]</li>
          <li><strong>Outcome 3:</strong> [PLACEHOLDER: Explanation of how this artifact demonstrates outcome 3]</li>
          <li><strong>Outcome 4:</strong> [PLACEHOLDER: Explanation of how this artifact demonstrates outcome 4]</li>
        </ul>
      </Section>

      <Section title="Related Code & Diagrams">
        <p>
          Supporting materials for this artifact:
        </p>
        <ul>
          <li><Link to="/original-code">Original Code Repository</Link></li>
          <li><Link to="/enhanced-code">Enhanced Code Repository</Link></li>
          <li>[PLACEHOLDER: Link to FSM state diagrams]</li>
          <li>[PLACEHOLDER: Link to algorithm documentation]</li>
        </ul>
      </Section>
    </>
  );
}
