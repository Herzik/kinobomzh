import './sass/index.sass'
import Api from './components/Api'
import Section from './components/Section'
import Films from './components/Films'
import PopupWithVideo from './components/PopupWithVideo'
import { apikey } from '../API'

const apiConfig = {
  baseUrl: 'https://kinopoiskapiunofficial.tech/api/v2.2/',
  headers: {
    'X-API-KEY': apikey,
    'Content-Type': 'application/json',
  },
}

const api = new Api(apiConfig)

api.getFilmsTop().then(data => {
  // console.log(data)
  filmList.setRendererItems(data.films)
  filmList.renderItems()
})

const filmList = new Section(
  {
    items: null,
    renderer: item => {
      filmList.addItem(createFilm(item))
    },
  },
  '.content__movies'
)

const popupWithVideo = new PopupWithVideo('.popup__video')
popupWithVideo.setEventListeners()

const createFilm = ({
  filmId,
  nameRu,
  year,
  filmLength,
  countries = [],
  genres = [],
  rating,
  posterUrl,
  posterUrlPreview,
}) => {
  const films = new Films(
    {
      filmId,
      nameRu,
      year,
      filmLength,
      countries,
      genres,
      rating,
      posterUrl,
      posterUrlPreview,
      handlePlayClick: () => {
        popupWithVideo.open(filmId)
      },
    },
    '#movies'
  )

  return films.generateFilms()
}
