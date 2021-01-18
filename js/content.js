chrome.runtime.onMessage.addListener((message) => {
    switch (message.type) {
        case "copy code":
            copyCode();
            break;
    }
});

function copyCode() {
    const newClip = Array.from(document.querySelectorAll(".blob-code.blob-code-inner.js-file-line"))
        .map(_ => _.textContent)
        .join("\n")
    navigator.clipboard.writeText(newClip)
}