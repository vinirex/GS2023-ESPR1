const btnLogin = document.querySelector('#btn');
const prontuario = document.querySelector('#med-info');

btnLogin.addEventListener('click', userAuth)

function userAuth(){
    console.log('Howdy');
    let user = document.getElementById(nome).value;
    let password = document.getElementById(password).value;

    for (let i = 0; i < users.length; i++){
        prontuario.innerHTML += ``
    }

}


const users = [
    {
      name:"Dr.Roberto Ghenji",
      user:"Robertomed",
      senha: "test@1234",
      adm: true
    },
      {
      name:"Maria Aparecida",
      user:"Maria",
      senha:"test@1234",
      adm:false,
      },
      {
      name:"Antonio Alberto",
      user:"Antonio",
      senha:"test@1234",
      adm:false,
      }
    ]