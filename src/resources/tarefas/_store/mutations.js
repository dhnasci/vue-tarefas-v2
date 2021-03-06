import {
     LISTAR_TAREFAS,
     EDITAR_TAREFA,
     CRIAR_TAREFA,
     DELETAR_TAREFA,
     SELECIONAR_TAREFA,
     SETAR_ERRO
} from './mutation-types'

export default {
    // para ser usado com operações sincronas
    [CRIAR_TAREFA]: (state, { tarefa }) => {
        state.tarefas.push(tarefa)
    },
    [EDITAR_TAREFA]: (state, { tarefa }) => {
        const indice = state.tarefas.findIndex(t => t.id === tarefa.id)
        state.tarefas.splice(indice, 1, tarefa)
        
    },
    [DELETAR_TAREFA]: (state, { tarefa }) => {
        const indice = state.tarefas.findIndex(t => t.id === tarefa.id)
        state.tarefas.splice(indice, 1)
        
    },
    [LISTAR_TAREFAS]: (state, { tarefas }) => {
        state.tarefas = tarefas
    },
    [SELECIONAR_TAREFA]: (state, { tarefa }) => {
        state.tarefaSelecionada = tarefa
    },
    [SETAR_ERRO]: (state, { erro }) => {
        state.erro = erro
    }
}