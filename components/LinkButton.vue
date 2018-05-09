<template>
  <a 
    :href="href" 
    :target="target" 
    class="linkButton">
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: "#",
    },
    target: {
      type: String,
      default: "_blank",
    },
  },
};
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
