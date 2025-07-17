// ===================== Application Data =====================
const APPLICATION_DATA = {
  personal_info: {
    name: "Prathamesh Upadhye",
    location: "A/203, ShekharNagar Building, Dahisar (West), Mumbai-400068, India",
    email: "bhalprathamesh6@gmail.com",
    phone: "+91 9137887904"
  },
  games_played: [
    {
      name: "Fall Guys",
      company: "Epic Games",
      role: "Public Beta Tester",
      period: "May 2022 – November 2024",
      achievement: "Identified critical game-breaking bugs, provided actionable feedback",
      image: "https://pplx-res.cloudinary.com/image/upload/v1752746730/pplx_project_search_images/c9a48ade9d77aa483c2cabc8ab615b2a0ec0ea26.jpg"
    },
    {
      name: "Valorant",
      company: "Riot Games",
      role: "Tournament Participant",
      period: "2023",
      achievement: "Tournament Participation at Shree LR Tiwari College of Engineering",
      image: "https://pplx-res.cloudinary.com/image/upload/v1752746730/pplx_project_search_images/5440b002ab4b95b631446bd3524998f6e9f7056f.jpg"
    },
    {
      name: "Rocket League",
      company: "Psyonix",
      role: "Competitive Player",
      period: "2022-2023",
      achievement: "Consecutive victories showcasing strategic gameplay",
      image: "https://pplx-res.cloudinary.com/image/upload/v1752746730/pplx_project_search_images/be8fe82bcd806b719a8a67ed394cfaacfe7982dc.jpg"
    },
    {
      name: "Delta Force",
      company: "TiMi Studio Group",
      role: "Tactical Shooter Enthusiast",
      period: "2024-Present",
      achievement: "Free-to-play tactical shooter with large-scale combat and extraction modes",
      image: "https://pplx-res.cloudinary.com/image/upload/v1752750748/pplx_project_search_images/5e36c2d39ba6724f8cc2f7379ac2d142f85d6df9.jpg"
    },
    {
      name: "Counter-Strike: Global Offensive",
      company: "Valve Corporation",
      role: "Competitive Player",
      period: "2012-2023",
      achievement: "Classic tactical shooter that defined the competitive FPS genre",
      image: "https://pplx-res.cloudinary.com/image/upload/v1752750748/pplx_project_search_images/1ca0a186401f4956024b51ffaa5a2fabdccb7c28.jpg"
    },
    {
      name: "Counter-Strike 2",
      company: "Valve Corporation",
      role: "Competitive Player",
      period: "2023-Present",
      achievement: "Next-generation tactical shooter built on Source 2 engine with sub-tick networking",
      image: "https://pplx-res.cloudinary.com/image/upload/v1749045422/pplx_project_search_images/46b6be246db32413793c04b4ec0de969e2a07eed.jpg"
    },
    {
      name: "Rematch",
      company: "Sloclap",
      role: "Football Gaming Enthusiast",
      period: "2025-Present",
      achievement: "Innovative 5v5 football game with third-person perspective and skill-based gameplay",
      image: "https://pplx-res.cloudinary.com/image/upload/v1752750748/pplx_project_search_images/5f9683caf87f446b85c7b52d55ea65b74f74d089.jpg"
    },
    {
      name: "Spectre Divide",
      company: "Mountaintop Studios",
      role: "Tactical Shooter Player",
      period: "2024-Present",
      achievement: "Revolutionary 3v3 tactical shooter with unique Duality mechanic allowing control of two bodies",
      image: "https://pplx-res.cloudinary.com/image/upload/v1752750748/pplx_project_search_images/ba27f3a0eed226df3e9573f378df27f3b23445e3.jpg"
    }
  ],
  csgo_timeline: [
    { year: 1999, event: "Counter-Strike mod created by Minh 'Gooseman' Le and Jess 'Cliffe' Cliffe for Half-Life" },
    { year: 2000, event: "Counter-Strike 1.0 standalone release by Valve" },
    { year: 2012, event: "Counter-Strike: Global Offensive launched with updated graphics and mechanics" },
    { year: 2023, event: "Counter-Strike 2 released with Source 2 engine on September 27, 2023" }
  ],
  iconic_moments: [
    {
      title: "s1mple's Double No-Scope (ESL One Cologne 2016)",
      youtube_id: "bN7tv1g_fxQ",
      description: "Aleksandr 's1mple' Kostyliev's incredible falling double no-scope against Fnatic",
      player: "s1mple",
      event: "ESL One Cologne 2016",
      quote: "What is this clutch from s1mple? What, are you serious? What is that? You can't do that, s1mple!"
    },
    {
      title: "coldzera's Jumping AWP (MLG Columbus 2016)",
      youtube_id: "yXXyfeWJz1M",
      description: "Marcelo 'coldzera' David's gravity-defying jumping AWP double kill",
      player: "coldzera",
      event: "MLG Columbus 2016",
      quote: "COLD! COLDZERA! Are you kidding me?! This is insane!"
    },
    {
      title: "olofmeister's Burning Defuse (ESL One Cologne 2014)",
      youtube_id: "tJWDy_1oPaU",
      description: "Olof 'olofmeister' Kajbjer defusing bomb while standing in fire",
      player: "olofmeister",
      event: "ESL One Cologne 2014",
      quote: "He's defusing through the molotov! Olofmeister, what a player!"
    }
  ],
  major_winners: [
    { year: 2013, event: "DreamHack Winter", winner: "Fnatic", location: "Jönköping, Sweden" },
    { year: 2014, event: "EMS One Katowice", winner: "Virtus.pro", location: "Katowice, Poland" },
    { year: 2014, event: "ESL One Cologne", winner: "Fnatic", location: "Cologne, Germany" },
    { year: 2015, event: "ESL One Katowice", winner: "Fnatic", location: "Katowice, Poland" },
    { year: 2015, event: "ESL One Cologne", winner: "Fnatic", location: "Cologne, Germany" },
    { year: 2015, event: "DreamHack Open Cluj-Napoca", winner: "EnVyUs", location: "Cluj-Napoca, Romania" },
    { year: 2016, event: "MLG Columbus", winner: "Luminosity Gaming", location: "Columbus, USA" },
    { year: 2016, event: "ESL One Cologne", winner: "SK Gaming", location: "Cologne, Germany" },
    { year: 2017, event: "ELEAGUE Major Atlanta", winner: "Astralis", location: "Atlanta, USA" },
    { year: 2017, event: "PGL Major Krakow", winner: "Gambit", location: "Krakow, Poland" },
    { year: 2018, event: "ELEAGUE Major Boston", winner: "Cloud9", location: "Boston, USA" },
    { year: 2018, event: "FACEIT London", winner: "Astralis", location: "London, UK" },
    { year: 2019, event: "IEM Katowice", winner: "Astralis", location: "Katowice, Poland" },
    { year: 2019, event: "StarLadder Berlin", winner: "Astralis", location: "Berlin, Germany" },
    { year: 2021, event: "PGL Major Stockholm", winner: "Natus Vincere", location: "Stockholm, Sweden" },
    { year: 2022, event: "PGL Major Antwerp", winner: "FaZe Clan", location: "Antwerp, Belgium" },
    { year: 2022, event: "IEM Rio Major", winner: "Outsiders", location: "Rio de Janeiro, Brazil" },
    { year: 2023, event: "BLAST Paris Major", winner: "Vitality", location: "Paris, France" },
    { year: 2024, event: "PGL Major Copenhagen", winner: "Natus Vincere", location: "Copenhagen, Denmark" }
  ],
  skills: {
    programming: ["Python", "Bash", "PowerShell"],
    networking: ["TCP/IP", "Firewalls", "VPNs", "Wireshark", "Nmap"],
    os: ["Linux (Kali, Parrot)", "Windows", "macOS"],
    pentesting: ["Burp Suite", "OWASP ZAP", "Metasploit", "Nessus"],
    cloud: ["AWS", "Azure", "GCP security practices"],
    tools: ["Git", "GitHub", "Jira", "TestRail"]
  },
  experience: [
    {
      company: "Testriq QA Lab LLP",
      location: "Thane, India",
      position: "Software Test Engineer",
      period: "June 2024 – Present",
      responsibilities: [
        "Execute smoke testing and regression testing for software stability validation",
        "Perform security testing to identify vulnerabilities and ensure compliance",
        "Collaborate with clients for tailored testing solutions and requirement gathering",
        "Conduct manual and automation testing using version control systems",
        "Identify and resolve bugs using Jira and TestRail for tracking and reporting",
        "Implement testing strategies and frameworks for continuous improvement"
      ]
    },
    {
      company: "Epic Games",
      location: "Cary, North Carolina, USA (Remote)",
      position: "Public Beta Tester – 'Fall Guys'",
      period: "May 2022 – November 2024",
      responsibilities: [
        "Participated in beta testing phase identifying bugs and providing feedback",
        "Comprehensive testing for game functionality and stability after updates",
        "Collaborated with development teams for requirement gathering",
        "Utilized Discord for real-time bug reporting and team communication",
        "Executed manual and automated testing methodologies",
        "Discovered critical game-breaking bug in voice chat system"
      ]
    }
  ],
  education: [
    {
      institution: "St Francis Institute of Technology, Mumbai University",
      degree: "Bachelor of Engineering in Information Technology",
      period: "July 2024",
      grade: "CGPA: 7.65/10",
      honors: "Distinction with Honors in Cybersecurity"
    },
    {
      institution: "Nirmala Memorial Foundation Junior College, Mumbai",
      degree: "Higher Secondary Certificate Examination",
      period: "March 2020",
      grade: "62.31% Distinction"
    }
  ],
  projects: [
    {
      name: "Automated Drone Delivery System",
      description: "Developed secure web application using Flutter and Firebase with integrated Google Maps API for real-time route visualization and implemented security protocols for data protection",
      technologies: ["Flutter", "JavaScript", "Firebase", "Google Maps API"]
    },
    {
      name: "PScanner (Network Scanning Tool)",
      description: "Built Python-based advanced network scanning tool with OS fingerprinting and service enumeration, applied network segmentation and vulnerability patching",
      technologies: ["Python", "Scapy", "Nmap", "React"]
    },
    {
      name: "Keylogger (Ethical Data Logging Tool)",
      description: "Designed Python-based ethical research tool with integrated encryption for secure data storage and implemented access control and user consent framework",
      technologies: ["Python", "PyHook", "Pynput", "Flask"]
    }
  ]
};

