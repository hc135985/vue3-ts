<template>
    <div class="login">this is login
             <div class="login" v-color="red">this is aaa</div>    
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'login',
  mounted() {
    this.$store.commit('setUsername', 'hhh')
  },
  computed: {},
  methods: {},
  directive: {
    color: {
      bind: function(el, bind) {
        console.log(el, bind)
        //content
      },
      update: function(newValue, oldValue) {
        //content
      },
      unbind: function() {
        //content
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  font-size: 20px;
}
</style>
