const loadJSON = () => {
  const upload = document.createElement("input");
  upload.type = "file";
  upload.accept = ".json,application/json";
  upload.style.display = "none";
  document.body.appendChild(upload);

  upload.addEventListener("change", (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const jsonData = JSON.parse(e.target.result);
        console.log("JSON Data Loaded:", jsonData);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    };

    reader.readAsText(file);
  });

  upload.click();
}