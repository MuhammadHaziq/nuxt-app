<template>
  <v-app>
    <v-layout column justify-center align-center>
      <v-flex class="text-center" xs12 sm8 md6>
        <img src="/v.png" alt="Vuetify.js" class="mb-5" />
        <blockquote class="blockquote">
          {{ $route.params.id }}
          <footer>
            <small>
              <em>&mdash;John Johnson</em>
            </small>
          </footer>
        </blockquote>
      </v-flex>
    </v-layout>
  </v-app>
</template>
<script>
export default {
  // validate use for validate the params and it call before the mount and in which we have store, query, params
  validate(data) {
    console.log(data.params)
    // Validate the params in integer
    return /^\d+$/.test(data.params.id)
  }
}
</script>
