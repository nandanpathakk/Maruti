"use client";

import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-img-stack">
            <Image className="about-img-main" src="/images/2.png" alt="Maruti Filters SS 304 Polymer Candle Filter close-up" width={600} height={800} />
            <Image className="about-img-accent" src="/images/8_transparent.png" alt="Maruti Filters Metal Sealing Gaskets" width={400} height={400} />
          </div>
          <div className="about-content reveal">
            <p className="label">About Maruti Filters & Gaskets</p>
            <div className="gold-line"></div>
            <h2 className="section-title">Engineer-Led.<br />Precision Built.<br />Trusted in India.</h2>
            <p className="about-body" style={{ marginTop: '16px' }}>
              At <strong>Maruti Filters & Gaskets</strong>, we bridge the gap between mass production and <strong>high-precision custom fabrication</strong>. Founded by a mechanical engineer, we build every candle filter, spin pack, and gasket to your exact plant blueprint to meet the rigid demands of high-speed spinning lines.
            </p>
            <div className="usps-grid">
              <div className="usp-card">
                <div className="usp-title">Engineer-Led</div>
                <div className="usp-text">Deep mastery of fluid dynamics, thermal stresses & pressure drops.</div>
              </div>
              <div className="usp-card">
                <div className="usp-title">Agile & Flexible</div>
                <div className="usp-text">Custom micron ratings & weave patterns without high MOQs.</div>
              </div>
              <div className="usp-card">
                <div className="usp-title">Material Mastery</div>
                <div className="usp-text">Certified SS 304, copper & aluminium for maximum durability.</div>
              </div>
              <div className="usp-card">
                <div className="usp-title">Rapid Turnaround</div>
                <div className="usp-text">Custom batches built and dispatched fast to minimize downtime.</div>
              </div>
            </div>
            <a href="#contact" className="btn-primary">Get a Custom Quote</a>
          </div>
        </div>
      </div>
    </section>
  );
}
