<template>
    <div>
        <li>{{ task.title }}</li>
    </div>
</template>

<script>
    export default {
        props: ['task']
    }
</script>