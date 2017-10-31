<template>
    <b-navbar toggleable="md" type="dark" variant="info">

        <b-nav-toggle target="nav_collapse"></b-nav-toggle>

        <b-navbar-brand href="#">Points Board</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

            <b-nav is-nav-bar v-if="users.length > 0">
                <b-nav-item href="#" v-for="user in users" :to="user.uuid.toString()">{{user.name}}</b-nav-item>
            </b-nav>
            <b-nav is-nav-bar>
                <b-nav-item href="#" @click="addUser">Add</b-nav-item>
            </b-nav>

        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
  name: 'nav',
  props: {
      users: Array
  },
  data () {
    return {
      pointItems: [],
      userPoints: null
    }
  },
  methods: {
    addUser(e){
        this.$emit("addUser");
    }
  }
}
</script>
