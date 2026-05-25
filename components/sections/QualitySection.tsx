import Image from "next/image";

export function QualitySection() {
  return (
    <section id="quality">
      <div className="container">
        <div className="quality-grid">
          <div className="reveal">
            <p className="label">Quality & Standards</p>
            <div className="gold-line"></div>
            <h2 className="section-title">Zero-Defect.<br />Zero Compromise.</h2>
            <p className="quality-desc">
              Every component leaving our facility passes a rigorous multi-stage quality control protocol. In high-pressure spinning lines, even a minor discrepancy causes catastrophic leakage — so we don't accept minor discrepancies.
            </p>
            <ul className="quality-list">
              <li className="quality-item">
                <div className="quality-icon">
                  <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div>
                  <div className="quality-item-title">Zero-Defect Geometry Control</div>
                  <div className="quality-item-text">Strict manufacturing tolerance protocol verifying physical alignment, TIG-welded seams, and end-cap threading on every candle filter and sleeve.</div>
                </div>
              </li>
              <li className="quality-item">
                <div className="quality-icon">
                  <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                </div>
                <div>
                  <div className="quality-item-title">High-Pressure Structural Integrity</div>
                  <div className="quality-item-text">Multi-layered, robustly reinforced filter cores designed to withstand high differential pressures (ΔP) without pleat collapse or media migration.</div>
                </div>
              </li>
              <li className="quality-item">
                <div className="quality-icon">
                  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <div className="quality-item-title">Precision Sealing Tolerances</div>
                  <div className="quality-item-text">Copper gaskets and SS 304 sealing bushes are precision-stamped and machined to achieve zero-leakage interfaces, protecting your housings from polymer degradation.</div>
                </div>
              </li>
              <li className="quality-item">
                <div className="quality-icon">
                  <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div>
                  <div className="quality-item-title">Bypass-Free Filtration Audits</div>
                  <div className="quality-item-text">Every custom component undergoes a structural and dimensional checklist before dispatch, ensuring a completely seamless, bypass-free seal on installation.</div>
                </div>
              </li>
            </ul>
          </div>
          <div className="quality-img-wrap reveal">
            <Image className="quality-img-main" src="/images/6.png" alt="Maruti Filters pleated candle filter quality" width={600} height={600} />
            <div className="quality-badge">
              <span className="num">100%</span>
              <span className="lbl">Pre-Dispatch<br />Inspected</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
