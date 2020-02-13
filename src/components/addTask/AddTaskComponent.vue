<template>
    <form class="add-task form" @submit.prevent="checkForm">
        <div class="add-task__error-container">
            <p class="error-text" v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                </ul>
            </p> 
        </div>
        <div class="form__section form__section--large">
            <label for="task-name">Task name</label>
            <input class="add-task__name-input" type="text" v-model="taskName" id="task-name" />
        </div>
        <div class="form__section">
            <label for="task-importance">Importance</label>
            <select id="task-importance" value="" v-model="taskImportance">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
        </div>
        <div class="form__section">
            <input class="btn btn--small btn--secondary" type="submit" value="Submit">
        </div>
    </form>    
</template>

<script>
    export default {
        data: function() {
            return {
                taskName: '',
                taskImportance: false,
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
                    this.errors.push('Task importance required.');
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