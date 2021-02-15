<template>
  <div class="home">
    <h1>Home</h1>
    <div class="users-list">
      <router-link v-for="(user, index) in users" :to="{ name: 'UserProfile', params: { userId: user.id } }" :key="index">
        <li>{{user.username}}</li>
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { users } from "../assets/users";
import { useStore } from "vuex" 
import { computed } from "vue"

export default {
  name: 'Home',
  setup() {
    const store = useStore;
    const user = computed(() => store.state.User.user)
    return {
      users,
      user
    }
  }
  
}
</script>

<style lang="scss" scoped>

.users-list {

}

</style>
