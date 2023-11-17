<script>
import CardBusinessArea from './CardBusinessArea.vue';

export default {
  data() {
    return {
      BusinessCards: [
        {
          src: '/public/svgs/svg-1.svg',
          title: 'Audit & Assurance',
          description: 'Lorem ipsum dolor sit amet consecteur adipiscing elit',
          id: 1
        },

        {
          src: '/public/svgs/svg-2.svg',
          title: 'Financial Advisory',
          description: 'Lorem ipsum dolor sit amet consecteur adipiscing elit',
          id: 2
        },

        {
          src: '/public/svgs/svg-3.svg',
          title: 'Analytics and M&A',
          description: 'Lorem ipsum dolor sit amet consecteur adipiscing elit',
          id: 3
        },

        {
          src: '/public/svgs/svg-4.svg',
          title: 'Middle Marketing',
          description: 'Lorem ipsum dolor sit amet consecteur adipiscing elit',
          id: 4
        },

        {
          src: '/public/svgs/svg-5.svg',
          title: 'Legal Consulting',
          description: 'Lorem ipsum dolor sit amet consecteur adipiscing elit',
          id: 5
        },

        {
          src: '/public/svgs/svg-6.svg',
          title: 'Regulatory Risk',
          description: 'Lorem ipsum dolor sit amet consecteur adipiscing elit',
          id: 6
        },

      ]
    }
  },

  components: {
    CardBusinessArea,
  }
}
</script>

<template>
  <section class="business">
    <div class="business-area">

      <div class="container">

        <!-- business area header -->
        <div class="mini-title">
          <h5>OUR BUSINESS AREA</h5>
        </div>

        <div class="business-area-text">

          <h1 class="title">Excellence in <span class="bg-azure">Services</span></h1>

          <div class="text">
            <p class="paragraph">
              We are leaders in providing consultancy services with a set of cutting edge technologies and a team of
              experienced and renowned professionals. These are some option that you can hire.
            </p>
            <button>SEE ALL</button>
          </div>
        </div>

        <!-- cards -->
        <div class="row">

          <CardBusinessArea v-for="card in BusinessCards" :key="card.id" :item="card" />

        </div>
      </div>

    </div>
  </section>
</template>

<style scoped lang="scss">
.business-area {
  background-color: #EEF4ED;
  padding: 80px 0;

  .container {

    .row {
      align-items: center;
    }

    .mini-title {
      margin-bottom: 30px;
      color: #00A6A6;
    }

    .business-area-text {
      .title {
        margin-bottom: 30px;
        font-size: 30px;
        font-weight: 800;

        .bg-azure {
          background-color: #CCE3DE;
          color: #058283;
        }
      }

      .text {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;

        .paragraph {
          flex-basis: 60%;
          color: #7F8990;
        }

        button {
          background-color: #058283;
          border: none;
          color: white;
        }
      }
    }
  }
}
</style>