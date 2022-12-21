const btnText = document.querySelector(".btn-text");
const selectBtn = document.querySelector(".select-btn"),
      items = document.querySelectorAll(".item");
const addBtn = document.querySelector(".btn-lst");
const inputText = document.querySelector("#txt");
const myList = document.querySelector("#myUl");
let suggestions = [];
let proffesion = [];

selectBtn.addEventListener("click", ()=>{
    selectBtn.classList.toggle("open");
    let firstItem = "Student";
    btnText.innerHTML = firstItem.textContent;
});

for (const item of items) {
    item.addEventListener("click", () => {
        btnText.textContent = item.textContent;
        selectBtn.classList.toggle("open");
    });
};


addBtn.addEventListener("click", (e) => {
    if(inputText.value != ""){
        e.preventDefault();
        //create Li
        const myLi = document.createElement('li');
        myLi.classList.add("added-list");
        myList.appendChild(myLi);
        const myDiv = document.createElement('div');
        myDiv.classList.add("added-div");
        myLi.appendChild(myDiv);
        const myName = document.createElement('span');
        myName.classList.add("data-name");
        myName.textContent = inputText.value;
        suggestions.unshift(myName.textContent);
        myDiv.appendChild(myName);
        const myType = document.createElement('span');
        myType.classList.add("data-type");
        myType.textContent = btnText.textContent;
        proffesion.unshift(myType);
        myDiv.appendChild(myType);
        const myImage = document.createElement('img');
        myImage.classList.add("user-avatar");
        myImage.src = 'images/User-avatar.svg.png';
        myLi.appendChild(myImage);
        const rmvBtn = document.createElement('span');
        rmvBtn.classList.add("remove");
        rmvBtn.innerHTML = "✖";
        myLi.appendChild(rmvBtn);
    };
    const close = document.querySelectorAll(".remove");
    for(let i=0; i<close.length; i++){
        close[i].addEventListener("click", ()=>{
            close[i].parentElement.remove();
        })
    }
});
let array = suggestions;
//Sort Names in ascending order
let sortedArray= array.sort();
//reference
let input = document.querySelector("#search");
//execute function on keyup
input.addEventListener("keyup", (f) => {
    //loop through above array
    //Initially remove all elements ( so if user erases a letter or adds new letter then clean previoous outputs)
    removeElements();
    for (let i of sortedArray){
        //convert input to lowercase and compare with each string
        if(
            i.toLowerCase().startsWith(input.value.toLowerCase()) && input.value!=""){
            //create li element
            let listItem = document.createElement("li");
            //one common class name 
            listItem.classList.add("list-suggestions");
            listItem.style.cursor = "pointer";
            listItem.setAttribute("onclick", "displayNames('" + i + "')");
            //Display matched part in bold
            let word = "<b>" + i.substr(0,input.value.length) + "</b>";
            word+= i.substr(input.value.length);
            //display the value in array
            listItem.innerHTML = word;
            document.querySelector(".lista-sugjerimeve").appendChild(listItem);
        }
    }
});
let secondArray= array.sort();
let Input = document.querySelector("#txt");
Input.addEventListener("keyup", (f) => {
    //loop through above array
    //Initially remove all elements ( so if user erases a letter or adds new letter then clean previoous outputs)
    removeElements2();
    for (let b of secondArray){
        //convert input to lowercase and compare with each string
        if(
            b.toLowerCase().startsWith(Input.value.toLowerCase()) && Input.value!=""){
            //create li element
            let listItemFirstInput = document.createElement("li");
            //one common class name 
            listItemFirstInput.classList.add("list-Suggestions");
            listItemFirstInput.style.cursor = "pointer";
            listItemFirstInput.setAttribute("onclick", "displayNames2('" + b + "')");
            //Display matched part in bold
            let word = "<b>" + b.substr(0,Input.value.length) + "</b>";
            word+= b.substr(Input.value.length);
            //display the value in array
            listItemFirstInput.innerHTML = word;
            document.querySelector(".lista-Sugjerimeve").appendChild(listItemFirstInput);
        }
        
    }
});
function displayNames(value){
    input.value = value;
}
function removeElements(){
    //clear all the item
    let items = document.querySelectorAll(".list-suggestions");
    items.forEach((item) => {
        item.remove();
    });
};
function displayNames2(value){
    Input.value = value;
}
function removeElements2(){
    //clear all the item
    let items = document.querySelectorAll(".list-Suggestions");
    items.forEach((item) => {
        item.remove();
    });
}

for(const arr of array){
    document.getElementById('myUl').innerHTML += `
    <li class="added-list">
        <img src="images/User-avatar.svg.png" class="user-avatar"> 
        <div class="added-div">
            <span class="data-name">${arr}</span>
            <span class="data-type"></span>
        </div>
        <span class="remove">✖</span>
    </li>`;

}
let proffesionArray = proffesion;
let a = document.getElementById("search");
a.addEventListener('keyup', function(event){
    document.getElementById('myUl').innerHTML = '';

    for(let arr of sortedArray){
        console.log(arr.includes(document.getElementById('search').value));
        if(arr.includes(document.getElementById('search').value)) {
            document.getElementById('myUl').innerHTML = `
            <li class="added-list">
                <img src="images/User-avatar.svg.png" class="user-avatar"> 
                <div class="added-div">
                    <span class="data-name">${arr}</span>
                    <span class="data-type">Student</span>
                </div>
                <span class="remove">✖</span>
            </li>`;
        };  

    };
    const close = document.querySelectorAll(".remove");
    for(let i=0; i<close.length; i++){
        close[i].addEventListener("click", ()=>{
            close[i].parentElement.remove();
        })
    }
});
