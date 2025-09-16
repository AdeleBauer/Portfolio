class Card extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const imgUrl = this.getAttribute('img');
        const text = this.getAttribute('text');

        this.innerHTML = ''
    }
}