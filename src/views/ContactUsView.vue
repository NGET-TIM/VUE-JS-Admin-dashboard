


<template>
  <div class="contactus">
    <h1 @click="clickMe">This is an contactus page</h1>
    <div :class="{ active: isActive }"></div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script module lang="ts">
export default {
  data() {
    return {
      message: 'Hello World!',
      isRed: true,
      color: 'green'
    }
  },
  methods: {
    clickMe() {
      alert('Thanks For click me');
    },
  }
}
</script>
