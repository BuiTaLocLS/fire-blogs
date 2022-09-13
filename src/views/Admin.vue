<template>
  <div class="admin">
    <Modal
      v-if="modalActive"
      :modalMessage="modalMessage"
      v-on:close-modal="closeModal"
    />
    <div class="container">
      <h2>Administration</h2>
      <div class="admin-info">
        <h2>Add Admin</h2>
        <div class="input">
          <input
            placeholder="Enter user email to make them an admin"
            type="text"
            id="addAdmins"
            v-model="adminEmail"
          />
        </div>
        <span>{{ this.functionMsg }}</span>
        <button class="button" @click="addAdminRole">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "../components/Modal.vue";
import firebase from "firebase/app";
import "firebase/auth";
// eslint-disable-next-line
import db from "../firebase/firebaseInit";
export default {
  name: "Admin",
  components: {
    Modal,
  },
  data() {
    return {
      modalMessage: "Add admin success!",
      functionMsg: "",
      modalActive: false,
      adminEmail: "",
    };
  },
  methods: {
    async addAdminRole() {
      if (this.adminEmail !== "") {
        this.error = false;
        this.errorMsg = "";
        let oldCount, newCount;

        const dataBase = db.collection("administration").doc("admins");

        await dataBase.get().then((queryResult) => {
          oldCount = queryResult.data().email.length;
          console.log(queryResult.data().email);
        });

        await dataBase.update({
          email: firebase.firestore.FieldValue.arrayUnion(this.adminEmail),
        });

        await dataBase.get().then((queryResult) => {
          newCount = queryResult.data().email.length;
        });

        if (newCount === oldCount + 1) {
          this.modalActive = !this.modalActive;
          return;
        }
      }
      this.functionMsg = "Add admin fail!";
      return;
    },
    closeModal() {
      this.modalActive = !this.modalActive;
      this.adminEmail = "";
      this.functionMsg = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.admin {
  .container {
    max-width: 1000px;
    padding: 60px 25px;

    h2 {
      text-align: center;
      margin-bottom: 16px;
      font-weight: 300;
      font-size: 32px;
    }

    .admin-info {
      border-radius: 8px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0;
      padding: 32px;
      background-color: #f1f1f1;
      display: flex;
      flex-direction: column;
      max-width: 600px;
      margin: 32px auto;

      span {
        font-size: 14px;
        text-align: center;
        color: rgb(187, 0, 0);
      }

      .input {
        margin: 16px 0;

        label {
          font-size: 14px;
          display: block;
          padding-bottom: 6px;
        }
        input {
          width: 100%;
          border: none;
          background-color: #f2f7f6;
          padding: 8px;
          height: 50px;
          @media (min-width: 900px) {
          }

          &:focus {
            outline: none;
          }
        }
      }
      button {
        align-self: center;
      }
    }
  }
}
</style>