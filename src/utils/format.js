/**
 * Escape HTML to prevent accidental HTML injection
 * when rendering dynamic text.
 *
 * @param {string} value
 * @returns {string}
 */
export function escapeHtml(value) {
    if (value === null || value === undefined) {
        return "";
    }

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/**
 * Convert an array into HTML spans.
 *
 * Example:
 * ["Flutter", "Kotlin"]
 *
 * becomes:
 * <span>Flutter</span>
 * <span>Kotlin</span>
 *
 * @param {string[]} items
 * @param {string} className
 * @returns {string}
 */
export function renderTags(items = [], className = "tag") {
    return items
        .map(
            item =>
                `<span class="${className}">
                    ${escapeHtml(item)}
                </span>`
        )
        .join("");
}


/**
 * Convert an array into an HTML list.
 *
 * @param {string[]} items
 * @returns {string}
 */
export function renderList(items = []) {
    return items
        .map(
            item =>
                `<li>${escapeHtml(item)}</li>`
        )
        .join("");
}