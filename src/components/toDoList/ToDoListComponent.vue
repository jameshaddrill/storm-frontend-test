<template>
    <section class="todo-list">
        <h1 class="h1 todo-list__title">To do list</h1>
        <transition name="fade" mode="out-in">
            <ul v-if="dataLoaded" >
                <to-do-task 
                    v-for="(task) in tasks" 
                    :key="task.id"
                    :task="task"
                    @checkboxChanged="updateTask"
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
            this.getTasks();
        },
        methods: {
            getTasks: function() {
                axios.get('http://localhost:4000/api/task').then(response => {
                    this.tasks = response.data;
                    this.dataLoaded = true;
                }).catch((error) => {
                    console.log('error with loading data');
                    console.log(error);
                });
            },
            updateTask: function(info) {
                const updatedItem = this.tasks.find(task => task.id === info.id);
                updatedItem.isDone = info.checked;

                axios.patch('http://localhost:4000/api/task/' + info.id, 
                    { isDone : info.checked }
                ).catch((error) => {
                    console.log('error with patching data');
                    console.log(error);
                });
            }
        }
    }
</script>