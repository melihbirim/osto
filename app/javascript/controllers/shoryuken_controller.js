import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = {
    audioPath: String
  }

  connect() {
    this.element.addEventListener("click", this.playSound)
  }

  disconnect() {
    this.element.removeEventListener("click", this.playSound)
  }

  playSound = () => {
    const audio = new Audio(this.element.dataset.shoryukenAudioPath)
    audio.play()
    this.createText()
  }

  createText() {
    const text = document.createElement("div")
    text.textContent = "SHORYUKEN!"
    text.className = "shoryuken-text active"
    
    // Position relative to the clicked button
    const buttonRect = this.element.getBoundingClientRect()
    text.style.position = "fixed"
    text.style.left = `${buttonRect.left}px`
    text.style.top = `${buttonRect.top}px`
    
    document.body.appendChild(text)
    
    text.addEventListener("animationend", () => {
      text.remove()
    })
  }
}