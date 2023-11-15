<script >

</script>

<template>
  <header>
    <div class="header-wrapper">
      <div class="container">
        <!-- informazioni -->
        <div class="information">
          <div class="hours">
            <p>
              <font-awesome-icon icon="fa-solid fa-clock" />
              Open Hours Mon - Sat - 9:00 - 18:00
            </p>
          </div>

          <div class="contacts">
            <p>
              <font-awesome-icon icon="fa-solid fa-phone" />
              <a href="#"> +1(305) 1234-5678</a>
            </p>

            <p>
              <font-awesome-icon icon="fa-solid fa-envelope" />
              <a href="#"> hello@example.com</a>
            </p>

            <ul class="socials">
              <li><a href="#"><font-awesome-icon icon="fa-brands fa-facebook-f" /></a></li>
              <li><a href="#"><font-awesome-icon icon="fa-brands fa-twitter" /></a></li>
              <li><a href="#"><font-awesome-icon icon="fa-brands fa-linkedin-in" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  .header-wrapper {
    background-color: #21333E;

    .information {
      display: flex;
      justify-content: space-between;
      color: #C0C3D0;
      padding: 12px 0;

      .contacts {
        display: flex;
        gap: 26px;

        .socials {
          display: flex;
          gap: 16px;
        }
      }
    }
  }
}
</style>
