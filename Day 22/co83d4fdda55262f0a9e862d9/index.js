let people = JSON.parse(localStorage.getItem("people")) || [] ;

const iconEl = document.getElementById("icon");
const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const peopleListEl = document.getElementById("people-list");

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value;
    
    if (inputValue) {
        people.push(inputValue);
        localStorage.setItem("people", JSON.stringify(people));
        clearInputFieldEl();
        renderList(people);
    }
})

function renderList(array) {
    clearPeopleListEl();
    
    for (let i = 0; i < array.length; i++) {
        let currentPerson = array[i]
        
        appendPersonToPeopleListEl(currentPerson)
    }
}

if(people.length > 0 ) {
    renderList(people);
}

function clearPeopleListEl() {
    peopleListEl.innerHTML = ""
}

function clearInputFieldEl() {
    inputFieldEl.value = ""
}

function appendPersonToPeopleListEl(person) {
    
    let newEl = document.createElement("li")
    
    newEl.textContent = person
    
    newEl.addEventListener("dblclick", function() {
        let index = people.indexOf(person)

        people.splice(index, 1);
        localStorage.setItem("people",JSON.stringify(people));
        renderList(people);
        
        iconEl.src = "./cat.gif";
        setTimeout(() => {
            iconEl.src="./gift.gif";
        },1000)
    })
    
    peopleListEl.append(newEl)
}