<template class="me">
  <v-container v-if="token">
    <v-row>
      <v-col>
        <v-avatar
          color="primary"
          rounded
          size="300"
        >
          <img :src="userImage" :alt="`${userId} avatar`" />
        </v-avatar>
      </v-col>
      <v-col>
        <h1>Bienvenue <span>{{ displayName }}</span> <span v-if="infos.product === 'premium'">⭐</span></h1>
        <a href="">Voir votre profil Spotify</a>
        <p>{{infos}}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "me",

  computed: {
    ...mapGetters({
      userId: 'user/getId',
      userImage: 'user/getImage',
      infos: 'user/getInfos',
      displayName: 'user/getDisplayName',
      token: 'user/getToken',
    }),
  },

  created() {
    if (!this.token) {
      this.$router.push('/')
    }
  },

  mounted() {
    console.log(this.infos);
  }
}
</script>
