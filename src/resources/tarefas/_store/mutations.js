export default {
    // para ser usado com operações sincronas
    listarTarefas: (state, { tarefas }) => {
        state.tarefas = tarefas
    }
}