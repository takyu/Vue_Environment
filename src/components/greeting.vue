<script>
export default {
  data() {
    return {
      message: "Hello Vue World!!",
    };
  },
};
</script>

<template>
  <h1 class="texts">
    {{ message }}
  </h1>
</template>

<style scoped>
.texts {
  color: green;
  font-weight: 600;
}
</style>