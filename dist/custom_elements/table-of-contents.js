"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const table_of_contents_scss_inline_1 = __importDefault(require("./table-of-contents.scss?inline"));
class TableOfContents extends HTMLElement {
    match_headers;
    collapse_level;
    constructor() {
        super();
        this.match_headers = (this.getAttribute('headers')?.split(" ") ?? [1, 2, 3, 4, 5, 6]);
        this.collapse_level = parseInt(this.getAttribute('collapse-level') ?? "3");
        const content = document.createDocumentFragment();
        const style_element = document.createElement('style');
        style_element.append(table_of_contents_scss_inline_1.default);
        content.appendChild(style_element);
        const nav = content.appendChild(document.createElement('nav'));
        nav.append(this.get_title_element() ?? "");
        nav.append(this.get_headers_content());
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(content.cloneNode(true));
    }
    get_headers_content() {
        const parent = document.createElement('div');
        const nav = document.createElement('nav');
        parent.appendChild(nav);
        const headers = this.get_headers();
        for (let index = 0; index < headers.length; index++) {
            const nested_link = headers[index];
            nav.appendChild(this.get_link_from_nested(nested_link));
        }
        return parent;
    }
    get_title_element() {
        const title_header = document.getElementById('page-title');
        if (title_header == null) {
            return null;
        }
        return this.create_link_from_element(title_header);
    }
    get_link_from_nested(link, level = 0) {
        if (link.childrens.length != 0) {
            const details = document.createElement('details');
            const summary = document.createElement('summary');
            summary.appendChild(this.create_link_from_element(link.element));
            details.appendChild(summary);
            if (level <= this.collapse_level) {
                details.setAttribute('open', 'true');
            }
            const nav = document.createElement('nav');
            for (let index = 0; index < link.childrens.length; index++) {
                const child = link.childrens[index];
                nav.appendChild(this.get_link_from_nested(child, level + 1));
            }
            details.appendChild(nav);
            return details;
        }
        else {
            return this.create_link_from_element(link.element);
        }
    }
    get_headers() {
        const header_structure = new Array();
        const headers = document.querySelectorAll('main ' + this.match_headers.map((x) => 'h' + x).join(','));
        const nesting = new Array();
        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName[1]);
            if (header.id == '') {
                header.id = 'header-' + i;
            }
            while (nesting.length != 0 && level <= nesting[nesting.length - 1].level) {
                nesting.pop();
            }
            const obj = {
                element: header,
                childrens: [],
                is_collapsed: level == this.collapse_level ? true : false
            };
            if (nesting.length == 0) {
                header_structure.push(obj);
            }
            else {
                nesting[nesting.length - 1].object.childrens.push(obj);
            }
            nesting.push({ object: obj, level: level });
        }
        return header_structure;
    }
    create_link_from_element(element) {
        return this.create_link(element.id, element.textContent);
    }
    create_link(href, content) {
        const link = document.createElement('a');
        link.append(content);
        link.addEventListener('mousedown', (ev) => {
            link.classList.add('local-link');
        });
        link.href = '#' + href;
        return link;
    }
}
if (!customElements.get('table-of-contents')) {
    customElements.define('table-of-contents', TableOfContents);
}
