import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["title", "description"]

  connect() {
    this.validateForm = this.validateForm.bind(this)
    this.form = this.element.querySelector('form')
    this.form.addEventListener('submit', this.validateForm)
  }

  disconnect() {
    this.form.removeEventListener('submit', this.validateForm)
  }

  validateForm(event) {
    let isValid = true
    
    if (!this.titleTarget.value.trim()) {
      this.titleTarget.classList.add('error')
      isValid = false
    }
    
    if (!this.descriptionTarget.value.trim()) {
      this.descriptionTarget.classList.add('error')
      isValid = false
    }
    
    if (!isValid) {
      event.preventDefault()
    }
  }

  removeError({ target }) {
    target.classList.remove('error')
  }
}