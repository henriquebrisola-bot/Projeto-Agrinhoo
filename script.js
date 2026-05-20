let curtidas = 0;
let dislikes = 0;

function curtir() {
  curtidas++;
  document.getElementById("curtidas").innerText = curtidas;
}

function dislike() {
  dislikes++;
  document.getElementById("dislikes").innerText = dislikes;
}
