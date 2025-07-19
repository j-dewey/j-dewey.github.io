class ProjectBlock {
  constructor(title) {
    this.title = title;
  }

  render() {
    let div = document.createElement("div");
    div.className = "content-block";
    div.innerHTML = `
      <img src="${this.title}.png" />
      <div class="content">
        <h3> ${this.title} </h3>
        <p><b>Desc:</b> </p>
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
    new ProjectBlock("Fact Forecast"),
    new ProjectBlock("Frosty Engine"),
    new ProjectBlock("SillyBus"),
    new ProjectBlock("William & Maps"),
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
