// Netlify CMS exposes two React method "createClass" and "h"
import htm from 'https://unpkg.com/htm?module';
import markdownIt from "markdown-it";
import Prism from "prismjs";

const html = htm.bind(h);

// customize markdown-it
let options = {
  html: true,
  typographer: true,
  linkify: true,
  highlight: function (str, lang) {
    var languageString = "language-" + lang;
    if (Prism.languages[lang]) {
      return '<pre class="language-' + lang + '"><code class="language-' + lang + '">' + Prism.highlight(str, Prism.languages[lang], lang) + '</code></pre>';
    } else {
      return '<pre class="language-' + lang + '"><code class="language-' + lang + '">' + Prism.util.encode(str) + '</code></pre>';
    }
  }
};

var customMarkdownIt = new markdownIt(options);

/* Custom previewr for Blog */
var Post = createClass({
  render() {
    const entry = this.props.entry;
    const title = entry.getIn(["data", "title"], null);
    const body = entry.getIn(["data", "body"], null);
    const author = entry.getIn(["data", "author"], null)
    const bodyRendered = customMarkdownIt.render(body || '');

    return html`
      <article>
        <h1 class="post-title">${title}</h1>
        <div class="post-meta">
          <div class="byline">${author}</div>
        </div>
        <div dangerouslySetInnerHTML=${{__html: bodyRendered}}></div>
      </article>
    `;
  }
});

CMS.registerPreviewTemplate('blog', Post);

/* Custom previewr for Project */
var Project = createClass({
  render() {
    const entry = this.props.entry;
    const title = entry.getIn(["data", "title"], null);
    const body = entry.getIn(["data", "body"], null);
    const role = entry.getIn(["data", "role"], null);
    const client = entry.getIn(["data", "client"], null);
    const url = entry.getIn(["data", "url"], null);
    const bodyRendered = customMarkdownIt.render(body || '');

    return html`
      <article>
        <h1 class="project-title">${title}</h1>
        <div class="project-meta">
          <table>
            <tbody>
              <tr>
                <th>Role</th>
                <td>${role.join(", ")}</td>
              </tr>
              <tr>
                <th>Client</th>
                <td>${client}</td>
              </tr>
              <tr>
                <th>URL</th>
                <td>${url}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div dangerouslySetInnerHTML=${{__html: bodyRendered}}></div>
      </article>
    `;
  }
});

CMS.registerPreviewTemplate('project', Project);

