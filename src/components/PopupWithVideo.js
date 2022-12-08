import Popup from './Popup'

export default class PopupWithVideo extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._content = this._popup.querySelector('.popup__content')
  }

  open(filmId) {
    const video = `<div id="yohoho" data-kinopoisk="${filmId}"></div>`
    this._content.insertAdjacentHTML('beforeend', video)
    super.open()
  }

  close() {
    this._content.innerHTML = ''
    super.close()
  }
}
