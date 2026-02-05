import React from 'react';

const About = () => {
  const projects = [
    {
      icon: 'desktop-outline',
      title: 'Online Judge Platform',
      description:
        'Built a competitive programming platform with real-time code execution, automated judging system, and leaderboard functionality using Node.js and React.'
    },
    {
      icon: 'phone-portrait-outline',
      title: 'EcoMart',
      description:
        'Developed an e-commerce platform for sustainable products with user authentication, payment integration, and admin dashboard using MERN stack.'
    }
  ];

  const techStack = [
    {
      icon: 'layers-outline',
      title: 'Languages',
      skills: 'C++, Python, JavaScript, Java, SQL'
    },
    {
      icon: 'code-outline',
      title: 'Frontend',
      skills: 'React, HTML5, CSS3, JavaScript (ES6+), Tailwind CSS'
    },
    {
      icon: 'server-outline',
      title: 'Backend',
      skills: 'Node.js, Express, Python, Django, REST APIs'
    },
    {
      icon: 'storage-outline',
      title: 'Databases & Tools',
      skills: 'MongoDB, MySQL, PostgreSQL, Git, Docker, AWS'
    }
  ];

  return (
    <article className="about" data-page="about">
      <header>
        <h2 className="h2 article-title mb-8">About me</h2>
      </header>

      <section className="about-text text-light-gray-70 text-fs-5 leading-relaxed mb-10">
        <p className="mb-5">
          I'm a passionate Software Developer from India, currently pursuing B.Tech at Indian Institute of Information Technology.
          I enjoy turning complex problems into simple, beautiful and intuitive solutions.
        </p>

        <p>
          My focus is on building scalable and efficient software applications. I have experience in full-stack development,
          with particular interest in backend systems and algorithmic problem solving. I aim to create impactful solutions
          that address real-world challenges.
        </p>
      </section>

      <section className="service mb-10">
        <h3 className="h3 service-title text-orange-yellow-crayola text-fs-3 font-fw-600 mb-5 relative pb-2.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[3px] after:bg-gradient-text-yellow after:rounded">
          Projects
        </h3>

        <ul className="service-list grid gap-5" style={{ gridTemplateColumns: '1fr' }}>
          {projects.map((project, index) => (
            <li
              className="service-item bg-gradient-jet border border-jet rounded-[15px] p-6 flex gap-5 items-start transition-transform duration-250 hover:-translate-y-1 hover:shadow-shadow-2"
              key={index}
            >
              <div className="service-icon-box w-[50px] h-[50px] flex items-center justify-center bg-gradient-onyx border border-jet rounded-[10px] flex-shrink-0">
                <ion-icon
                  name={project.icon}
                  style={{
                    fontSize: '40px',
                    color: 'var(--orange-yellow-crayola)',
                    margin: 'auto',
                    display: 'block'
                  }}
                ></ion-icon>
              </div>

              <div className="service-content-box flex-1">
                <h4 className="h4 service-item-title text-white-1 text-fs-4 font-fw-600 mb-2">
                  {project.title}
                </h4>
                <p className="service-item-text text-light-gray-70 text-fs-6 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="service">
        <h3 className="h3 service-title text-orange-yellow-crayola text-fs-3 font-fw-600 mb-5 relative pb-2.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[3px] after:bg-gradient-text-yellow after:rounded">
          Tech Stack
        </h3>

        <ul className="service-list grid gap-5" style={{ gridTemplateColumns: '1fr' }}>
          {techStack.map((tech, index) => (
            <li
              className="service-item bg-gradient-jet border border-jet rounded-[15px] p-6 flex gap-5 items-start transition-transform duration-250 hover:-translate-y-1 hover:shadow-shadow-2"
              key={index}
            >
              <div className="service-icon-box w-[50px] h-[50px] flex items-center justify-center bg-gradient-onyx border border-jet rounded-[10px] flex-shrink-0">
                <ion-icon
                  name={tech.icon}
                  style={{
                    fontSize: '40px',
                    color: 'var(--orange-yellow-crayola)',
                    margin: 'auto',
                    display: 'block'
                  }}
                ></ion-icon>
              </div>

              <div className="service-content-box flex-1">
                <h4 className="h4 service-item-title text-white-1 text-fs-4 font-fw-600 mb-2">
                  {tech.title}
                </h4>
                <p className="service-item-text text-light-gray-70 text-fs-6 leading-relaxed">
                  {tech.skills}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default About;
