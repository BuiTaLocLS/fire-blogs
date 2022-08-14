<template>
  <div class="admin">
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
        <button class="button">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Admin",
  data(){
    return{
      adminEmail: "",
      functionMsg: null,
    }
  }
};
</script>

<style lang="scss" scoped>
.admin {
  .container {
    max-width: 1000px;
    padding: 60px 25px;
  }

  h2 {
    text-align: center;
    margin-bottom: 16px;
    font-weight: 300;
    font-size: 32px;
  }

  .admin-infp {
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
      button {
        align-self: center;
      }
    }
  }
}
</style>