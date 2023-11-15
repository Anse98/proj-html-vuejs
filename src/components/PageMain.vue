<script>
import Hero from './PageHero.vue';
import BusinessArea from './BusinessArea.vue';
import PageNetwork from './PageNetwork.vue';

export default {
  data() {
    return {

    }
  },
  components: {
    Hero,
    BusinessArea,
    PageNetwork,
  }

}
</script>

<template>
  <main>
    <div class="main-content">
      <Hero />
      <BusinessArea />
      <PageNetwork />
    </div>
  </main>
</template>

<style scoped lang="scss"></style>