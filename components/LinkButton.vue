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

<style scoped lang="stylus">
.linkButton
  display: inline-block
  border-radius: 3px
  border: 1px solid #dd8800
  color: #dd8800
  text-decoration: none
  padding: 10px 30px
  text-align: center

  &:hover
    color: #ffffff
    background-color: #dd8800
</style>
