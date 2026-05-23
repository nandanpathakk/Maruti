"use client";

import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-img-stack">
            <Image className="about-img-main" src="/images/2.png" alt="Maruti Filters SS 304 Polymer Candle Filter close-up" width={600} height={800} />
            <Image className="about-img-accent" src="/images/8.png" alt="Maruti Filters Metal Sealing Gaskets" width={400} height={400} />
          </div>
          <div className="about-content reveal">
            <p className="label">About Maruti Filters & Gaskets</p>
            <div className="gold-line"></div>
            <h2 className="section-title">Engineer-Led.<br />Precision Built.<br />Trusted in India.</h2>
            <p className="about-body" style={{ marginTop: '24px' }}>
              At <strong>Maruti Filters & Gaskets</strong>, we believe the heart of efficient synthetic fiber production lies in flawless melt purity. Founded by a dedicated Mechanical Engineer, we bridge the gap between rigid mass manufacturing and <strong>high-precision custom fabrication</strong>.
            </p>
            <p className="about-body">
              We specialise in the fluid dynamics, material integrity, and thermal demands of modern Continuous Polymerization (CP) and high-speed spinning lines — building every component to your exact plant blueprint, not from a shelf.
            </p>
            <div className="usps-grid">
              <div className="usp-card">
                <div className="usp-title">Engineer-Led Customization</div>
                <div className="usp-text">Deep understanding of fluid dynamics, thermal stresses & pressure drops — not just parts supply.</div>
              </div>
              <div className="usp-card">
                <div className="usp-title">Agile & Flexible</div>
                <div className="usp-text">Custom micron ratings, weave patterns & non-standard dimensions without high MOQs.</div>
              </div>
              <div className="usp-card">
                <div className="usp-title">Advanced Material Mastery</div>
                <div className="usp-text">Industry-certified SS 304, Copper & Aluminium for maximum thermal and chemical resistance.</div>
              </div>
              <div className="usp-card">
                <div className="usp-title">Rapid Turnaround</div>
                <div className="usp-text">Streamlined production cycle. Custom batches dispatched fast — including air courier for urgent orders.</div>
              </div>
            </div>
            <a href="#contact" className="btn-primary">Get a Custom Quote</a>
          </div>
        </div>
      </div>
    </section>
  );
}
