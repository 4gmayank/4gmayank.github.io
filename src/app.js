import { loadData } from "./utils/data.js";
import { loadJson } from "./utils/dom.js";
import { Navbar } from "./components/navbar.js";
import { Hero } from "./components/hero.js";
import { About } from "./components/about.js";
import { Experience } from "./components/experience.js";
import { Projects } from "./components/projects.js";
import { Skills } from "./components/skills.js";
import { Contact } from "./components/contact.js";
import { Footer } from "./components/footer.js";


async function loadJson(path) {
    const response = await fetch(path);

    if (!response.ok) {
        throw new Error(`Failed to load: ${path}`);
    }

    return response.json();
}


async function startApp() {
 try {
    const data = await loadData();
    const profile = await loadJson("../../data/profile.json");

    const app = $("#app");

        if (!app) {
            throw new Error("App container not found");
        }

        
    console.log("Portfolio started");
    console.log(profile);
    const app = document.querySelector("#app");

    app.append(
        Navbar(),
        Hero(data.profile),
        About(data.profile),
        Experience(data.experience),
        Projects(data.projects),
        Skills(data.skills),
        Contact(data.profile),
        Footer()
    );

} catch (error) {
    console.error("Error loading data:", error);
  }
}


startApp();