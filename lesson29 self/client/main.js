let xhr = new XMLHttpRequest;
let getGoods = new XMLHttpRequest;

xhr.onload = function() {
    if(xhr.response==='Unauthorized'){
        alert('Unauthorized, try again.');
        return;
    }
    getGoods.open('GET',`http://localhost:3005/getGoods?id=${xhr.response}`);
    getGoods.send();
};

getGoods.onload = function() {
    console.log(getGoods.response, 'getGoods res');
    let userGoods = JSON.parse(getGoods.response);
    console.log(userGoods, 'userGoods');

    const oldGoods = document.querySelectorAll('.goods');

    for (const oldGood of oldGoods) {
        oldGood.remove();
    }

    const goods = document.createElement('div');
    goods.classList.add('goods');

    for (const good of userGoods) {
        const goodElement = document.createElement('div');
        goodElement.classList.add('good');
        goodElement.innerHTML = `${good.name} - ${good.count}`;

        goods.appendChild(goodElement);
    }

    document.body.appendChild(goods);
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
    xhr.open('GET',`http://localhost:3005/getId?login=${login.value}&password=${password.value}`);
    xhr.send();
})