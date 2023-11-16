<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    }
  }
}
</script>

<template>
  <div class="footer-menu">
    <h3 class="title">{{ item.title }}</h3>
    <ul>
      <li v-for="(voice, index) in item.voices" :key="index">
        <font-awesome-icon icon="fa-solid fa-chevron-right" class="icon" />
        {{ voice }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.footer-menu {
  padding: 18px;
  background-color: #19191F;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .title {
    color: white;
    margin-bottom: 14px;
  }

  ul {
    display: flex;
    flex-direction: column;
    row-gap: 6px;
  }

  .icon {
    margin-right: 8px;
  }
}
</style>