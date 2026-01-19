const params = new URLSearchParams(window.location.search);

const data = {
  to: params.get("to") || "Someone Special",
  from: params.get("from") || "",
  msg: params.get("msg") || "This moment was created just for you.",
  theme: params.get("theme") || "soft"
};

document.getElementById("recipient-name").innerText = data.to;
document.getElementById("sender-name").innerText = data.from;

// message
const messageBox = document.getElementById("message");
data.msg.split("\n").forEach(line => {
  const p = document.createElement("p");
  p.innerText = line;
  messageBox.appendChild(p);
});

// theme
document.getElementById("theme-style")
  .setAttribute("href", `assets/css/theme-${data.theme}.css`);
