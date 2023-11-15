<script>

</script>

<template>
  <section class="network">

    <div class="content">

      <!-- parte sinistra -->
      <div class="left-part">
        <div class="network-header">
          <div class="mini-title">
            <h5>ABOUT THE NETWORK</h5>
          </div>

          <div class="title">
            <h1><span class="bg-azure">The</span> Company</h1>
          </div>

          <div class="text">
            <p>
              For 12 years we have been providing audit and warranty, financial advice, risk advice, taxes and related
              services to select clients
            </p>
          </div>
        </div>

        <div class="network-body">
          <div class="card">
            <div class="card-content">
              <div class="card-header">
                <font-awesome-icon icon="fa-solid fa-award" class="icon" />
                <h3 class="title">Tradition</h3>
              </div>
              <div class="card-body">
                <p>Lorem ipsum dolor sit amet consecteur adipiscing elit</p>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-content">
              <div class="card-header">
                <font-awesome-icon icon="fa-solid fa-lock" class="icon" />
                <h3 class="title">Security</h3>
              </div>
              <div class="card-body">
                <p>Lorem ipsum dolor sit amet consecteur adipiscing elit</p>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-content">
              <div class="card-header">
                <font-awesome-icon icon="fa-solid fa-pen-to-square" class="icon" />
                <h3 class="title">Certificate</h3>
              </div>
              <div class="card-body">
                <p>Lorem ipsum dolor sit amet consecteur adipiscing elit</p>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-content">
              <div class="card-header">
                <font-awesome-icon icon="fa-solid fa-graduation-cap" class="icon" />
                <h3 class="title">Expertise</h3>
              </div>
              <div class="card-body">
                <p>Lorem ipsum dolor sit amet consecteur adipiscing elit</p>
              </div>
            </div>
          </div>
        </div>

        <div class="buttons">
          <button class="get">GET IN TOUCH</button>
          <button class="read">READ MORE</button>
        </div>
      </div>

    </div>

    <!-- parte destra -->

    <div class="right-part">
      <div class="image">
        <figure>
          <img src="/public/images/about-4.jpg" alt="#">
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.network {
  display: flex;
  background-color: #111117;

  .content {
    flex-basis: 50%;
    display: flex;
    align-items: center;
    justify-content: end;
  }

  .left-part {
    padding: 80px 16px;
    max-width: 500px;

    .network-header {
      margin-bottom: 50px;
      display: flex;
      flex-direction: column;
      row-gap: 22px;

      .mini-title {
        color: #00A4A3;
      }

      .title {
        color: white;
        font-size: 30px;

        .bg-azure {
          background-color: #0E272D;
        }
      }

      .text {
        color: #7F8990;
      }
    }

    .network-body {
      margin-bottom: 50px;
      color: #7F8990;
      display: flex;
      flex-wrap: wrap;
      row-gap: 50px;

      .card {
        flex-basis: 50%;
      }

      .card-header {
        display: flex;
        gap: 10px;
        align-items: center;
        margin-bottom: 20px;

        .title {
          color: white;
        }

        .icon {
          color: #00A4A3;
        }
      }
    }

    .buttons {
      .get {
        border: none;
        background-color: #00A4A3;
        color: white;
        margin-right: 20px;
      }

      .read {
        border: solid 1px #00A4A3;
        color: white;
        background-color: #111117;
      }
    }
  }
}
</style>