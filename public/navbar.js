const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const darkMode = document.querySelector("#dark-mode")
const moon = document.querySelector("#moon")
const hLink = document.querySelectorAll("#hLink")

hLink.forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.toggle("hidden")
        hamburger.classList.toggle("bg-white")
    })
})

moon.addEventListener("click", () => {
    darkMode.classList.toggle("dark")
})

