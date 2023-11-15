<script >

</script>

<template>
  <header>
    <div class="header-wrapper">
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
            +1(305) 1234-5678
          </p>

          <p>
            <font-awesome-icon icon="fa-solid fa-envelope" />
            hello@example.com
          </p>

          <ul class="socials">
            <li><font-awesome-icon icon="fa-brands fa-facebook-f" /></li>
            <li><font-awesome-icon icon="fa-brands fa-twitter" /></li>
            <li><font-awesome-icon icon="fa-brands fa-linkedin-in" /></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  .header-wrapper {
    display: flex;
    flex-direction: column;

    .information {
      background-color: #21333E;
      display: flex;
      justify-content: space-around;
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
