<template>
  <div class="login__container">
    <div class="elevate">
      <div class="left center-row">
        <div>
          <h3>Lets build together</h3>
          <p>
            Boost your productivity by making it easier for everyone to access
            boards in one location.
          </p>
          <FormLogin />
          <div class="divider">Or</div>
          <div class="other">
            <nuxt-link to="/">
              Can't log in?
            </nuxt-link>
            <nuxt-link to="/auth/register">
              Sign up for an account
            </nuxt-link>
          </div>
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
}
</script>

<style lang="scss" scoped>
.login__container {
  display: grid;
  place-items: center;
  height: 100vh;
  padding: 10px;
  background: var(--background-secondary);
}

.login__container > div {
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 10px;
  background: var(--background-primary);
}

.login__container > div > .left > div {
  width: 60%;
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

.login__container .other {
  display: flex;
  justify-content: space-between;
}

.login__container .other a:last-child {
  color: var(--color-accent);
}
</style>
