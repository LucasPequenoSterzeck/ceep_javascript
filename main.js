import BotaoConcluir from './componentes/concluirTarefa.js'
import BotaoDeleta from './componentes/deletaTarefa.js'

    const criarTarefa = (evento) => {

    evento.preventDefault()

    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    console.log(valor)

    const tarefa = document.createElement('li')
    tarefa.classList.add('list_task')
    const conteudo = `<p class="content" list_task_content>${valor}</p>`

    tarefa.innerHTML = conteudo
    tarefa.appendChild(BotaoConcluir())
    tarefa.appendChild(BotaoDeleta())
    lista.appendChild(tarefa)

    input.value = ' '
}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa)
