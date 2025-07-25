class ProjectBlock {
  private title: string;
  private technologies: string[];
  private desc: string;
  private image: string;
  private link: string | null;

  public constructor(
    title: string,
    technologies: string[],
    desc: string,
    image: string,
    link: string | null,
  ) {
    this.title = title;
    this.technologies = technologies;
    this.desc = desc;
    this.image = image;
    this.link = link;
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
    if (this.link === null) {
      div.innerHTML = `
      <img src="${this.image}" />
      <div class="content">
        <h3> ${this.title} </h3>
        <p><b>Desc:</b> ${this.desc} </p>
        <p><b>Tech:</b> ${this.render_technologies()}</p>
      </div>
      `;
    } else {
      div.innerHTML = `
      <a href="${this.link}"><img src="${this.image}" /></a>
      <div class="content">
        <h3> ${this.title} </h3>
        <p><b>Desc:</b> ${this.desc} </p>
        <p><b>Tech:</b> ${this.render_technologies()}</p>
      </div>
      `;
    }
    return div;
  }
}

export { ProjectBlock };
