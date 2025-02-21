import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["form", "input"]

  initialize() {
    this.submit = this.debounce(this.submit.bind(this), 300)
    this.handleEscape = this.handleEscape.bind(this)
  }

  connect() {
    document.addEventListener("keydown", this.handleEscape)
  }

  disconnect() {
    document.removeEventListener("keydown", this.handleEscape)
  }

  handleEscape(event) {
    if (event.key === "Escape") {
      this.inputTarget.value = ""
      this.submit()
    }
  }

  search(event) {
    this.submit()
  }

  submit() {
    this.formTarget.requestSubmit()
    this.inputTarget.focus()
  }

  debounce(func, wait) {
    let timeout
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }
}