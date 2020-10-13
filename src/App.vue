<template>
  <div>
  <h1>666</h1>
    <input type="text" v-focus >
  </div>
</template>

<script>
import { ref, reactive, computed } from 'vue'

export default {
  directives: {
    focus: {
      // 指令的定义
      mounted(el) {
        // Focus the element
        el.focus()
      }
    }
  }
}
</script>
