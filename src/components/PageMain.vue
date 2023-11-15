<script>
import Hero from './PageHero.vue';
import BusinessArea from './BusinessArea.vue';

export default {
  data() {
    return {

    }
  },
  components: {
    Hero,
    BusinessArea,
  }

}
</script>

<template>
  <main>
    <div class="main-content">
      <Hero />
      <BusinessArea />
    </div>
  </main>
</template>

<style scoped lang="scss"></style>