class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupElement.querySelector(".popup__close");
    this._dateInput = this._popupElement.querySelector(
      ".popup__input_type_date"
    );
    this._handleEscapeClose = this._handleEscapeClose.bind(this);
  }

  _handleEscapeClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keyup", this._handleEscapeClose);
  }

  close() {
    this._popupElement.classList.remove("popup_visible");
    document.removeEventListener("keyup", this._handleEscapeClose);
  }

  setEventListeners() {
    this._popupElement.addEventListener("mousedown", (evt) => {
      if (
        evt.target.classList.contains("popup__close") ||
        evt.target.classList.contains("popup")
      ) {
        this.close();
      }
    });
    this._setDateInputListener();
  }

  _setDateInputListener() {
    if (this._dateInput) {
      this._dateInput.addEventListener("click", () => {
        this._dateInput.classList.add("popup__input_active");
      });

      this._dateInput.addEventListener("blur", () => {
        this._dateInput.classList.remove("popup__input_active");
      });
    }
  }
}
export default Popup;
