chrome.runtime.onMessage.addListener((message) => {
    switch (message.type) {
        case "copy code":
            copyCode();
            break;
    }
});

function copyCode() {
    console.debug("Copying!")
}