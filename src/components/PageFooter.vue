<script>

</script>

<template>
  <footer>
    <div class="footer-content">

      <div class="container">

        <div class="row">
          <div class="info">

            <div class="logo">
              <figure>
                <img src="/public/svgs/svg-7.svg">
              </figure>
            </div>

            <div class="text">
              <p>A funcional HTML Template for Corporate & Business</p>
            </div>

            <div class="contact">
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

            <div class="info-btn">
              <button>GET IN TOUCH</button>
            </div>
          </div>

          <div class="about">
            <h3 class="title">About</h3>
            <ul>
              <li>
                <font-awesome-icon icon="fa-solid fa-chevron-right" class="icon" />
                The company
              </li>
              <li>
                <font-awesome-icon icon="fa-solid fa-chevron-right" class="icon" />
                Institutional
              </li>
              <li>
                <font-awesome-icon icon="fa-solid fa-chevron-right" class="icon" />
                Social & Events
              </li>
              <li>
                <font-awesome-icon icon="fa-solid fa-chevron-right" class="icon" />
                Innovation
              </li>
              <li>
                <font-awesome-icon icon="fa-solid fa-chevron-right" class="icon" />
                Enviroment
              </li>
              <li>
                <font-awesome-icon icon="fa-solid fa-chevron-right" class="icon" />
                Technology
              </li>
            </ul>
          </div>

          <div class="services">
            <h3 class="title">Services</h3>
            <ul>
              <li>
                <font-awesome-icon icon="fa-solid fa-chevron-right" class="icon" />
                Audit & Assurance
              </li>
              <li>
                <font-awesome-icon icon="fa-solid fa-chevron-right" class="icon" />
                Financial Advisory
              </li>
              <li>
                <font-awesome-icon icon="fa-solid fa-chevron-right" class="icon" />
                Analytics M&A
              </li>
              <li>
                <font-awesome-icon icon="fa-solid fa-chevron-right" class="icon" />
                Middle Marketing
              </li>
              <li>
                <font-awesome-icon icon="fa-solid fa-chevron-right" class="icon" />
                Legal Consulting
              </li>
              <li>
                <font-awesome-icon icon="fa-solid fa-chevron-right" class="icon" />
                Regulatory Risk
              </li>
            </ul>
          </div>

          <div class="support">
            <h3 class="title">Support</h3>
            <ul>
              <li>
                <font-awesome-icon icon="fa-solid fa-chevron-right" class="icon" />
                Responsability
              </li>
              <li>
                <font-awesome-icon icon="fa-solid fa-chevron-right" class="icon" />
                Terms of Use
              </li>
              <li>
                <font-awesome-icon icon="fa-solid fa-chevron-right" class="icon" />
                About Cookies
              </li>
              <li>
                <font-awesome-icon icon="fa-solid fa-chevron-right" class="icon" />
                Privacy Policy
              </li>
              <li>
                <font-awesome-icon icon="fa-solid fa-chevron-right" class="icon" />
                Accessibility
              </li>
              <li>
                <font-awesome-icon icon="fa-solid fa-chevron-right" class="icon" />
                Information
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom-footer">
      <div class="container">

        <div class="wrapper">

          <div class="text">
            <p>Enjoy the low price. We are tracking any intencion of piracy</p>
          </div>

          <div class="copyright">
            <p>&#169; 2020 NEXGEN is Proudly Powered by <span>Codings</span></p>
          </div>
        </div>

      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  .footer-content {
    background-color: #111117;
    padding: 80px;
    color: #868689;

    .container {

      .row {
        justify-content: space-between;

        .info {
          .logo {
            margin-bottom: 16px;

            figure {
              width: 120px;
            }
          }

          .text {
            max-width: 200px;
            line-height: 1.5em;
            margin-bottom: 10px;
          }

          .contact {

            .phone,
            .email,
            .position {
              margin-bottom: 10px;
            }

            .icon {
              color: white;
              margin-right: 10px;
            }
          }

          .info-btn {
            margin-top: 20px;

            button {
              background-color: #111117;
              border: solid 1px #00A4A3;
              color: white;
            }
          }
        }

        .about,
        .services,
        .support {
          padding: 18px;
          background-color: #19191F;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          justify-content: center;

          .title {
            color: white;
            margin-bottom: 14px;
          }

          ul {
            display: flex;
            flex-direction: column;
            row-gap: 6px;
          }

          .icon {
            margin-right: 8px;
          }
        }
      }
    }
  }

  .bottom-footer {
    background-color: #0D0D11;
    color: #868689;
    padding: 40px 0;

    .wrapper {
      display: flex;
      justify-content: space-between;

      .copyright {
        span {
          color: #00A4A3;
        }
      }
    }
  }
}
</style>