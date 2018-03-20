<template>
    <b-navbar toggleable="md" type="dark" variant="info">

        <b-nav-toggle target="nav_collapse"></b-nav-toggle>

        <b-navbar-brand to="#">Points Board</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav v-if="users.length > 0">
                <b-nav-item href="#" v-for="user in users" :to="user.uuid.toString()" :key="'user_'+user.uuid">{{user.name}}</b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav>
                <b-nav-item href="#" @click="addUser">Add</b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav>
                <b-nav-item to="videos">videos</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
  name: "navbar",
  props: {
    users: Array
  },
  data() {
    return {
      pointItems: [],
      userPoints: null
    };
  },
  methods: {
    addUser(e) {
      this.$emit("addUser");
    }
  }
};
</script>
