import React from 'react'
import { Link } from "react-router-dom";

function Main() {
    return ([
    <div class="container">
        <div class="content">
            <div class="section about">
                <h2>O mnie</h2>
                <p>Cześć, jestem Maks. Kocham rywalizacje oraz samokształcenie m.in. w grach komputerowych. Nic nie zatrzyma mnie, jeśli dotyczy to czegoś co mnie obchodzi.
                    Moje zainteresowania to m.in. programowanie, komputery, gry komputerowe, esport, siłownia, filozofia, gotowanie oraz oglądanie i zgłebianie medii jak filmy/seriale/anime.
                    **DODATKOWY MEM**
                    Sprawdzanie projektów be like:
                    <div class="video-container">
                        <iframe
                            src="https://www.youtube.com/embed/cISYzA36-ZY?start=84"
                            title="American Psycho - Business Card Scene"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        ></iframe>
                    </div>
                </p>
            </div>
        </div>
    </div>,
    <Link to="/a1" class="scroll-top">→</Link>
  ])
}
export default Main