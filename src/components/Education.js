export default function Education() {
  return (
    <div className="panel active" style={{ animationDelay: '0.2s' }}> {/* Apply 'active' for animation */}
      <h2 className="section-title">Education</h2> {/* Section title */}
      
      {/* First education entry */}
      <div className="education-item">
        <h3 className="job-title">St Francis Institute of Technology, Mumbai University, India</h3>
        <span className="dates">July 2024</span> {/* Date of graduation */}
        <p>Graduated with a Bachelor of Engineering in Information Technology with Distinction (CGPA 7.65/10)</p>
        <p><span style={{fontWeight: 'bold', color: '#90ee90'}}>Honors in Cybersecurity</span></p> {/* Highlight Cybersecurity honors */}
      </div>
      
      {/* Second education entry */}
      <div className="education-item">
        <h3 className="job-title">Nirmala Memorial Foundation Junior College, Mumbai, India</h3>
        <span className="dates">March 2020</span> {/* Date of completion */}
        <p>Secured Distinction in Higher Secondary Certificate Examination (62.31%)</p>
      </div>
    </div>
  );
}
