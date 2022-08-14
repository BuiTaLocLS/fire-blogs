<template>
  <div class="form-wrap">
    <form class="Login">
      <p class="login-register register">
        Already have an account?
        <router-link class="router-link" :to="{ name: 'Login' }"
          >Login</router-link
        >
      </p>
      <h2>Create your FireBlogs account</h2>
      <div class="inputs">
        <div class="input">
          <input
            type="text"
            name=""
            id=""
            placeholder="Fist Name"
            v-model="firstName"
          />
          <box-icon class="icon" name="user"></box-icon>
        </div>
        <div class="input">
          <input
            type="text"
            name=""
            id=""
            placeholder="Last Name"
            v-model="lastName"
          />
          <box-icon class="icon" name="user"></box-icon>
        </div>
        <div class="input">
          <input
            type="text"
            name=""
            id=""
            placeholder="User Name"
            v-model="userName"
          />
          <box-icon class="icon" name="user"></box-icon>
        </div>
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
      <button @click.prevent="register">Sign Up</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
// eslint-disable-next-line
import firebase from "firebase/app";
import "firebase/auth";
// eslint-disable-next-line
import db from "../firebase/firebaseInit";
export default {
  name: "Register",
  data() {
    return {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      error: null,
      errorMsg: "asdfsadf",
    };
  },
  methods: {
    async register() {
      if (
        this.email !== "" &&
        this.password !== "" &&
        this.firstName !== "" &&
        this.lastName !== "" &&
        this.username !== ""
      ) {
        this.error = false;
        this.errorMsg = "";
        const firebaseAuth = await firebase.auth();
        const createUser = await firebaseAuth.createUserWithEmailAndPassword(
          this.email,
          this.password
        );
        const result = await createUser;
        const dataBase = db.collection("users").doc(result.user.uid);

        await dataBase.set({
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.userName,
          email: this.email,
        });

        this.$router.push({ name: "Home" });
        return;
      }
      this.error = true;
      this.errorMsg = "Please fill out all the fields!";
      return;
    },
  },
};
</script>

<style lang="scss" scoped>
.register {
  h2 {
    max-width: 350px;
  }
}
</style>;