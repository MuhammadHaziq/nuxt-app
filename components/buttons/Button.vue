<template>
  <v-btn
    v-if="link !== ''"
    :type="type"
    :to="link"
    text
    :color="color"
    nuxt-link
    @click="$emit('clickFunction')"
    ><slot
  /></v-btn>
  <v-btn v-else :type="type" text :color="color" @click="$emit('clickFunction')"
    ><slot
  /></v-btn>
</template>
<script>
export default {
  name: 'Button',
  props: {
    color: {
      type: String,
      required: true
    },
    clickFunction: {
      type: Function,
      default: null
    },
    text: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'button'
    },
    link: {
      type: String,
      default: ''
    }
  }
}
</script>
