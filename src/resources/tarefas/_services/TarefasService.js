import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
})

export default {
    getTarefas() {
        return apiClient.get('/tarefas')
    }, 
    getTarefa(id) {
        return apiClient.get( `/tarefas/${id}`)
    }, 
    postTarefa(tarefa) {
        return apiClient.post('/tarefa', tarefa)
    },
    putTarefa(tarefa) {
        return apiClient.put(`/tarefas/${tarefa.id}`, tarefa)
    },
    deletarTarefa(id){
        return apiClient.delete(`/tarefas/${id}`)
    }

}