// ===================== Global State =====================
let currentSection = 'landing';
let isVideoLoading = false;

// ===================== Utility Functions =====================
function hideLoading() {
  const loadingIndicator = document.getElementById('loadingIndicator');
  if (loadingIndicator) {
    loadingIndicator.classList.add('hidden');
  }
}

function showLoading() {
  const loadingIndicator = document.getElementById('loadingIndicator');
  if (loadingIndicator) {
    loadingIndicator.classList.remove('hidden');
  }
}

function isMobile() {
  return window.innerWidth <= 768 || 'ontouchstart' in window;
}

// ===================== Navigation System =====================
function showSection(targetSection) {
  console.log('Navigation request:', targetSection);
  
  // Get all section elements
  const landing = document.getElementById('landing');
  const gamerSection = document.getElementById('gamerSection');
  const recruiterSection = document.getElementById('recruiterSection');
  
  // Validate elements exist
  if (!landing || !gamerSection || !recruiterSection) {
    console.error('Critical sections not found!');
    return false;
  }
  
  // Hide all sections immediately
  landing.classList.add('hidden');
  gamerSection.classList.add('hidden');
  recruiterSection.classList.add('hidden');
  
  // Show target section
  let targetElement = null;
  switch(targetSection) {
    case 'landing':
      targetElement = landing;
      document.body.style.overflow = 'hidden';
      break;
    case 'gamer':
      targetElement = gamerSection;
      document.body.style.overflow = 'auto';
      break;
    case 'recruiter':
      targetElement = recruiterSection;
      document.body.style.overflow = 'auto';
      break;
    default:
      console.error('Unknown section:', targetSection);
      targetElement = landing;
      targetSection = 'landing';
  }
  
  if (targetElement) {
    targetElement.classList.remove('hidden');
    currentSection = targetSection;
    console.log('Successfully navigated to:', targetSection);
    return true;
  }
  
  return false;
}

