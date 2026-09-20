const $=(s)=>document.querySelector(s), $$=(s)=>document.querySelectorAll(s);
$("#year").textContent=new Date().getFullYear();

$(".menu-toggle").addEventListener("click",()=>$(".nav nav").classList.toggle("open"));
$(".theme-toggle").addEventListener("click",()=>document.body.classList.toggle("light"));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
$$(".reveal").forEach(el=>observer.observe(el));

$$(".expand").forEach(btn=>btn.addEventListener("click",()=>{
  const target=$("#"+btn.dataset.target); target.classList.toggle("open");
  btn.textContent=target.classList.contains("open")?"Close case study −":"Read case study +";
}));

const diagrams={
 android:{caption:"A layered Android flow that keeps UI concerns separate from business rules and data access.",nodes:["Jetpack Compose UI","ViewModel + StateFlow","Use Cases / Domain","Repository abstraction","Room / Remote data source"]},
 jni:{caption:"A conceptual boundary between managed Android code and native C/C++ functionality.",nodes:["Compose / Android UI","Kotlin service or use case","JNI bridge","C / C++ native implementation","Native result → Kotlin model"]},
 ble:{caption:"A simplified BLE interaction flow with explicit connection and data states.",nodes:["UI: scan / connect / read","BLE coordinator","GATT connection","Services + characteristics","Parsed domain data / state"]},
 flutter:{caption:"A practical cross-platform separation between presentation, application logic and infrastructure.",nodes:["Flutter widgets","State management layer","Use cases / repositories","API + local storage","Platform channels when needed"]}
};
function renderDiagram(key){
  const d=diagrams[key];$("#diagram").innerHTML=d.nodes.map(n=>`<div class="node">${n}</div>`).join("");
  $("#diagram-caption").textContent=d.caption;
}
renderDiagram("android");
$$(".arch-tabs button").forEach(btn=>btn.addEventListener("click",()=>{
  $$(".arch-tabs button").forEach(b=>b.classList.remove("active"));btn.classList.add("active");renderDiagram(btn.dataset.arch);
}));





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
