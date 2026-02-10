import React from 'react';
import visaLogo from '/public/assets/images/visa-logo-removebg-preview.png';

const About = () => {
  const projects = [
    {
      title: 'Online Judge Platform',
      stack: 'Node.js, Express.js, MongoDB, AWS, JWT, AI-assisted Code Review',
      links: {
        github: 'https://github.com/rghvbgdi/code-judge',
        live: 'https://d2lestbzjzaj5z.cloudfront.net/problems'
      },
      points: [
        'Built an end-to-end online judge with AI-assisted feedback using Node.js, Express.js, and MongoDB.',
        'Implemented stateless authentication using JWTs and bcrypt, enabling secure token-based access control.',
        'Developed an AI-assisted code review system using the Google Gemini API to analyze submissions and suggest optimizations.',
        'Hosted the platform on AWS using Lambda for serverless backend, S3 buckets for storage, and CloudFront for global content delivery.'
      ]
    },
    {
      title: 'EcoMart',
      stack: 'MERN Stack, Google OAuth, MongoDB Geospatial',
      links: {
        github: 'https://github.com/rghvbgdi/ecoMart'
      },
      points: [
        'Built a hackathon-winning platform that reroutes cancelled orders to nearby buyers, developed using Node.js, Express, and MongoDB to reduce product wastage.',
        'Built a login/register dashboard with email/password sign-in and Google OAuth, securing access to order workflows (create/view/cancel).',
        'Built the geospatial reroute flow using MongoDB GeoJSON Points and 2dsphere indexes with $geoWithin + $centerSphere to target nearby buyers.'
      ]
    }
  ];

  const techStack = [
    {
      icon: 'layers-outline',
      title: 'Languages',
      accent: 'yellow',
      items: [
        { icon: 'terminal-outline', label: 'C' },
        { icon: 'terminal-outline', label: 'C++' },
        { icon: 'logo-javascript', label: 'JavaScript' }
      ]
    },
    {
      icon: 'code-outline',
      title: 'Frontend',
      accent: 'blue',
      items: [
        { icon: 'logo-react', label: 'React.js' },
        { icon: 'logo-html5', label: 'HTML' },
        { icon: 'logo-css3', label: 'CSS' },
        { icon: 'color-palette-outline', label: 'Tailwind CSS' }
      ]
    },
    {
      icon: 'server-outline',
      title: 'Backend',
      accent: 'green',
      items: [
        { icon: 'logo-nodejs', label: 'Node.js' },
        { icon: 'git-network-outline', label: 'Express.js' },
        { icon: 'swap-horizontal-outline', label: 'RESTful APIs' },
        { icon: 'key-outline', label: 'JWT' },
        { icon: 'lock-closed-outline', label: 'bcrypt' }
      ]
    },
    {
      icon: 'server-outline',
      title: 'Database',
      accent: 'purple',
      items: [
        { icon: 'layers-outline', label: 'MongoDB' },
        { icon: 'git-merge-outline', label: 'Mongoose' },
        { icon: 'navigate-circle-outline', label: 'MongoDB Geospatial' },
        { icon: 'grid-outline', label: 'SQL' }
      ]
    },
    {
      icon: 'cloud-outline',
      title: 'Cloud & Tools',
      accent: 'orange',
      items: [
        { icon: 'logo-amazon', label: 'AWS (EC2, S3, CloudFront, Lambda)' },
        { icon: 'git-branch-outline', label: 'Git' },
        { icon: 'logo-github', label: 'GitHub' },
        { icon: 'send-outline', label: 'Postman' },
        { icon: 'code-slash-outline', label: 'VS Code' }
      ]
    },
    {
      icon: 'sparkles-outline',
      title: 'APIs & Libraries',
      accent: 'pink',
      items: [{ icon: 'sparkles-outline', label: 'Google Gemini API' }]
    }
  ];

  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <p className="about-lede">
        I’m a Dual Degree Information Technology student graduating in 2027, focused on building scalable products end-to-end.
      </p>

      <p className="about-subtitle">
        Upcoming Summer 2026 Software Engineering Intern at Visa.
      </p>

      <div className="about-text">
        <p>
          I primarily work as a MERN stack developer and enjoy designing clean APIs, performant backend systems, and polished user experiences.
        </p>

        <div className="about-badges">
          <span className="about-badge">Dual Degree · IT</span>
          <span className="about-badge">Graduating 2027</span>
          <span className="about-badge">MERN Stack</span>
          <span className="about-badge">Backend + Systems</span>
        </div>
      </div>

      {/* Visa Internship Highlight Banner */}
      <div className="internship-banner">
        <div className="internship-icon-wrapper">
          <img
            src={visaLogo}
            alt="Visa"
            className="internship-logo"
          />
        </div>
        <div className="internship-content">
          <div
            className="internship-badge"
            style={{ writingMode: 'horizontal-tb', marginLeft: '-15px' }}
          >
            Summer 2026
          </div>
          <h3 className="internship-title">Software Engineering Intern</h3>
          <p className="internship-company">
            <ion-icon name="business"></ion-icon>
            <span>Visa Inc.</span>
          </p>
        </div>
        <div className="internship-decoration">
          <div className="decoration-circle"></div>
          <div className="decoration-circle"></div>
          <div className="decoration-circle"></div>
        </div>
      </div>

      {/* Tech Stack Section (moved up) */}
      <section className="service mb-12">
        <h3 className="h3 section-title">
          <ion-icon name="construct-outline"></ion-icon>
          Tech Stack
        </h3>

        <ul className="tech-stack-list">
          {techStack.map((tech, index) => (
            <li className="tech-stack-item" data-accent={tech.accent} key={index}>
              <div className="tech-header">
                <div className="tech-icon-box">
                  <ion-icon name={tech.icon}></ion-icon>
                </div>
                <h4 className="h4 tech-title">{tech.title}</h4>
              </div>
              
              <div className="tech-items-wrapper">
                {tech.items.map((item, itemIndex) => (
                  <span className="tech-badge" key={itemIndex}>
                    <ion-icon name={item.icon}></ion-icon>
                    <span>{item.label}</span>
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Experience Section */}
      <section className="service">
        <h3 className="h3 section-title">
          <ion-icon name="briefcase-outline"></ion-icon>
          Experience
        </h3>

        <div className="experience-card">
          <div className="experience-header">
            <div className="experience-title-block">
              <h4 className="h4 experience-role">Software Development Intern</h4>
              <p className="experience-company">AlgoUniversity | Y-Combinator Backed</p>
            </div>
            <div className="experience-meta">
              <div className="experience-dates">Jan 2025 – Mar 2025</div>
              <div className="experience-location">Hyderabad, India · Remote</div>
            </div>
          </div>

          <ul className="experience-points">
            <li>
              <ion-icon name="checkmark-circle"></ion-icon>
              <span>Added multi-language compiler support (C, C++, Java, Python), contributing to 40% user growth in two months.</span>
            </li>
            <li>
              <ion-icon name="checkmark-circle"></ion-icon>
              <span>Used MongoDB projections to remove heavy fields in problem queries, reducing payload size by 70%.</span>
            </li>
            <li>
              <ion-icon name="checkmark-circle"></ion-icon>
              <span>Implemented server-side pagination (skip/limit) for scalable problem listings and faster main-page reloads.</span>
            </li>
            <li>
              <ion-icon name="checkmark-circle"></ion-icon>
              <span>Built REST APIs for problem management with Express + MongoDB and role-based access control for admin actions.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section className="service">
        <h3 className="h3 section-title">
          <ion-icon name="rocket-outline"></ion-icon>
          Featured Projects
        </h3>

        <ul className="project-list">
          {projects.map((project, index) => (
            <li className="project-item" key={index}>
              <div className="project-content">
                <div className="project-header">
                  <div className="project-title-block">
                    <h4 className="h4 project-title">{project.title}</h4>
                    <div className="project-links">
                      {project.links?.github && (
                        <a className="project-link" href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <ion-icon name="logo-github"></ion-icon>
                          <span>Source</span>
                        </a>
                      )}
                      {project.links?.live && (
                        <a className="project-link" href={project.links.live} target="_blank" rel="noopener noreferrer">
                          <ion-icon name="open-outline"></ion-icon>
                          <span>Live</span>
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="project-stack-tag">{project.stack}</div>
                </div>
                
                <ul className="project-points">
                  {project.points.map((point, pointIndex) => (
                    <li key={pointIndex}>
                      <ion-icon name="checkmark-circle"></ion-icon>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>

      
    </article>
  );
};

export default About;