<template>
  <a 
    :href="href"
    :target="target"
    class="linkButton"
    @click="click"
    @mouseover="mouseover">
    <slot />
  </a>
</template>

<script>
const BLANK = "_blank";

export default {
  props: {
    href: {
      type: String,
      default: "#",
    },
    target: {
      type: String,
      default: BLANK,
    },
  },
  methods: {
    click() {
      this.$ga.event({
        eventCategory: "link",
        eventAction: "click",
        eventLabel: this.target,
        eventValue: this.href,
      });
    },
    mouseover() {
      this.$ga.event({
        eventCategory: "link",
        eventAction: "mouseover",
        eventLabel: this.target,
        eventValue: this.href,
      });
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
  padding: 0.5em 1.5em
  text-align: center

  &:hover
    color: #ffffff
    background-color: #dd8800
</style>
