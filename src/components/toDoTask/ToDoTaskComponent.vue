<template>
    <li :class="`task task--${importanceLevel(task.importance)}`">
        {{ task.title }}        
    </li>
</template>

<script>
    export default {
        props: ['task'],
        methods: {
            importanceLevel: function(level) {
               const importance = ['high', 'medium', 'low'];
               return(importance[level]);
            }
        }
    }
</script>
