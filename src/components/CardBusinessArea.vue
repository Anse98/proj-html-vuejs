<script>
export default {
  data() {
    return {

    }
  },

  props: {
    item: {
      type: Object,
      required: true,
    }
  }
}
</script>

<template>
  <div class="card">
    <div class="card-content">

      <div class="card-header">
        <figure>
          <img :src="item.src" alt="#">
        </figure>
        <font-awesome-icon icon="fa-solid fa-arrow-right" class="icon" />
      </div>

      <div class="card-text">
        <h3 class="title">{{ item.title }}</h3>
        <p class="description">{{ item.description }}</p>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  padding: 10px;
  flex-basis: 33.333%;

  .card-content {
    background-color: white;
    padding: 22px;
    border-radius: 7px;

    figure {
      max-width: 30px;

      img {
        filter: invert(20%) sepia(8%) saturate(6822%) hue-rotate(139deg) brightness(100%) contrast(93%);
      }
    }

    .card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 14px;

      .icon {
        color: #058283;
      }
    }

    .card-text {
      .title {
        margin-bottom: 14px;
      }

      .description {
        color: #7F8990;
      }
    }
  }
}
</style>