// ===================== Content Population =====================

function populateGamesPlayed() {
  const container = document.getElementById('gamesGrid');
  if (!container) return;
  
  container.innerHTML = APPLICATION_DATA.games_played.map(game => `
    <div class="game-card" tabindex="0">
      <img src="${game.image}" alt="${game.name} official logo" class="game-image" 
           onerror="this.style.display='none';"
           onload="this.style.display='block';">
      <div class="game-info">
        <h3 class="game-title">${game.name}</h3>
        <div class="game-company">${game.company}</div>
        <div class="game-details">
          <strong>Role:</strong> ${game.role}<br>
          <strong>Achievement:</strong> ${game.achievement}
        </div>
        <div class="game-period">${game.period}</div>
      </div>
    </div>
  `).join('');
}

function populateCSGOTimeline() {
  const container = document.getElementById('timelineContainer');
  if (!container) return;
  
  container.innerHTML = APPLICATION_DATA.csgo_timeline.map(item => `
    <div class="timeline-item">
      <div class="timeline-year">${item.year}</div>
      <div class="timeline-event">${item.event}</div>
    </div>
  `).join('');
}

function populateIconicMoments() {
  const container = document.getElementById('momentsGrid');
  if (!container) return;
  
  container.innerHTML = APPLICATION_DATA.iconic_moments.map(moment => `
    <div class="moment-card" tabindex="0" onclick="openVideoModal('${moment.youtube_id}', '${moment.title}')" 
         onkeydown="handleCardKeydown(event, '${moment.youtube_id}', '${moment.title}')">
      <div class="moment-header">
        <h3 class="moment-title">${moment.title}</h3>
        <div class="moment-event">${moment.event}</div>
      </div>
      <div class="moment-description">
        <p>${moment.description}</p>
        ${moment.quote ? `<div class="moment-quote">"${moment.quote}"</div>` : ''}
        <div style="margin-top: 16px; color: #eda338; font-weight: 600;">🎥 ${isMobile() ? 'Tap' : 'Click'} to watch highlight</div>
      </div>
    </div>
  `).join('');
}

