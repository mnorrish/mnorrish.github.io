<template>
  <section class="container">
    <div class="content">
      <h1 class="title">Matthew Norrish</h1>
      <h2 class="subtitle">Software developer</h2>
      <a href="mailto:matt@mnorrish.co.nz" class="email">matt@mnorrish.co.nz</a>
      <div class="links">
        <link-button href="https://github.com/mnorrish" class="link">GitHub</link-button>
        <link-button href="https://linkedin.com/in/mnorrish" class="link">LinkedIn</link-button>
      </div>
    </div>
  </section>
</template>

<script>
import LinkButton from '../components/LinkButton';

export default {
  components: {
    LinkButton,
  }
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.content {
  width: 100%;
  margin: 2rem;
}

.title {
  font-family: "Source Sans Pro", BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 2rem;
  color: #35495e;
}

.subtitle {
  font-weight: 300;
  font-size: 1rem;
  color: #526488;
  margin-bottom: 15px;
}

.links {
  display: flex;
}

.link {
  flex-grow: 1;
}

.link + .link {
  margin-left: 12px;
}

.email {
  display: block;
  font-weight: 300;
  font-size: 1rem;
  color: #3b8070;
  text-decoration: none;
  margin-bottom: 20px;
}

.email:hover {
  text-decoration: underline;
}

@media screen and (min-width: 480px) {
  .title {
    font-size: 3rem;
  }

  .subtitle {
    font-size: 1.5rem;
  }

  .content {
    margin-left: 3rem;
  }

  .link {
    flex-grow: 0;
  }
}

@media screen and (min-width: 1200px) {
  .title {
    font-size: 4rem;
  }

  .subtitle {
    font-size: 2rem;
  }

  .content {
    margin-left: 4rem;
  }
}
</style>
