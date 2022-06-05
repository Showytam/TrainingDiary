<template>
  <div class="add-training-popup">
    <div class="popup-content">
      <form @submit.prevent="addNewTraining">
        <div class="group">
          <label>День тижня</label>
          <input type="text" v-model="newTraining.day" />
        </div>
        <div class="group">
          <label>Групи м'язів</label>
          <input type="text" v-model="newTraining.group" />
        </div>
        <div class="group">
          <label>Вправа</label>
          <div class="exercise" v-for="i in newTraining.exercisesRow" :key="i">
            <input type="text" v-model="newTraining.exercises[i - 1]" />
          </div>
          <button class="btn" @click.prevent="newExercise">
            Додати вправу
          </button>
        </div>
        <button class="btn" type="submit">Додати тренування</button>
        <button class="btn" @click="togglePopup">Назад</button>
      </form>
    </div>
  </div>
</template>

<script>
import {ref} from "vue"
import { useStore } from 'vuex'

export default {
  setup(props,{emit}) {

    const newTraining = ref({
      day: '',
      group: '',
      exercises: [],
      exercisesRow: 1,
    })

        const newExercise = () => {
      newTraining.value.exercisesRow++
    }

    const store = useStore()
    
        const addNewTraining = () => {
      newTraining.value.slug = newTraining.value.day
        .toLowerCase()
        .replace(/\s/g, '-')

      if (!newTraining.value.slug) {
        alert('Будь-ласка, вкажіть день тренуваня')
        return
      }

      store.commit('ADD_TRAINING', { ...newTraining.value })

      newTraining.value = {
        day: '',
        group: '',
        exercises: [],
        exercisesRow: 1,
      }
      togglePopup()
    }

   const togglePopup = () => {
emit("toggle")
   }

    return {
      newTraining, newExercise, addNewTraining, togglePopup,emit
    }
  },
}
</script>

<style scoped>
.add-training-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
}

.popup-content h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: snow;
}
.popup-content .group {
  margin-bottom: 1rem;
}
.popup-content .group label {
  display: block;
  margin-bottom: 0.5rem;
}
.popup-content .group input {
  display: block;
  width: 100%;
  padding: 0.5rem;
  border-radius: 5px;
  background: transparent;
  border: 2px solid rgb(161, 161, 161);
  color: snow;
}
.popup-content button[type='submit'] {
  margin-right: 1rem;
}

.exercise {
  margin-bottom: 5px;
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
</style>
