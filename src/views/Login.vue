<template>
  <div class="form-wrap">
    <form class="Login">
      <p class="login-register">
        Don't have an account?
        <router-link class="router-link" :to="{ name: 'Register' }">
          Register
        </router-link>
      </p>
      <h2>Login to FireBlogs</h2>
      <div class="inputs">
        <div class="input">
          <input
            type="text"
            name=""
            id=""
            placeholder="Email"
            v-model="email"
          />
          <box-icon class="icon" name="envelope"></box-icon>
        </div>
      </div>
      <div class="inputs">
        <div class="input">
          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            v-model="password"
          />
          <box-icon class="icon" name="lock-alt"></box-icon>
        </div>
      </div>
      <div v-show="error" class="error">
        {{ this.errorMsg }}
      </div>
      <router-link
        class="forgot-password router-link"
        :to="{ name: 'ForgotPassword' }"
        >Forgot Password</router-link
      >
      <button @click.prevent="signIn">Sign in</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "Login",
  components: {},
  data() {
    return {
      email: null,
      password: null,
      error: null,
      errorMsg: "",
    };
  },
  methods: {
    signIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push({ name: "Home" });
          this.error = false;
          this.errorMsg = "";
          console.log(firebase.auth().currentUser.uid);
        })
        .catch((err) => {
          this.error = true;
          this.errorMsg = err.message;
          console.log(this.errorMsg);
        });
    },
  },
};
</script>

<style lang="scss">
.router-link {
  text-decoration: underline !important;
}
.form-wrap {
  overflow: hidden;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-self: center;
  margin: 0auto;
  width: 90%;
  @media (min-width: 900px) {
    width: 100%;
  }

  .login-register {
    margin-bottom: 32px;

    .router-link {
      color: #000;
    }
  }

  form {
    padding: 010px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    @media (min-width: 900px) {
      padding: 050px;
    }

    h2 {
      text-align: center;
      font-size: 32px;
      color: #303030;
      margin-bottom: 40px;
      @media (min-width: 900px) {
        font-size: 40px;
      }
    }

    .inputs {
      width: 100%;
      max-width: 350px;

      .input {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 8px;
        input {
          width: 100%;
          border: none;
          background-color: #f2f7f6;
          padding: 4px 4px 4px 50px;
          height: 50px;
          border-radius: 10px;

          &:focus {
            outline: none;
          }
        }

        .icon {
          display: block;
          width: 30px;
          position: absolute;
          left: 14px;
        }
      }
    }

    .forgot-password {
      text-decoration: none;
      color: #000;
      cursor: pointer;
      font-size: 14px;
      margin: 16px032px;
      border-bottom: 1px solid transparent;
      transition: 0.5s ease all;

      &:hover {
        border-color: #303030;
      }
    }

    .angle {
      display: none;
      position: absolute;
      background-color: #fff;
      transform: rotateZ(3deg);
      width: 60px;
      right: -30px;
      height: 101%;
      @media (min-width: 900px) {
        display: initial;
      }
    }
  }

  .background {
    display: none;
    flex: 2;
    background-size: cover;
    background-image: url("../assets/background.png");
    width: 100%;
    height: 100%;
    @media (min-width: 900px) {
      display: initial;
    }
  }
}
</style>