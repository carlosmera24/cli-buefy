<template>
  <div id="app" >
    <HelloWorld msg="App con Vue-Cli y Buefy"/>       
    <Navbar v-bind:menuActive="menuActive" />
    <section class="section" id="main">
      <Home v-if="menuActive.home" />
      <Form v-else-if="menuActive.form" />
    </section>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>Creado por <strong>Carlos Eduardo Mera Ruiz</strong></p>
      </div>
    </footer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Form from './components/Form'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Navbar,
    Home,
    Form
  },
  data() {
    return {
      menuActive: {
        home: true,
        form: false
      }
    }
  },
}
</script>
