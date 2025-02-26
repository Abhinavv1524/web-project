// Script.js
const htmlCode = document.getElementById("htmlCode");
const cssCode = document.getElementById("cssCode");
const jsCode = document.getElementById("jsCode");
const output = document.getElementById("output");
const previewFrame = document.getElementById("preview");
const runButton = document.getElementById("runButton");
const clearButton = document.getElementById("clearButton");
const downloadButton = document.getElementById("downloadButton");

const updatePreview = () => {
  // Get DOM elements
  const htmlCode = document.getElementById("htmlCode");
  const cssCode = document.getElementById("cssCode");
  const jsCode = document.getElementById("jsCode");
  const output = document.getElementById("output");
  const previewFrame = document.getElementById("preview");
  const runButton = document.getElementById("runButton");
  const clearButton = document.getElementById("clearButton");
  const downloadButton = document.getElementById("downloadButton");

  // Update both the iframe preview and generated code preview
  const updatePreview = () => {
    const html = htmlCode.value;
    const css = `<style>${cssCode.value}</style>`;
    const js = `<script>${jsCode.value}<\/script>`;
    const code = `${html}\n${css}\n${js}`;

    // Update the "Generated Code" tab
    output.textContent = code;

    // Write to iframe for live preview
    const previewDoc =
      previewFrame.contentDocument || previewFrame.contentWindow.document;
    previewDoc.open();
    previewDoc.write(code);
    previewDoc.close();
  };

  // Clear all code areas
  const clearCode = () => {
    htmlCode.value = "";
    cssCode.value = "";
    jsCode.value = "";
    updatePreview();
  };

  // Download code as a ZIP file
  const downloadCode = () => {
    const zip = new JSZip();
    zip.file("index.html", htmlCode.value);
    zip.file("styles.css", cssCode.value);
    zip.file("script.js", jsCode.value);
    zip.generateAsync({ type: "blob" }).then(function (content) {
      saveAs(content, "code.zip");
    });
  };

  // Auto-run preview on code change (with a debounce)
  let timeoutId;
  const autoRun = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(updatePreview, 300);
  };

  // Set event listeners for auto-run
  htmlCode.addEventListener("input", autoRun);
  cssCode.addEventListener("input", autoRun);
  jsCode.addEventListener("input", autoRun);

  // Button event listeners
  runButton.addEventListener("click", updatePreview);
  clearButton.addEventListener("click", clearCode);
  downloadButton.addEventListener("click", downloadCode);

  // Initial preview update with default code
  htmlCode.value = `<div class='welcome'>
  <h1 class='h1'>Hello World!</h1>
  <p>Welcome to your live coding editor.</p>
</div>`;
  cssCode.value = `.welcome {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      padding: 20px;
    }
    
    .h1 {
      color: #007acc;
    }`;
  jsCode.value = `console.log("Your JavaScript is running!");`;

  updatePreview();

  const html = htmlCode.value;
  const css = `<style>${cssCode.value}</style>`;
  const js = `<script>${jsCode.value}</script>`;

  const code = `${html}\n${css}\n${js}`;
  output.innerHTML = code;
};

const clearCode = () => {
  htmlCode.value = "";
  cssCode.value = "";
  jsCode.value = "";
  updatePreview();
};

const downloadCode = () => {
  const zip = new JSZip();
  zip.file("index.html", htmlCode.value);
  zip.file("styles.css", cssCode.value);
  zip.file("script.js", jsCode.value);

  zip.generateAsync({ type: "blob" }).then(function (content) {
    saveAs(content, "code.zip");
  });
};

// Initial preview update
updatePreview();
downloadButton.addEventListener("click", () => {
  const zip = new JSZip();
  zip.file("index.html", htmlCode.value);
  zip.file("styles.css", cssCode.value);
  zip.file("script.js", jsCode.value);
  zip.generateAsync({ type: "blob" }).then((content) => {
    saveAs(content, "code.zip");
  });
});

runButton.addEventListener("click", updatePreview);
clearButton.addEventListener("click", clearCode);
downloadButton.addEventListener("click", downloadCode);
