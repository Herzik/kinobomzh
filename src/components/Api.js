export default class Api {
  constructor(config) {
    this._url = config.baseUrl
    this._headers = config.headers
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    }
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject(`Ошибка ${res.status}`)
  }

  getFilmsTop(page = '1') {
    return fetch(`${this._url}films/top?type=TOP_100_POPULAR_FILMS&page=${page}`, {
      headers: this._headers,
    }).then(this._checkResponse)
  }
}
