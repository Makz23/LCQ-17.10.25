import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
        <div class="header">
      <nav className="header__nav">
        <ul>
          <li><Link to="/">Ogólnie</Link></li>
          <li><Link to="/a2">Wykształcenie</Link></li>
          <li><Link to="/a3">Umiejętności</Link></li>
          <li><Link to="/a1">Doświadczenie</Link></li>
        </ul>
      </nav>

            <h1>Maksymilian Oryga</h1>
            <p>Programista</p>
            <div class="contact-info">
                <span>palarcz007@gmail.com</span>
                <span>+48 420 696 969</span>
            </div>
            <div class="social-links">
                <a href="https://github.com/Makz23" target="_blank" class="social-link github">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.83-.26.83-.58 0-.28 0-1.03-.02-2.03-3.33.72-4.03-1.6-4.03-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.08-.74.08-.72.08-.72 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.8 1.3 3.5 1 .1-.8.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.3.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23.96-.26 1.98-.4 3-.4 1.02 0 2.04.14 3 .4 2.28-1.55 3.3-1.23 3.3-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.9 1.23 3.22 0 4.6-2.8 5.63-5.48 5.92.42.35.8 1.1.8 2.2v3.3c0 .3.2.67.8.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/maksymilian-oryga-73b83838a/" target="_blank" class="social-link linkedin">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                </a>
                <a href="https://www.youtube.com/@MakzFPS" target="_blank" class="social-link linkedin">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                        <path d="M23.498 6.186a2.974 2.974 0 0 0-2.09-2.106C19.207 3.5 12 3.5 12 3.5s-7.207 0-9.408.58a2.974 2.974 0 0 0-2.09 2.106A31.02 31.02 0 0 0 .5 12a31.02 31.02 0 0 0 .002 5.814 2.974 2.974 0 0 0 2.09 2.106C4.793 20.5 12 20.5 12 20.5s7.207 0 9.408-.58a2.974 2.974 0 0 0 2.09-2.106A31.02 31.02 0 0 0 23.5 12a31.02 31.02 0 0 0-.002-5.814zM9.75 15.02V8.98l6.25 3.02-6.25 3.02z"/>
                    </svg>
                    Youtube
                </a>
            </div>
        </div>
  );
}

export default Header;