function handleCardKeydown(event, videoId, title) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    openVideoModal(videoId, title);
  }
}

function populateMajorsTimeline() {
  const container = document.getElementById('majorsTimeline');
  if (!container) return;
  
  container.innerHTML = APPLICATION_DATA.major_winners.map(major => `
    <div class="timeline-item">
      <div class="timeline-year">${major.year}</div>
      <div class="timeline-event">
        <strong>${major.event}</strong><br>
        Winner: ${major.winner}<br>
        Location: ${major.location}
      </div>
    </div>
  `).join('');
}

function populateAboutMe() {
  const container = document.getElementById('aboutContent');
  if (!container) return;
  
  const info = APPLICATION_DATA.personal_info;
  container.innerHTML = `
    <div class="content-card">
      <h2 class="card-title">About Me</h2>
      <div class="card-content">
        <h3 style="color: #68a3e5; margin-bottom: 16px;">${info.name}</h3>
        <p style="margin-bottom: 16px;"><strong>Software Test Engineer specializing in Cybersecurity</strong></p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 24px; margin-top: 24px;">
          <div>
            <h4 style="color: #eda338; margin-bottom: 12px;">Contact Information</h4>
            <p><strong>📍 Location:</strong><br>${info.location}</p>
            <p><strong>📧 Email:</strong> <a href="mailto:${info.email}" style="color: #68a3e5;" target="_blank">${info.email}</a></p>
            <p><strong>📱 Phone:</strong> <a href="tel:${info.phone}" style="color: #68a3e5;">${info.phone}</a></p>
          </div>
          
          <div>
            <h4 style="color: #eda338; margin-bottom: 12px;">Professional Summary</h4>
            <p>Graduated with distinction from St Francis Institute of Technology with honors in Cybersecurity. Currently working as Software Test Engineer at Testriq QA Lab LLP, focusing on security testing, vulnerability identification, and quality assurance.</p>
          </div>
        </div>
        
        <div style="margin-top: 24px;">
          <h4 style="color: #eda338; margin-bottom: 12px;">Specialization</h4>
          <p>Passionate about ethical hacking, network security, and the intersection of gaming culture with technology. Experienced in penetration testing, cloud security, and automation frameworks.</p>
        </div>
      </div>
    </div>
  `;
}

