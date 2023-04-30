function parseURL(url) {
  const parser = new URL(url);
  const searchParams = new URLSearchParams(parser.search);
  return searchParams;
}

function setInputTextAndPressEnter(text) {
  setTimeout(() => {
    const inputField = document.querySelector("textarea");
    const button = document.querySelector("textarea+button");
    if (inputField && text) {
      inputField.value = text;
      inputField.dispatchEvent(
        new Event("input", { bubbles: true, cancelable: true })
      );
      button.click();
    }
  }, 1000);
}

window.addEventListener("load", () => {
  const searchParams = parseURL(window.location.href);
  if (searchParams.has("text")) {
    const text = searchParams.get("text");
    setInputTextAndPressEnter(text);
  }
});
