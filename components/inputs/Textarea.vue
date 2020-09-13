<template>
  <v-textarea
    :value="value"
    :counter="counter"
    auto-grow
    :color="color"
    :label="label"
    outlined
    shaped
    rows="4"
    row-height="30"
    :error-messages="messages"
    @input="set"
    @blur="blurFunction"
  ></v-textarea>
</template>
<script>
export default {
  name: 'Textarea',
  props: {
    counter: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'default'
    },
    v: {
      type: Object,
      required: true
    },
    messages: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    set(value) {
      this.v.$touch()
      this.$emit('input', value)
    },
    blurFunction() {
      this.v.$touch()
    }
  }
}
</script>
