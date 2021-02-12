<template>
  <div class="user-profile">
    <div class="user-profile__user-panel">
      <h1 class="user-profile__username">@{{ state.user.username }}</h1>
      <div class="user-profile__admin-badge" v-if="state.user.isAdmin">
        Admin
      </div>
      <div class="user-profile__follower-count">
        <strong>Followers:</strong>{{ state.followers }}
      </div>
    </div>
    <div class="user-profile__twoots-wrapper">
      <CreateTwootPanel @add-twoot="addTwoot" />
      <TwootItem
        v-for="(twoot, index) in state.user.twoots"
        :key="index"
        :username="state.user.username"
        :twoot="twoot"
        @favourite="toggleFavourite"
      />
    </div>
  </div>
</template>

<script>
import TwootItem from "./TwootItem";
import CreateTwootPanel from "./CreateTwootPanel";
import { reactive, ref, watch } from "vue";

export default {
  name: "App",
  components: {
    TwootItem,
    CreateTwootPanel,
  },
  setup() {
    const state = reactive({
      followers: 0,
      user: {
        id: 1,
        username: "_Sandra",
        firstName: "Sandra",
        lastName: "Bee",
        email: "sandra.bayabos@gmail.com",
        isAdmin: true,
        twoots: [
          { id: 1, content: "Twotter is amazing!" },
          { id: 2, content: `Don't forget to subscribe to sandra` },
        ],
      },
    })

    function followUser() {
      state.followers++;
    }

    function toggleFavourite(id) {
      console.log(`Favourited Tweet ${id}`);
    }

    function addTwoot(twoot) {
      state.user.twoots.unshift({
        id: state.user.twoots.length + 1,
        content: twoot,
      });
    }

    const follower = ref(0)
    watch(follower,(newFollowerCount, oldFollowerCount) => {
      if (oldFollowerCount < newFollowerCount) {
  //       console.log(`${this.user.username} has gained a follower`);
      }
    })

    return {
      state,
      followUser,
      toggleFavourite,
      addTwoot
    }
  },
  // data() {
  //   return {
  //     followers: 0,
  //     user: {
  //       id: 1,
  //       username: "_Sandra",
  //       firstName: "Sandra",
  //       lastName: "Bee",
  //       email: "sandra.bayabos@gmail.com",
  //       isAdmin: true,
  //       twoots: [
  //         { id: 1, content: "Twotter is amazing!" },
  //         { id: 2, content: `Don't forget to subscribe to sandra` },
  //       ],
  //     },
  //   };
  // },
  // watches a data point & when it changes, it runs a function
  // watch: {
  //   followers(newFollowerCount, oldFollowerCount) {
  //     if (oldFollowerCount < newFollowerCount) {
  //       console.log(`${this.user.username} has gained a follower`);
  //     }
  //   },
  // },
  // methods: {
    // followUser() {
    //   this.followers++;
    // },
    // toggleFavourite(id) {
    //   console.log(`Favourited Tweet ${id}`);
    // },
    // addTwoot(twoot) {
    //   this.user.twoots.unshift({
    //     id: this.user.twoots.length + 1,
    //     content: twoot,
    //   });
    // },
  // },
  // when you mount this component, run this function
  mounted() {
    this.followUser();
  },
};
</script>

<style lang="scss" scoped>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  padding: 50px 5%;

  .user-profile__user-panel {
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #dfe3e8;

    .user-profile__admin-badge {
      background: rebeccapurple;
      color: white;
      border-radius: 5px;
      margin-right: auto;
      padding: 0 10px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    h1 {
      margin: 0;
    }
  }
  .user-profile__create-twoot {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    border-top: 1px solid #dfe3e8;

    &.--exceeded {
      color: red;
      border-color: red;

      button {
        background-color: red;
        border: none;
        color: white;
      }
    }
  }
}
</style>
