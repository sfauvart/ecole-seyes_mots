let config = {
  "margin-activation": false,
  "margin-thickness": 1,
  "margin-color": "#ff5555",
  "margin-gap": 15,
  "gap-vertical": 3,
  "interline-main-color": "#5fbcff",
  "interline-second-color": "#c9c9c9",
  "interline-height": 0.5,
  "font-size": 10,
  "repeat-row": 3,
  "repeat-gap": 50,
  "page-height": 280,
  "page-width": 200,
  "font-family": "Cursive Dumont maternelle",
};

let varCss = {
  "margin-thickness": "1mm",
  "margin-color": "#ff5555",
  "margin-gap": "15mm",
  "content-gap": "calc(var(--seyes-margin-gap) + 2mm)",
  "gap-vertical": "3mm",
  "interline-main-color": "#5fbcff",
  "interline-second-color": "#c9c9c9",
  "interline-gap-horizontal": "calc(var(--seyes-gap-vertical) *4)",
  "interline-height": "0.5mm",
  "font-size": "12mm",
  "font-family": '"Cursive Dumont maternelle"',
};

document.querySelector("#liste_mots").addEventListener("input", (evt) => {
  updateDOM();
});

function updateDOM() {
  const data = document.querySelector("#liste_mots").value.split("\n");

  const lines = document.querySelector("#lines");
  lines.innerHTML = "";
  const template = document.querySelector("#line-template");

  data.forEach((text) => {
    const clone = template.content.cloneNode(true);
    let span = clone.querySelector("span");
    span.textContent = text.trim();

    for (let i = 0; i < config["repeat-row"]; i++) {
      let content = clone.querySelector("#content").cloneNode(true);
      content.style = `left: calc(var(--seyes-margin-gap) + ${
        (i + 1) * config["repeat-gap"]
      }mm)`;
      clone.querySelector(".line").appendChild(content);
    }

    lines.appendChild(clone);
  });
}

function updateConfig() {
  var r = document.querySelector(":root");

  if (config["margin-activation"]) {
    varCss["margin-gap"] = config["margin-gap"] + "mm";
    varCss["margin-thickness"] = config["margin-thickness"] + "mm";
  } else {
    varCss["margin-gap"] = "0mm";
    varCss["margin-thickness"] = "0mm";
  }
  varCss["gap-vertical"] = `${config["gap-vertical"]}mm`;
  varCss["margin-color"] = config["margin-color"];
  varCss["interline-main-color"] = config["interline-main-color"];
  varCss["interline-second-color"] = config["interline-second-color"];
  varCss["interline-height"] = `${config["interline-height"]}mm`;
  varCss["font-size"] = `${config["font-size"]}mm`;
  varCss["page-height"] = `${config["page-height"]}mm`;
  varCss["page-width"] = `${config["page-width"]}mm`;
  varCss["font-family"] = `\"${config["font-family"]}\"`;

  for (const item in varCss) {
    r.style.setProperty(`--seyes-${item}`, varCss[item]);
  }
  updateDOM();
}

document.querySelector("#margin-activation").onclick = (evt) => {
  config["margin-activation"] = evt.target.checked;
  updateConfig();
};

[
  "margin-color",
  "margin-gap",
  "gap-vertical",
  "interline-main-color",
  "interline-second-color",
  "interline-height",
  "font-size",
  "repeat-row",
  "repeat-gap",
  "page-height",
  "page-width",
  "font-family",
].forEach((key) => {
  document.querySelector(`#${key}`).onchange = (evt) => {
    config[key] = evt.target.value;
    updateConfig();
  };
});

document.querySelector("#page-switch").onclick = (evt) => {
  evt.preventDefault();

  const height = document.querySelector("#page-height").value;
  const width = document.querySelector("#page-width").value;

  document.querySelector("#page-width").value = height;
  document.querySelector("#page-height").value = width;

  config["page-width"] = height;
  config["page-height"] = width;
  updateConfig();
};

updateConfig();
