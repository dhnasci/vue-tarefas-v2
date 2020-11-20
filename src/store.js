/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const contadorModule = {
    namespaced: true,
    state: {
        contador: 0,
    },
    getters: {
        contadorAtual: state => state.contador,
    }
}

const tarefasModule = {
    namespaced: true,
    state: {
        tarefas: []
    },
    getters: {
        tarefasConcluidas: (state, getters, rootState, rootGetters) => {
            console.log('Getters: state ', state, rootState)
            return state.tarefas.filter( t => t.concluido)
        },
        tarefasAFazer: state => state.tarefas.filter( t => !t.concluido), 
        totalDeTarefasConcluidas: (state, getters) => getters.tarefasConcluidas.length,
        buscarTarefaPorId: state => id => state.tarefas.find(t => t.id === id),
        boasVindas: (state, getters, rootState, rootGetters) => {
            console.log('State Global: ', rootState.usuario);
            console.log('Getter Global: ', rootGetters.mensagemBoasVindas);
            return rootGetters.mensagemBoasVindas
        }
    }, 
    mutations: {
        // para ser usado com operações sincronas
        listarTarefas: (state, { tarefas }) => {
            state.tarefas = tarefas
        }
    },
    actions:{
        // para ser usado com requisições assincronas
        // usando Promises...
        buscarTarefas: ( context, payload ) => {
            return new Promise( (resolve, reject) => {
                setTimeout(() => {
                    resolve(
                        [
                            { id: 1, titulo: 'Aprender Vue', concluido: true },
                            { id: 2, titulo: 'Aprender Vue Router', concluido: true },
                            { id: 3, titulo: 'Aprender Vuex', concluido: false }
                        ]
                    )
                }, 2000)
            }

            )
        },
        listarTarefas: async ({commit, dispatch, state, rootState, getters, rootGetters}, payload) => {
            console.log('Action: listaTarefas')
            const tarefas = await dispatch('buscarTarefas')
            console.log('Mutation: listarTarefas')
            commit('listarTarefas', {tarefas})
            console.log('Actions: state: ', state, rootState)
            
            dispatch('logar', 'Dirceu Henrique', { root: true})
            // caso a action não tivesse payload como argumento
            //dispatch('actionVerbo', null, { root: true})
        }
    }
}

const store = new Vuex.Store({
    state:{
        usuario: 'Dirceu'
    },
    getters:{
        mensagemBoasVindas: state => `Olá ${state.usuario}`
    },
    actions: {
        logar: ( {commit}, usuario) => {
            commit('logando', usuario)
        }
    },
    mutations: {
        logando: ( state, usuario) => {
            state.usuario = usuario 
        }
    }, 
    modules: {
        contador: contadorModule,
        tarefas: tarefasModule,
    }
})

console.log('Store: ', store)

export default store