<template>
  <div class="user-profile__user-panel">
    <h1 class="user-profile__username">@{{ user.username }}</h1>
    <div class="user-profile__admin-badge" v-if="user.isAdmin">
      Admin
    </div>
    <div class="user-profile__follower-count">
      <strong>Followers:</strong>{{ followers }}
    </div>
    <form action="" class="user-profile__create-twoot">
      <label for="newTwoot"><strong>New Twoot</strong></label>
      <textarea id="newTwoot" rows="4" v-model="newTwootContent"></textarea>
      <div class="user-profile__create-twoot-type">
        <label for="newTwootType"><strong>Type:</strong></label>
        <select id="newTwootType" v-model="selectedTwootType">
          <option :value="option.value" v-for="(option, index) in twootTypes" :key="index">
            {{ option.name }}
          </option>
        </select>
      </div>
    </form>
    <div class="user-profile__twoots-wrapper">
      <TwootItem
        v-for="(twoot, index) in user.twoots"
        :key="index"
        :username="user.username"
        :twoot="twoot"
        @favourite="toggleFavourite"
      />
    </div>
  </div>
</template>

<script>
import TwootItem from "./TwootItem";

export default {
  name: "App",
  components: {
    TwootItem,
  },
  data() {
    return {
      newTwootContent: '',
      selectedTwootType: 'instant',
      twootTypes: [
        { value: 'draft', name: 'Draft' },
        { value: 'instant', name: 'Instant Twoot' }
      ],
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
    };
  },
  // watches a data point & when it changes, it runs a function
  watch: {
    followers(newFollowerCount, oldFollowerCount) {
      if (oldFollowerCount < newFollowerCount) {
        console.log(`${this.user.username} has gained a follower`);
      }
    },
  },
  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`;
    },
  },
  methods: {
    followUser() {
      this.followers++;
    },
    toggleFavourite(id) {
      console.log(`Favourited Tweet ${id}`);
    },
  },
  // when you mount this component, run this function
  mounted() {
    this.followUser();
  },
};
</script>

<style>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  padding: 50px 5%;
}

.user-profile__user-panel {
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #dfe3e8;
}

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

.user-profile__create-twoot {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  border-top: 1px solid #dfe3e8;
}
</style>
