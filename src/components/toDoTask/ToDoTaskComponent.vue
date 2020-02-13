<template>
    <li :class="['task', task.isDone === 'true' ? 'task--done' : '', 'task--' + importanceLevels[task.importance]]">
        <input 
            type="checkbox" 
            :id="'checkbox--' + task.id"
            :checked="task.isDone === 'true'"
            class="task__checkbox" 
            @change="checkboxClicked($event)"
        />
        <label :for="'checkbox--' + task.id" class="task__label">{{ task.title }}</label>
        <button class="task__delete" @click="deleteClicked(task.id)">
            Delete
        </button>
    </li>
</template>

<script>
    export default {
        props: ['task'],
        data: function() {
            return {
                importanceLevels : ['high', 'medium', 'low']
            }
        },
        methods: {
            checkboxClicked: function(event) {
                const cleanId = event.target.id.replace('checkbox--','');
                const checked = event.target.checked ? 'true' : 'false';

                const checkboxInfo = {
                    id : cleanId,
                    checked: checked 
                }

                this.$emit('checkboxChanged', checkboxInfo);
            },
            deleteClicked: function(id) {
                this.$emit('deleteClicked', id);
            }
        }
    }
</script>
