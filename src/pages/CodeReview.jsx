import Section from '../components/Section';

export default function CodeReview() {
  return (
    <>
      <Section title="A. Code Review Introduction" variant="highlight">
        <p>
          The purpose of this code review is to systematically analyze the original thermostat artifact, 
          identifying areas for improvement across software design, algorithmic efficiency, and data handling. 
          This review examines the baseline CS-350 project before any enhancements were applied. 
          The findings from this review established the foundation for all subsequent enhancements 
          documented in this ePortfolio.
        </p>
      </Section>

      <Section title="B. Code Review Video">
        <div className="video-placeholder">
          <p>[VIDEO PLACEHOLDER – Code review walkthrough will be embedded here.]</p>
        </div>
        <p className="text-muted">
          <em>Note: The embedded video (YouTube, Loom, or MP4) will provide a complete walkthrough 
          of the original artifact, highlighting key areas examined during this code review.</em>
        </p>
      </Section>

      <Section title="C. Summary of Review Findings">
        <p>
          [PLACEHOLDER: This section will summarize the overall findings from the code review, including 
          identified issues, maintainability problems, architectural shortcomings, and opportunities 
          for enhancement. The summary will provide a high-level overview before diving into specific 
          issues in the following sections.]
        </p>
      </Section>

      <Section title="D. Key Issues Identified">
        <p>The following issues were identified during the code review process:</p>
        <ul>
          <li>[PLACEHOLDER: Issue related to architecture or structure]</li>
          <li>[PLACEHOLDER: Issue related to algorithmic efficiency]</li>
          <li>[PLACEHOLDER: Issue related to readability or style]</li>
          <li>[PLACEHOLDER: Issue related to security or reliability]</li>
        </ul>
      </Section>

      <Section title="E. Planned Enhancements">
        <p>
          [PLACEHOLDER: This section will connect the review findings to the planned enhancements 
          across the three artifact categories. It will describe how the identified issues informed 
          the direction of software engineering enhancements, algorithmic enhancements, and database 
          enhancements. The specific improvements will be documented in their respective artifact pages.]
        </p>
      </Section>

      <Section title="F. Professional Reflection">
        <p>
          [PLACEHOLDER: This section will describe what was learned through the code review process, 
          how conducting a systematic review improved the engineering mindset, and how the findings 
          shaped the direction of the enhancements. The reflection will connect this experience to 
          professional software development practices and continuous improvement.]
        </p>
      </Section>
    </>
  );
}
