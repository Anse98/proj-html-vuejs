<script>

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
          <li class="bg-azure"><a href="">ALL</a></li>
          <li><a href="#">INSTITUTIONAL</a></li>
          <li><a href="#">SOCIAL</a></li>
          <li><a href="#">EVENTS</a></li>
          <li><a href="#">INNOVATION</a></li>
          <li><a href="#">ENVIROMENT</a></li>
          <li><a href="#">TECHNOLOGY</a></li>
        </ul>
      </nav>

      <!-- cards -->
      <div class="cards">
        <div class="card">
          <div class="card-content project-1">
            <h2 class="title">Academic professional program in social media</h2>
          </div>
        </div>

        <div class="card">
          <div class="card-content project-2">
            <h2 class="title">President's speech at the annual meeting</h2>
          </div>
        </div>

        <div class="card">
          <div class="card-content project-3">
            <h2 class="title">International business trip in Shangai</h2>
          </div>
        </div>

        <div class="card">
          <div class="card-content project-4">
            <h2 class="title">Technology workshop with education theme</h2>
          </div>
        </div>

        <div class="card">
          <div class="card-content project-5">
            <h2 class="title">Donation of clothes and food to the partner NGO</h2>
          </div>
        </div>

        <div class="card">
          <div class="card-content project-6">
            <h2 class="title">Confraternization of the procurement team</h2>
          </div>
        </div>
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
        color: #058283;
      }

      .title {
        margin-bottom: 40px;
        font-size: 20px;


        .bg-azure {
          color: #058283;
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
        }
      }
    }

    .cards {
      display: flex;
      flex-wrap: wrap;
      row-gap: 20px;

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
    }
  }
}
</style>