<template>
  <a class="linkButton" :href="href" target="_blank">
    <slot />
  </a>
</template>

<script>
export default {
  props: ['href'],
}
</script>

<style scoped>
.linkButton {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
  text-align: center;
}

.linkButton:hover {
  color: #fff;
  background-color: #3b8070;
}
</style>
