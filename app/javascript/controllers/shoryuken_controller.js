import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.element.addEventListener("click", this.showShoryuken.bind(this))
    this.audio = new Audio("/assets/audio/shoryuken.mp3")
  }

  showShoryuken(event) {
    // Play sound
    this.audio.currentTime = 0
    this.audio.play().catch(error => console.error("Error playing sound:", error))

    const text = document.createElement("div")
    text.className = "shoryuken-text"
    text.textContent = "SHORYUKEN!"
    text.style.left = `${event.clientX - 50}px`
    text.style.top = `${event.clientY - 20}px`
    document.body.appendChild(text)

    requestAnimationFrame(() => {
      text.classList.add("active")
      setTimeout(() => {
        text.remove()
      }, 1500) // Increased timeout to match the CSS transition duration
    })
  }
}