import { styles } from "./style.js"

export const element = {

    /**
     * 
     * @param {*} div The node which element will been appended to.
     * @param {object} pos X and Y position.
     * @param {object} size Width and height in pixels.
     * @param {string} type Type of element.
     * @returns {object} e The created element.
     */
    new(div, pos, size, type) {
        const el = document.createElement(type)
        this.style(el)
        el.style.left   = `${pos.x}px`;
        el.style.top    = `${pos.y}px`;
        el.style.width  = `${size.width}px`;
        el.style.height = `${size.height}px`;
        div.appendChild(el);

        return el;
    },

    /**
     * 
     * @param {object} el Element to style.
     */
    style(el) {
        el.style.borderWidth  = styles.borderWidth;
        el.style.borderRadius = styles.borderRadius;
        el.style.fontFamily   = styles.fontFamily;
        el.style.fontSize     = styles.fontSize;
        el.style.padding      = styles.padding;
    
        el.style.backgroundColor = styles.backgroundColor;
        el.style.color           = styles.color;
        el.style.border          = styles.border;
        el.style.zIndex          = 1000;
    },

    /**
     * 
     * @param {*} el Element to turn into button.
     * @param {*} label Button text.
     * @param {*} action Action when button is clicked.
     */
    buttonify(el, label, action) {
        if (typeof action !== "function") {
            throw new Error("Action must be a function");
        }
        el.textContent = label;
        el.addEventListener("click", (e) => {action(e)})
    }
}