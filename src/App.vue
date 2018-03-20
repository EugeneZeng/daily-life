<template>
  <b-container fluid id="app">
    <nav-bar @addUser="showUserDialog" :users="users"></nav-bar>
    <h1>{{ msg }}</h1>
    <transition>
      <router-view :users="users"></router-view>
    </transition>
    <user-dialog @submitUser="submitUser" :modalId="userDialog.id"></user-dialog>
  </b-container>
</template>

<script>
import navBar from "./Navbar.vue";
import userDialog from "./UserDialog.vue";
import backend from "./backend";
export default {
  name: "app",
  components: { navBar, userDialog },
  data() {
    return {
      msg: "Welcome to Points Board App",
      users: [],
      pointItems: [],
      userPoints: null,
      userDialog: {
        id: "userDialogForm"
      }
    };
  },
  mounted() {
    this.getUsers();
    console.log(this.$route);
  },
  methods: {
    showUserDialog(e) {
      this.$root.$emit("bv::show::modal", "userDialogForm");
    },
    submitUser(user) {
      backend
        .addUser({
          name: user.name,
          role: user.role,
          face: user.face
        })
        .then(result => {
          console.log(result.data);
          this.users.push(result.data.data);
        })
        .catch(e => {
          console.error(e);
        });
    },
    getUsers() {
      backend
        .getUserList()
        .then(result => {
          this.users = result.data.data;
        })
        .catch(e => {
          console.error(e);
        });
    }
  }
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
