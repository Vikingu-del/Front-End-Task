const btnText = document.querySelector(".btn-text");
const selectBtn = document.querySelector(".select-btn"),
      items = document.querySelectorAll(".item");
const addBtn = document.querySelector(".btn-lst");
const inputText = document.querySelector("#txt");
const myList = document.querySelector("#myUl");
const listaSugjerimeve = document.querySelector(".lista-sugjerimeve")
const listaSugjerimeveContainer = document.querySelector(".autosugestions")
let suggestions = [];

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

let a = document.getElementById("search");
a.addEventListener('keyup', function(event){
    document.getElementById('myUl').innerHTML = '';

    for(let arr of array){
        console.log(arr.includes(document.getElementById('search').value));
        if(arr.includes(document.getElementById('search').value)){
            document.getElementById('myUl').innerHTML = `
            <li class="added-list">
                <img src="images/User-avatar.svg.png" class="user-avatar"> 
                <div class="added-div">
                    <span class="data-name">${arr}</span>
                    <span class="data-type"></span>
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

listaSugjerimeve.addEventListener("click", ()=> {
    listaSugjerimeveContainer.classList.toggle("open");
})

