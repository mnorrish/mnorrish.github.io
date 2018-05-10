<template>
  <a 
    :href="href"
    @click="click"
    @mouseover="mouseover">
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      default: "",
    },
  },
  computed: {
    href() {
      let href = `mailto:${this.email}`;
      if (this.subject) href += `?subject=${encodeURIComponent(this.subject)}`;
      return href;
    },
  },
  methods: {
    click() {
      this.$ga.event({
        eventCategory: "link",
        eventAction: "click",
        eventLabel: "email",
        eventValue: this.email,
      });
    },
    mouseover() {
      this.$ga.event({
        eventCategory: "link",
        eventAction: "mouseover",
        eventLabel: "email",
        eventValue: this.email,
      });
    },
  },
};
</script>

<style scoped lang="stylus">

</style>
