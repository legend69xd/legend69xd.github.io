export default function Skills() {
  return (
    <div className="panel active" style={{ animationDelay: '0.2s' }}> {/* Apply 'active' for animation */}
      <h2 className="section-title">Technical Skills</h2> {/* Section title */}
      
      {/* Skills are laid out in a grid for better organization */}
      <div className="skills-grid">
        <div>
          <h3>Programming and Scripting</h3>
          <ul>
            <li>Python, Bash, and PowerShell for automation and security scripting.</li>
          </ul>
        </div>
        <div>
          <h3>Networking and Network Security</h3>
          <ul>
            <li>TCP/IP, firewalls, VPNs</li>
            <li>Tools: Wireshark and Nmap</li>
          </ul>
        </div>
        <div>
          <h3>Operating Systems</h3>
          <ul>
            <li>Expertise in Linux (Kali, Parrot), Windows, and macOS with OS hardening skills.</li>
          </ul>
        </div>
        <div>
          <h3>Penetration Testing Tools</h3>
          <ul>
            <li>Experience with Burp Suite, OWASP ZAP, Metasploit, and Nessus for ethical hacking.</li>
          </ul>
        </div>
        <div>
          <h3>Cloud Security</h3>
          <ul>
            <li>Knowledge of AWS, Azure, GCP security practices, and cloud workload protection.</li>
          </ul>
        </div>
        <div>
          <h3>Version Control</h3>
          <ul>
            <li>Proficient with Git, GitHub, and Jira for version control and collaboration.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}