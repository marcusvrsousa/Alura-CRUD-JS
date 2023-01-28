import { clienteService } from '../service/cliente-service.js'

const url = new URL(window.location);

//capturo o ID que está na URL da pagina
const id = url.searchParams.get('id');

const nome = document.querySelector('[data-nome]');
const email = document.querySelector('[data-email]');

const detalhaCliente = async () => {
    const data = await clienteService.detalhaCliente(id)
    //.then(data => {
             nome.value = data.nome;
             email.value = data.email;
    //});
}

detalhaCliente();


//capturo o formulario 
const botaoEditar = document.querySelector('[data-form');

//crio um escutador de evento do tipo submit que vai ser executado ao clicar no botao
botaoEditar.addEventListener('submit', async (event) => {
    //previne o comportamento de envio de formulario
    event.preventDefault()

    const novoNome = document.querySelector('[data-nome]').value
    const novoEmail = document.querySelector('[data-email]').value

    await clienteService.editaCliente(id, novoNome, novoEmail)
    //.then(() => { com o async await não precisa do then
        window.location.href = '../telas/edicao_concluida.html'
    //})
    
})
