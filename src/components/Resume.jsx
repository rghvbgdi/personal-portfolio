import React from 'react';

const Resume = () => {
  return (
    <article className="resume" data-page="resume">
      <header>
        <h2 className="h2 article-title mb-8">Resume</h2>
      </header>

      <section className="timeline">
        <div className="mb-5">
          <a
            href="/assets/documents/resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-gradient-yellow-1 shadow-shadow-2 text-smoky-black font-fw-600 text-fs-6 px-5 py-2.5 rounded-full transition-transform duration-250 hover:-translate-y-0.5"
            style={{ width: 'max-content' }}
          >
            <ion-icon name="cloud-download-outline"></ion-icon>
            <span>Download Resume</span>
          </a>
        </div>

        <div className="mapbox bg-gradient-jet border border-jet rounded-[15px] overflow-hidden shadow-shadow-1" style={{ height: '800px' }}>
          <iframe
            src="/assets/documents/resume.pdf"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title="Resume PDF Viewer"
          />
        </div>
      </section>
    </article>
  );
};

export default Resume;
