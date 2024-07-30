<template>
  <div class="wrapper">
    <StaticPart />
    <NearbyView />
  </div>
  <DockerView />
</template>

<script>
import NearbyView from './NearbyView.vue'
import StaticPart from './StaticPart.vue'
import DockerView from './DockerView.vue'
export default {
  name: 'HomeView',
  components: { StaticPart, NearbyView, DockerView }
}
</script>

<style lang="scss" scoped>
@import '../../style/varibles.scss';
@import '../../style/mixins.scss';
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  padding: 0 0.18rem .1rem .18rem;
}
</style>
