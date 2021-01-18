chrome.runtime.onMessageExternal.addListener((request, _, response) => {
    if (request.type === "action spec") {
      response({
        name: actionSpec.name,
        actions: Object.entries(actionSpec.actions).map(
          ([name, { displayName }]) => {
            return { name, displayName };
          }
        )
      });
    } else if (request.type === "execute action") {
      const action = actionSpec.actions[request.action.name];
      if (action !== undefined) action.f();
    }
  });
  
  const actionSpec = {
    name: "github-ext",
    actions: {
      "copy code": {
        displayName: "Github: Copy Code",
        f: requestCopyClip
      }
    }
  };

  function requestCopyClip() {
    sendMessageToActiveTab({ type: "copy code"});
  }
  