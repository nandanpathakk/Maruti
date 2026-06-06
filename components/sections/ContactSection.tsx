"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/config/site";

export function ContactSection() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
    const subject = encodeURIComponent(`Enquiry from ${data.name}${data.company ? ' - ' + data.company : ''}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nCompany: ${data.company}\nEmail: ${data.email}\nPhone: ${data.phone}\nProduct: ${data.product}\n\nRequirements:\n${data.message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    
    setShowSuccess(true);
    e.currentTarget.reset();
    setTimeout(() => { setShowSuccess(false); }, 6000);
  };

  return (
    <section id="contact" style={{ background: 'var(--cream)', padding: 'var(--section-gap) 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p className="label">Get In Touch</p>
          <div className="gold-line" style={{ margin: '16px auto 0' }}></div>
          <h2 className="section-title" style={{ marginTop: '0' }}>Request a Quote or<br />Ask a Technical Question</h2>
          <p className="contact-desc">
            Whether you need a standard replacement or a fully custom filtration solution, our team is ready to discuss your plant's requirements.
          </p>
        </div>
        <div className="contact-grid">
          <div className="contact-info reveal">
            <div className="contact-detail">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 11.5a19.79 19.79 0 01-3.07-8.67A2 2 0 013.6 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 7.91a16 16 0 006 6l1.27-.85a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 15.18v1.74z"/></svg>
              </div>
              <div>
                <div className="contact-detail-label">Phone / WhatsApp</div>
                <div className="contact-detail-val"><a href={`tel:+${siteConfig.phoneRaw}`}>{siteConfig.phone}</a></div>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div>
                <div className="contact-detail-label">Email</div>
                <div className="contact-detail-val"><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
              </div>
              <div>
                <div className="contact-detail-label">Website</div>
                <div className="contact-detail-val"><a href={siteConfig.website} target="_blank" rel="noopener noreferrer">{siteConfig.website.replace('https://', '')}</a></div>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
              </div>
              <div>
                <div className="contact-detail-label">Factory Address</div>
                <div className="contact-detail-val">
                  <a href={siteConfig.googleMapsLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                    {siteConfig.address}
                  </a>
                </div>
              </div>
            </div>
            <a href={`https://wa.me/${siteConfig.phoneRaw}?text=Hello%20Maruti%20Filters%2C%20I%20need%20a%20quote%20for%20your%20products.`} className="whatsapp-btn" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Chat on WhatsApp
            </a>
            <p style={{ fontSize: '0.82rem', color: 'var(--steel)', marginTop: '20px', lineHeight: '1.6' }}>Quick for urgent enquiries or to share your filter drawing/specifications directly via WhatsApp chat.</p>
            <div style={{ marginTop: '40px', padding: '28px', background: 'var(--ink)', color: 'var(--white)' }}>
              <div className="label" style={{ color: 'var(--accent)', marginBottom: '12px' }}>Download Product Catalogue</div>
              <p style={{ fontSize: '0.875rem', lineHeight: '1.7', color: 'rgba(255,255,255,0.65)', marginBottom: '20px' }}>Full product specifications, material data, and application reference for all our filtration components.</p>
              <a href="/Maruti_Catalogue.pdf" download className="btn-primary" style={{ borderColor: 'rgba(255,255,255,0.2)', width: '100%', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download Catalogue (PDF)
              </a>
            </div>
          </div>

          <div className="reveal">
            <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Full Name *</label>
                  <input className="form-input" type="text" id="name" name="name" required placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="company">Company Name</label>
                  <input className="form-input" type="text" id="company" name="company" placeholder="Your company" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address *</label>
                  <input className="form-input" type="email" id="email" name="email" required placeholder="you@company.com" />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Phone / WhatsApp</label>
                  <input className="form-input" type="tel" id="phone" name="phone" placeholder="+91 XXXXXXXXXX" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="product">Product of Interest</label>
                <select className="form-select" id="product" name="product">
                  <option value="">Select a product...</option>
                  <option>Pleated Polymer Candle Filter (CP Lines)</option>
                  <option>Pleated Wire Mesh Filter Sleeves</option>
                  <option>Perforated Support Cores / Adapter Rods</option>
                  <option>Spin Pack Filters &amp; Wire Mesh</option>
                  <option>Sealing Gaskets</option>
                  <option>Sealing Bushes</option>
                  <option>Loose Wire Mesh</option>
                  <option>Multiple / Custom Requirement</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="message">Your Requirements *</label>
                <textarea className="form-textarea" id="message" name="message" required placeholder="Please describe your requirement — plant type (CP/POY/FDY etc.), filter dimensions, micron rating, quantity, or any technical details..."></textarea>
              </div>
              <p className="form-note">* Required fields. We typically respond within 24 hours.</p>
              <button type="submit" className="form-submit">Send Enquiry</button>
              {showSuccess && (
                <div id="form-success" style={{ display: 'block' }}>✓ Thank you! Your enquiry has been received. We'll get back to you within 24 hours.</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
