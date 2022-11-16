//Making a network call to the acme API
let loadButton = document.querySelector('#loadButton');
let list = document.querySelector('#usersList');
let loadRandomButton = document.querySelector('#loadRandomButton');
let h1 = document.querySelector('#randomH1');
let loadCompanies = document.querySelector('#loadCompanies');
let companiesList = document.querySelector('#companiesList');



loadButton.addEventListener('click', function(ev){
    loadUsers();
});

loadRandomButton.addEventListener('click', function(){
    loadRandomUser();
});

loadCompanies.addEventListener('click', function(){
    loadCompaniesList();
    console.log('loadcomp button works')
});




async function loadCompaniesList(){
    let response = await fetch('https://www.acme-api.com/api/companies');
    let data = await response.json();
    //let companies = data[0].name;
    for(let i = 0; i < data.length; i++){
        let company = data[i];
        let li = document.createElement('li');
        list.appendChild(li);
        li.innerText = company.name;
    }  
}

async function loadUsers(){
    let response = await fetch('https://www.acme-api.com/api/users');
    let data = await response.json();
    let users = data.users;
    for(let i = 0; i < users.length; i++){
        let user = users[i];
        let li = document.createElement('li');
        list.appendChild(li);
        li.innerText = user.fullName;
    }  
}

async function loadRandomUser(){
    let response = await fetch('https://www.acme-api.com/api/users/random');
    let user = await response.json();
    randomH1.innerText = user.fullName;
}