function populateSkills() {
  const container = document.getElementById('skillsContent');
  if (!container) return;
  
  const skills = APPLICATION_DATA.skills;
  container.innerHTML = `
    <div class="skills-container">
      <div class="skill-category">
        <h3>Programming & Scripting</h3>
        <div class="skill-tags">
          ${skills.programming.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
        <p style="margin-top: 12px; color: #cccccc;">Automation and security scripting languages</p>
      </div>
      
      <div class="skill-category">
        <h3>Networking & Security</h3>
        <div class="skill-tags">
          ${skills.networking.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
        <p style="margin-top: 12px; color: #cccccc;">Network protocols and security analysis tools</p>
      </div>
      
      <div class="skill-category">
        <h3>Operating Systems</h3>
        <div class="skill-tags">
          ${skills.os.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
        <p style="margin-top: 12px; color: #cccccc;">OS hardening and security configurations</p>
      </div>
      
      <div class="skill-category">
        <h3>Penetration Testing</h3>
        <div class="skill-tags">
          ${skills.pentesting.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
        <p style="margin-top: 12px; color: #cccccc;">Vulnerability assessment and exploitation tools</p>
      </div>
      
      <div class="skill-category">
        <h3>Cloud Security</h3>
        <div class="skill-tags">
          ${skills.cloud.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
        <p style="margin-top: 12px; color: #cccccc;">Cloud workload protection and best practices</p>
      </div>
      
      <div class="skill-category">
        <h3>Development Tools</h3>
        <div class="skill-tags">
          ${skills.tools.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
        <p style="margin-top: 12px; color: #cccccc;">Version control and collaboration platforms</p>
      </div>
    </div>
  `;
}

function populateEducation() {
  const container = document.getElementById('educationContent');
  if (!container) return;
  
  container.innerHTML = APPLICATION_DATA.education.map(edu => `
    <div class="content-card">
      <h3 class="card-title">${edu.degree}</h3>
      <div class="card-content">
        <p><strong>Institution:</strong> ${edu.institution}</p>
        <p><strong>Graduation:</strong> ${edu.period}</p>
        <p><strong>Grade:</strong> ${edu.grade}</p>
        ${edu.honors ? `<p><strong>Honors:</strong> ${edu.honors}</p>` : ''}
      </div>
    </div>
  `).join('');
}

