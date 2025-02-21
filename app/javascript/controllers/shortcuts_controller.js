import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.handleKeyPress = this.handleKeyPress.bind(this)
    document.addEventListener("keydown", this.handleKeyPress)
  }

  disconnect() {
    document.removeEventListener("keydown", this.handleKeyPress)
  }

  handleKeyPress(event) {
    // Ignore if user is typing in an input
    if (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA") {
      return
    }
  
    const key = event.key.toLowerCase()
  
    if (key === 's') {
      event.preventDefault()
      this.element.querySelector('.search-bar').focus()
      return
    }
  
    // Find element with matching shortcut
    const element = this.element.querySelector(`[data-shortcut="${key}"]`)
    if (element) {
      event.preventDefault()
      element.click()
    }
  }
}