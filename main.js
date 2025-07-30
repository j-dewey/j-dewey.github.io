import { ProjectBlock } from "./src/project.ts";
import { PaperBlock } from "./src/paper.ts";

const blocks = {
  projects: [
    new ProjectBlock(
      "Fact Forecast",
      ["Python", "FastAPI", "Docker", "RTDB"],
      `An interactive map displaying fact checked and verified news articles
       from all over the world. I was responsible for developing and deploying
       the server backend
      `,
      "fact-forecast.png",
      "https://fact.lab.nova.org",
      null,
    ),
    new ProjectBlock(
      "Frosty Engine",
      ["Rust", "WGSL"],
      `A simple and modular game engine written in rust. Designed with simplicity
       and a "it just works" philosophy. I am the sole developer.
      `,
      "frosty-engine.png",
      "https://github.com/j-dewey/frosty_engine",
      "https://github.com/j-dewey/frosty_engine",
    ),
    new ProjectBlock(
      "SillyBus",
      ["Python", "DJango", "Google Cloud API", "Claude"],
      `A web app leveraging AI to parse syllabi for important events. Those events
       are then uploaded to a your selected Google Calendar. I developed the
       backend - using Google Auth and connecting all our tech stack.
      `,
      "sillybus.png",
      null,
      "https://github.com/j-dewey/SillyBus",
    ),
    new ProjectBlock(
      "William & Maps",
      ["Python", "Pygame"],
      `An interactive map of William & Mary that can find the quickest path
       between any two buildings. Winner of the "Best Map & Data Hack" for
       TribeHacks 2024. I designed the front end and developer tooling.
      `,
      "wm-maps.jpg",
      null,
      "https://github.com/j-dewey/TribeHacks2024",
    ),
  ],
  papers: [
    new PaperBlock(
      "A Simulation of Medication Suppression Acrosss Multiple Treatment Types",
      ["Barlow", "Dewey", "Mitchell"],
      `A simulation of medication spreading around various types of tissue.
       Explored different injection techniques across several medication types
       and assesed their efficiency. I was responsible for the creation of the
       simulation and graphs.
      `,
      "n/a",
      "med_diffusion.pdf",
      "med_diffusion.png",
    ),
    new PaperBlock(
      "AI Weatherman",
      ["Dewey", "Kollgaard", "Miller"],
      `A regression model capable of determining a day's temperature based
       on weather heuristics of the preceeding few days. Winner of the
        first "Nazareth Area Science Project" science fair grades 9-12
        division. I was responsible for the collection and cleaning of data
        as well as creating different data sets.
      `,
      "n/a",
      "weatherman.pdf",
      "weatherman.png",
    ),
    new PaperBlock(
      "Accusations of Corruption, Calls for Justice for Women in Kolkata",
      ["Nayak", "Leong", "Dewey", "Wozniak", "Callabresi"],
      `An analysis of the public's response to horrific events on social media.
       Two events in particular were studied to see how reactions corresponded
       to policy changes over time. I assisted in the creaton of data collection
       sorting, and presentation of data.
      `,
      "Diplomatic Courier",
      "https://www.diplomaticourier.com/posts/accusations-of-corruption-calls-for-justice-for-women-in-kolkata",
      "kolkata.jpg",
    ),
  ],
};

const bioBlurbs = {
  Reader: `
  I am a reader!
  `,
  Writer: `
  I enjoy writing in my free time. So far I haven't written anything large
  and cohesive enough to be published, but I hope to one day have multiple
  books published.
  `,
  Runner: ``,
  Programmer: ``,
};

export function setBioBlurb(version) {
  blurbSection.innerHTML = bioBlurbs[version];
}

const projects = document.getElementById("projects");
const papers = document.getElementById("papers");
const blurbSection = document.getElementById("interactive-bio-text");

for (const proj of blocks.projects) {
  projects.appendChild(proj.render());
}

for (const paper of blocks.papers) {
  papers.appendChild(paper.render());
}

setBioBlurb("Reader");
document.querySelectorAll("#interactive-bio-nav button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.innerHTML;
    console.log(value);
    setBioBlurb(value);
  });
});
