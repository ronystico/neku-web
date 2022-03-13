var img = Math.floor(Math.random() * 5) + 1;
const imgtag = document.createElement("img");
imgtag.id = "asset1";
imgtag.src = "../assets/render-lobby/" + img + ".png";
document.body.appendChild(imgtag);

