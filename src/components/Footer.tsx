"use client";

import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-brand">
          <Logo />
          <p>
            Handcrafted custom furniture built to become part of your family
            story. Every joint, every grain, every detail — considered.
          </p>
        </div>

        <div className="footer-contact">
          <h3>Get in Touch</h3>
          <a href="tel:+15205550187">(520) 555-0187</a>
          <a href="mailto:hello@ironandoakfurniture.com">
            hello@ironandoakfurniture.com
          </a>
          <a
            href="https://maps.google.com/?q=Tucson+AZ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tucson, Arizona
          </a>
        </div>

        <div className="footer-hours">
          <h3>Workshop Hours</h3>
          <p>By appointment only</p>
          <p>We are happy to schedule a visit</p>
          <p>to our workshop at your convenience.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Iron &amp; Oak Furniture. All rights reserved.</p>
        <p className="handcrafted">Handcrafted in Tucson</p>
      </div>
    </footer>
  );
}
