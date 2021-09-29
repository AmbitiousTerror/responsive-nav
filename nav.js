
// The below function is for responsive navbar with hamburger icon.

let nav = document.querySelector('nav');

document.querySelector('.hamburger').addEventListener('click', function () {

    // The below stores the nav element and .list class in a variable.
    const getNav = document.querySelector('nav');
    const getUl = document.querySelector('.list');

    // The below statement checks if the nav-menu-size class in the nav-style.css is on the nav HTML element if not it adds it as this increases
    // the tablet and mobile menu dropdown size from 80px to 300px in order for the horizontal menu to change from horizontal to a vertical menu.
    if(getNav.classList.contains('nav-menu-size')){
        getNav.classList.remove('nav-menu-size');
        // The .show simply changes the flow of the li elements in the nav menu when the hamburger is clicked from horizontal to vertical.
        getUl.classList.remove('show');
    }else if(getNav.classList !== 'nav-menu-size'){
        getNav.classList.add('nav-menu-size');
        getUl.classList.add('show');
    }

});

