import { clienteService } from '../service/cliente-service.js'
const criaTabela = (nome, email, id) => {
    //preciso criar esse elemento para conseguir adicionar 'conteudo' ao HTML, senão da erro.
    const linhaNovoCliente = document.createElement('tr');
    const conteudo = 
    ` 
        <td class="td" data-td>${nome}</td>
        <td>${email}</td>
            <td>
                <ul class="tabela__botoes-controle">
                    <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                    <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                </ul>
        </td> 
    
    `
    //atribuo todo minha estrutura da tabela à '' tr '' 
    linhaNovoCliente.innerHTML = conteudo;

    //seto um data attribute na '' tr '' passando o ID que vem da api
    linhaNovoCliente.dataset.id = id;
    return linhaNovoCliente;

}

const tabela = document.querySelector('[data-tabela]');


//Deletar cliente
tabela.addEventListener('click', async (event) => {

    let botaoDeletar = event.target.className == 'botao-simples botao-simples--excluir'
    if(botaoDeletar){
        //pego o alvo mais proximo desse data attribute
        const linhaCliente = event.target.closest('[data-id]');

        //capturo o id da linha atraves do dataset
        const id = linhaCliente.dataset.id;

        //removo o cliente do meu serviço
        await clienteService.removeCliente(id)
        //.then(() => { com o async await não precisa do then
            //removo a linha da tabela assim que o cliente for removido do serviço
            linhaCliente.remove();
        //})
    }
});


//listando os clientes na tabela
const render = async () => {
    const listaCliente = await clienteService.listaClientes()
    //.then(data => {
        listaCliente.forEach(elemento => {
        tabela.appendChild(criaTabela(elemento.nome, elemento.email, elemento.id));
})}

render();