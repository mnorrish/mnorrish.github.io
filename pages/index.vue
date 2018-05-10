<template>
  <section class="container">
    <div class="content">
      <page-title>
        <template slot="title">Matthew Norrish</template>
        <template slot="subtitle">Software developer</template>
      </page-title>
      <div class="email"><a href="mailto:matt@mnorrish.co.nz">matt@mnorrish.co.nz</a></div>
      <div class="links">
        <link-button 
          href="https://github.com/mnorrish" 
          class="link">GitHub</link-button>
        <link-button 
          href="https://linkedin.com/in/mnorrish" 
          class="link">LinkedIn</link-button>
      </div>
    </div>
  </section>
</template>

<script>
import Title from "~/components/Title";
import LinkButton from "~/components/LinkButton";

export default {
  components: {
    "page-title": Title,
    LinkButton,
  },
};
</script>

<style scoped lang="stylus">
.container
  min-height: 100vh
  display: flex
  justify-content: center
  align-items: center

.content
  width: 100%
  margin: 2rem

.links
  display: flex
  max-width: 360px;

.link
  flex-grow: 1
  
  & + .link
    margin-left: 12px

.email
  font-weight: 300
  font-size: 1rem
  margin-bottom: 20px
  line-height: 1em
  
  a
    color: #dd8800
    text-decoration: none

    &:hover
      color: #ffffff

@media screen and (min-width: 1200px)
  .container
    align-items: flex-end

  .content
    margin: 4rem
</style>
