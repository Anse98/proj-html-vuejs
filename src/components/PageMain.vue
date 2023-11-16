<script>
import Hero from './PageHero.vue';
import BusinessArea from './BusinessArea.vue';
import PageNetwork from './PageNetwork.vue';
import Actions from './Actions.vue';
import Results from './Results.vue';

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
    Results,
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
      <Results />
    </div>
  </main>
</template>

<style scoped lang="scss"></style>