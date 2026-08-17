/**
 * Load a JSON file.
 *
 * @param {string} path
 * @returns {Promise<Object|Array>}
 */
export async function loadJson(path) {
    const response = await fetch(path);

    if (!response.ok) {
        throw new Error(
            `Failed to load JSON: ${path} (${response.status})`
        );
    }

    return response.json();
}


/**
 * Create an HTML element.
 *
 * @param {string} tag
 * @param {string} className
 * @param {string} content
 * @returns {HTMLElement}
 */
export function createElement(
    tag,
    className = "",
    content = ""
) {
    const element = document.createElement(tag);

    if (className) {
        element.className = className;
    }

    if (content) {
        element.innerHTML = content;
    }

    return element;
}


/**
 * Find an element in the DOM.
 *
 * @param {string} selector
 * @returns {HTMLElement|null}
 */
export function $(selector) {
    return document.querySelector(selector);
}


/**
 * Find multiple elements in the DOM.
 *
 * @param {string} selector
 * @returns {NodeListOf<HTMLElement>}
 */
export function $$(selector) {
    return document.querySelectorAll(selector);
}