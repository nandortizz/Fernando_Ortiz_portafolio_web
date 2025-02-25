document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("darkModeToggle")
  const body = document.body

  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode")
    updateDarkModeIcon()
  })

  function updateDarkModeIcon() {
    const icon = darkModeToggle.querySelector("i")
    if (body.classList.contains("dark-mode")) {
      icon.classList.remove("fa-moon")
      icon.classList.add("fa-sun")
    } else {
      icon.classList.remove("fa-sun")
      icon.classList.add("fa-moon")
    }
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      })
    })
  })

  // Form submission (you can add your own logic here)
  const contactForm = document.querySelector("#contact form")
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()
    alert("¡Gracias por tu mensaje! Te contactaré pronto.")
    contactForm.reset()
  })
})


