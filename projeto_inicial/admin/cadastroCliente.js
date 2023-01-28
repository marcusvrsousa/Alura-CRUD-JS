const cadastraCliente = (event) => {

    const arrayClientes = [];

    const nome = document.querySelector('[data-nome]');
    const email = document.querySelector('[data-email]');

    const objetos = {
        nome: nome.value,
        email: email.value
    }

    arrayClientes.push(objetos);

    arrayClientes.forEach(data => {
        console.log(data.nome, data.email)

    })

    window.location.href = "telas/cadastro_concluido.html"
    alert('cheguei aqui')
}

const botao = document.getElementById("botaoCadastrar");

botao.addEventListener('click', () =>{
    cadastraCliente();
})

