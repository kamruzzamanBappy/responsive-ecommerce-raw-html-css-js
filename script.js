//make hambu menu clickable, when click hamburger menu show navbar 1.add hambar and nav //

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar')
const close = document.getElementById('close')

//check hambar open or not , if it is not open , clickk on hambar we want to show navbar//
//if navbar showing click it will be closed //

// if anyone click on bar it means they are activating our bar variable

//if click on bar event will be hapening(addEventListener)
//EventListener name will be (click) if anyone click our hamburger//
// i want to run a function () =>//

    // if any one click hamburger i wnt to show nav//
    // now create active class in our style #navbar.active

if (bar) {
    bar.addEventListener('click',() => {
        nav.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click', () =>{
        nav.classList.remove('active')
    })
}