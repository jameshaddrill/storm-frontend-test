<template>
    <div>
        <h1>This is the main App.vue template</h1>
        <h2>{{ test }}</h2>
    </div>
</template>

<script>
   	export default {
        data() {
            return {
                'test' : 'test value'
            }
        }
	}
</script>