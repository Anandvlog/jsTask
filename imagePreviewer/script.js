let Imagediv = document.querySelector("input");
let previewdiv = document.querySelector("#previewImage");

let imageData = [];

let handlePreview = () => {
  previewdiv.innerHTML = "";
  imageData.forEach((val) => {
    console.log("val", val);
    previewdiv.innerHTML += `
                <img src="${val.previewURL}" alt="preview_img" /> 
        `;
  });
};

Imagediv.addEventListener("change", (e) => {
  let file = e.target.files[0];
  if (file.type !== "image/jpeg" && file.type !== "image/png") {
    previewdiv.innerHTML = "<p>Only JPEG/PNG files are allowed.</p>";
    return;
  }
  let maxSize = 2 * 1024 * 1024;
  if (file.size > maxSize) {
    previewdiv.innerHTML = "<p>File size must be less than 2 MB</p>";
    return;
  }
  let previewURL = URL.createObjectURL(file);
  imageData.push({
    previewURL: previewURL,
  });
  handlePreview();
});
