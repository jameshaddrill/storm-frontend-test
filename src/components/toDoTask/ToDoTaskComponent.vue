<template>
    <li :class="`task ${importanceLevel(task.importance)}`">
        <input type="checkbox" :id="'checkbox--' + task.id" class="task__checkbox" />
        <label :for="'checkbox--' + task.id">{{ task.title }}</label>
    </li>
</template>

<script>
    export default {
        props: ['task'],
        methods: {
            importanceLevel: function(level) {
                const importance = ['high', 'medium', 'low'];
                return (level + 1 <= importance.length) ? 'task--' + importance[level] : '';
            }
        }
    }
</script>
