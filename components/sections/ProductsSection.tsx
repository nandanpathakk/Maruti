import Image from "next/image";

export function ProductsSection() {
  return (
    <section id="products">
      <div className="container">
        <div className="products-header">
          <div>
            <p className="label">Our Product Range</p>
            <div className="gold-line"></div>
            <h2 className="section-title">Built-to-Order.<br />Built for Your Line.</h2>
          </div>
          <a href="/Maruti_Catalogue.pdf" download className="btn-outline">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
            Download Full Catalogue
          </a>
        </div>

        <div className="products-grid">
          {/* Product 1: Pleated Candle Filter (hero) */}
          <div className="product-card product-featured reveal">
            <div className="product-img-wrap">
              <Image src="/images/7.png" alt="Multi-Layer Pleated Polymer Candle Filter SS 304" width={800} height={400} />
            </div>
            <div className="product-overlay">
              <div className="product-overlay-inner">
                <div className="tag">Flagship Product</div>
                <p>Multi-layered pleated wire mesh design maximises active filtration surface area. TIG-welded seam prevents polymer bypass. Hex nut end fitting for secure, zero-leakage integration.</p>
              </div>
            </div>
            <div className="product-info">
              <div className="product-name">Pleated Polymer Candle Filter (CP Lines)</div>
              <div className="product-spec">Material: SS 304 &middot; Application: CP, POY, PSF, FDY, DTY &middot; Custom Micron Ratings</div>
            </div>
          </div>

          {/* Product 2: Candle Filter sleeves */}
          <div className="product-card reveal">
            <div className="product-img-wrap">
              <Image src="/images/6.png" alt="Pleated Polymer Candle Filter Sleeve" width={400} height={400} />
            </div>
            <div className="product-overlay">
              <div className="product-overlay-inner">
                <div className="tag">Candle Sleeve</div>
                <p>Replaceable pleated filter sleeves that slide over adapter rods. Easy to clean, wash, and reuse — reducing operational consumable costs significantly.</p>
              </div>
            </div>
            <div className="product-info">
              <div className="product-name">Pleated Wire Mesh Filter Sleeves</div>
              <div className="product-spec">Material: SS 304 &middot; Application: Extrusion, Film Blowing, Masterbatch</div>
            </div>
          </div>

          {/* Product 3: Adapter Rods */}
          <div className="product-card reveal">
            <div className="product-img-wrap">
              <Image src="/images/2.png" alt="Perforated Filter Support Adapter Rods SS 304" width={400} height={400} />
            </div>
            <div className="product-overlay">
              <div className="product-overlay-inner">
                <div className="tag">Structural Core</div>
                <p>Precision-machined staggered perforation pattern for maximum fluid throughput. Heavy-duty threaded end caps for torque-resistant installation under extreme ΔP.</p>
              </div>
            </div>
            <div className="product-info">
              <div className="product-name">Perforated Support Cores / Adapter Rods</div>
              <div className="product-spec">Material: SS 304 / SS 316L &middot; Application: Melt Filtration Blocks, Extrusion</div>
            </div>
          </div>

          {/* Product 4: Candle filter pair */}
          <div className="product-card reveal">
            <div className="product-img-wrap">
              <Image src="/images/1.png" alt="SS 304 Polymer Candle Filter with hex end cap" width={400} height={400} />
            </div>
            <div className="product-overlay">
              <div className="product-overlay-inner">
                <div className="tag">High Precision</div>
                <p>Industrial-grade SS 304 candle filters providing structural integrity and durability required to maintain precise micron ratings under high-pressure extrusion conditions.</p>
              </div>
            </div>
            <div className="product-info">
              <div className="product-name">SS 304 Polymer Candle Filter</div>
              <div className="product-spec">Material: SS 304 &middot; TIG-Welded &middot; Hex End Cap &middot; Zero Bypass</div>
            </div>
          </div>

          {/* Product 5: Spin Pack Filters */}
          <div className="product-card product-featured reveal">
            <div className="product-img-wrap">
              <Image src="/images/3.png" alt="Spin Pack Filter Wire Mesh Discs Multi-layer" width={800} height={400} style={{ objectFit: 'contain' }} />
            </div>
            <div className="product-overlay">
              <div className="product-overlay-inner">
                <div className="tag">Spin Pack Range</div>
                <p>High-precision spin pack filters for POY, PSF, FDY, and DTY lines. Multi-layer wire mesh configuration. Spot-welded or aluminium-rimmed edges. Ensures uniform polymer distribution right before the spinneret.</p>
              </div>
            </div>
            <div className="product-info">
              <div className="product-name">Spin Pack Filters & Multi-Layer Wire Mesh</div>
              <div className="product-spec">Material: SS 304 &middot; Application: POY, FDY, DTY, PSF &middot; Spot-Welded or Al-Rimmed</div>
            </div>
          </div>

          {/* Product 6: Single spin pack disc */}
          <div className="product-card reveal">
            <div className="product-img-wrap">
              <Image src="/images/4.png" alt="Spin Pack Wire Mesh Filter Disc Single" width={400} height={400} />
            </div>
            <div className="product-overlay">
              <div className="product-overlay-inner">
                <div className="tag">Wire Mesh Disc</div>
                <p>Precision-cut multi-layer wire mesh discs with crimped metal edges. Custom diameter and micron ratings available for any spin pack configuration.</p>
              </div>
            </div>
            <div className="product-info">
              <div className="product-name">Wire Mesh Filter Disc (Spin Pack)</div>
              <div className="product-spec">Material: SS 304 &middot; Custom Diameter &middot; Multiple Micron Ratings</div>
            </div>
          </div>

          {/* Product 7: Loose wire mesh */}
          <div className="product-card reveal">
            <div className="product-img-wrap">
              <Image src="/images/5.png" alt="Loose SS 304 Wire Mesh Sheets and Discs" width={400} height={400} />
            </div>
            <div className="product-overlay">
              <div className="product-overlay-inner">
                <div className="tag">Raw Mesh</div>
                <p>High-grade SS 304 loose wire mesh in circular, oval, and sheet forms. Supplied to specification for integration into custom filter assemblies or for direct use in spinning blocks.</p>
              </div>
            </div>
            <div className="product-info">
              <div className="product-name">Loose Wire Mesh (Sheets & Discs)</div>
              <div className="product-spec">Material: SS 304 &middot; Custom Cut &middot; Multiple Weave Patterns & Microns</div>
            </div>
          </div>

          {/* Product 8: Sealing Bushes */}
          <div className="product-card reveal">
            <div className="product-img-wrap">
              <Image src="/images/8.png" alt="Sealing Bushes and Gaskets SS 304 Copper Aluminium" width={400} height={400} />
            </div>
            <div className="product-overlay">
              <div className="product-overlay-inner">
                <div className="tag">Sealing Solutions</div>
                <p>Precision-machined sealing bushes designed for spin packs. Available in SS 304, Copper, and Aluminium to suit specific sealing environments and heat-transfer requirements.</p>
              </div>
            </div>
            <div className="product-info">
              <div className="product-name">Sealing Bushes</div>
              <div className="product-spec">Material: SS 304 / Copper / Aluminium &middot; Precision Machined &middot; Zero-Leakage</div>
            </div>
          </div>

          {/* Product 9: Gaskets */}
          <div className="product-card reveal">
            <div className="product-img-wrap">
              <Image src="/images/9.png" alt="Industrial Sealing Gaskets for Polymer Extrusion Lines" width={400} height={400} />
            </div>
            <div className="product-overlay">
              <div className="product-overlay-inner">
                <div className="tag">Gaskets</div>
                <p>High-performance, heat-resistant gaskets precision-stamped to zero-leakage tolerances. Protect filter housings from polymer degradation and carbon buildup in extreme extrusion environments.</p>
              </div>
            </div>
            <div className="product-info">
              <div className="product-name">Industrial Sealing Gaskets</div>
              <div className="product-spec">Material: SS 304 / Copper / Aluminium &middot; High-Temp Rated &middot; Custom Dimensions</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
