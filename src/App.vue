<template>
  <div id="app">
    <nav>
      <router-link to="/">
        <h1>HOMEPAGE LINK</h1>
      </router-link>
    </nav>
    <!-- <UserProfile/> -->
    <router-view />
  </div>
</template>

<script>
// import UserProfile from './views/UserProfile';

export default {
  name: "App",
  // components: { UserProfile }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-color: #f3f5fa;
}
</style>
