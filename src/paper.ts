class PaperBlock {
  private title: string;
  private authors: string[];
  private desc: string;
  private publication: string;
  private link: string;
  private image: string;

  constructor(
    title: string,
    authors: string[],
    desc: string,
    publication: string,
    link: string,
    image: string,
  ) {
    this.title = title;
    this.authors = authors;
    this.desc = desc;
    this.publication = publication;
    this.link = link;
    this.image = image;
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
      <a href="${this.link}" class="content-image"><img src="public/${this.image}"/></a>
      <div class="content">
        <h3> ${this.title} </h3>
        <p><b>Authors:</b> ${this.render_authors()} </p>
        <p><b>Publisher:</b> ${this.publication} </p>
        <p><b>Desc:</b> ${this.desc} </p>
      </div>
    `;
    return div;
  }
}

export { PaperBlock };
