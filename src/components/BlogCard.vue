<template>
  <div class="blog-card">
    <div v-show="editPost" class="icons">
      <div class="icon" @click="editBlog">
        <box-icon color="#2a2a2a" class="edit" name="edit"></box-icon>
      </div>
      <div class="icon" @click="deletePost">
        <box-icon color="#2a2a2a" class="delete" name="x-circle"></box-icon>
      </div>
    </div>
    <img :src="post.blogCoverPhoto" alt="" />
    <div class="info">
      <h4>
        {{ post.blogTitle }}
      </h4>
      <h6>
        Posted on:
        {{
          new Date(post.blogDate).toLocaleString("en-us", { dateStyle: "long" })
        }}
      </h6>
      <router-link
        class="link"
        :to="{ name: 'ViewBlog', params: { blogid: this.post.blogID } }"
      >
        View The Post
        <box-icon class="arrow" color="#fff" name="right-arrow-alt"></box-icon>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "blogCard",
  props: ["post"],
  computed: {
    editPost() {
      return this.$store.state.editPost;
    },
  },
  methods: {
    deletePost() {
      console.log("deleteCPN");
      this.$store.dispatch("deletePost", this.post.blogID);
    },
    editBlog() {
      this.$router.push({
        name: "EditBlog",
        params: { blogid: this.post.blogID },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-card {
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #fff;
  min-height: 420px;
  transition: 0.5s ease all;

  &:hover {
    transform: rotateZ(-1deg) scale(1.01);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0;
  }

  .icons {
    display: flex;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 99;

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-color: #fff;
      transition: 0.5s ease all;

      &:hover {
        background-color: #303030;

        .edit,
        .delete {
          color: #fff;
        }
      }

      &:nth-child(1) {
        margin-right: 8px;
      }

      .edit,
      .delete {
        pointer-events: none;
        font-size: 10px;
      }
    }
  }

  img {
    display: block;
    border-radius: 8px 8px 0 0;
    z-index: 1;
    width: 100%;
    object-fit: contain;
  }

  .info {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    z-index: 3;
    padding: 32px 16px;
    color: #000;

    h4 {
      padding-bottom: 8px;
      font-size: 20px;
      font-weight: 300;
    }

    h6 {
      font-weight: 400;
      font-size: 12px;
      padding-bottom: 16px;
    }

    .link {
      display: inline-flex;
      align-items: center;
      margin-top: auto;
      font-weight: 500;
      padding-top: 20px;
      font-size: 12px;
      padding-bottom: 4px;
      transition: 0.5s ease-in all;

      &:hover {
        color: rgba(48, 48, 48, 0.8);
      }

      .arrow {
        width: 10px;
      }
    }
  }
}
</style>