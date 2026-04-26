function convertMarkdown() {
    const input = document.getElementById("markdown-input").value;

    let html = input;

    html = html.replace(/^\s*###\s+(.*)$/gm, "<h3>$1</h3>");
    html = html.replace(/^\s*##\s+(.*)$/gm, "<h2>$1</h2>");
    html = html.replace(/^\s*#\s+(.*)$/gm, "<h1>$1</h1>");

    html = html.replace(/^\s*>\s+(.*)$/gm, "<blockquote>$1</blockquote>");

    html = html.replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">');

    html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

    html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    html = html.replace(/__(.*?)__/g, "<strong>$1</strong>");

    html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");
    html = html.replace(/_(.*?)_/g, "<em>$1</em>");

    html = html.replace(/\n/g, "");

    return html;
}

const inputEl = document.getElementById("markdown-input");
const outputEl = document.getElementById("html-output");
const previewEl = document.getElementById("preview");

inputEl.addEventListener("input", () => {
    const html = convertMarkdown();

    outputEl.textContent = html;

    previewEl.innerHTML = html;
});