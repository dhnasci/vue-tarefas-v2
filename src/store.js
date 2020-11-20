/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const contadorModule = {
    state: {
        contador: 0,
    }
}

const tarefasModule = {
    state: {
        contador: 0,
        tarefas: []
    },
    getters: {
        tarefasConcluidas: state => state.tarefas.filter( t => t.concluido),
        tarefasAFazer: state => state.tarefas.filter( t => !t.concluido), 
        totalDeTarefasConcluidas: (state, getters) => getters.tarefasConcluidas.length,
        buscarTarefaPorId: state => id => state.tarefas.find(t => t.id === id),
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
        listarTarefas: async ({commit, dispatch}, payload) => {
            console.log('Action: listaTarefas')
            const tarefas = await dispatch('buscarTarefas')
            console.log('Mutation: listarTarefas')
            commit('listarTarefas', {tarefas})
    
            
        }
    }
}

export default new Vuex.Store({
    modules: {
        contador: contadorModule,
        tarefas: tarefasModule,
    }
})