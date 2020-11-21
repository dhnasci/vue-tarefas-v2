/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Vuex from 'vuex'

import contador from '@/store/modules/contador'
import tarefas from '@/store/modules/tarefas'

Vue.use(Vuex)

const state = {
    usuario: 'Dirceu'
}

const getters = {
    mensagemBoasVindas: state => `Olá ${state.usuario}`
}

const actions = {
    logar: ( {commit}, usuario) => {
        commit('logando', usuario)
    }
}

const mutations = {
    logando: ( state, usuario) => {
        state.usuario = usuario 
    }
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations, 
    modules: {
        contador,
        tarefas,
    }
})