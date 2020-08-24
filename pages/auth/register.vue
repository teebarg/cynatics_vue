<template>
  <div class="login__container">
    <div class="elevate">
      <div class="left d-flex align-items-center justify-content-center">
        <div>
          <h5>Lets build together</h5>
          <p>
            Boost your productivity by making it easier for everyone to access
            boards in one location.
          </p>
          <el-form
            ref="formLabelAlign"
            :label-position="labelPosition"
            label-width="100px"
            :model="formLabelAlign"
            :rules="rules"
          >
            <el-form-item label="Name" prop="name">
              <el-input v-model="formLabelAlign.name" />
            </el-form-item>
            <el-form-item label="Email" prop="email">
              <el-input v-model="formLabelAlign.email" />
            </el-form-item>
            <el-form-item label="Password" prop="password">
              <el-input v-model="formLabelAlign.password" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('formLabelAlign')">
                Submit
              </el-button>
              <el-button @click="resetForm('formLabelAlign')">
                Reset
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="right">
        <img src="~/assets/image/empty-board.svg" alt="board">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  middleware: 'guest',

  data: () => ({
    form: {
      password: 'Password',
      email: ''
    },
    labelPosition: 'top',
    formLabelAlign: {
      email: '',
      password: ''
    },
    rules: {
      name: [
        {
          required: true,
          message: 'Please input name',
          trigger: 'blur'
        },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
      ],
      email: [
        {
          required: true,
          message: 'Please enter you email address',
          trigger: 'blur'
        },
        {
          type: 'email',
          message: 'Please enter a valid email address',
          trigger: 'change'
        }
      ]
    }
  }),

  methods: {
    submit () {
      this.login()
    },
    async login () {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.form.email,
            password: this.form.password
          }
        })
        this.$router.push('/')
      } catch (e) {
        console.log(e.response)
        // this.error = e.response.data.message
      }
    }
  }
}
</script>

<style scoped>
.login__container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 10px;
  background: #ffffff;
}

.login__container > div {
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 10px;
}

.login__container > div > .left > div {
  width: 70%;
}

.login__container > div > .right {
  background-image: url("/img/assets/wavy.svg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 80vh;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: inherit;
}
</style>
