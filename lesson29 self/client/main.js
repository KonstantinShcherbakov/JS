let xhr = new XMLHttpRequest;

xhr.onload = function() {
    let data = JSON.parse(xhr.response);
    console.log(data);
};

const btn = document.querySelector('.btn');
const login = document.querySelector('[name="login"]');
const password = document.querySelector('[name="password"]');

btn.addEventListener('click', event => {
    event.preventDefault();
    if(!(login.value&&password.value)) {
        alert('Не все поля заполнены!');
        return;
    }
    xhr.open('GET',`http://localhost:3005/test?login=${login.value}&password=${password.value}`);
    xhr.send();
})