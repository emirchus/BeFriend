const remote = require('electron').remote

document.getElementById('loginform').addEventListener('submit', (e) => {
    e.preventDefault();
    changeView('home', "view");
    
})

document.getElementById('close').addEventListener("click", (e) => {
    e.preventDefault();
    var win = remote.getCurrentWindow();
    win.close();
})

document.getElementById('minimize').addEventListener('click', (e) => {
    e.preventDefault();
    var win = remote.getCurrentWindow();
    win.minimize();
})

function changeView(view, type) {
    switch (type) {
        case "view":
            Array.from(document.getElementById('app').children).forEach(e => {
                e.classList.remove('active')
            })
            break;
        case "home":
            Array.from(document.getElementById('content').children).forEach(e => {
                e.classList.remove('active')
            })
            break;

        default:
            break;
    }
    document.getElementById(view).classList.add('active');
}



