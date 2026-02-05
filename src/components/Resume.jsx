import React from 'react';

const Resume = () => {
  return (
    <article className="resume" data-page="resume">
      <section className="timeline">
        <div
          className="mapbox bg-gradient-jet border border-jet rounded-[15px] shadow-shadow-1"
        >
          <iframe
            src="/assets/documents/resume.pdf"
            width="100%"
            style={{ border: 'none', minHeight: '100vh' }}
            title="Resume PDF Viewer"
          />
        </div>
      </section>
    </article>
  );
};

export default Resume;