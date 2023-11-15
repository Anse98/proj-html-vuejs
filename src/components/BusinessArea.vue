<script>
export default {
  data() {
    return {

    }
  },
}
</script>

<template>
  <section>
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

          <div class="card">
            <div class="card-content">

              <div class="card-header">
                <figure>
                  <img src="/public/svgs/svg-1.svg" alt="#">
                </figure>
                <font-awesome-icon icon="fa-solid fa-arrow-right" />
              </div>

              <div class="card-text">
                <h3 class="title">Audit & Assurance</h3>
                <p class="description">Lorem ipsum dolor sit amet consecteur adipiscing elit</p>
              </div>

            </div>
          </div>

          <div class="card">
            <div class="card-content">

              <div class="card-header">
                <figure>
                  <img src="/public/svgs/svg-2.svg" alt="#">
                </figure>
                <font-awesome-icon icon="fa-solid fa-arrow-right" />
              </div>

              <div class="card-text">
                <h3 class="title">Financial Advisory</h3>
                <p class="description">Lorem ipsum dolor sit amet consecteur adipiscing elit</p>
              </div>

            </div>
          </div>

          <div class="card">
            <div class="card-content">

              <div class="card-header">
                <figure>
                  <img src="/public/svgs/svg-3.svg" alt="#">
                </figure>
                <font-awesome-icon icon="fa-solid fa-arrow-right" />
              </div>

              <div class="card-text">
                <h3 class="title">Analytics and M&A</h3>
                <p class="description">Lorem ipsum dolor sit amet consecteur adipiscing elit</p>
              </div>

            </div>
          </div>

          <div class="card">
            <div class="card-content">

              <div class="card-header">
                <figure>
                  <img src="/public/svgs/svg-4.svg" alt="#">
                </figure>
                <font-awesome-icon icon="fa-solid fa-arrow-right" />
              </div>

              <div class="card-text">
                <h3 class="title">Middle Marketing</h3>
                <p class="description">Lorem ipsum dolor sit amet consecteur adipiscing elit</p>
              </div>

            </div>
          </div>

          <div class="card">
            <div class="card-content">

              <div class="card-header">
                <figure>
                  <img src="/public/svgs/svg-5.svg" alt="#">
                </figure>
                <font-awesome-icon icon="fa-solid fa-arrow-right" />
              </div>

              <div class="card-text">
                <h3 class="title">Legal Consulting</h3>
                <p class="description">Lorem ipsum dolor sit amet consecteur adipiscing elit</p>
              </div>

            </div>
          </div>

          <div class="card">
            <div class="card-content">

              <div class="card-header">
                <figure>
                  <img src="/public/svgs/svg-6.svg" alt="#">
                </figure>
                <font-awesome-icon icon="fa-solid fa-arrow-right" />
              </div>

              <div class="card-text">
                <h3 class="title">Regulatory Risk</h3>
                <p class="description">Lorem ipsum dolor sit amet consecteur adipiscing elit</p>
              </div>

            </div>
          </div>

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

    .card {
      padding: 10px;
      flex-basis: 33%;

      .card-content {
        background-color: white;
        padding: 22px;
        border-radius: 7px;

        figure {
          max-width: 30px;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .card-text {
          .title {
            margin-bottom: 14px;
          }
        }
      }
    }
  }
}
</style>