class ProjectBlock {
  private title: string;
  private technologies: string[];
  private desc: string;
  private image: string;
  private link: string | null;
  private repo: string | null;

  public constructor(
    title: string,
    technologies: string[],
    desc: string,
    image: string,
    link: string | null,
    repo: string | null,
  ) {
    this.title = title;
    this.technologies = technologies;
    this.desc = desc;
    this.image = image;
    this.link = link;
    this.repo = repo;
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

    var img: string;
    if (this.link === null) {
      img = `<img src="public/${this.image}" class="content-image"/>`;
    } else {
      img = `<a href="${this.link}" class="content-image"> <img src="public/${this.image}" /> </a>`;
    }

    var repo = "";
    if (this.repo !== null) {
      repo = `<a href="${this.repo}"> <img src="public/github.png" class="github-image"/> </a>`;
    }

    div.innerHTML =
      img +
      `
      <div class="content">
        <h3> ${this.title} </h3>
        <p><b>Desc:</b> ${this.desc} </p>
        <p><b>Tech:</b> ${this.render_technologies()}</p>
        ${repo}
      </div>
      `;

    return div;
  }
}

export { ProjectBlock };
