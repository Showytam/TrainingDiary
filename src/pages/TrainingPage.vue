<template>
  <div class="container">
    <button class="btn" @click="toggleOpenPopup" v-if="!popupOpen">
      Додати тренування
    </button>
    <h1 class="empty" v-if="$store.state.trainings.length < 1 ? !empty : empty">
      Поки що тренувань немає
    </h1>
    <div class="training" v-if="!popupOpen">
      <div
        class="card"
        v-for="training in $store.state.trainings"
        :key="training.slug"
      >
        <h2>{{ training.day }}</h2>
        <p>{{ training.group }}</p>
        <div class="actions">
          <router-link :to="`/training/${training.slug}`">
            <button class="btn-view">Показати</button>
          </router-link>
          <button class="btn" @click="deleteTraining(training)">
            Видалити
          </button>
        </div>
      </div>
    </div>
    <training-popup v-if="popupOpen" @toggle="toggleOpenPopup"
    />
  </div>
</template>

<script>
import TrainingPopup from '../components/TrainingPopup.vue'
import { ref } from 'vue'
import { useStore } from 'vuex'

export default { 
  components: {
    TrainingPopup,
  },
  setup() {
const empty = ref(false)

    const popupOpen = ref(false)

    const toggleOpenPopup = () => {
      popupOpen.value = !popupOpen.value
    }

const store = useStore()

const deleteTraining = (e) => {
store.commit('DELETE_TRAINING', e)
}

    return {
      deleteTraining,
      empty,
      popupOpen,
      toggleOpenPopup,
    }
  },
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  color: snow;
}

h1 {
  font-size: 3rem;
  margin-bottom: 32px;
  color: snow;
}

.empty {
  font-size: 2.5rem;
  color: snow;
  margin-top: 100px;
}

.training {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 900px;
  margin-top: 25px;
}

.card {
  min-width: 200px;
  padding: 10px;
  margin: 10px 20px 10px 20px;
  border: 2px solid snow;
  border-radius: 5px;
  background: rgb(32, 40, 82, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card h2,
p {
  margin-bottom: 10px;
}

.actions {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.btn {
  font-size: 14px;
  background: transparent;
  color: snow;
  border-radius: 5px;
  padding: 7px 4px;
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

.btn-view {
  font-size: 16px;
  background: transparent;
  color: snow;
  border-radius: 5px;
  padding: 8px 5px;
  border: 2px solid rgb(2, 202, 202);
}

.btn-view:hover {
  background: rgb(0, 137, 137);
  cursor: pointer;
  transform: scale(1.05);
  color: snow;
  transition: scale 0.4s ease-in-out;
  transition: background 0.4s ease-in-out;
}
</style>
