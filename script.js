// const ul = document.querySelector('.ul');
// const btn = document.querySelectorAll('.btn');
// const handleClickUl = (event) => {
//     const target = event.target
//     setClass(target)
// }

// const setClass = (activeLink) => {
//    const currentActiveLink = ul.querySelector('a.active');
//    if(currentActiveLink) {
//        currentActiveLink.classList.remove('active');
//    };
//    activeLink.classList.add('active')
// }

// ul.addEventListener('click', handleClickUl);
// 'use strict'

// import arrImg from './imagesArray.js'

// const gallary = document.querySelector('ul');

// const liStr = arrImg.reduce((liStr, el) => liStr + `<li><img src="${el.preview}" data-source="${el.original}"></img></li>`, '');
// gallary.insertAdjacentHTML('afterbegin', liStr)

// gallary.addEventListener('click', (event) => {
//     console.dir(event.target);
//     console.log(event.target.attributes[1].nodeValue)
})