/* eslint-disable no-unused-vars */
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
    tarefas: [],
    tarefaSelecionada: undefined,
    erro: undefined
}

export default {
    namespaced: true,
    state,
    getters, 
    mutations,
    actions
}