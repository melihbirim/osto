import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["search"]

  connect() {
    document.addEventListener("keydown", this.handleShortcut.bind(this))
  }

  disconnect() {
    document.removeEventListener("keydown", this.handleShortcut.bind(this))
  }

  handleShortcut(event) {
    // CMD+K handler
    if (event.metaKey && event.key === "k") {
      event.preventDefault()
      this.searchTarget.focus()
    }

    // Filter shortcuts (only when search is focused)
    if (document.activeElement === this.searchTarget) {
      switch (event.key.toLowerCase()) {
        case "f":
          event.preventDefault()
          this.searchTarget.value = ""
          break
        case "a":
          event.preventDefault()
          this.searchTarget.value = "all"
          break
        case "t":
          event.preventDefault()
          this.searchTarget.value = "todo"
          break
        case "i":
          event.preventDefault()
          this.searchTarget.value = "in progress"
          break
        case "d":
          event.preventDefault()
          this.searchTarget.value = "done"
          break
      }
      this.searchTarget.dispatchEvent(new Event("input"))
    }
  }
}