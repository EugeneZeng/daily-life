<template>
    <b-card v-if="users!=null">
          <b-media>
              <b-img class="rounded" :src="user.face" slot="aside" width="200" :alt="user.name"></b-img>
              <h5 class="mt-0">{{user.name}}</h5>
          </b-media>
  </b-card>
</template>
<script>
export default {
  name: "User",
  props: {
    id: String,
    users: Array
  },

  computed: {
    user() {
      let _this = this;
      return this.users.find(item => item.uuid == _this.id);
    }
  }
};
</script>
