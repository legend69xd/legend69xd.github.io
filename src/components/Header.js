export default function Header() {
  return (
    <div className="panel active" style={{ animationDelay: '0s' }}> {/* Apply 'active' for immediate animation */}
      <div style={{
        display: 'flex',
        alignItems: 'center', // Vertically align items in the center
        marginBottom: '2rem', // Adjusted margin
        flexWrap: 'wrap', // Allow items to wrap to the next line on small screens
        justifyContent: 'center', // Center content for smaller screens
      }}>
        {/* Placeholder for the profile picture based on the sketch */}
        <div className="profile-pic-placeholder" style={{
          minWidth: '120px', // Minimum width for the placeholder
          height: '120px',
          borderRadius: '50%', // Makes it a perfect circle
          background: 'linear-gradient(45deg, #64ffda, #00c7a5)', /* Gradient background */
          display: 'flex',
          justifyContent: 'center', // Center content horizontally
          alignItems: 'center', // Center content vertically
          fontSize: '2.5em', // Large font size for initials
          fontWeight: 'bold',
          color: '#1f1f1f', /* Dark text color for initials */
          marginRight: '2rem', // Space to the right of the placeholder
          boxShadow: '0 0 15px rgba(100, 255, 218, 0.6)', /* Glowing effect */
        }}>
          PU {/* Initials: Prathamesh Upadhye */}
        </div>
        {/* Container for name and contact details */}
        <div className="header-content" style={{ flexGrow: 1, textAlign: 'left' }}> {/* Allow content to grow */}
          <h1 style={{ margin: 0, fontSize: '2.8em', letterSpacing: '1px' }}>Prathamesh Upadhye</h1> {/* Your name */}
          <p style={{ margin: '0.5em 0 0.2em', color: '#bdbdbd', fontSize: '1.05em' }}>
            {/* Your address */}
            A/203, ShekharNagar Building, Dahisar (West), Mumbai-400068, India
          </p>
          <p style={{ margin: '0.2em 0', color: '#bdbdbd', fontSize: '1.05em' }}>
            {/* Email with mailto link */}
            <a href="mailto:bhalprathamesh6@gmail.com" style={{ display: 'inline-flex', alignItems: 'center' }}>
              <span style={{ marginRight: '0.5em' }}>📧</span> bhalprathamesh6@gmail.com
            </a>
          </p>
          <p style={{ margin: '0.2em 0', color: '#bdbdbd', fontSize: '1.05em' }}>
            {/* Phone number */}
            <a href="tel:+919137887904" style={{ display: 'inline-flex', alignItems: 'center' }}>
              <span style={{ marginRight: '0.5em' }}>📞</span> +91 9137887904
            </a>
          </p>
          {/* Your professional specialization */}
          <p style={{ margin: '1em 0 0', color: '#90ee90', fontWeight: 'bold', fontSize: '1.3em' }}>
            Cybersecurity & Software Quality Assurance Specialist
          </p>
        </div>
      </div>
    </div>
  );
}
