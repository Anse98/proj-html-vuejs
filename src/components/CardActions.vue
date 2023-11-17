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
  <div class="card">
    <div :class="item.class">
      <h2 class="title">{{ item.title }}</h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  flex-basis: 33.333%;
  padding: 0 10px;

  .card-content {
    height: 250px;
    position: relative;
    border-radius: 20px;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 20px;
    }

    .title {
      color: white;
      padding: 0 10px;
      text-align: center;
      position: absolute;
      bottom: 30px;
    }

    &.project-1 {
      background: url('/public/images/project-1.jpg') no-repeat center;
      background-size: cover;
    }

    &.project-2 {
      background: url('/public/images/project-2.jpg') no-repeat center;
      background-size: cover;
    }

    &.project-3 {
      background: url('/public/images/project-3.jpg') no-repeat center;
      background-size: cover;
    }

    &.project-4 {
      background: url('/public/images/project-4.jpg') no-repeat center;
      background-size: cover;
    }

    &.project-5 {
      background: url('/public/images/project-5.jpg') no-repeat center;
      background-size: cover;
    }

    &.project-6 {
      background: url('/public/images/project-6.jpg') no-repeat center;
      background-size: cover;
    }
  }
}
</style>