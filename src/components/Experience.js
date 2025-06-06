export default function Experience() {
  return (
    <div className="panel active" style={{ animationDelay: '0.2s' }}> {/* Apply 'active' for animation */}
      <h2 className="section-title">Professional Experience</h2> {/* Section title */}

      {/* Software Test Engineer Experience */}
      <div className="experience-item">
        <h3 className="job-title">Software Test Engineer</h3>
        <span className="company-name">Testriq QA Lab LLP, Thane, India</span>
        <span className="dates">July 2024 – Present</span>
        <ul>
          <li>Executing smoke testing and regression testing to validate software functionality and stability after changes or updates.</li>
          <li>Performing security testing to identify vulnerabilities, ensuring applications adhere to best practices and compliance standards.</li>
          <li>Collaborating with clients to provide tailored solutions, gather requirements, and address specific testing needs.</li>
          <li>Conducting manual and automation testing using version control software has led to an improvement in testing efficiency by approximately 30% to 70%, including reductions in testing time by 30% to 50%, increased bug detection rates by 20% to 40%, and enhancements in release frequency by 25% to 60%.</li>
          <li>Identified and resolved bugs throughout the web development lifecycle, leveraging tools such as Jira and TestRail for effective tracking and reporting.</li>
          <li>Assigned to implement testing strategies and frameworks to enhance the overall quality assurance process, fostering continuous improvement within the team.</li>
        </ul>
      </div>

      {/* Software Test Intern Experience */}
      <div className="experience-item">
        <h3 className="job-title">Software Test Intern</h3>
        <span className="company-name">Testriq QA Lab LLP, Thane, India</span>
        <span className="dates">June 2024 – July 2024</span>
        <ul>
          <li>Studied how to write effective test cases for various applications, ensuring comprehensive coverage of functional requirements.</li>
          <li>Tasked with identifying and documenting bugs during manual testing processes, providing clear and actionable feedback to development teams.</li>
          <li>Carried out thorough software testing to ensure application quality, including exploratory testing to uncover edge cases and unexpected behavior.</li>
          <li>Assisted in creating and maintaining test documentation, contributing to a structured testing process.</li>
        </ul>
      </div>

      {/* Public Beta Tester Experience */}
      <div className="experience-item">
        <h3 className="job-title">Public Beta Tester – "Fall Guys"</h3>
        <span className="company-name">Epic Games, Cary, North Carolina, USA (Remote)</span>
        <span className="dates">May 2022 – November 2022</span>
        <ul>
          <li>Participated in the beta testing phase of "Fall Guys," identifying bugs and providing actionable feedback.</li>
          <li>Undertook comprehensive testing to ensure game functionality and stability after updates.</li>
          <li>Collaborated with development teams to gather requirements and address specific testing needs.</li>
          <li>Utilized Discord for real-time bug reporting and communication with the testing team.</li>
          <li>Assigned to execute both manual and automated testing methodologies to enhance testing efficiency.</li>
          <li>Discovered a critical game-breaking bug in the voice chat system, demonstrating the ability to identify high-impact issues.</li>
        </ul>
      </div>
    </div>
  );
}