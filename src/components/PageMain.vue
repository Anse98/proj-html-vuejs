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
      navHeroPage: ['HOME', 'SERVICES', 'ABOUT', 'PROJECTS', 'RESULTS'],

      navActionPage: ['ALL', 'INSTITUTIONAL', 'SOCIAL', 'EVENTS', 'INNOVATION', 'ENVIROMENT', 'TECHNOLOGY'],
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
      <Hero :item="navHeroPage" />
      <BusinessArea />
      <PageNetwork />
      <Actions :item="navActionPage" />
      <Results />
      <ContactUs />
    </div>
  </main>
</template>

<style scoped lang="scss"></style>