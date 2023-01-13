const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
    
})

document.querySelector('#page-title').innerHTML = "Politique de confidentialité"