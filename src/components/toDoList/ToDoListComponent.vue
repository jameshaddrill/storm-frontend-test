<template>
    <section class="todo-list">
        <h1 class="h1 todo-list__title">To do list</h1>
        <transition name="fade" mode="out-in">
            <ul v-if="dataLoaded" >
                <to-do-task 
                    v-for="task in tasks" 
                    :key="task.id" 
                    :task="task" 
                />
            </ul>
            <div v-else class="todo-list__loading-container">
                <p class="todo-list__title">
                    Your to do list is loading...
                </p>
            </div>
        </transition>
    </section>
</template>

<script>
    import toDoTaskComponent from '../toDoTask/toDoTaskComponent.vue';
    import axios from 'axios';

    const tasksAPI = axios.create({baseURL: 'http://localhost:4000/api'});

    export default {
        data: function() {
            return {
                'tasks' : [],
                'dataLoaded' : false
            }
        },
        components: {
            'to-do-task': toDoTaskComponent
        },
        created() {
            tasksAPI.get('task').then(response => {
                this.tasks = response.data;
                this.dataLoaded = true;
            });
        }
    }
</script>