import { Link } from 'react-router-dom';
import Section from '../components/Section';

export default function Home() {
  return (
    <>
      {/* Welcome Section */}
      <Section title="Welcome" variant="highlight">
        <p>
          Welcome to my CS-499 Computer Science Capstone ePortfolio. This site documents the 
          complete transformation of a thermostat ecosystem, beginning with a simple Python-based 
          prototype running on a Raspberry Pi and culminating in a professional-grade embedded 
          system built on the ESP32 microcontroller using FreeRTOS. The enhancements span three 
          domains: software engineering and modular design, algorithmic control using finite 
          state machines, and a full backend platform with Django and PostgreSQL for telemetry, 
          authentication, and remote monitoring. This portfolio demonstrates both technical 
          depth and the engineering discipline required to build reliable, maintainable systems.
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
          This ePortfolio was created to fulfill the requirements of the CS-499 Computer Science 
          Capstone at Southern New Hampshire University. It serves as a comprehensive demonstration 
          of the skills, knowledge, and professional growth I have developed throughout the program. 
          Each artifact has been selected and enhanced to align with the capstone course outcomes, 
          including software design, algorithmic problem-solving, database integration, security 
          awareness, and effective communication.
        </p>
        <p>
          Beyond its academic purpose, this portfolio functions as a professional showcase for 
          employers and collaborators. It provides concrete evidence of my ability to take a 
          prototype-level project and systematically transform it into a production-ready system 
          through disciplined engineering, clear documentation, and iterative refinement.
        </p>
      </Section>

      {/* Artifact Categories */}
      <Section title="Artifact Categories">
        <p>
          The enhancements documented in this portfolio are organized into three categories, 
          each representing a core pillar of computer science expertise:
        </p>
        <ul>
          <li>
            <strong>Software Engineering and Design:</strong> The original monolithic Python 
            script was decomposed into a modular, layered architecture running on the ESP32 
            with FreeRTOS. This category demonstrates proficiency in task-based concurrency, 
            hardware abstraction, configuration management, and maintainable system design.
          </li>
          <li>
            <strong>Algorithms and Data Structures:</strong> The naive threshold-based control 
            logic was replaced with a formal finite state machine implementing Idle, Heating, 
            Cooling, and Error states. Hysteresis, minimum on/off timing, and deterministic 
            transitions ensure stable, predictable thermostat behavior.
          </li>
          <li>
            <strong>Databases:</strong> A complete backend platform was developed using Django 
            and PostgreSQL. The system supports device registration, hashed API key authentication, 
            telemetry persistence, alert configuration, and a real-time dashboard for remote 
            monitoring and trend analysis.
          </li>
        </ul>
      </Section>

      {/* How to Navigate */}
      <Section title="How to Navigate This Site">
        <p>
          This portfolio is structured to guide evaluators and visitors through a logical 
          progression of content. The recommended navigation path is as follows:
        </p>
        <ol>
          <li>
            <strong>Professional Self-Assessment</strong> – Begin here to understand my 
            academic journey, professional goals, and the skills demonstrated throughout 
            this capstone project.
          </li>
          <li>
            <strong>Code Review</strong> – Watch the narrated video walkthrough of the 
            original Raspberry Pi thermostat code, which identifies architectural, 
            algorithmic, and reliability issues that informed the enhancement strategy.
          </li>
          <li>
            <strong>Artifact Pages</strong> – Explore the three enhancement categories: 
            Software Engineering and Design, Algorithms and Data Structures, and Databases. 
            Each page contains a detailed narrative explaining the improvements made.
          </li>
          <li>
            <strong>Original and Enhanced Code</strong> – Review the before-and-after 
            code repositories to see the complete transformation from prototype to 
            production-quality system.
          </li>
        </ol>
        <p>
          Use the navigation bar at the top of each page or the quick links on this home 
          page to move between sections.
        </p>
      </Section>
    </>
  );
}
