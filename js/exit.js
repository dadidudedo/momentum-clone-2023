const exit = document.querySelector("#exit");

function onExitClicked() {
  localStorage.removeItem("username");
  localStorage.removeItem("todos");
  window.location.reload();
}

exit.addEventListener("click", onExitClicked);
