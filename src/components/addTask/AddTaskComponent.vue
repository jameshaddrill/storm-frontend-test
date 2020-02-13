<template>
    <form @submit.prevent="checkForm">
        <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
            <li v-for="error in errors">{{ error }}</li>
            </ul>
        </p> 
        <div class="form-element">
            <label for="task-name">Task name</label>
            <input type="text" v-model="taskName" id="task-name" />
        </div>
        <div class="form-element">
            <label for="task-importance">Importance</label>
            <select id="task-importance" v-model="taskImportance">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
        </div>
        <div class="form-element">
            <input type="submit" value="submit">
        </div>
    </form>    
</template>

<script>
    export default {
        data: function() {
            return {
                taskName: '',
                taskImportance: 0,
                errors: []
            }
        },
        methods: {
            checkForm: function(e) {
                this.errors = [];

                if (!this.taskName) {
                    this.errors.push('Task name required.');
                }
                if (!this.taskImportance) {
                    this.errors.push('Task imortance required.');
                }

                if (this.taskName && this.taskImportance) {
                    const formDetails = {
                        id: '',
                        title: this.taskName,
                        isDone: 'false',
                        importance: this.taskImportance,
                        createdAt: '',
                        updatedAt: ''
                    };

                    this.$emit('formSubmitted', formDetails);
                }

                e.preventDefault();
            }
        }
    }
</script>