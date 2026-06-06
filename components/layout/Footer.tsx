import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="brand">MARUTI</div>
            <div className="sub">Filters &amp; Gaskets</div>
            <p className="footer-desc">An emerging Indian manufacturer and global exporter of high-precision polymer filtration components. Specializing in candle filters, spin pack filters, gaskets, and wire mesh for the synthetic fiber and extrusion industries.</p>
            <p style={{ fontSize: '0.8rem', color: 'var(--steel)', marginTop: '16px', lineHeight: '1.5', maxWidth: '300px' }}>
              <strong>Factory Address:</strong><br />
              {siteConfig.address}
            </p>
          </div>
          <div>
            <div className="footer-col-title">Quick Links</div>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#quality">Quality Standards</a></li>
              <li><a href="#contact">Contact &amp; Enquiry</a></li>
              <li><a href="/Maruti_Catalogue.pdf" download>Download Catalogue</a></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Products</div>
            <ul className="footer-links">
              <li><a href="#products">Polymer Candle Filters</a></li>
              <li><a href="#products">Spin Pack Filters</a></li>
              <li><a href="#products">Wire Mesh Sleeves</a></li>
              <li><a href="#products">Adapter Rods</a></li>
              <li><a href="#products">Sealing Gaskets</a></li>
              <li><a href="#products">Sealing Bushes</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Maruti Filters &amp; Gaskets. All rights reserved.</span>
          <span>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            &nbsp;&middot;&nbsp;
            <a href={`tel:+${siteConfig.phoneRaw}`}>{siteConfig.phone}</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

