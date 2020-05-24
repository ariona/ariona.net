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
            <component :is="item.iconComponent"></component>
            <span>{{ item.text }}</span>
          </NavLink>
        </li>
      </ul>
    </div>
    <form
      class="form"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      name="contact"
      @submit.prevent="handleSubmit">

      <input type="hidden" name="form-name" value="contact" />

      <div class="field">
        <label>Your name</label>
        <input name="name" v-model="form.name" type="text" placeholder="What is your name">
      </div>

      <div class="field">
        <label>Your email</label>
        <input name="email" v-model="form.email" type="text" placeholder="What is your email">
      </div>

      <div class="field">
        <label>Service</label>
        <select name="service" v-model="form.service">
          <option value="Just wanted to say hi">Just wanted to say hi</option>
          <option value="Need help with a Project">Need help with a Project</option>
          <option value="Long term partnership">Long term partnership</option>
          <option value="Want to hide me full-time">Want to hide me full-time</option>
        </select>
      </div>
      <div class="field">
        <label>Message</label>
        <textarea name="message" v-model="form.message" rows="5" placeholder="What's your message?"></textarea>
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
import {
  CodepenIcon,
  CodesandboxIcon,
  FacebookIcon,
  GithubIcon,
  GitlabIcon,
  GlobeIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MessageSquareIcon,
  MusicIcon,
  PhoneIcon,
  TwitterIcon,
  VideoIcon,
  YoutubeIcon,
  ArrowUpIcon
} from 'vue-feather-icons'
export default {
  components: {
    CodepenIcon,
    CodesandboxIcon,
    FacebookIcon,
    GithubIcon,
    GitlabIcon,
    GlobeIcon,
    InstagramIcon,
    LinkedinIcon,
    MailIcon,
    MessageSquareIcon,
    MusicIcon,
    PhoneIcon,
    TwitterIcon,
    VideoIcon,
    YoutubeIcon,
    ArrowUpIcon
  },
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
          return 'CodepenIcon'
        case 'codesandbox':
          return 'CodesandboxIcon'
        case 'facebook':
          return 'FacebookIcon'
        case 'github':
          return 'GithubIcon'
        case 'gitlab':
          return 'GitlabIcon'
        case 'instagram':
          return 'InstagramIcon'
        case 'linkedin':
          return 'LinkedinIcon'
        case 'mail':
          return 'MailIcon'
        case 'messenger':
          return 'MessageSquareIcon'
        case 'music':
          return 'MusicIcon'
        case 'phone':
          return 'PhoneIcon'
        case 'twitter':
          return 'TwitterIcon'
        case 'video':
          return 'VideoIcon'
        case 'web':
          return 'GlobeIcon'
        case 'youtube':
          return 'YoutubeIcon'
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

    svg {
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

</style>