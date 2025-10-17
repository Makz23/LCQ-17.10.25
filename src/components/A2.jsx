import React from 'react'
import { Link } from "react-router-dom";

function A2() {
  return ([
      <div class="container">
          <div class="content">
              <div class="section">
                  <h2>Wykształcenie</h2>
                  <div class="education-item">
                      <h3>Profil MAT/FIZ/INF</h3>
                      <div class="institution">LO 47 im. Stanislawa Wyspianskiego w WWie</div>
                      <div class="date">2022 - 2025</div>
                      <p>Z zaawansowanymi zajęciami informatyki oraz angielskiego. Specializacja w obijaniu się</p>
                  </div>
              </div>
          </div>
      </div>,
      <Link to="/a3" class="scroll-top">→</Link>
    ])
}

export default A2