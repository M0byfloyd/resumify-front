<template>
  <div>
    GG t conectez
  </div>
</template>

<script>

import qs from 'qs';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "Callback",

  computed: {
    ...mapGetters({
      getToken: 'user/getToken'
    })
  },

  methods: {
    ...mapActions({
      setToken: 'user/setToken',
    })
  },

  mounted() {
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

   this.$axios(options)
   .then((resp)=>{
     this.setToken(resp.data.access_token);
     console.log(this.getToken);
   });

  }
}
</script>
