// data.js
const portfolioData = {
    profile: {
        name: "Prathamesh Upadhye",
        title: "Cybersecurity & Software Quality Assurance Specialist",
        profileImage: "assets/profilepic.jpg", // Path to your profile image
        contact: {
            address: "A/203, ShekharNagar Building, Dahisar (West), Mumbai-400068, India",
            email: "bhalprathamesh6@gmail.com",
            phone: "+91 9137887904"
        },
        aboutMe: `Passionate and highly motivated Cybersecurity and Quality Assurance professional with a strong
            foundation in identifying vulnerabilities and ensuring software reliability. Eager to apply analytical
            skills and technical expertise to dynamic challenges in information security and software testing.
            My experience ranges from conducting security testing and identifying critical bugs in gaming
            systems to developing network scanning tools and ethical keyloggers. I thrive in collaborative
            environments and am committed to continuous improvement and securing digital infrastructures.`,
        social: [
            { icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/prathamesh-upadhye" },
            { icon: "fab fa-github", url: "https://github.com/prathamesh-upadhye" },
            { icon: "fab fa-steam", url: "#" }, // Placeholder
            { icon: "fab fa-instagram", url: "#" } // Placeholder
        ]
    },
    education: [
        {
            title: "St Francis Institute of Technology, Mumbai University, India",
            subtitle: "July 2024",
            description: "Graduated with a Bachelor of Engineering in Information Technology with Distinction",
            details: "Honors in Cybersecurity"
        },
        {
            title: "Nirmala Memorial Foundation Junior College, Mumbai, India",
            subtitle: "March 2020",
            description: "Secured Distinction in Higher Secondary Certificate Examination (62.31%)",
            details: ""
        }
    ],
    experience: [
        {
            title: "Software Test Engineer",
            subtitle: "Testriq QA Lab LLP, Thane, India | June 2024 – Present",
            description: "Testriq QA LLP is a quality assurance (QA) and testing services company that focuses on providing comprehensive testing solutions for software applications.",
            responsibilities: [
                "Executing smoke testing and regression testing to validate software functionality and stability after changes or updates.",
                "Performing security testing to identify vulnerabilities, ensuring applications adhere to best practices and compliance standards.",
                "Collaborating with clients to provide tailored solutions, gather requirements, and address specific testing needs.",
                "Conducting manual and automation testing using version control software to streamline the testing process and improve efficiency.",
                "Identified and resolved bugs throughout the web development lifecycle, leveraging tools such as Jira and TestRail for effective tracking and reporting.",
                "Assigned to implement testing strategies and frameworks to enhance the overall quality assurance process, fostering continuous improvement within the team."
            ]
        },
        {
            title: "Software Test Intern",
            subtitle: "Testriq QA Lab LLP, Thane, India | June 2024 – July 2024",
            description: "",
            responsibilities: [
                "Studied how to write effective test cases for various applications, ensuring comprehensive coverage of functional requirements.",
                "Tasked with identifying and documenting bugs during manual testing processes, providing clear and actionable feedback to development teams.",
                "Carried out thorough software testing to ensure application quality, including exploratory testing to uncover edge cases and unexpected behavior.",
                "Assisted in creating and maintaining test documentation, contributing to a structured testing process."
            ]
        },
        {
            title: "Public Beta Tester – 'Fall Guys'",
            subtitle: "Epic Games, Cary, North Carolina, USA (Remote) | May 2022 – November 2024",
            description: "",
            responsibilities: [
                "Participated in the beta testing phase of 'Fall Guys,' identifying bugs and providing actionable feedback.",
                "Undertook comprehensive testing to ensure game functionality and stability after updates.",
                "Collaborated with development teams to gather requirements and address specific testing needs.",
                "Utilized Discord for real-time bug reporting and communication with the testing team.",
                "Assigned to execute both manual and automated testing methodologies to enhance testing efficiency.",
                "Discovered a critical game-breaking bug in the voice chat system, demonstrating the ability to identify high-impact issues."
            ]
        }
    ],
    projects: [
        {
            title: "Automated Drone Delivery System",
            description: `Developed a secure web application using Flutter for frontend development and Firebase for backend management and real-time data synchronization, ensuring the safety of drones during delivery operations. Designed and integrated Google Maps UI for real-time route visualization and optimized delivery path planning, enhancing operational efficiency. Employed Firebase for backend management, ensuring reliable data synchronization and scalability to accommodate varying delivery volumes. Introduced security protocols to protect data and prevent unauthorized access, enhancing system integrity and user trust. Incorporated real-time notifications for users to track delivery status and receive updates on drone locations. Carried out thorough testing and debugging of the application to ensure seamless functionality across devices, resulting in a robust and user-friendly experience.`,
            technologies: "Flutter, JavaScript, Firebase, Google Maps API, Security Protocols"
        },
        {
            title: "PScanner (Network Scanning Tool)",
            description: `Built a Python-based tool for advanced network scanning, identifying open ports, and mapping network devices to enhance network visibility and management. Deployed OS fingerprinting to determine the operating systems running on detected devices, improving network visibility and enabling targeted security measures; incorporated service enumeration to detect running services and unpatched vulnerabilities, enhancing proactive security measures and facilitating risk assessment. Applied network segmentation and vulnerability patching to mitigate risks from exposed services and ports, bolstering overall network security posture; integrated a user-friendly interface using React for easy navigation and reporting, allowing users to quickly analyze scan results and implement necessary actions. Introduced scheduling features for automated periodic scans, ensuring continuous monitoring of network security and timely identification of new vulnerabilities; developed comprehensive documentation and user guides to facilitate tool adoption and effective utilization by network administrators and security teams.`,
            technologies: "Python, Scapy, Nmap, OS Fingerprinting, Service Enumeration"
        },
        {
            title: "Keylogger (Ethical Data Logging Tool)",
            description: `Involved in designing a Python-based keylogger for ethical research on vulnerabilities in unauthorized data access, contributing to the understanding of security flaws. Integrated encryption to securely store captured data, ensuring sensitive information remained protected and encrypted at all times. Implemented restricted access mechanisms to prevent unauthorized retrieval of logged data, maintaining ethical usage standards and compliance with privacy regulations. Programmed a monitoring system using Python with PyHook and Pynput libraries to analyze user input in controlled environments without breaching privacy guidelines, ensuring ethical data collection. Devised a user consent framework using Python and Flask to ensure participants were fully informed about data collection practices, reinforcing ethical research principles. Conducted thorough testing and validation of the keylogger to ensure reliability and accuracy, minimizing potential disruptions in controlled environments.`,
            technologies: "Python, PyHook, Pynput, Data Encryption, Access Control"
        }
    ],
    skills: [
        {
            title: "Programming and Scripting",
            description: "Python, Bash, and PowerShell for automation and security scripting."
        },
        {
            title: "Networking and Network Security",
            description: "TCP/IP, firewalls, VPNs; Tools: Wireshark and Nmap."
        },
        {
            title: "Operating Systems",
            description: "Expertise in Linux (Kali, Parrot), Windows, and macOS with OS hardening skills."
        },
        {
            title: "Penetration Testing Tools",
            description: "Experience with Burp Suite, OWASP ZAP, Metasploit, and Nessus for ethical hacking."
        },
        {
            title: "Cloud Security",
            description: "Knowledge of AWS, Azure, GCP security practices, and cloud workload protection."
        },
        {
            title: "Version Control",
            description: "Proficient with Git, GitHub, and Jira for version control and collaboration."
        }
    ],
    activities: [
        {
            title: "Stage Admin Volunteer at Mumbai ComicCon (2023-24)",
            description: "Managed event flow and coordinated activities, ensuring a seamless experience for attendees; involved in troubleshooting any issues that arose and facilitating communication between different teams."
        },
        {
            title: "Vice President of the IT Students' Association (ITSA) at St. Francis Institute of Technology (2023)",
            description: "Led initiatives to boost student engagement through workshops and networking events; collaborated with faculty to create valuable opportunities for students to connect with industry professionals."
        },
        {
            title: "Participant in the Valorant Tournament at MetaSummit (2023)",
            description: "Participated in the Valorant tournament held at Shree LR Tiwari College of Engineering for the fest called MetaSummit."
        },
        {
            title: "Stage Admin and Operator at the SkyEsports LAN Event (2023)",
            description: "Facilitated the smooth execution of live esports events; coordinated logistics and ensuring that all technical aspects ran without a hitch, contributing to a successful event."
        },
        {
            title: "Participant in the Zephyr Rocket League Tournament (2022-23)",
            description: "Achieved consecutive victories, showcasing strategic gameplay and teamwork."
        },
        {
            title: "Volunteer in St Francis Institute of Technology campus blood donation drives (2022-2023)",
            description: "Raised awareness and supported community health; promoted the events and encouraged fellow students to contribute to this important cause."
        }
    ]
};
