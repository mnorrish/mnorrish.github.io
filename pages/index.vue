<template>
  <section class="container">
    <div class="content">
      <h1 class="title">Matthew Norrish</h1>
      <h2 class="subtitle">Software developer</h2>
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
import LinkButton from "~/components/LinkButton";

export default {
  components: {
    LinkButton
  }
};
</script>

<style scoped lang="stylus">
.container
  min-height: 100vh
  display: flex
  justify-content: center
  align-items: flex-end

.content
  width: 100%
  margin: 2rem

.title
  font-family: "adelle", serif
  display: block
  font-weight: 600
  font-size: 2rem
  color: #35495e
  line-height: 1em

  font-variant-ligatures: common-ligatures
  -moz-font-feature-settings: "liga", "clig"
  -webkit-font-feature-settings: "liga", "clig"
  font-feature-settings: "liga", "clig"

.subtitle
  font-weight: 300
  font-size: 1.4rem
  color: #526488
  margin-bottom: 15px
  line-height: 1em
  margin-bottom: 1em

.links
  display: flex

.link
  flex-grow: 1

.link + .link
  margin-left: 12px

.email
  font-weight: 300
  font-size: 1rem
  margin-bottom: 20px
  line-height: 1em

.email a
  color: #3b8070
  text-decoration: none

.email a:hover
  text-decoration: underline

@media screen and (min-width: 500px)
  .title
    font-size: 3rem
    letter-spacing: -1px

  .subtitle
    font-size: 2.1rem

  .link
    flex-grow: 0

@media screen and (min-width: 1200px)
  .title
    font-size: 4rem
    letter-spacing: -2px

  .subtitle
    font-size: 2.8rem

  .content
    margin: 4rem
</style>
