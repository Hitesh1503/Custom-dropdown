const items = [
  "First Item",
  "Second Item",
  "Third Item",
  "Fourth Item",
  "Fifth Item",
];

const dropdown = document.getElementById("dropdown");
const selected = document.getElementById("selected");
const selectedText = document.getElementById("selected-text");
const arrow = document.getElementById("arrow");
const optionsContainer = document.getElementById("options");

optionsContainer.innerHTML = items
  .map((item) => `<div class="option">${item}</div>`)
  .join("");

dropdown.addEventListener("click", (e) => {
  const isOption = e.target.classList.contains("option");

  if (isOption) {
    selectedText.textContent = e.target.textContent;
    document
      .querySelectorAll(".option")
      .forEach((opt) => opt.classList.remove("selected"));
    e.target.classList.add("selected");
    dropdown.classList.remove("open");
    arrow.textContent = "▼";
  } else {
    dropdown.classList.toggle("open");
    arrow.textContent = dropdown.classList.contains("open") ? "▲" : "▼";
  }
});

// Closing the dropdown when we click on outside
document.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove("open");
    arrow.textContent = "▼";
  }
});
