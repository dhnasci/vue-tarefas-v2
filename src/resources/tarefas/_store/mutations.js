import {
     LISTAR_TAREFAS 
} from './mutation-types'

export default {
    // para ser usado com operações sincronas
    [LISTAR_TAREFAS]: (state, { tarefas }) => {
        state.tarefas = tarefas
    }
}