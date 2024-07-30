<template>
  <div class="toast">{{ message }}</div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  props: ['message']
}

export const useToastEffect = () => {
  const toastData = reactive({
    show: false,
    toastMsg: ''
  })
  const showToast = (message) => {
    toastData.show = true
    toastData.toastMsg = message
    setTimeout(() => {
      toastData.show = false
      toastData.toastMsg = ''
    }, 2000)
  }
  const { show, toastMsg } = toRefs(toastData)
  return { show, toastMsg, showToast }
}
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: .1rem;
  background: rgba(0, 0, 0, 0.35);
  border-radius: .05rem;
  color: #FFFFFF;
}
</style>
