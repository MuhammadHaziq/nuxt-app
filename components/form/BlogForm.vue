<template>
  <BlogFormModel :showModal.sync="showModal">
    <template #title>
      New Blog
    </template>
    <template #body>
      <v-row>
        <v-col cols="12" sm="12" md="12">
          <Input
            v-model="blog.title"
            label="Blog Title"
            counter="10"
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
            counter="10"
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
            counter="20"
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
            counter="500"
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
        Submit
      </Button>
    </template>
  </BlogFormModel>
</template>
<script>
import { mapGetters } from 'vuex'
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
        maxLength: maxLength(20)
      },
      longDescription: {
        required,
        minLength: minLength(20),
        maxLength: maxLength(500)
      },
      email: { required, email }
    }
  },
  props: {
    showModal: {
      type: Boolean,
      default: false,
      required: true
    },
    openModel: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    blog: {
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
        errors.push('Name must be at most 20 characters long')
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
        errors.push('Name must be at most 500 characters long')
      !this.$v.blog.longDescription.required &&
        errors.push('Long Desciption is required.')
      return errors
    },
    ...mapGetters({
      userDetail: 'authStore/get_user_detail'
    })
  },
  watch: {
    showModal(n, o) {
      console.log('blogData', n, o) // n is the new value, o is the old value.
    }
  },
  methods: {
    modelClose() {
      this.$v.$reset()
      this.$emit('openModel')
    },
    submit() {
      this.$v.$touch()
      const data = {
        blog_name: this.blog.title,
        blog_author: this.blog.author,
        short_description: this.blog.shortDescription,
        long_description: this.blog.longDescription,
        userId: this.userDetail.userId
      }
      console.log(data)
      this.$store.dispatch('adminStore/create_blog_post', data)
    }
    // dialog = false
  }
}
</script>
