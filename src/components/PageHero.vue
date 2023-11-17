<script>
export default {
  data() {
    return {
      clicked: false,
      btnRead: true,
    }
  },

  props: {
    item: {
      type: Array,
      required: true,
    }
  },

  methods: {
    btnClicked() {
      this.clicked = true
      this.btnRead = false
    },

    btnClickedAgain() {
      this.clicked = false
      this.btnRead = true
    }
  }
}
</script>

<template>
  <!-- navbar -->
  <section class="hero">
    <div class="container">
      <nav>
        <div class="hero-navbar">
          <div class="logo">
            <figure>
              <img src="/public/logo.PNG" alt="#">
            </figure>
          </div>

          <ul>
            <li v-for="listItem in item"><a href="#">{{ listItem }}</a></li>
            <li><button>GET IN TOUCH</button></li>
          </ul>
        </div>
      </nav>
    </div>
    <!-- hero content -->
    <div class="hero-content">
      <div class="hero-text">

        <h1 class="title"><span class="ready">Ready</span> <span class="bg-azure">Team</span></h1>

        <p class="text">No matter what your company needs, we will be ready to assist you in the best possible way.<br>
          <span class="read-more" v-show="clicked">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            tempora doloremque
            eius assumenda
            repellat quis perferendis vero libero architecto. Itaque, quia sunt. Quibusdam, porro quod vel libero
            assumenda error voluptates.
          </span>
        </p>


        <div class="buttons">
          <button class="get-btn">GET IN TOUCH</button>
          <button class="read-btn" @click="btnClicked()" v-if="btnRead">READ MORE <font-awesome-icon
              icon="fa-solid fa-chevron-down" class="icon" /></button>
          <button v-else @click="btnClickedAgain()" class="red-btn">HIDE<font-awesome-icon icon="fa-solid fa-chevron-up"
              class="icon" /></button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  nav {

    .hero-navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 8px;
      color: #42515A;

      .logo {
        figure {
          max-width: 130px;
        }
      }

      ul {
        display: flex;
        align-items: center;
        gap: 16px;

        button {
          border: none;
          background-color: #058283;
          color: white;
          font-weight: 600;
        }
      }
    }
  }

  .hero-content {
    height: 680px;
    background-image: url("public/images/bg-parallax.png");
    background-position: center center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

    .hero-text {
      max-width: 400px;
      text-align: center;

      .title {
        font-size: 50px;
        font-weight: 600;
        margin-bottom: 20px;

        .ready {
          color: #21333E;
        }

        .bg-azure {
          color: #058283;
        }
      }

      .text {
        max-width: 350px;
        line-height: 1.5em;
        color: #7F8990;
        margin-bottom: 20px;
      }

      .buttons {
        display: flex;
        justify-content: center;
        gap: 20px;

        .get-btn {
          border: none;
          background-color: #058283;
          color: white;
        }

        .read-btn,
        .red-btn {
          border: solid 1px #058283;
          color: #058283;

          .icon {
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>