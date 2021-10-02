<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <ConnectContainer />
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import ConnectContainer from "@/components/homepage/Connect/ConnectContainer";
export default {
  components: {ConnectContainer}
}
</script>
