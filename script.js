// Dark/Light Theme Toggle
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});
if (localStorage.getItem("theme") === "dark") document.body.classList.add("dark");

// Load projects from JSON
async function loadProjects() {
  const res = await fetch("data/projects.json");
  const projects = await res.json();
  const list = document.getElementById("projectList");
  const searchBox = document.getElementById("searchBox");

  function render(filter = "") {
    list.innerHTML = "";
    projects
      .filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
      .forEach(p => {
        const div = document.createElement("div");
        div.className = "project";
        div.innerHTML = `
          <h3>${p.name}</h3>
          <p>${p.description}</p>
          <a href="${p.link}" target="_blank">View</a>
        `;
        list.appendChild(div);
      });
  }

  render();
  searchBox.addEventListener("input", e => render(e.target.value));
}
loadProjects();




// git init
// git remote add origin https://github.com/4gmayank/4gmayank.github.io.git
// git remote set-url origin https://github.com/4gmayank/4gmayank.github.io.git
// git add .
// git commit -m "🚀 
// git branch -M main
// git push --set-upstream origin main