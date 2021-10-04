<template>
  <div>
    <button @click="connectToSpotify">
      Se connecter à Spotify
    </button>
  </div>
</template>

<script>
export default {
  name: "ConnectButton",

  methods: {
    connectToSpotify(){
      const scopes = 'user-read-private user-read-email user-top-read';

      window.location.href = 'https://accounts.spotify.com/authorize' +
        '?response_type=code' +
        '&client_id=' + 'b857ead02e704a90a464ce51c488b5f1' +
        (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
        '&redirect_uri=' + encodeURIComponent('http://localhost:3000/callback');
    },
  }

}
</script>
