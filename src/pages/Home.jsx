import { Link } from 'react-router-dom';
import Section from '../components/Section';

export default function Home() {
  return (
    <>
      {/* Welcome Section */}
      <Section title="Welcome" variant="highlight">
        <p>
          I am a Computer Scientist and software engineer with a passion for building robust, 
          efficient systems that bridge the gap between hardware and software. This ePortfolio 
          represents the culmination of my studies in the SNHU Computer Science program, 
          specifically the CS-499 Capstone course. Here, you will find a curated collection 
          of work that demonstrates my growth, skills, and readiness to contribute 
          meaningfully to the field of computer science.
        </p>
      </Section>

      {/* Quick Navigation */}
      <Section title="Portfolio Navigation">
        <p>Use the links below to explore each section of this ePortfolio:</p>
        
        <div className="nav-buttons-group">
          <p className="nav-group-label">Overview</p>
          <div className="nav-buttons">
            <Link to="/assessment" className="nav-button nav-button--primary">
              Professional Self-Assessment
            </Link>
            <Link to="/code-review" className="nav-button nav-button--primary">
              Code Review
            </Link>
          </div>
        </div>

        <div className="nav-buttons-group">
          <p className="nav-group-label">Artifacts</p>
          <div className="nav-buttons">
            <Link to="/software-engineering" className="nav-button nav-button--secondary">
              Software Engineering &amp; Design
            </Link>
            <Link to="/algorithms" className="nav-button nav-button--secondary">
              Algorithms &amp; Data Structures
            </Link>
            <Link to="/database" className="nav-button nav-button--secondary">
              Databases
            </Link>
          </div>
        </div>

        <div className="nav-buttons-group">
          <p className="nav-group-label">Code Repositories</p>
          <div className="nav-buttons">
            <Link to="/original-code" className="nav-button nav-button--tertiary">
              Original Code
            </Link>
            <Link to="/enhanced-code" className="nav-button nav-button--tertiary">
              Enhanced Code
            </Link>
          </div>
        </div>
      </Section>

      {/* About This Portfolio */}
      <Section title="About This Portfolio">
        <p>
          This ePortfolio serves as a comprehensive showcase of the skills, knowledge, and 
          professional growth I have achieved throughout the Computer Science program at 
          Southern New Hampshire University. It is designed to demonstrate competency across 
          multiple domains of computer science, including software engineering, algorithm 
          design, and database management.
        </p>
        <p>
          Each section of this portfolio has been carefully constructed to meet the 
          requirements of the CS-499 Computer Science Capstone course while also serving 
          as a professional resource for potential employers and collaborators.
        </p>
      </Section>

      {/* Artifact Categories */}
      <Section title="Artifact Categories">
        <p>
          The artifacts presented in this portfolio are organized into three primary 
          categories, each representing a core pillar of computer science expertise:
        </p>
        <ul>
          <li>
            <strong>Software Engineering &amp; Design:</strong> Demonstrates proficiency in 
            software architecture, modular design, and engineering best practices.
          </li>
          <li>
            <strong>Algorithms &amp; Data Structures:</strong> Showcases the ability to design, 
            analyze, and implement efficient algorithms and appropriate data structures.
          </li>
          <li>
            <strong>Databases:</strong> Illustrates skills in database design, implementation, 
            and integration with software applications.
          </li>
        </ul>
      </Section>

      {/* How to Navigate */}
      <Section title="How to Navigate This Site">
        <p>
          This portfolio is structured to provide a clear and logical progression through 
          my work and accomplishments. Here is a recommended path for exploring the content:
        </p>
        <ol>
          <li>
            <strong>Start with the Professional Self-Assessment</strong> – This provides 
            context for my academic journey and professional goals.
          </li>
          <li>
            <strong>Watch the Code Review</strong> – A video walkthrough that introduces 
            the original artifact and planned enhancements.
          </li>
          <li>
            <strong>Explore Each Artifact Category</strong> – Dive into the detailed 
            narratives and enhanced code for each of the three categories.
          </li>
        </ol>
        <p>
          Each page includes navigation elements to help you move between sections easily. 
          Use the navigation bar at the top to jump directly to any section.
        </p>
      </Section>
    </>
  );
}
