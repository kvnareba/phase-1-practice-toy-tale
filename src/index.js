let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
function fetchToys() {
  fetch("http://localhost:3000/toys") 
    .then((res) => res.json())
    .then((res) => {
      console.log("response2", res);
      res.forEach((toy) => addToys(toy));
    });
}