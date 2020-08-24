<template>
  <div class="login__container">
    <div class="elevate">
      <div class="left center-row">
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
            <el-form-item label="Email" prop="email">
              <el-input v-model="formLabelAlign.email" />
            </el-form-item>
            <el-form-item label="Password" prop="password">
              <el-input v-model="formLabelAlign.password" />
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                @click="submitForm('formLabelAlign')"
              >
                Submit
              </el-button>
              <el-button
                @click="resetForm('formLabelAlign')"
              >
                Reset
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="right">
        <img src="~assets/image/empty-board.svg" alt="board">
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
      email: [
        {
          required: true,
          message: 'Please enter you email address',
          trigger: 'blur'
        },
        {
          type: 'email',
          message: 'Please enter a valid email address',
          trigger: 'blur'
        }
      ],
      password: [
        {
          required: true,
          message: 'Please enter a password',
          trigger: 'blur'
        },
        { min: 6, message: 'Length should be minmum of 6', trigger: 'blur' }
      ]
    }
  }),

  methods: {
    async login () {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.formLabelAlign.email,
            password: this.formLabelAlign.password
          }
        })
        this.$router.back()
      } catch (e) {
        // console.log(e.response)
        // this.error = e.response.data.message
      }
    },
    submitForm (formName) {
      console.log(this.$refs)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.login()
        } else {
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
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
  background-image: url("~assets/image/wavy.svg");
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