function populateExperience() {
  const container = document.getElementById('experienceContent');
  if (!container) return;
  
  container.innerHTML = APPLICATION_DATA.experience.map(exp => `
    <div class="content-card">
      <h3 class="card-title">${exp.position}</h3>
      <div class="card-content">
        <p><strong>${exp.company}</strong> • ${exp.location}</p>
        <p><strong>Period:</strong> ${exp.period}</p>
        <h4 style="color: #eda338; margin: 16px 0 8px 0;">Key Responsibilities:</h4>
        <ul style="margin-left: 20px;">
          ${exp.responsibilities.map(resp => `<li style="margin-bottom: 8px;">${resp}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

function populateProjects() {
  const container = document.getElementById('projectsContent');
  if (!container) return;
  
  container.innerHTML = APPLICATION_DATA.projects.map(project => `
    <div class="content-card">
      <h3 class="card-title">${project.name}</h3>
      <div class="card-content">
        <p><strong>Description:</strong> ${project.description}</p>
        <div style="margin-top: 16px;">
          <h4 style="color: #eda338; margin-bottom: 8px;">Technologies Used:</h4>
          <div class="skill-tags">
            ${project.technologies.map(tech => `<span class="skill-tag">${tech}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// ===================== Video Modal =====================
function openVideoModal(videoId, title = 'CS:GO Iconic Moment') {
  const videoModal = document.getElementById('videoModal');
  const videoFrame = document.getElementById('videoFrame');
  const videoTitle = document.getElementById('videoTitle');
  
  if (isVideoLoading || !videoModal || !videoFrame) return;
  
  isVideoLoading = true;
  showLoading();
  
  const cleanVideoId = videoId.replace(/[^a-zA-Z0-9_-]/g, '');
  const embedUrl = `https://www.youtube.com/embed/${cleanVideoId}?autoplay=1&rel=0&modestbranding=1&controls=1`;
  
  if (videoTitle) {
    videoTitle.textContent = title;
  }
  
  videoFrame.src = embedUrl;
  videoModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  
  setTimeout(() => {
    isVideoLoading = false;
    hideLoading();
  }, 1000);
}

function closeVideoModal() {
  const videoModal = document.getElementById('videoModal');
  const videoFrame = document.getElementById('videoFrame');
  
  if (videoModal) {
    videoModal.classList.add('hidden');
  }
  
  if (videoFrame) {
    videoFrame.src = '';
  }
  
  document.body.style.overflow = currentSection === 'landing' ? 'hidden' : 'auto';
  isVideoLoading = false;
  hideLoading();
}

// ===================== Tab Navigation =====================
function setupTabNavigation(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) return;
  
  const navTabs = section.querySelectorAll('.nav-tab');
  const contentPanels = section.querySelectorAll('.content-panel');
  
  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-target');
      
      // Update active tab
      navTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      
      // Update active content panel
      contentPanels.forEach(panel => {
        panel.classList.remove('active');
        if (panel.id === target) {
          panel.classList.add('active');
        }
      });
    });
  });
}

// ===================== Particle Effects =====================
function createParticle() {
  const particles = document.getElementById('particles');
  if (!particles) return;
  
  const particle = document.createElement('div');
  particle.className = 'particle';
  particle.style.left = Math.random() * 100 + 'vw';
  particle.style.animationDelay = Math.random() * 8 + 's';
  particle.style.animationDuration = (8 + Math.random() * 4) + 's';
  particles.appendChild(particle);
  
  setTimeout(() => {
    if (particle.parentNode) {
      particle.parentNode.removeChild(particle);
    }
  }, 12000);
}

// ===================== Easter Eggs =====================
const KONAMI_CODE = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let konamiProgress = 0;

function handleKonamiCode(keyCode) {
  if (keyCode === KONAMI_CODE[konamiProgress]) {
    konamiProgress++;
    if (konamiProgress === KONAMI_CODE.length) {
      document.body.classList.toggle('sarpbc');
      const indicator = document.getElementById('konamiIndicator');
      if (indicator) {
        indicator.classList.add('active');
        setTimeout(() => indicator.classList.remove('active'), 3000);
      }
      konamiProgress = 0;
    }
  } else {
    konamiProgress = 0;
  }
}

