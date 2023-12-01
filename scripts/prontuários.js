//variaveis para a visualisação dos prontuários
const list = document.querySelector('#med-list');
let infoMed = "";
const sndForm = document.querySelector('#send')
sndForm.addEventListener('click', sendToList);
const regist = document.querySelector('#register');
regist.addEventListener('click', showForm);

//função para mostrar formulario de Cadastro
function showForm() {
    let form = document.querySelector('#med-info');
    form.classList.toggle('display-none');
    form.classList.toggle('display-center');
}

//Fução para mostrar o Prontuário
users.forEach(entry => {
    infoMed += `<div class="row">
                         <div>
                             ${entry.user}
                         </div>
                         <div">
                             ${entry.age}
                         </div>
                         <div>
                             ${entry.height}
                         </div>
                         <div>
                             ${entry.weight}
                         </div>
                     </div>`
})
list.innerHTML = infoMed
function sendToList() {

}
/*
    let user = document.querySelector('#user').value;
    let age = document.querySelector('#age').value;
    let id = document.querySelector('#id').value;
    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;
    let biogender = document.querySelector('#biogender').value;
    let bloodtype = document.querySelector('#bloodtype').value;
    let vices = document.querySelector('#vices').value;
    let details = document.querySelector('#details').value;
*/