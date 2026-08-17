import { createElement } from "../utils/dom.js";
import { iconHtml } from "../utils/icons.js";

export function Navbar(profile) {
    const navbar = createElement("header", "navbar");

    navbar.innerHTML = `
        <div class="container nav-container">

            <a href="#home" class="logo">
                <span class="logo-symbol">&lt;/&gt;</span>
                <span>${profile.name.split(" ")[0]}</span>
            </a>

            <nav class="nav-links" aria-label="Main navigation">

                <a href="#about">
                    About
                </a>

                <a href="#experience">
                    Experience
                </a>

                <a href="#projects">
                    Projects
                </a>

                <a href="#skills">
                    Skills
                </a>

                <a href="#contact">
                    Contact
                </a>

            </nav>

            <div class="nav-actions">

                <a
                    href="${profile.contact.github}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="nav-github"
                    aria-label="GitHub"
                >
                    ${iconHtml("github")}
                    <span>GitHub</span>
                </a>

                <button
                    class="mobile-menu-button"
                    type="button"
                    aria-label="Open navigation menu"
                    aria-expanded="false"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

            </div>

        </div>
    `;

    return navbar;
}