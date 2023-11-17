<script>
import CardActions from './CardActions.vue'

export default {

  components: {
    CardActions,
  },

  data() {
    return {
      cards: [
        {
          class: 'card-content project-1',
          title: 'Academic professional program in social media'
        },

        {
          class: 'card-content project-2',
          title: "President's speech at the annual meeting"
        },

        {
          class: 'card-content project-3',
          title: 'International business trip in Shangai'
        },

        {
          class: 'card-content project-4',
          title: 'Technology workshop with education theme'
        },

        {
          class: 'card-content project-5',
          title: 'Donation of clothes and food to the partner NGO'
        },

        {
          class: 'card-content project-6',
          title: 'Confraternization of the procurement team'
        },
      ],

      indexActive: 0,
    }
  },

  props: {
    item: {
      type: Array,
      required: true,
    }
  },

  methods: {
    showActive(index) {
      this.indexActive = index;
    }
  }

}
</script>

<template>
  <section class="actions">
    <div class="container">

      <!-- header -->

      <header>

        <div class="mini-title">
          <h5>WE DO MORE FOR EVERYONE</h5>
        </div>

        <div class="title">
          <h1>Actions & <span class="bg-azure">Projects</span></h1>
        </div>
      </header>

      <!-- navbar -->

      <nav>
        <ul>
          <li v-for="(listItem, index) in item" :key="index" @click="showActive(index)"
            :class="{ bgAzure: index === indexActive }">
            {{ listItem }}
          </li>
        </ul>
      </nav>

      <!-- cards -->
      <div class="cards">

        <CardActions v-for="(card, index) in cards" :key="index" :item="card" />

      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.actions {
  padding: 80px 12px;

  .container {
    header {
      text-align: center;

      .mini-title {
        margin-bottom: 26px;
        color: #00A4A3;
      }

      .title {
        margin-bottom: 40px;
        font-size: 20px;


        .bg-azure {
          color: #00A4A3;
        }
      }
    }

    nav {
      margin-bottom: 30px;

      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 24px;

        li {
          color: #7F8990;
          cursor: pointer;
        }
      }
    }

    .cards {
      display: flex;
      flex-wrap: wrap;
      row-gap: 20px;
    }
  }
}
</style>