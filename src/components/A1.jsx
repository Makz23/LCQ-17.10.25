import React from 'react'
import { Link } from "react-router-dom";

function A1() {
  return ([    
  <div class="container">
        <div class="content">
            <div class="section">
                <h2>Doświadczenie zawodowe</h2>
                
                <div class="experience-item">
                    <h3>Obibokowanie się</h3>
                    <div class="company"> Min. Maxing </div>
                    <div class="date">2014 - obecnie</div>
                    <p>Wyciąganie maksymalnego wynagrodzenia z minimalnego wysiłku</p>
                </div>

                <div class="experience-item">
                    <h3>Programowanie</h3>
                    <div class="company">Projekty własne</div>
                    <div class="date">2022 - obecnie</div>
                    <p>Tworzenie projektów własnych (widocznych na githubie). M.in. gry w pythonie</p>
                </div>
            </div>
        </div>
    </div>,
    <Link to="/a2" class="scroll-top">→</Link>
  ])
}

export default A1