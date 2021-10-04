<template>
  <p class="text-center">Please wait</p>
</template>

<script>

import qs from 'qs';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "Callback",

  computed: {
    ...mapGetters({
      getToken: 'user/getToken',
      getInfos: 'user/getInfos',
    })
  },

  methods: {
    ...mapActions({
      setToken: 'user/setToken',
      setImage: 'user/setImage',
      setUserId: 'user/setUserId',
      setInfos: 'user/setInfos'
    }),

    async getTokenFromSpotify() {
      const client_id = 'b857ead02e704a90a464ce51c488b5f1';
      const client_secret = '3eb5b7a150dd4a76b2ed958f36bc1b96';

      const data = {
        'grant_type': 'authorization_code',
        'code': this.$route.query.code,
        'redirect_uri': 'http://localhost:3000/callback',
      }

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + Buffer.from(`${client_id}:${client_secret}`).toString('base64')
        },
        data: qs.stringify(data),
        url:'https://accounts.spotify.com/api/token',
      }

      await this.$axios(options)
        .then((resp)=>{
          this.setToken(resp.data.access_token);
        });
    },

    getMeFromSpotify() {
      const optionsMe = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Bearer ${this.getToken}`,
        },
        url:'https://api.spotify.com/v1/me',
      }
      this.$axios(optionsMe)
        .then((data)=>{
          this.setInfos(data.data)
          this.$router.push('/me')
        })
    }
  },

 async mounted() {
    await this.getTokenFromSpotify();
    await this.getMeFromSpotify();
  }
}
</script>
