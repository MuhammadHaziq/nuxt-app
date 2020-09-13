<template>
  <v-text-field
    :value="value"
    :label="label"
    :counter="counter"
    :error-messages="messages"
    @input="set"
    @blur="blurFunction"
  >
  </v-text-field>
  <!-- @input="$emit('input', $event)" -->
  <!-- :rules="rules" -->
</template>
<script>
export default {
  name: 'Input',
  props: {
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    counter: {
      type: String,
      default: ''
    },
    inputFunction: {
      type: Function,
      default: null
    },
    v: {
      type: Object,
      required: true
    },
    messages: {
      type: Array,
      default: null
    }
  },
  data: () => ({
    rules: [
      (value) => !!value || 'Required.',
      (value) => (value || '').length <= 20 || 'Max 20 characters',
      (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Invalid e-mail.'
      }
    ]
  }),
  methods: {
    updateValue: (value) => {
      this.$emit('input', value)
    },
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
