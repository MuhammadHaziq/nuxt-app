<template>
  <BlogFormModel :show-modal.sync="showModal">
    <template #title>
      Update Blog
    </template>
    <template #body>
      <v-row>
        <v-col cols="12" sm="12" md="12">
          <Input
            v-model="blog.title"
            label="Blog Title"
            :messages="nameErrors"
            :v="$v.blog.title"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" md="12">
          <Input
            v-model="blog.author"
            label="Blog Author"
            :messages="authorErrors"
            :v="$v.blog.author"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" md="12">
          <Input
            v-model="blog.shortDescription"
            label="Shot Desciption"
            counter="25"
            :messages="shortDescriptionErrors"
            :v="$v.blog.shortDescription"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" md="12">
          <Textarea
            v-model="blog.longDescription"
            label="Long Desciption"
            counter="1500"
            :messages="longDescriptionErrors"
            :v="$v.blog.longDescription"
          />
        </v-col>
      </v-row>
    </template>
    <template #footer>
      <Button color="red darken-1" :text="text" @clickFunction="modelClose">
        Close
      </Button>
      <Button color="blue darken-1" :text="text" @clickFunction="submit">
        Update
      </Button>
    </template>
  </BlogFormModel>
</template>
<script>
/* eslint-disable-next-line */
/* eslint-disable */
// console.log(this.blogData)
// these commented component add as plugin so no need to import in any component
// import Input from '../inputs/Input'
// import Textarea from '../inputs/Textarea'
// import Button from '../buttons/Button'
import { validationMixin } from 'vuelidate'
import { required, maxLength, email, minLength } from 'vuelidate/lib/validators'
import BlogFormModel from '../models/BlogFormModel'

export default {
  name: 'BlogForm',
  components: {
    BlogFormModel
    // Input,
    // Textarea,
    // Button
  },
  mixins: [validationMixin],
  middleware: ['checkAuth', 'auth'],
  validations: {
    blog: {
      title: { required, minLength: minLength(5) },
      author: {
        required,
        maxLength: maxLength(10)
      },
      shortDescription: {
        required,
        minLength: minLength(5),
        maxLength: maxLength(25)
      },
      longDescription: {
        required,
        minLength: minLength(20),
        maxLength: maxLength(1500)
      },
      email: { required, email }
    }
  },
  props: {
    blogData: {
      type: Object,
      required: false,
      default: () => {}
    },
    showModal: {
      type: Boolean,
      default: false,
      required: true
    },
    openModelUpdate: {
      type: Function,
      default: null
      // required: true
    }
  },
  data: () => ({
    blog: {
      blog_id: '',
      title: '',
      author: '',
      shortDescription: '',
      longDescription: ''
    },
    text: true
  }),
  computed: {
    nameErrors() {
      const errors = []
      if (!this.$v.blog.title.$dirty) return errors
      !this.$v.blog.title.minLength &&
        errors.push('Blog Name  must be at most 5 characters long')
      !this.$v.blog.title.required && errors.push('Blog Name is required.')
      return errors
    },
    authorErrors() {
      const errors = []
      if (!this.$v.blog.author.$dirty) return errors
      !this.$v.blog.author.maxLength &&
        errors.push('Name must be at most 10 characters long')
      !this.$v.blog.author.required && errors.push('Name is required.')
      return errors
    },
    shortDescriptionErrors() {
      const errors = []
      if (!this.$v.blog.shortDescription.$dirty) return errors
      !this.$v.blog.shortDescription.minLength &&
        errors.push('shortDescription  must be at most 5 characters long')
      !this.$v.blog.shortDescription.maxLength &&
        errors.push('Name must be at most 25 characters long')
      !this.$v.blog.shortDescription.required &&
        errors.push('Short Desciption is required.')
      return errors
    },
    longDescriptionErrors() {
      const errors = []
      if (!this.$v.blog.longDescription.$dirty) return errors
      !this.$v.blog.longDescription.minLength &&
        errors.push('shortDescription  must be at most 20 characters long')
      !this.$v.blog.longDescription.maxLength &&
        errors.push('Name must be at most 1500 characters long')
      !this.$v.blog.longDescription.required &&
        errors.push('Long Desciption is required.')
      return errors
    }
  },
  watch: {
    blogData: function(n, o) {
      this.blog.blog_id = n.id
      this.blog.title = n.blog_name
      this.blog.author = n.blog_author
      this.blog.shortDescription = n.short_description
      this.blog.longDescription = n.long_description
      console.log('blogData', n, o) // n is the new value, o is the old value.
    }
  },

  methods: {
    modelClose() {
      this.$v.$reset()
      this.$emit('openModelUpdate')
    },
    submit() {
      this.$v.$touch()
      const data = {
        blog_id: this.blog.blog_id,
        blog_name: this.blog.title,
        blog_author: this.blog.author,
        short_description: this.blog.shortDescription,
        long_description: this.blog.longDescription
      }
      console.log(data)
      this.$store.dispatch('adminStore/update_blog_detail', data)
    }
    // dialog = false
  }
}
</script>
