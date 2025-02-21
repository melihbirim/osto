import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    document.addEventListener("turbo:request-start", this.show.bind(this))
    document.addEventListener("turbo:request-end", this.hide.bind(this))
  }

  disconnect() {
    document.removeEventListener("turbo:request-start", this.show)
    document.removeEventListener("turbo:request-end", this.hide)
  }

  show() {
    this.element.classList.add("active")
  }

  hide() {
    this.element.classList.remove("active")
  }
}