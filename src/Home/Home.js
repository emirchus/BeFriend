const DynamicModule = require('../view-loader/parser.module')

class Home extends DynamicModule {

    constructor(props) {
        super('./Home/Home.html');
    }

    componentDidMount() {

     

        /*
 
         document.getElementById('findchats').addEventListener('submit', (e) => {
             e.preventDefault();
             var text = document.getElementById('finderchats').value.toUpperCase();
             FindInChats(text)
 
         })
         document.getElementById('finderchats').addEventListener('input', (e) => {
 
             var text = document.getElementById('finderchats').value.toUpperCase();
             FindInChats(text)
         })
 */
        const FindInChats = (value) => {
            Array.from(document.getElementById('chatscont').children).forEach(cj => {
                var tt = cj.children[1].children[1].textContent || cj.children[1].children[1].innerText;

                txtValue = cj.children[1].children[0].textContent || cj.children[1].children[0].innerText;
                if (txtValue.toUpperCase().indexOf(value) > -1 || txtValue.toUpperCase().includes(value) || tt.toUpperCase().includes(value)) {
                    cj.style.display = 'flex'
                } else {
                    cj.style.display = 'none';
                }


            })

        }

    }

}

module.exports = Home;