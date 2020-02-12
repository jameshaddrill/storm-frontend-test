<template>
    <section class="todo-list">
        <h1 class="h1 todo-list__title">To do list</h1>
        <ul>
            <to-do-task 
                v-for="task in tasks" 
                :key="task.id" 
                :task="task" 
            />
        </ul>
    </section>
</template>

<script>
    import toDoTaskComponent from '../toDoTask/toDoTaskComponent.vue';
    import axios from 'axios';

    const tasksAPI = axios.create({baseURL: 'http://localhost:4000/api'});

    export default {
        data: function() {
            return {
                'tasks' : []
            }
        },
        components: {
            'to-do-task': toDoTaskComponent
        },
        created() {
            tasksAPI.get('task').then(response => {
                this.tasks = response.data;
            });
        }
    }
</script>