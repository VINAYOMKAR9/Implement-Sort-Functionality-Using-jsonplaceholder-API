let container=document.querySelector('#container');
let box=document.querySelector('#box');
let sortByID=document.querySelector('#sortByID');
let sortByName=document.querySelector('#sortByName');

fetchData('https://jsonplaceholder.typicode.com/users')
async function fetchData(url,para=''){
    try{

        let res= await fetch(`${url}${para}`);
        let data = await res.json();
        
        // pagi(res.headers.get('X-Total-Count'))
        displayTodo(data) 
        console.log(data);
    }
    catch(err){
        console.log('Error in code');
    }
}


function displayTodo(data) {

    container.innerHTML = '';
    data.map((el, i) => {
        let id = document.createElement('p');
        id.innerText=`Id:- ${el.id}`

        let name = document.createElement('p');
        name.innerText=`name:- ${el.name}`


        let username = document.createElement('p');
        username.innerText=`username:- ${el.username}`

        let email = document.createElement('p');
        email.innerText=`email:- ${el.email}`

        let website = document.createElement('p');
        website.innerText=`website:- ${el.website}`


        let city = document.createElement('p');
        city.innerText=`city:- ${el.address.city}`

       
        let div = document.createElement('div')
        div.setAttribute('id','maindiv')

        div.append(id,name,username,email,website,city);
        container.append(div);
    })
}

sortByID.addEventListener('change',()=>{
    let sortByIdValue= sortByID.value;
    fetchData('https://jsonplaceholder.typicode.com/users',`?_sort=id&_order=${sortByIdValue}`)
})




sortByName.addEventListener('change',()=>{
    let sortByNameValue= sortByName.value;
    fetchData('https://jsonplaceholder.typicode.com/users',`?_sort=name&_order=${sortByNameValue}`)
})











