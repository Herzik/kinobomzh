import Popup from './Popup'

export default class PopupWithVideo extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._content = this._popup.querySelector('.popup__content')
  }

  open(id) {
    const video = `<div id="yohoho" data-kinopoisk="${id}"></div>`
    this._content.append(video)
  }
}
