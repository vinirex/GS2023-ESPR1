//variaveis para a visualisação dos prontuários
const list = document.querySelector('#med-list');
let infoMed = "";
//botões para mostrar formulario e prontuários
const sndForm = document.querySelector('#send')
sndForm.addEventListener('click', sendToList);
const regist = document.querySelector('#register');
regist.addEventListener('click', showForm);
//Botão para ver prontuários
const viewAll = document.querySelector('#viewAll');
viewAll.addEventListener('click', showAll);
//botão para "authenticar o usuário"
const btn = document.querySelector('#btn');
btn.addEventListener('click', displayBtns);

users = [];
loged_as = '';
EPC = 0;



class UserID {
    auth = -1;
    constructor(name, password) {
        this.Name = name;
        this.Password = password;
        this.EPC = EPC++;
    }
    authAdmin() {
        if (this.auth == 0) { return }
        this.auth = 1
    }
    authUser(name, age, id, height, weight, biogender, bloodtype, vices, details) {
        if (this.auth == 1) { return }
        this.auth = 0
        this.name = name
        this.age = age
        this.id = id

        this.height = height
        this.weight = weight
        this.biogender = biogender
        this.bloodtype = bloodtype

        this.vices = vices;
        this.details = details;
    }
    scribeField(field, value) {
        if (this.auth == 1) { return }
        if (field == 'name') { this.name = value }
        else if (field == 'age') { this.age = value }
        else if (field == 'id') { this.id = value }
        else if (field == 'height') { this.height = value }
        else if (field == 'weight') { this.weight = value }
        else if (field == 'biogender') { this.biogender = value }
        else if (field == 'bloodtype') { this.bloodtype = value }
        else if (field == 'vices') { this.vices = value }
        else if (field == 'details') { this.details = value }
        else return
    }
}
async function validate(type, input) {
    var value = input
    if (type == 'email') {
        if (value.length() > 5 && value.includes('@') && value.includes('.')) { return value }
    }
    if (type == 'str') {
        if (value.length() > 5) { return value }
    }
    if (type == 'int') {
        if (value > 0) { return value }
    }
    if (type == 'biogender') {
        if (value.toLowerCase() != "male" || value.toLowerCase() != "female") { return 'N/A' }
        return value;
    }
    if (type == 'bloodtype') {
        if (value.includes('O')) {
            if (value.includes('+')) {
                return 'O+'
            } else {
                return 'O-'
            }
        }
        if (value.includes('AB')) {
            if (value.includes('+')) {
                return 'AB+'
            } else {
                return 'AB-'
            }
        }
        if (value.includes('B')) {
            if (value.includes('+')) {
                return 'B+'
            } else {
                return 'B-'
            }
        }
        if (value.includes('A')) {
            if (value.includes('+')) {
                return 'A+'
            } else {
                return 'A-'
            }
        }
    }
}
async function createUser(username, password, name, age, id, height, weight, biogender, bloodtype, vices, details) {
    let tmp = new UserID(username, password);
    tmp.authUser(name, age, id, height, weight, biogender, bloodtype, vices, details);
    Users.push(tmp);
}
async function createAdmin(username, password) {
    let tmp = new UserID(username, password);
    tmp.authAdmin();
    Users.push(tmp);
}

async function Login(username, password) {
    for (let i = 0; i < Users.length; i++) {
        if (Users[i].name == username) {
            if (Users[i].password == password) {
                loged_as = Users[i]
                if (Users[i].auth == 1) {
                    adm = true;
                } else {
                    adm = false;
                }
            }
        }
    }
}


//mostra os botões de cadastro e envio somente depois do login
function displayBtns(){

    sndForm.classList.toggle('display-none');
    sndForm.classList.toggle('display-center');
    regist.classList.toggle('display-none');
    regist.classList.toggle('display-center');
}

//função para mostrar formulario de Cadastro
function showForm() {
    let form = document.querySelector('#med-info');
    form.classList.toggle('display-none');
    form.classList.toggle('display-center');
}

//Fução para mostrar os Prontuários atualiza com o botão
function showAll(){
users.forEach(entry => {
    infoMed += `<div class="show-all">
                         <div>
                             ${entry.name}
                         </div>
                         <div>
                             ${entry.age}
                         </div>
                         <div>
                             ${entry.height}
                         </div>
                         <div>
                             ${entry.weight}
                         </div>
                         <div>
                             ${entry.biogender}
                         </div>
                         <div>
                             ${entry.bloodtype}
                         </div>
                         <div>
                             ${entry.vices}
                         </div>
                         <div>
                             ${entry.details}
                         </div>
                         
                     </div>`
})
list.innerHTML = infoMed
}

//manda as informaçãoes de usuário no formulário para o "BANCO DE DADOS" / array 
function sendToList() {
    let clear = document.querySelectorAll('.form-input input');
    let name = document.querySelector('#name').value;
    let age = document.querySelector('#age').value;
    let id = document.querySelector('#id').value;
    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;
    let biogender = document.querySelector('#biogender').value;
    let bloodtype = document.querySelector('#bloodtype').value;
    let vices = document.querySelector('#vices').value;
    let details = document.querySelector('#details').value;

    clear.forEach(input => {
        validate(input.type,input.value)
    });
    users.push({
        name, age, id, height, weight, biogender, bloodtype, vices, details
    });
    // Clearing the input fields
    clear.forEach(input => {
        if (input.tagName === 'INPUT') {
            input.value = '';
        }
    });

    console.log(users);
    
}