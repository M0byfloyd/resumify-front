<template>
  <v-container v-if="token">
    <v-row>
      <v-col cols="3">
        <v-avatar
          color="primary"
          rounded
          size="200"
        >
          <img :src="userImage" :alt="`${userId} avatar`"/>
        </v-avatar>
      </v-col>
      <v-col cols="9">
        <h1>
          <span v-if="isPremium" title="Vous êtes premium !">⭐</span>
          Bienvenue <span>{{ displayName }}</span>
        </h1>
        <p>{{ followers }} follower(s)</p>
        <a target="_blank" :href="accountLink">Voir votre profil Spotify</a>
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

    accountLink() {
      return `https://open.spotify.com/user/${this.infos?.id}`;
    },

    isPremium() {
      return this.infos?.product;
    },

    followers() {
      return this.infos.followers.total;
    }
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
