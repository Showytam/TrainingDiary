<template>

  <div class="training" >
    <h1>{{ training.day }}</h1>
    <p class="group">
      Група(и) м'язів для тренування: {{ training.group.toLowerCase() }}
    </p>
    <div class="exercises">
      <h3>Вправи</h3>
      <ul>
        <li v-for="(exercise, i) in training.exercises" :key="i">
          {{ exercise }}
        </li>
      </ul>
    </div>
    <div class="actions">
        <router-link class="link" to="/training">
    <button class="btn">Назад</button>
        </router-link>
    </div>

  </div>
</template>

<script>
import { computed} from 'vue'
import {useStore} from 'vuex'
import { useRoute } from 'vue-router'
export default {
setup() {
  const route = useRoute()
  const store = useStore()

   const training = computed(() => {
      return store.state.trainings.find(
        training => training.slug === route.params.slug
      )
    })

return {
  training
}
}


}
</script>

<style scoped>
h1 {
  color: snow;
  text-align: center;
}

h3 {
  color: snow;
  text-align: center;
  margin-bottom: 15px;
}

.training {
  max-width: 400px;
  margin: 0 auto;
  margin-top: 70px;
  padding: 1rem;
  border: 2px solid snow;
  border-radius: 5px;
  background: rgb(32, 40, 82, 0.5);
}

.link {
  color: snow;
  text-decoration: none;
}

ul li {
  text-decoration: none;
  margin-bottom: 10px;
}

.group {
  color: snow;
  margin-top: 15px;
}

.exercises {
  padding: 1rem;
  color: snow;
}

.actions {
  display: flex;
  justify-content: center;
}

.btn {
    font-size: 16px;
  background: transparent;
  color: snow;
  border-radius: 5px;
  padding: 8px 5px;
  border: 2px solid rgb(2, 202, 202);
}

.btn:hover {
  background: rgb(0, 137, 137);
  cursor: pointer;
  transform: scale(1.05);
  color: snow;
  transition: scale 0.4s ease-in-out;
  transition: background 0.4s ease-in-out;
}
</style>
