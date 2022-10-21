const body = document.querySelector("body"),
  navigasi = body.querySelector(".navigasi"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text"),
  darkTheme = localStorage.getItem("gelap");

if (darkTheme)
  body.classList.add("dark");

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Light Mode"
    localStorage.setItem("gelap", false);
  } else {
    modeText.innerText = "Dark Mode"
    localStorage.removeItem("gelap");
  }
});