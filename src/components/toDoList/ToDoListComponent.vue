<template>
    <section>
        <h1>To do list</h1>
        <ul v-for="task in tasks" :key="task.id">
            <to-do-item :task="task" />
        </ul>
    </section>
</template>

<script>
    import ToDoItemComponent from '../toDoItem/ToDoItemComponent.vue';
    import axios from 'axios';

    const tasksAPI = axios.create({baseURL: 'http://localhost:4000/api'});

    export default {
        data: function() {
            return {
                'tasks' : []
            }
        },
        components: {
            'to-do-item': ToDoItemComponent
        },
        created() {
            tasksAPI.get('task').then(response => {
                this.tasks = response.data;
            });
        }
    }
</script>