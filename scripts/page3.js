var resultBtn = document.getElementById("result-btn").addEventListener("click", function () {
  window.location = 'index 4.html';
});
window.localStorage.setItem("firstQuestion", false);
window.localStorage.setItem("secondQuestion", false);

function questionSelection(numQuestion) {
  let selection = document.getElementById(numQuestion).checked;
  window.localStorage.setItem(numQuestion, selection);

}
