<template>
  <div class="contact-page">
    <div class="left">
      <div class="section-subtitle">Contact</div>
      <h2 class="section-title">Get in touch — let’s work together.</h2>

      <ul v-if="contact" class="contact">
        <li
          v-for="item in contact"
          :key="item.iconComponent"
          class="contact-item"
        >
          <NavLink :link="item.link">
            <i :class="item.iconComponent"></i>
            <span>{{ item.text }}</span>
          </NavLink>
        </li>
      </ul>
    </div>
    <form
      class="form"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="email"
      name="contact"      
      @submit.prevent="handleSubmit">
      
      <input type="hidden" name="form-name" value="contact" />

      <div class="madu-manis">
        <input type="text" name="email" v-model="form.email">
      </div>

      <div class="field">
        <label>Your name</label>
        <input name="name" v-model="form.name" type="text" placeholder="What is your name" required autocomplete="new-password">
      </div>

      <div class="field">
        <label>Your email</label>
        <input name="email_address" v-model="form.email_address" type="email" placeholder="What is your email" required autocomplete="new-password">
      </div>

      <div class="field">
        <label>Service</label>
        <select name="service" v-model="form.service" required>
          <option value="Need help with a Project">Need help with a Project</option>
          <option value="Long term partnership">Long term partnership</option>
          <option value="Want to wire me full-time">Want to hire me full-time</option>
        </select>
      </div>
      <div class="field">
        <label>Message</label>
        <textarea name="message" v-model="form.message" rows="5" placeholder="What's your message?" required autocomplete="new-password"></textarea>
      </div>

      <div class="field text-right">
        <button type="submit">Send message</button>
      </div>

      <div class="message" v-if="message">{{message}}</div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      form : {
        name: '',
        email:'',
        email_address: '',
        service: 'Need help with a Project',
        message: ''
      },
      message: ""
    }
  },
  computed: {
    contact() {
      return (
        (this.$themeConfig.footer && this.$themeConfig.footer.contact) ||
        []
      )
        .map(({ type, link, text }) => {
          return {
            iconComponent: this.getIconComponentName(type),
            link,
            text
          }
        })
        .filter(({ iconComponent }) => iconComponent)
    },
  },
  methods: {
    getIconComponentName(contactType) {
      switch (contactType) {
        case 'codepen':
          return 'icon-codepen'
        case 'github':
          return 'icon-github'
        case 'linkedin':
          return 'icon-linkedin'
        case 'mail':
          return 'icon-mail'
        default:
          return ''
      }
    },
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit () {
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" }
      };
      axios.post("/contact/",
        this.encode({
          "form-name": "contact",
          ...this.form
        }),
        axiosConfig
      )
      .then(() => {
        this.message = 'Your message has been sent, i\'ll get back to you as soon as possible'
      })
      .catch(() => {
        this.message = 'Failed sending your message, please try again in a minute'
      })
    }
  }
}
</script>

<style lang="scss">
.contact-page{
  display: flex;
  max-width: 990px;
  margin: 0 auto;
  padding: 160px 15px 0;

  @media screen and (max-width: 768px){
    flex-direction: column;
  }

  .left {
    width: 40%;

    @media screen and (max-width: 768px){
      width: 100%;
    }
  }

  .contact{
    list-style: none;
    // display: flex;
    padding-left: 0;
    margin: 30px 0;
    
    li {
      margin-bottom: 15px;

      @media screen and (max-width: 768px){
        display: inline-block;
        margin: 15px;
      }
    }

    a {
      display: block;
      color: inherit;
      text-decoration: none;
    }

    i {
      color: var(--accentColor);
      vertical-align: middle;
      display: inline-block;
      margin-right: 10px;
    }
  }

  .form {
    flex: 1;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background: white;
    box-shadow: 0 1px 2px rgba(0,0,0,.1), 0 5px 20px rgba(0,0,0,.05);
    padding: 40px;

    @media screen and (max-width: 768px){
      padding: 30px;
      border-top: 10px solid var(--accentColor);
      border-radius: 0
    }

    .field {
      margin-bottom: 30px;
    }

    label {
      margin-bottom: 10px;
      display: block;
    }

    input, select, textarea{
      padding: 10px 15px;
      border: 1px solid #e3e3e3;
      font-size: inherit;
      font-family: inherit;
      background: white;
      width: 100%;
      border-radius: 5px;
    }

    select{
      height: 2.7em;
    }
  }
  .text-right {
    text-align: right;
  }
  
}
.madu-manis {
  position: absolute;
  width: 1px;
  height: 1px;
  left: -9999px;
  top: 0;
}
</style>