// ===================== Event Listeners =====================
function setupEventListeners() {
  // Main navigation buttons
  const fellowGamerBtn = document.getElementById('fellowGamerBtn');
  const recruiterBtn = document.getElementById('recruiterBtn');
  
  if (fellowGamerBtn) {
    fellowGamerBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Fellow Gamer button clicked');
      showSection('gamer');
    });
  }
  
  if (recruiterBtn) {
    recruiterBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Recruiter button clicked');
      showSection('recruiter');
    });
  }
  
  // Logo back buttons
  const gamerLogo = document.getElementById('gamerLogo');
  const recruiterLogo = document.getElementById('recruiterLogo');
  
  if (gamerLogo) {
    gamerLogo.addEventListener('click', () => showSection('landing'));
  }
  
  if (recruiterLogo) {
    recruiterLogo.addEventListener('click', () => showSection('landing'));
  }
  
  // Modal close
  const modalClose = document.getElementById('modalClose');
  const videoModal = document.getElementById('videoModal');
  
  if (modalClose) {
    modalClose.addEventListener('click', closeVideoModal);
  }
  
  if (videoModal) {
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal || e.target.className === 'modal-backdrop') {
        closeVideoModal();
      }
    });
  }
  
  // Easter egg
  const moaiEaster = document.getElementById('moaiEaster');
  if (moaiEaster) {
    moaiEaster.addEventListener('click', () => {
      openVideoModal('2K6j9F_tS-I', 'Rocket League SARPBC Easter Egg');
    });
  }
  
  // Keyboard events
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal && !videoModal.classList.contains('hidden')) {
      closeVideoModal();
    }
    handleKonamiCode(e.keyCode);
  });
  
  // Hover effects for non-mobile
  if (!isMobile()) {
    const dust2Background = document.getElementById('dust2Background');
    const cyberBackground = document.getElementById('cyberBackground');
    
    if (fellowGamerBtn && dust2Background) {
      fellowGamerBtn.addEventListener('mouseenter', () => {
        dust2Background.style.opacity = '0.6';
      });
      fellowGamerBtn.addEventListener('mouseleave', () => {
        dust2Background.style.opacity = '0';
      });
    }
    
    if (recruiterBtn && cyberBackground) {
      recruiterBtn.addEventListener('mouseenter', () => {
        cyberBackground.style.opacity = '0.6';
      });
      recruiterBtn.addEventListener('mouseleave', () => {
        cyberBackground.style.opacity = '0';
      });
    }
  }
}

// ===================== Initialize Application =====================
function initializeApp() {
  console.log('🎮 Initializing CS:GO Portfolio Hub...');
  
  try {
    // Populate all content
    populateGamesPlayed();
    populateCSGOTimeline();
    populateIconicMoments();
    populateMajorsTimeline();
    populateAboutMe();
    populateSkills();
    populateEducation();
    populateExperience();
    populateProjects();
    
    // Setup functionality
    setupEventListeners();
    setupTabNavigation('gamerSection');
    setupTabNavigation('recruiterSection');
    
    // Start particle effects
    setInterval(createParticle, 300);
    
    // Set initial state
    document.body.style.overflow = 'hidden';
    hideLoading();
    
    console.log('✅ CS:GO Portfolio Hub initialized successfully!');
    console.log('🎯 Games loaded:', APPLICATION_DATA.games_played.length);
    
  } catch (error) {
    console.error('❌ Initialization error:', error);
    hideLoading();
  }
}

// Start the application
document.addEventListener('DOMContentLoaded', initializeApp);

// Export functions for global access
window.openVideoModal = openVideoModal;
window.closeVideoModal = closeVideoModal;
window.handleCardKeydown = handleCardKeydown;
window.showSection = showSection;