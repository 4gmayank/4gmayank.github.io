const ICONS = {
    github: "fa-brands fa-github",
    linkedin: "fa-brands fa-linkedin-in",
    email: "fa-solid fa-envelope",

    arrowRight: "fa-solid fa-arrow-right",
    external: "fa-solid fa-arrow-up-right-from-square",
    mobile: "fa-solid fa-mobile-screen-button",
    architecture: "fa-solid fa-layer-group",
    ai: "fa-solid fa-robot",
    rocket: "fa-solid fa-rocket",
    database: "fa-solid fa-database",
    cloud: "fa-solid fa-cloud",
    security: "fa-solid fa-shield-halved",
    satellite: "fa-solid fa-satellite-dish",
    brain: "fa-solid fa-brain",
    globe: "fa-solid fa-globe"
};


/**
 * Get a Font Awesome icon class.
 *
 * @param {string} name
 * @returns {string}
 */
export function icon(name) {
    return ICONS[name] ?? "";
}


/**
 * Create an icon element.
 *
 * @param {string} name
 * @param {string} className
 * @returns {string}
 */
export function iconHtml(name, className = "") {
    const iconClass = icon(name);

    return `
        <i class="${iconClass} ${className}"></i>
    `;
}