import { createElement } from "../utils/dom.js";
import { iconHtml } from "../utils/icons.js";

export function Hero(profile) {
    const hero = createElement("section", "hero");

    hero.id = "home";

    hero.innerHTML = `
        <div class="hero-grid"></div>

        <div class="container hero-container">

            <div class="hero-content">

                <p class="eyebrow">
                    SENIOR MOBILE & SOFTWARE ENGINEER
                </p>

                <h1>
                    Building
                    <span class="gradient-text">
                        scalable mobile
                    </span>
                    experiences.
                </h1>

                <p class="hero-description">
                    ${profile.summary}
                </p>

                <p class="hero-description secondary">
                    I work across Flutter, native Android, Kotlin,
                    software architecture and AI-assisted engineering
                    to turn complex product requirements into
                    reliable production software.
                </p>

                <div class="hero-actions">

                    <a
                        href="#projects"
                        class="btn btn-primary"
                    >
                        View my work
                        ${iconHtml("arrowRight")}
                    </a>

                    <a
                        href="#contact"
                        class="btn btn-secondary"
                    >
                        Let's connect
                    </a>

                </div>

                <div class="hero-socials">

                    <a
                        href="${profile.contact.github}"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        ${iconHtml("github")}
                    </a>

                    <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        ${iconHtml("linkedin")}
                    </a>

                    <a
                        href="mailto:${profile.contact.email}"
                        aria-label="Email"
                    >
                        ${iconHtml("email")}
                    </a>

                </div>

            </div>


            <div class="hero-card">

                <div class="code-window">

                    <div class="window-header">

                        <div class="window-dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <span class="window-title">
                            engineer.js
                        </span>

                    </div>


                    <div class="code-content">

<pre><span class="code-keyword">const</span> engineer = {

  name: <span class="code-string">"${profile.name}"</span>,

  experience: <span class="code-number">${profile.experience.years}</span>,

  focus: [
    <span class="code-string">"Flutter"</span>,
    <span class="code-string">"Android"</span>,
    <span class="code-string">"Kotlin"</span>,
    <span class="code-string">"Architecture"</span>,
    <span class="code-string">"AI"</span>
  ],

  mindset: <span class="code-string">"Build → Learn → Improve"</span>

};</pre>

                    </div>

                </div>

            </div>

        </div>


        <div class="container hero-stats">

            <div class="stat">

                <strong>
                    ${profile.experience.years}
                </strong>

                <span>
                    Years Experience
                </span>

            </div>


            <div class="stat">

                <strong>
                    ${profile.experience.applications}
                </strong>

                <span>
                    Production Applications
                </span>

            </div>


            <div class="stat">

                <strong>
                    Flutter
                </strong>

                <span>
                    Android & iOS
                </span>

            </div>


            <div class="stat">

                <strong>
                    AI
                </strong>

                <span>
                    Assisted Engineering
                </span>

            </div>

        </div>
    `;

    return hero;
}