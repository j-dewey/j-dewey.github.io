(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}})();class a{constructor(e,o,n,t,i,r){this.title=e,this.technologies=o,this.desc=n,this.image=t,this.link=i,this.repo=r}render_technologies(){let e="";for(const[o,n]of this.technologies.entries())e+=n,o!=this.technologies.length-1&&(e+=","),e+=" ";return e}render(){let e=document.createElement("div");e.className="content-block";var o;this.link===null?o=`<img src="public/${this.image}" class="content-image"/>`:o=`<a href="${this.link}" class="content-image"> <img src="public/${this.image}" /> </a>`;var n="";return this.repo!==null&&(n=`<a href="${this.repo}"> <img src="public/github.png" class="github-image"/> </a>`),e.innerHTML=o+`
      <div class="content">
        <h3> ${this.title} </h3>
        <p><b>Desc:</b> ${this.desc} </p>
        <p><b>Tech:</b> ${this.render_technologies()}</p>
        ${n}
      </div>
      `,e}}class l{constructor(e,o,n,t,i,r){this.title=e,this.authors=o,this.desc=n,this.publication=t,this.link=i,this.image=r}render_authors(){let e="";for(const[o,n]of this.authors.entries())e+=n,o!=this.authors.length-1&&(e+=","),e+=" ";return e}render(){let e=document.createElement("div");return e.className="content-block",e.innerHTML=`
      <a href="${this.link}" class="content-image"><img src="public/${this.image}"/></a>
      <div class="content">
        <h3> ${this.title} </h3>
        <p><b>Authors:</b> ${this.render_authors()} </p>
        <p><b>Publisher:</b> ${this.publication} </p>
        <p><b>Desc:</b> ${this.desc} </p>
      </div>
    `,e}}const c={projects:[new a("Fact Forecast",["Python","FastAPI","Docker","RTDB"],`An interactive map displaying fact checked and verified news articles
       from all over the world. I was responsible for developing and deploying
       the server backend
      `,"fact-forecast.png","https://fact.lab.nova.org",null),new a("Frosty Engine",["Rust","WGSL"],`A simple and modular game engine written in rust. Designed with simplicity
       and a "it just works" philosophy. I am the sole developer.
      `,"frosty-engine.png","https://github.com/j-dewey/frosty_engine","https://github.com/j-dewey/frosty_engine"),new a("SillyBus",["Python","DJango","Google Cloud API","Claude"],`A web app leveraging AI to parse syllabi for important events. Those events
       are then uploaded to a your selected Google Calendar. I developed the
       backend - using Google Auth and connecting all our tech stack.
      `,"sillybus.png",null,"https://github.com/j-dewey/SillyBus"),new a("William & Maps",["Python","Pygame"],`An interactive map of William & Mary that can find the quickest path
       between any two buildings. Winner of the "Best Map & Data Hack" for
       TribeHacks 2024. I designed the front end and developer tooling.
      `,"wm-maps.jpg",null,"https://github.com/j-dewey/TribeHacks2024")],papers:[new l("A Simulation of Medication Suppression Acrosss Multiple Treatment Types",["Barlow","Dewey","Mitchell"],`A simulation of medication spreading around various types of tissue.
       Explored different injection techniques across several medication types
       and assesed their efficiency. I was responsible for the creation of the
       simulation and graphs.
      `,"n/a","med_diffusion.pdf","med_diffusion.png"),new l("AI Weatherman",["Dewey","Kollgaard","Miller"],`A regression model capable of determining a day's temperature based
       on weather heuristics of the preceeding few days. Winner of the
        first "Nazareth Area Science Project" science fair grades 9-12
        division. I was responsible for the collection and cleaning of data
        as well as creating different data sets.
      `,"n/a","weatherman.pdf","weatherman.png"),new l("Accusations of Corruption, Calls for Justice for Women in Kolkata",["Nayak","Leong","Dewey","Wozniak","Callabresi"],`An analysis of the public's response to horrific events on social media.
       Two events in particular were studied to see how reactions corresponded
       to policy changes over time. I assisted in the creaton of data collection
       sorting, and presentation of data.
      `,"Diplomatic Courier","https://www.diplomaticourier.com/posts/accusations-of-corruption-calls-for-justice-for-women-in-kolkata","kolkata.jpg")]},h={Reader:`
  I've loved reading ever since I was little. In that time, I've grown from
  Goosebumps and Junie B. Jones to Stephen King and Brandon Sanderson. Some of my
  top picks are "Mistborn," "The Name of the Wind," "The Count of Monte Cristo," and "Something Wicked This Way Comes."
  `,Writer:`
  I enjoy writing in my free time. So far I haven't written anything large
  and cohesive enough to be published, but I hope to one day! Currently I'm working
  on a story called "Watermelon Wine." I won't spoil it though, you'll just have to wait for it to be finished!
  `,Runner:`
  Running has been a near-daily part of my life for the past 7 years. Here's some PRs:
  <ul>
  <li>800m: 2:23 </li>
  <li>1600m: 5:03 </li>
  <li>5k: 19:30 </li>
  <li>8k: 30:something </li>
  </ul>
  `,Programmer:""};function d(s){f.innerHTML=h[s]}const p=document.getElementById("projects"),u=document.getElementById("papers"),f=document.getElementById("interactive-bio-text");for(const s of c.projects)p.appendChild(s.render());for(const s of c.papers)u.appendChild(s.render());d("Reader");document.querySelectorAll("#interactive-bio-nav button").forEach(s=>{s.addEventListener("click",()=>{const e=s.innerHTML;console.log(e),d(e)})});
//# sourceMappingURL=index-ComaLfi5.js.map
