class FooterContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <p tabindex="0" class="footer">Copyright ©2022 FOod Court by Muhammad Riyadhi Al Fikri</p>`;
  }
}

customElements.define('footer-content', FooterContent);
