export default function Projects() {
  return (
    <div className="panel active" style={{ animationDelay: '0.2s' }}> {/* Apply 'active' for animation */}
      <h2 className="section-title">Academic Projects</h2> {/* Section title */}

      {/* Automated Drone Delivery System Project */}
      <div className="project-item">
        <h3 className="project-name">Automated Drone Delivery System</h3>
        <span className="project-tech">Technologies used: Flutter, JavaScript, Firebase, Google Maps API, Security Protocols</span>
        <ul>
          <li>Developed a secure web application using Flutter for frontend development and Firebase for backend management and real-time data synchronization, ensuring the safety of drones during delivery operations.</li>
          <li>Designed and integrated Google Maps UI for real-time route visualization and optimized delivery path planning, enhancing operational efficiency.</li>
          <li>Employed Firebase for backend management, ensuring reliable data synchronization and scalability to accommodate varying delivery volumes.</li>
          <li>Introduced security protocols to protect data and prevent unauthorized access, enhancing system integrity and user trust.</li>
          <li>Incorporated real-time notifications for users to track delivery status and receive updates on drone locations.</li>
          <li>Carried out thorough testing and debugging of the application to ensure seamless functionality across devices, resulting in a robust and user-friendly experience.</li>
        </ul>
      </div>

      {/* PScanner (Network Scanning Tool) Project */}
      <div className="project-item">
        <h3 className="project-name">PScanner (Network Scanning Tool)</h3>
        <span className="project-tech">Technologies used: Python, Scapy, Nmap, OS Fingerprinting, Service Enumeration</span>
        <ul>
          <li>Built a Python-based tool for advanced network scanning, identifying open ports, and mapping network devices to enhance network visibility and management.</li>
          <li>Deployed OS fingerprinting to determine the operating systems running on detected devices, improving network visibility and enabling targeted security measures; incorporated service enumeration to detect running services and unpatched vulnerabilities, enhancing proactive security measures and facilitating risk assessment.</li>
          <li>Applied network segmentation and vulnerability patching to mitigate risks from exposed services and ports, bolstering overall network security posture; integrated a user-friendly interface using React for easy navigation and reporting, allowing users to quickly analyze scan results and implement necessary actions.</li>
          <li>Introduced scheduling features for automated periodic scans, ensuring continuous monitoring of network security and timely identification of new vulnerabilities; developed comprehensive documentation and user guides to facilitate tool adoption and effective utilization by network administrators and security teams.</li>
        </ul>
      </div>

      {/* Keylogger (Ethical Data Logging Tool) Project */}
      <div className="project-item">
        <h3 className="project-name">Keylogger (Ethical Data Logging Tool)</h3>
        <span className="project-tech">Technologies used: Python, PyHook, Pynput, Data Encryption, Access Control</span>
        <ul>
          <li>Involved in designing a Python-based Keylogger for ethical research on vulnerabilities in unauthorized data access, contributing to the understanding of security flaws.</li>
          <li>Integrated encryption to securely store captured data, ensuring sensitive information remained protected and encrypted at all times.</li>
          <li>Implemented restricted access mechanisms to prevent unauthorized retrieval of logged data, maintaining ethical usage standards and compliance with privacy regulations.</li>
          <li>Programmed a monitoring system using Python with PyHook and Pynput libraries to analyze user input in controlled environments without breaching privacy guidelines, ensuring ethical data collection.</li>
          <li>Devised a user consent framework using Python and Flask to ensure participants were fully informed about data collection practices, reinforcing ethical research principles.</li>
          <li>Conducted thorough testing and validation of the Keylogger to ensure reliability and accuracy, minimizing potential disruptions in controlled environments.</li>
        </ul>
      </div>
    </div>
  );
}