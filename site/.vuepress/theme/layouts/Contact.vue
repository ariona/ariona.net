<template>
  <div class="contact-page">
    <div class="left">
      <div class="section-subtitle">Contact</div>
      <h2 class="section-title">Get in touch — let’s work together.</h2>
    </div>
    <form
      class="form"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      @submit.prevent="handleSubmit">

      <input type="hidden" name="form-name" value="contact" />

      <div class="field">
        <label>Your name</label>
        <input v-model="form.name" type="text" placeholder="What is your name">
      </div>

      <div class="field">
        <label>Your email</label>
        <input v-model="form.email" type="text" placeholder="What is your email">
      </div>

      <div class="field">
        <label>Service</label>
        <select v-model="form.service">
          <option value="Just wanted to say hi">Just wanted to say hi</option>
          <option value="Need help with a Project">Need help with a Project</option>
          <option value="Long term partnership">Long term partnership</option>
          <option value="Want to hide me full-time">Want to hide me full-time</option>
        </select>
      </div>
      <div class="field">
        <label>Message</label>
        <textarea v-model="form.message" rows="5" placeholder="What's your message?"></textarea>
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
        email: '',
        service: 'Need help with a Project',
        message: ''
      },
      message: ""
    }
  },
  methods: {
    composeEmail() {
      const subject = `${this.name} – ${this.service}`
      window.open(`mailto:helloariona@gmail.com?subject=${subject}&body=${this.message}`)
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
      axios.post("/",
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
  // display: flex;
  max-width: 990px;
  margin: 0 auto;
  padding-top: 160px;

  .form {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background: white;
    box-shadow: 0 1px 2px rgba(0,0,0,.1), 0 5px 20px rgba(0,0,0,.05);
    padding: 40px;
    margin: 60px 0;

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
  button {
    background: var(--accentColor);
    font-weight: 700;
    padding: 10px 15px;
    text-transform: uppercase;
    color: white;
    border: none;
    font-family: inherit;
    font-size: inherit;
    letter-spacing: 2px;
    border-radius: 5px;
  }
}

</style>