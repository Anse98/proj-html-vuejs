<script>
import Hero from './PageHero.vue';
import BusinessArea from './BusinessArea.vue';
import PageNetwork from './PageNetwork.vue';
import Actions from './Actions.vue';

export default {
  data() {
    return {

    }
  },
  components: {
    Hero,
    BusinessArea,
    PageNetwork,
    Actions,
  }

}
</script>

<template>
  <main>
    <div class="main-content">
      <Hero />
      <BusinessArea />
      <PageNetwork />
      <Actions />
    </div>
  </main>
</template>

<style scoped lang="scss"></style>