import { insertAtCursor } from "./codearea.js";
import { element } from "./element.js";
import { settings } from "./settings.js";
const sidebar  = document.getElementById("sidebar");
const codeArea = document.getElementById("codeArea");
/*
const file = element.new(sidebar, {x:10, y:10}, {width:40,height:40}, "button");
element.buttonify(file, () => {
  const newFile = element.new(file, {x:10,y:60}, {width:40,height:40}, "button");
  element.buttonify(newFile, "New", () => {
    file.new();
  });
  const openFile = element.new(file, {x:10,y:110}, {width:40,height:40}, "button");
  element.buttonify(openFile, "Open", () => {
    file.open();
  });
  const saveFile = element.new(file, {x:10,y:160}, {width:40,height:40}, "button");
  element.buttonify(saveFile, "Save", () => {
    file.save();
  });
});

file.new = function() {
  codeArea.textContent = "";
};
file.save = function() {
  const save = document.createElement("a");
  const blob = new Blob([codeArea.textContent], {type: "text/plain"});
  save.href = URL.createObjectURL(blob);
  save.download = "code.txt";
  document.body.appendChild(save);
  save.click();
  document.body.removeChild(save);
};
file.open = function() {
  const upload = document.createElement("input");
  upload.type = "file";
  upload.accept = ".txt,.json,.js,.html,.css,text/plain";
  upload.style.display = "none";
  document.body.appendChild(upload);
  upload.addEventListener("change", (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      codeArea.textContent = e.target.result;
    };
    reader.readAsText(file);
  });
  upload.click();
};
*/

codeArea.style.fontFamily = "monospace";
codeArea.style.fontSize   = "16px";
codeArea.style.padding    = "10px";
codeArea.style.backgroundColor = "#eee";
codeArea.style.color           = "#111";
codeArea.style.border          = "1px solid #333";
codeArea.style.borderRadius    = "8px";
codeArea.style.outline         = "none";
codeArea.style.resize          = "none";
codeArea.style.width           = "100%";
codeArea.style.height          = "100%";
codeArea.style.boxSizing       = "border-box";
codeArea.style.height          = window.innerHeight - sidebar.offsetHeight - 40 + "px";

codeArea.setAttribute("spellcheck", "false");
codeArea.setAttribute("autocomplete", "off");
codeArea.setAttribute("autocorrect", "off");
codeArea.setAttribute("autocapitalize", "off");

codeArea.addEventListener("keydown", (e) => {
    if (e.key === "Tab" || e.key === "tab") {
        e.preventDefault();
        insertAtCursor(codeArea, " ".repeat(settings.tabSize));
    }
});