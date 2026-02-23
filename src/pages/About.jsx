import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h2>The Knight Philosophy</h2>
        <p>Beyond commerce. An experience in minimalism.</p>
      </section>

      <section className="about-content">
        <div className="about-grid">
          <div className="about-card">
            <h3>Our Identity</h3>
            <p>
              KNIGHT STORE was born from a desire to strip away the noise of modern 
              e-commerce. We believe in high-contrast design, stealth aesthetics, 
              and a curated selection of premium goods.
            </p>
          </div>
          <div className="about-card">
            <h3>Quality over Quantity</h3>
            <p>
              Every item in our shop is hand-picked to ensure it meets our strict 
              standards for durability, functionality, and timeless style. 
              If it isn't exceptional, it isn't here.
            </p>
          </div>
        </div>
        
        <div className="about-cta">
          <Link to="/shop">Explore the Collection</Link>
        </div>
      </section>
    </div>
  );
}