export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items
    this._renderer = renderer

    this._container = document.querySelector(containerSelector)
  }

  // устанавливаем массив объектов в готовый экземпляр класса
  setRendererItems(items) {
    this._renderedItems = items
  }
  // Добавляет отрендеренные модели в указанный контейнер
  addItem(element) {
    // this._container.insertAdjacentHTML('beforeend', element)
    this._container.append(element)
  }
  // Рендерит элементы из массива объектов
  renderItems() {
    this._renderedItems.forEach(item => {
      this._renderer(item)
    })
  }
}
