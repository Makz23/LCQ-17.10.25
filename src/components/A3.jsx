import React from 'react'
import { Link } from "react-router-dom";

function A3() {
  return ([
      <div class="container">
          <div class="content">
              <div class="section">
                  <h2>Umiejętności techniczne</h2>
                  <div class="skills">
                      <div class="skill-category">
                          <h4>Narzędzia i technologie</h4>
                          <div class="skill-tags">
                              <span class="skill-tag">Git</span>
                              <span class="skill-tag">SQLite</span>
                              <span class="skill-tag">HTML5</span>
                              <span class="skill-tag">CSS3</span>
                              <span class="skill-tag">Word</span>
                              <span class="skill-tag">Excel</span>
                              <span class="skill-tag">Google presentations</span>
                              <span class="skill-tag">Google Sheets</span>
                              <span class="skill-tag">Davinci resolve</span>
                          </div>
                      </div>
                      
                      <div class="skill-category">
                          <h4>Frameworki i biblioteki</h4>
                          <div class="skill-tags">
                              <span class="skill-tag">React</span>
                              <span class="skill-tag">Node.js</span>
                              <span class="skill-tag">JSX</span>
                          </div>
                      </div>
                      
                      <div class="skill-category">
                          <h4>Języki programowania</h4>
                          <div class="skill-tags">
                              <span class="skill-tag">Python</span>
                              <span class="skill-tag">JavaScript</span>
                          </div>
                      </div>
                      <div class="skill-category">
                          <h4>Miękkie</h4>
                          <div class="skill-tags">
                              <span class="skill-tag">umiejętność pracy pod presją czasu i odporność na stres</span>
                              <span class="skill-tag">wypracowywanie kompromisów</span>
                              <span class="skill-tag">logiczne myślenie</span>
                              <span class="skill-tag">dobrze radzę sobie z “trudnymi” klientami</span>
                              <span class="skill-tag">szybko odnajduję się w nowym środowisku pracy.</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>,
      <Link to="/" class="scroll-top">→</Link>
  ])
}

export default A3