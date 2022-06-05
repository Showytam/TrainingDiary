<template>
  <div class="navbar">
    <div class="navbar__btns">
      <my-button>
        <router-link class="link" to="/">Головна</router-link>
      </my-button>
      <my-button
        ><router-link class="link" to="/training"
          >Тренування</router-link
        ></my-button
      >
      <my-button
        ><router-link class="link" to="/profile"
          >Профіль</router-link
        ></my-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: true,
    }
  },
  methods: {
    toggleActive() {
      this.active = !this.active
    },
  },
}
</script>

<style scoped>
.navbar {
  width: 100vw;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 25px;
  color: snow;
}

.link {
  color: snow;
  text-decoration: none;
}

.link:hover {
  border-bottom: 2px solid rgb(2, 202, 202);
}

.router-link-active {
  color: rgb(2, 202, 202);
  outline: none;
  text-decoration: none;
  border-bottom: 2px solid rgb(2, 202, 202);
}
</style>
