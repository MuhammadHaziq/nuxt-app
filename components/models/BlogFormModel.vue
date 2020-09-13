<template>
  <v-dialog v-model="showModal" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline"><slot name="title"></slot></span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <slot name="body"></slot>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <slot name="footer"></slot>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'BlogFormModel',
  props: {
    showModal: {
      type: Boolean,
      default: false
    }
  }
}
</script>
