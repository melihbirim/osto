import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["form", "cancel"]

  connect() {
    this.handleKeyPress = this.handleKeyPress.bind(this)
    document.addEventListener("keydown", this.handleKeyPress)
  }

  disconnect() {
    document.removeEventListener("keydown", this.handleKeyPress)
  }

  handleKeyPress(event) {
    // Ignore shortcuts if user is typing in an input field or textarea
    if (event.target.matches('input, textarea')) return

    const key = event.key.toLowerCase()
    
    if (key === "s") {
      event.preventDefault()
      this.formTarget.requestSubmit()
    } else if (key === "c") {
      event.preventDefault()
      this.cancelTarget.click()
    }
  }
}