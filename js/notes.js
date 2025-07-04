<!-- shah-family-website/js/notes.js -->
const form = document.getElementById("noteForm");
const input = document.getElementById("noteInput");
const list = document.getElementById("notesList");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const note = input.value.trim();
  if (note !== "") {
    const li = document.createElement("li");
    li.textContent = note;
    list.appendChild(li);
    input.value = "";
  }
});
