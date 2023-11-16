<script>
import Hero from './PageHero.vue';
import BusinessArea from './BusinessArea.vue';
import PageNetwork from './PageNetwork.vue';
import Actions from './Actions.vue';
import Results from './Results.vue';
import ContactUs from './ContactUs.vue';

export default {
  data() {
    return {
      navItemList: ['HOME', 'SERVICES', 'ABOUT', 'PROJECTS', 'RESULTS'],
    }
  },
  components: {
    Hero,
    BusinessArea,
    PageNetwork,
    Actions,
    Results,
    ContactUs,
  }

}
</script>

<template>
  <main>
    <div class="main-content">
      <Hero :items="navItemList" />
      <BusinessArea />
      <PageNetwork />
      <Actions />
      <Results />
      <ContactUs />
    </div>
  </main>
</template>

<style scoped lang="scss"></style>