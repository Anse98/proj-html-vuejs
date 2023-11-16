<script>

</script>

<template>
  <section class="results">

    <div class="results-body">
      <div class="container">

        <div class="titles">
          <div class="mini-title">
            <h5>WHAT ARE WE DOING</h5>
          </div>

          <div class="title">
            <h1><span class="bg-azure">Results</span> in Numbers</h1>
          </div>
        </div>

        <div class="numbers">
          <div class="certifications">
            <p>128</p>
            <h4>Certifications</h4>
          </div>

          <div class="employees">
            <p>230</p>
            <h4>Employees</h4>
          </div>

          <div class="customers">
            <p>517</p>
            <h4>Customers</h4>
          </div>

          <div class="certifications">
            <p>94</p>
            <h4>Countries Served</h4>
          </div>

        </div>
      </div>
    </div>
    <div class="results-footer">
      <div class="container">
        <figure>
          <img src="/public/images/logo-4.png" alt="">
        </figure>

        <figure>
          <img src="/public/images/logo-1.png" alt="">
        </figure>

        <figure>
          <img src="/public/images/logo-2.png" alt="">
        </figure>

        <figure>
          <img src="/public/images/logo-3.png" alt="">
        </figure>

        <figure class="resize">
          <img src="/public/images/logo-5.png" alt="">
        </figure>

        <figure>
          <img src="/public/images/logo-4.png" alt="">
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.results {
  margin-top: 30px;
  background: url('/public/images/bg-7.jpg') no-repeat center;
  background-size: cover;
  height: 700px;
  display: flex;
  flex-direction: column;

  .results-body {
    height: 80%;

    .container {
      padding-top: 50px;

      .titles {
        text-align: center;
        color: white;

        .mini-title {
          padding-top: 90px;
          margin-bottom: 50px;
          color: #00A4A3;
        }

        .title {
          font-size: 20px;

          .bg-azure {
            background-color: #0C2C2E;
          }
        }
      }

      .numbers {
        display: flex;
        justify-content: space-between;
        padding: 60px 0;
        text-align: center;

        p {
          font-size: 30px;
          color: #00A4A3;
        }

        h4 {
          font-size: 20px;
          color: white;
        }
      }

    }
  }

  .results-footer {
    background-color: #111117;
    flex-grow: 1;

    .container {
      display: flex;
      justify-content: space-between;
      height: 100%;
      align-items: center;

      figure {
        width: 100px;
        filter: brightness(250%);

        &.resize {
          width: 60px;
        }
      }
    }
  }
}
</style>