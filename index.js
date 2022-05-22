let countSpan = document.getElementById("count-span");
let addBtn = document.getElementById("add-btn");
let subBtn = document.getElementById("sub-btn");
let namesList = document.getElementById("names-list");
let fName = document.getElementById("fname");
let lName = document.getElementById("lname");
let submitBtn = document.getElementById("submit-btn");
let submitForm = document.getElementById("form-submit");

let count = 0;

const renderCount = () => {
    return (countSpan.innerText = count);
};

renderCount();

let p1 = {
    firstName: "Joey",
    lastName: "Cas"
}

let p2 = {
    firstName: "Ian",
    lastName: "Syl"
}

let people = [p1, p2];

const renderPeople = (arr) => {
    namesList.innerHTML = ""
    return  arr.forEach((element) => {
        return namesList.innerHTML += `<li>${element.firstName} ${element.lastName}</li>`
    })
}

renderPeople(people)

const createPerson = () => {
    let newPerson = {
        firstName: fName.value,
        lastName: lName.value
    }
    people.push(newPerson)
    renderPeople(people)
    submitForm.reset()
}

addBtn.addEventListener("click", () => {
  count++;
  renderCount();
});

subBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
    }
  renderCount();
});

submitForm.addEventListener("submit", (e) => {
    e.preventDefault()
    createPerson()
})







