import bash from 'highlight.js/lib/languages/bash';
import diff from 'highlight.js/lib/languages/diff';
import highlight from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import md from 'highlight.js/lib/languages/markdown';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';

highlight.registerLanguage('xml', xml);
highlight.registerLanguage('bash', bash);
highlight.registerLanguage('markdown', md);
highlight.registerLanguage('diff', diff);
highlight.registerLanguage('json', json);
highlight.registerLanguage('javascript', javascript);
highlight.registerLanguage('typescript', typescript);

export default highlight;
