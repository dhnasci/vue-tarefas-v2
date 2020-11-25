/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Vuex from 'vuex'

import contador from '@/resources/contador/_store/index'


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

const modules = {
    contador,
}

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state,
    getters,
    actions,
    mutations, 
    modules
})