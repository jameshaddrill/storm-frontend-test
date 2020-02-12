<template>
    <section class="container">
        <to-do-list />
    </section>
</template>

<script>
    import ToDoListComponent from '../components/toDoList/ToDoListComponent.vue';

   	export default {
        components: {
            'to-do-list' : ToDoListComponent
        }
	}
</script>