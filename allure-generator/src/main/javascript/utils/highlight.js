import asciidoc from "highlight.js/lib/languages/asciidoc";
import bash from "highlight.js/lib/languages/bash";
import diff from "highlight.js/lib/languages/diff";
import gherkin from "highlight.js/lib/languages/gherkin";
import groovy from "highlight.js/lib/languages/groovy";
import highlight from "highlight.js";
import http from "highlight.js/lib/languages/http";
import java from "highlight.js/lib/languages/java";
import javascript from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import md from "highlight.js/lib/languages/markdown";
import python from "highlight.js/lib/languages/python";
import scheme from "highlight.js/lib/languages/scheme";
import shell from "highlight.js/lib/languages/shell";
import sql from "highlight.js/lib/languages/sql";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";
import yaml from "highlight.js/lib/languages/yaml";

highlight.registerLanguage("xml", xml);
highlight.registerLanguage("bash", bash);
highlight.registerLanguage("markdown", md);
highlight.registerLanguage("diff", diff);
highlight.registerLanguage("json", json);
highlight.registerLanguage("javascript", javascript);
highlight.registerLanguage("typescript", typescript);
highlight.registerLanguage("asciidoc", asciidoc);
highlight.registerLanguage("gherkin", gherkin);
highlight.registerLanguage("python", python);
highlight.registerLanguage("scheme", scheme);
highlight.registerLanguage("sql", sql);
highlight.registerLanguage("yaml", yaml);
highlight.registerLanguage("shell", shell);
highlight.registerLanguage("groovy", groovy);
highlight.registerLanguage("java", java);
highlight.registerLanguage("http", http);

export default highlight;
