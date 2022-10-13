const ex1ById = document.getElementById('ex1');
const ex1querySelector = document.querySelector('.ex1');

function getRandomInt() {
    return Math.floor(Math.random() * 255);
}

function getRandomColorStyle() {
    return 'rgb(' + getRandomInt() + ',' + getRandomInt() + ',' + getRandomInt() + ')';
}

const changeColorById = () => {
    ex1ById.style.background = getRandomColorStyle();
    ex1ById.style.color = getRandomColorStyle();
};

const changeColorByQS = () => {
    ex1querySelector.style.background = getRandomColorStyle();
    ex1querySelector.style.color = getRandomColorStyle();
};


const onClickAdd = () => {
    const extraImg = document.createElement('img');
    extraImg.id = 'picture';
    extraImg.src = 'https://www.moyaeuropa.com.ua/wp-content/uploads/2013/03/Lviv-%D0%9B%D1%8C%D0%B2%D1%96%D0%B2-%D0%9E%D0%BF%D0%B5%D1%80%D0%BD%D0%B8%D0%B9-%D1%82%D0%B5%D0%B0%D1%82%D1%80-1-1024x671.jpg';
    extraImg.style.width = '500px';
    extraImg.style.height = '350px';
    bodyElem.appendChild(extraImg);
};

const onClickIncrease = () => {
    const extraImg = document.getElementById('picture');
    extraImg.style.width = String(extraImg.offsetWidth + 25) +'px';
    extraImg.style.height = String(extraImg.offsetHeight + 25) +'px';
};

const onClickReduce = () => {
    const extraImg = document.getElementById('picture');
    extraImg.style.width = String(extraImg.offsetWidth - 25) +'px';
    extraImg.style.height = String(extraImg.offsetHeight - 25) + 'px';
};

const onClickRemove = () => {
    const extraImg = document.getElementById('picture');
    extraImg && bodyElem.removeChild(extraImg);
};

const bodyElem = document.querySelector('body');
const divButtons = document.createElement('div');
const addButton = document.createElement('button');
addButton.innerHTML = 'Add';
addButton.onclick = onClickAdd;
const increaseButton = document.createElement('button');
increaseButton.innerHTML = '+';
increaseButton.onclick = onClickIncrease;
const reduceButton = document.createElement('button');
reduceButton.innerHTML = '-';
reduceButton.onclick = onClickReduce;
const removeButton = document.createElement('button');
removeButton.innerHTML = 'Remove';
removeButton.onclick = onClickRemove;
divButtons.appendChild(addButton);
divButtons.appendChild(increaseButton);
divButtons.appendChild(reduceButton);
divButtons.appendChild(removeButton);
bodyElem.appendChild(divButtons);