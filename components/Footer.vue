<template>
  <footer class="footer-section">
    <div class="container">
      <div class="footer-cta">
        <el-row :gutter="10">
          <el-col :md="8">
            <div class="single-cta">
              <i class="fas fa-map-marker-alt"></i>
              <div class="cta-text">
                <h2>Find us</h2>
                <span>1010 Avenue, Tech Hub, Silicon Valley</span>
              </div>
            </div>
          </el-col>
          <el-col :md="8">
            <div class="single-cta">
              <i class="fas fa-phone"></i>
              <div class="cta-text">
                <h2>Call us</h2>
                <span>08067295227</span>
              </div>
            </div>
          </el-col>
          <el-col :md="8">
            <div class="single-cta">
              <i class="far fa-envelope-open"></i>
              <div class="cta-text">
                <h2>Mail us</h2>
                <span>{{contactEmail}}</span>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="footer-content">
        <el-row :gutter="10">
          <el-col :md="24" :lg="8">
            <div class="footer-widget">
              <div class="footer-logo">
                <a :href="contactSite" target="_blank"
                  ><img
                    src="~assets/image/cynatics.jpeg"
                    class="img-fluid"
                    alt="logo"
                /></a>
              </div>
              <div class="footer-text">
                <p>
                  Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed
                  do eiusmod tempor incididuntut consec tetur adipisicing
                  elit,Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div class="footer-social-icon">
                <span>Follow us</span>
                <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
                <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
                <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
              </div>
            </div>
          </el-col>
          <el-col :sm="12" :lg="8">
            <div class="footer-widget">
              <div class="footer-widget-heading">
                <h3>Useful Links</h3>
              </div>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">services</a></li>
                <li><a href="#">portfolio</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Our Services</a></li>
                <li><a href="#">Expert Team</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Latest News</a></li>
              </ul>
            </div>
          </el-col>
          <el-col :sm="12" :lg="8">
            <div class="footer-widget">
              <div class="footer-widget-heading">
                <h3>Subscribe</h3>
              </div>
              <div class="footer-text mb-25">
                <p>
                  Don’t miss to subscribe to our new feeds, kindly fill the form
                  below.
                </p>
              </div>
              <div class="subscribe-form">
                <el-form ref="clubForm" size="small">
                  <el-form-item prop="name">
                    <el-input v-model="Email" />
                  </el-form-item>
                  <el-button type="primary" size="small" @click="subscribe">
                    Subscribe
                  </el-button>
                </el-form>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="copyright-area">
      <div class="container">
        <el-row :gutter="10">
          <el-col :xs="12" :sm="12">
            <div class="copyright-text">
              <p>
                Copyright &copy; {{new Date().getUTCFullYear()}}, All Right Reserved
                <a :href="contactSite" target="_blank">Cynatics</a>
              </p>
            </div>
          </el-col>
          <el-col :xs="12" :sm="12">
            <div class="footer-menu">
              <ul>
                <li>
                  <nuxt-link to="/"> Home </nuxt-link>
                </li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Policy</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data: () => ({ contactSite: process.env.CONTACT_SITE, contactEmail: process.env.CONTACT_MAIL, Email: "" }),
  methods: {
    subscribe() {
      alert(5);
    }
  }
};
</script>
<style lang="scss" scoped>
.footer-section {
  background: var(--background-primary);
  position: relative;
}
.footer-cta {
  padding: 20px 0;
}
.single-cta i {
  color: var(--color-accent);
  font-size: 30px;
  float: left;
  margin-top: 8px;
}
.cta-text {
  padding-left: 15px;
  display: inline-block;
}
.cta-text h2 {
  font-weight: 600;
  margin-bottom: 2px;
}
.cta-text span {
  color: var(--text-secondary);
}
.footer-content {
  position: relative;
  z-index: 2;
  padding: 20px 0;
}
.footer-pattern img {
  position: absolute;
  top: 0;
  left: 0;
  height: 330px;
  background-size: cover;
  background-position: 100% 100%;
}
.footer-logo {
  margin-bottom: 30px;
}
.footer-logo img {
  max-width: 70px;
}
.footer-text p {
  margin-bottom: 14px;
  color: var(--text-secondary);
}
.footer-social-icon {
  margin-bottom: 20px;
}
.footer-social-icon span {
  color: var(--text-primary);
  display: block;
  font-size: 20px;
  font-weight: 700;
}
.footer-social-icon a {
  color: var(--text-primary);
  font-size: 16px;
  margin-right: 15px;
}
.footer-social-icon i {
  color: var(--color-white);
  width: 40px;
  text-align: center;
  line-height: 38px;
  border-radius: 50%;
}
.facebook-bg {
  background: #3b5998;
}
.twitter-bg {
  background: #55acee;
}
.google-bg {
  background: #dd4b39;
}
.footer-widget-heading h3 {
  font-weight: 600;
  margin-bottom: 40px;
  position: relative;
}
.footer-widget-heading h3::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -15px;
  height: 2px;
  width: 50px;
  background: var(--color-accent);
}
.footer-widget ul li {
  display: inline-block;
  float: left;
  width: 50%;
  margin-bottom: 12px;
}
.footer-widget ul li a:hover {
  color: var(--color-accent);
}
.footer-widget ul li a {
  color: var(--text-secondary);
  text-transform: capitalize;
}
.copyright-area {
  background: var(--background-secondary);
  padding: 25px 0;
}
.copyright-text p,
.footer-menu li a {
  color: var(--text-secondary);
}
.copyright-text p a {
  color: var(--color-accent);
}
.footer-menu li {
  display: inline-block;
  margin-left: 20px;
}
.footer-menu li:hover a {
  color: var(--text-primary);
}
</style>
