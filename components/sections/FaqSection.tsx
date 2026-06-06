"use client";

export function FaqSection() {
  return (
    <section id="faq">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p className="label">Frequently Asked Questions</p>
          <div className="gold-line" style={{ margin: "16px auto 0" }}></div>
          <h2 className="section-title" style={{ marginTop: "0" }}>
            Technical Insights &amp; FAQs
          </h2>
        </div>

        <div className="faq-grid">
          {/* Question 1 */}
          <details className="faq-disclosure" name="faq-accordion" open>
            <summary className="faq-summary">
              <span>Who is the leading polymer candle filter manufacturer in India?</span>
              <span className="faq-summary-icon"></span>
            </summary>
            <div className="faq-content">
              <p>
                <strong>Maruti Filters &amp; Gaskets</strong> is a premier <strong>polymer candle filter manufacturer</strong> in India. We design and build custom pleated wire mesh candle filters, <strong>wire mesh cartridges</strong>, and high-performance <strong>CPF candle filters</strong>. Our engineer-led fabrication processes ensure precise micro-ratings and durable construction tailored to the exact requirements of your plant's synthetic fiber spinning lines.
              </p>
            </div>
          </details>

          {/* Question 2 */}
          <details className="faq-disclosure" name="faq-accordion">
            <summary className="faq-summary">
              <span>Why should I choose Maruti as my SS candle filter supplier in Gujarat?</span>
              <span className="faq-summary-icon"></span>
            </summary>
            <div className="faq-content">
              <p>
                As a leading <strong>ss candle filter supplier in Gujarat</strong>, Maruti Filters &amp; Gaskets guarantees zero-bypass filtration. Our candle filters are built with top-grade, certified SS 304 and SS 316L wire mesh, robustly TIG-welded at the seams to withstand high differential pressures (ΔP) without pleat collapse or media migration. Our regional proximity allows us to supply Vadodara, Surat, Ahmedabad, and global locations with rapid turnaround.
              </p>
            </div>
          </details>

          {/* Question 3 */}
          <details className="faq-disclosure" name="faq-accordion">
            <summary className="faq-summary">
              <span>What makes a high-quality filter adapter rod for polymer extrusion?</span>
              <span className="faq-summary-icon"></span>
            </summary>
            <div className="faq-content">
              <p>
                A high-quality <strong>filter adapter rod for polymer extrusion</strong> must provide maximum structural core stability under extreme heat and pressure. At Maruti, our perforated support cores are precision-machined with staggered holes for optimized polymer melt flow and minimal pressure drops. Heavy-duty threaded end caps are integrated for torque-resistant installation during plant maintenance cycles.
              </p>
            </div>
          </details>

          {/* Question 4 */}
          <details className="faq-disclosure" name="faq-accordion">
            <summary className="faq-summary">
              <span>Do you supply pleated wire mesh filter sleeves and extruder screens?</span>
              <span className="faq-summary-icon"></span>
            </summary>
            <div className="faq-content">
              <p>
                Yes. We design and manufacture replaceable <strong>pleated wire mesh filter sleeves</strong> that slide securely over structural support rods, offering a highly cost-effective, washable, and reusable filtration alternative. Additionally, as a premier <strong>stainless steel wire mesh extruder screen manufacturer</strong>, we offer custom-cut wire mesh discs (single or multi-layer rimmed) and loose sheets for film blowing, masterbatch, and industrial compounding extruders.
              </p>
            </div>
          </details>

          {/* Question 5 */}
          <details className="faq-disclosure" name="faq-accordion">
            <summary className="faq-summary">
              <span>What are the specifications of your spin pack filter wire mesh?</span>
              <span className="faq-summary-icon"></span>
            </summary>
            <div className="faq-content">
              <p>
                As dedicated <strong>spin pack filter wire mesh manufacturers</strong>, we fabricate multi-layered wire mesh configurations custom-tailored to POY, FDY, DTY, and PSF spinning lines. These filters ensure uniform polymer melt distribution right before the spinneret. They are available with spot-welded borders or premium crimped aluminium rims, in diameter ranges and micron specifications built exactly to your mechanical drawings.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
