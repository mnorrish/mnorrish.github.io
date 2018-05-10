<template>
  <header>
    <h1 class="title">
      <slot name="title"/>
    </h1>
    <h2 class="subtitle">
      <slot name="subtitle"/>
    </h2>
  </header>
</template>

<style lang="stylus" scoped>
.title
  font-family: adelle, serif
  display: block
  font-weight: 600
  font-size: 2rem
  color: #ffffff
  line-height: 1em

.subtitle
  font-weight: 300
  font-size: 1.4rem
  color: #ffffff
  margin-bottom: 15px
  line-height: 1em
  margin-bottom: 1em

@media screen and (min-width: 500px)
  .title
    font-size: 3rem
    letter-spacing: -1px

  .subtitle
    font-size: 2.1rem

@media screen and (min-width: 1200px)
  .title
    font-size: 4rem
    letter-spacing: -2px

  .subtitle
    font-size: 2.8rem
</style>
