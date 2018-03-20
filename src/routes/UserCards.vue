<template>
  <b-card-group v-if="users.length > 0" deck>
      <b-card v-for="user in users" 
        :key="user.uuid"
        :id="user.uuid"
        :title="user.name"
        :img-src="user.face"
        :img-alt="user.name"
        img-fluid
        style="max-width: 20rem;"
        align="center">
            <b-button :to="user.uuid.toString()" variant="primary">Go</b-button>
        </b-card>
    </b-card-group>
</template>
<script>
export default {
  name: "userCards",
  props: {
    users: Array
  }
};
</script>
<style scoped>
.card .card-img {
  margin: 0 auto;
}
</style>

