<template>
  <div class="blog-wrapper no-user">
    <div class="blog-content">
      <div>
        <h2 v-if="post.welcomeScreen">
          {{ post.title }}
        </h2>
        <h2 v-else>
          {{ post.title }}
        </h2>
        <p v-if="post.welcomeScreen">{{ post.blogPost }}</p>
        <p class="content-preview" v-else>{{ post.blogHTML }}</p>
        <router-link class="link link-light" v-if="post.welcomeScreen" to="#">
          LOGIN/REGISTER
          <box-icon
            class="arrow"
            color="#fff"
            name="right-arrow-alt"
          ></box-icon>
        </router-link>
        <router-link class="link" v-else to="#">
          VIEW THE POST
          <box-icon class="arrow" name="right-arrow-alt"></box-icon>
        </router-link>
      </div>
    </div>
    <div class="blog-photo">
      <img
        v-if="post.welcomeScreen"
        :src="require(`../assets/blogPhotos/${post.photo}.jpg`)"
        alt=""
      />
      <img
        v-else
        :src="require(`../assets/blogPhotos/${post.blogCoverPhoto}.jpg`)"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "blogPost",
  props: ["post"],
};
</script>
<style lang="scss" scoped>
.blog-wrapper {
  display: flex;
  flex-direction: columns;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0;
  @media (min-width: 700px) {
    min-height: 650px;
    max-height: 650px;
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }

  .blog-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 4;
    order: 2;
    @media (min-width: 700px) {
      order: 1;
    }
    @media (min-width: 800px) {
      flex: 3;
    }

    div {
      max-width: 375px;
      padding: 72px 24px;
      @media (min-width: 700px) {
        padding: 0 24px;
      }

      h2 {
        font-size: 32px;
        font-weight: 300;
        text-transform: uppercase;
        margin-bottom: 24px;
        @media (min-width: 700px) {
          font-size: 40px;
        }
      }

      p {
        font-size: 15px;
        font-weight: 300;
        line-height: 1.7;
      }

      .content-preview {
        font-size: 13px;
        max-height: 24px;
        width: 250px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .link {
        display: inline-flex;
        align-items: center;
        margin-top: 32px;
        padding-bottom: 4px;
        border-bottom: 1px solid transparent;
        transition: 0.5s ease-in all;

        &:hover {
          border-bottom: 1px solid #303030;
        }
      }

      .link-light {
        &:hover {
          border-bottom: 1px solid #fff;
        }
      }
    }
  }

  .blog-photo {
    order: 1;
    flex: 3;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0;

    @media (min-width: 700px) {
      order: 2;
    }

    @media (min-width: 800px) {
      flex: 4;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &:nth-child(even) {
    .blog-content {
      order: 2;
    }
    .blog-photo {
      order: 1;
    }
  }
}

.no-user:first-child {
  .blog-content {
    background-color: #303030;
    color: #fff;
  }
}
</style>