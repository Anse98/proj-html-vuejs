<script >
import PageHeader from './components/PageHeader.vue';
import PageHero from './components/PageHero.vue';

export default {

  components: {
    PageHeader,
    PageHero
  }
}

</script>

<template>
  <PageHeader />
  <PageHero />
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
