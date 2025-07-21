class ProjectBlock {
  constructor(title, technologies) {
    this.title = title;
    this.technologies = technologies;
  }

  render_technologies() {
    let str = "";
    for (const [i, auth] of this.technologies.entries()) {
      str += auth;
      if (i != this.technologies.length - 1) {
        str += ",";
      }
      str += " ";
    }
    return str;
  }

  render() {
    let div = document.createElement("div");
    div.className = "content-block";
    div.innerHTML = `
      <img src="${this.title}.png" />
      <div class="content">
        <h3> ${this.title} </h3>
        <p><b>Desc:</b> </p>
        <p><b>Tech:</b> ${this.render_technologies()}</p>
      </div>
    `;
    return div;
  }
}

class PaperBlock {
  constructor(title, authors, desc) {
    this.title = title;
    this.authors = authors;
    this.desc = desc;
  }

  render_authors() {
    let str = "";
    for (const [i, auth] of this.authors.entries()) {
      str += auth;
      if (i != this.authors.length - 1) {
        str += ",";
      }
      str += " ";
    }
    return str;
  }

  render() {
    let div = document.createElement("div");
    div.className = "content-block";
    div.innerHTML = `
      <img src="${this.title}.png" />
      <div class="content">
        <h3> ${this.title} </h3>
        <p><b>Authors:</b> ${this.render_authors()} </p>
        <p><b>Desc:</b> ${this.desc} </p>
      </div>
    `;
    return div;
  }
}

const blocks = {
  projects: [
    new ProjectBlock("Fact Forecast", ["Python", "FastAPI", "Docker", "RTDB"]),
    new ProjectBlock("Frosty Engine", ["Rust", "WGSL"]),
    new ProjectBlock("SillyBus", ["Python", "DJango", "Google Cloud API"]),
    new ProjectBlock("William & Maps", ["Python", "Pygame"]),
  ],
  papers: [
    new PaperBlock(
      "Medication Diffusion",
      ["Barlow", "Dewey", "Mitchell"],
      "Bloopety Doopety",
    ),
    new PaperBlock(
      "AI Weatherman",
      ["Dewey", "Kollgaard", "Miller"],
      "Bloopety Doopety",
    ),
    new PaperBlock(
      "Trigger warning",
      ["Dewey", "Leong", "Nayak"],
      "Bloopety Doopety",
    ),
  ],
};

const projects = document.getElementById("projects");
const papers = document.getElementById("papers");

for (const proj of blocks.projects) {
  projects.appendChild(proj.render());
}

for (const paper of blocks.papers) {
  papers.appendChild(paper.render());
}
