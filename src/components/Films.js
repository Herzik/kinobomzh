export default class Films {
  constructor(
    {
      filmId,
      nameRu,
      year,
      filmLength,
      countries = [],
      genres = [],
      rating,
      posterUrl,
      posterUrlPreview,
      handlePlayClick,
    },
    cardSelector
  ) {
    this._filmId = filmId
    this._nameRu = nameRu
    this._year = year
    this._filmLength = filmLength
    this._countries = countries
    this._genres = genres
    this._rating = rating
    this._posterUrl = posterUrl
    this._posterUrlPreview = posterUrlPreview

    this._cardSelector = cardSelector

    this._handlePlayClick = handlePlayClick

    this._filmCard = this._getTemplate()
    this._filmContainer = this._filmCard.querySelector('.content__movies-item')
    this._filmPoster = this._filmCard.querySelector('.content__movies-image')
    this._filmRating = this._filmCard.querySelector('.content__movies-rating')
    this._filmInfoButton = this._filmCard.querySelector('.content__movies-info')
    this._playButton = this._filmCard.querySelector('.content__movies-play')
    this._filmTitle = this._filmCard.querySelector('.content__movies-title')
    this._filmGenre = this._filmCard.querySelector('.content__movies-genre')
  }

  _setEventListeners() {
    this._playButton.addEventListener('click', () => {
      this._handlePlayClick()
    })
  }

  _genresToString() {
    const genres = []

    this._genres.forEach(item => {
      const genre = Object.values(item).join()
      genres.push(genre)
    })

    return genres.join(', ')
  }

  _getTemplate() {
    const filmElement = document
      .querySelector(this._cardSelector)
      .content.firstElementChild.cloneNode(true)

    return filmElement
  }

  generateFilms() {
    this._setEventListeners()

    this._filmPoster.src = this._posterUrlPreview
    this._filmRating.textContent =
      this._rating == null ? 'No' : this._rating.includes('%') ? '%' : this._rating

    this._filmTitle.setAttribute('title', this._nameRu)
    this._filmTitle.textContent = this._nameRu
    this._filmGenre.textContent = this._genresToString()

    return this._filmCard
  }
}
