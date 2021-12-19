<template>
    <div>
      <p>You clicked {{ count }} times</p>
      <button @click="increment">
        Click me
      </button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            count: 0
        }
    },
    methods: {
      increment() {
          this.count++
      }
    },
}
</script>