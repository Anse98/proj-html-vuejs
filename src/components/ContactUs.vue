<script>

</script>

<template>
  <section class="contact-us">
    <div class="container">
      <div class="row">
        <!-- left part -->
        <div class="form">

          <!-- form header -->
          <div class="form-header">

            <div class="mini-title">
              <h5>SEND A MESSAGE</h5>
            </div>

            <div class="title">
              <h1>Get in <span class="bg-azure">Touch</span></h1>
            </div>

            <div class="text">
              <p>We will respond to your message as soon as possible.</p>
            </div>
          </div>

          <!-- form body -->
          <div class="form-body">

            <form>

              <div class="name-email">
                <div class="name">
                  <input type="text" placeholder="Name">
                  <img src="/public/images/image (1).png" alt="">
                </div>

                <div class="email">
                  <input type="email" placeholder="Email">
                </div>
              </div>

              <div class="phone-info">
                <div class="phone">
                  <input type="number" placeholder="Phone">
                </div>

                <div class="info">
                  <input type="text" placeholder="More info">
                  <font-awesome-icon icon="fa-solid fa-chevron-down" class="icon" />
                </div>
              </div>

              <textarea name="" id="" cols="70" rows="8">

              </textarea>

            </form>
          </div>

          <!-- bottone form -->
          <div class="form-btn">
            <button>SEND</button>
          </div>

        </div>

        <!-- rigth part -->
        <div class="example">

          <div class="example-header">
            <div class="title">
              <h4>Example Inc.</h4>
            </div>

            <div class="text">
              <p>Lorem ipsum dolor sit amet, consecteur adipiscing elit</p>
              <p>Lorem ipsum dolor sit amet, consecteur adipiscing elit</p>
            </div>
          </div>

          <div class="example-body">
            <div class="phone">
              <font-awesome-icon icon="fa-solid fa-phone" class="icon" />
              <span> +1 (305) 1234-5678</span>
            </div>

            <div class="email">
              <font-awesome-icon icon="fa-solid fa-envelope" class="icon" />
              <span> hello@example.com</span>
            </div>

            <div class="position">
              <font-awesome-icon icon="fa-solid fa-location-dot" class="icon" />
              <span>Main Avenue, 987</span>
            </div>
          </div>

          <div class="example-btn">
            <button><a
                href="https://www.google.com/maps/place/987+Main+Ave,+Passaic,+NJ+07055,+Stati+Uniti/@40.8708403,-74.1382838,17z/data=!4m6!3m5!1s0x89c2fec8aa3213e5:0xab6c00ef8f54a598!8m2!3d40.8706943!4d-74.1355801!16s%2Fg%2F11cpj7y3tt?entry=ttu">VIEW
                MAP</a></button>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.contact-us {
  padding: 60px 0;

  .container {
    .row {
      flex-wrap: nowrap;

      .form {
        flex-basis: 70%;
        padding-right: 30px;

        .form-header {
          margin-bottom: 40px;

          .mini-title {
            color: #00A4A3;
          }

          .title {
            margin: 30px 0;
            font-size: 24px;

            .bg-azure {
              color: #058283;
            }
          }

          .text {
            color: #868689;
          }
        }

        .form-body {
          form {

            input {
              padding: 0 16px;
              line-height: 3.5em;
              border: none;
              background-color: #ECECEC;
            }

            .name-email {
              display: flex;
              flex-wrap: wrap;
              margin-bottom: 20px;

              .name {
                flex-basis: 50%;
                padding-right: 20px;
                position: relative;

                input {
                  width: 100%;
                }

                img {
                  position: absolute;
                  width: 16px;
                  right: 30px;
                  top: 50%;
                  transform: translatey(-50%);
                }
              }

              .email {
                flex-basis: 50%;

                input {
                  width: 100%;
                }
              }
            }

            .phone-info {
              display: flex;
              margin-bottom: 20px;

              .phone {
                flex-basis: 50%;
                padding-right: 20px;

                input {
                  width: 100%;
                }
              }

              .info {
                flex-basis: 50%;
                position: relative;

                input {
                  width: 100%;
                }

                .icon {
                  position: absolute;
                  top: 50%;
                  right: 10px;
                  transform: translatey(-50%);
                  font-size: 12px;
                  color: #868689;
                }
              }
            }

            textarea {
              width: 100%;
              background-color: #ECECEC;
              border: none;
              margin-bottom: 20px;
            }
          }
        }

        .form-btn {

          button {
            border: none;
            background-color: #058283;
            color: white;
          }
        }
      }

      .example {
        padding-left: 20px;

        .example-header {
          .title {
            font-size: 20px;
            margin-bottom: 20px;
          }

          .text {
            line-height: 1.5em;
            color: #868689;

            p {
              margin-bottom: 20px;
            }
          }
        }

        .example-body {
          display: flex;
          flex-direction: column;
          row-gap: 20px;
          color: #058283;

          .icon {
            margin-right: 10px;
            padding: 4px;
            border-radius: 50%;
            background-color: #D5E7E8;
          }
        }

        .example-btn {
          margin-top: 30px;

          button {
            border: solid 1px #00A4A3;
            color: #00A4A3;
          }
        }
      }
    }
  }
}
</style>