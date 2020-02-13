<template>
    <li :class="['task', task.isDone === 'true' ? 'task--done' : '', importanceLevel(task.importance)]">
        <input 
            type="checkbox" 
            :id="'checkbox--' + task.id"
            :checked="task.isDone === 'true'"
            class="task__checkbox" 
            @change="checkboxClicked($event)"
        />
        <label :for="'checkbox--' + task.id" class="task__label">{{ task.title }}</label>
    </li>
</template>

<script>
    export default {
        props: ['task'],
        methods: {
            importanceLevel: function(level) {
                const importance = ['high', 'medium', 'low'];
                return (level + 1 <= importance.length) ? 'task--' + importance[level] : '';
            },
            checkboxClicked: function(event) {
                const cleanId = event.target.id.replace('checkbox--','');
                const checked = event.target.checked ? 'true' : 'false';

                const checkboxInfo = {
                    id : cleanId,
                    checked: checked 
                }

                this.$emit('checkboxChanged', checkboxInfo);
            }
        }
    }
</script>
