<template>
    <section>
        <h1>To do list</h1>
        <to-do-item />
    </section>
</template>

<script>
    import ToDoItemComponent from '../toDoItem/ToDoItemComponent.vue';
    export default {
        components: {
            'to-do-item': ToDoItemComponent
        }
    }
</script>