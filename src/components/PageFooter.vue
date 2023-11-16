<script>
import FooterMenu from './FooterMenu.vue'

export default {
  components: {
    FooterMenu,
  },

  data() {
    return {
      menus: [
        {
          title: 'About',
          voices: [
            'The company', 'Institutional', 'Social & Events', 'Innovation', 'Environment', 'Technology']
        },

        {
          title: 'Services',
          voices: [
            'Audit & Assurance', 'Financial Advisory', 'Analytics M&A', 'Middle Marketing', 'Legal Consulting', 'Regulatory Risk'
          ]
        },

        {
          title: 'Support',
          voices: [
            'Responsability', 'Terms of Use', 'About Cookies', 'Privacy Policy', 'Accessibility', 'Information'
          ]
        }
      ]
    }
  },
}
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

          <FooterMenu v-for="(menu, index) in menus" :item="menu" :key="index" />

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