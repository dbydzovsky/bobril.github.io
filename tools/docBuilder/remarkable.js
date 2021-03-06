const Remarkable = require('remarkable');
const hljs = require('highlight.js'); // https://highlightjs.org/
const toc = require('markdown-toc');
// https://jonschlinkert.github.io/remarkable/demo/
const md = new Remarkable('full', {
    html: true,
    xhtmlOut: false,
    breaks: true,
    langPrefix: 'language-',
    linkify: true,
    linkTarget: '',
    typographer: false,
    quotes: '“”‘’',

    highlight: (str, lang) => {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(lang, str).value;
            } catch (__) {
            }
        }

        try {
            return hljs.highlightAuto(str).value;
        } catch (__) {
        }

        return '';
    }
}).use((remarkable) => {
    remarkable.renderer.rules.heading_open = (tokens, idx) => {
        return '<h' + tokens[idx].hLevel + ' id=' + toc.slugify(tokens[idx + 1].content) + '>';
    };
});

module.exports.md = md;