<template>
  <div class="container">
    <div class="main" v-if="!popupOpen && !resultPopupOpen">
      <div class="profile">
        <img
          src="../assets/images/man.png"
          alt="avatar"
          v-if="male === 'Чоловіча'"
        />
        <img src="../assets/images/girl.png" alt="avatar" v-else />
        <h2>Ім'я: {{ newInformation.name }}</h2>
        <h2>Прізвище: {{ newInformation.surname }}</h2>
        <h2>Зріст: {{ newInformation.height }} см</h2>
        <h2>Вага: {{ newInformation.weight }} кг</h2>
        <h2>Вік: {{ newInformation.age }} років</h2>
        <button class="btn" @click="togglePopup">Змінити</button>
      </div>
      <div class="profile">
        <h1>Результати</h1>
        <div>
          <h2>Підтягування: {{ newResults.pullUps }}</h2>
          <h2>Віджимання: {{ newResults.pushUps }}</h2>
          <h2>Присіданя: {{ newResults.squats }}</h2>
          <h2>Жим: {{ newResults.press }} кг</h2>
          <h2>Станова тяга: {{ newResults.deadlift }} кг</h2>
        </div>
        <button class="btn result" @click="toggleResultPopup">Змінити</button>
      </div>
    </div>

    <div class="add-information-popup" v-if="popupOpen">
      <div class="popup">
        <div class="avatar">
          <img src="../assets/images/man.png" alt="boy" v-if="avatar" />
          <img src="../assets/images/girl.png" alt="girl" v-else />
        </div>
        <div class="male">
          <label for="">Стать: </label>
          <select v-model="male" class="select" @change="changeAvatar">
            <option disabled value="">оберіть</option>
            <option>Чоловіча</option>
            <option>Жіноча</option>
          </select>
        </div>
        <div class="data">
          <label>Ім'я</label>
          <input type="text" v-model="newInformation.name" />
          <label>Прізвище</label>
          <input type="text" v-model="newInformation.surname" />
          <label
            >Вага(кг)
            <input type="number" v-model="newInformation.weight" />
          </label>
          <label
            >Зріст(см)
            <input type="number" v-model="newInformation.height" />
          </label>
          <label
            >Вік
            <input type="number" v-model="newInformation.age" />
          </label>
        </div>
        <div class="actions">
          <button class="btn" @click="togglePopup">Назад</button>
          <button class="btn" @click="togglePopup">Зберегти</button>
        </div>
      </div>
    </div>

    <div class="add-results-popup" v-if="resultPopupOpen">
      <div class="data">
        <label>Підтягування </label>
        <input type="number" v-model="newResults.pullUps" />

        <label>Віджимання </label>
        <input type="number" v-model="newResults.pushUps" />

        <label style="width: 100%">Присідання </label>
        <input type="number" v-model="newResults.squats" />
        <label>Жим(кг)</label>
        <input type="number" v-model="newResults.press" />
        <label>Станова тяга(кг)</label>
        <input type="number" v-model="newResults.deadlift" />
        <div class="actions">
          <button class="btn" @click="toggleResultPopup">Назад</button>
          <button class="btn" @click="toggleResultPopup">Зберегти</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const newInformation = ref({
      name: '',
      surname: '',
      weight: '',
      height: '',
      age: '',
    })

    const newResults = ref({
      pullUps: '',
      pushUps: '',
      squats: '',
      press: '',
      deadlift: '',
    })

    const avatar = ref(true)
    const male = ref('Чоловіча')

    const changeAvatar = event => {
      if (event.target.value === 'Жіноча') {
        avatar.value = false
      } else {
        avatar.value = true
      }
    }

    const popupOpen = ref(false)
    const togglePopup = () => {
      popupOpen.value = !popupOpen.value
    }

    const resultPopupOpen = ref(false)
    const toggleResultPopup = () => {
      resultPopupOpen.value = !resultPopupOpen.value
    }

    return {
      newInformation,
      newResults,
      avatar,
      male,
      changeAvatar,
      popupOpen,
      resultPopupOpen,
      togglePopup,
      toggleResultPopup,
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
}

.main {
  display: flex;
}

.profile {
  margin: 30px 0px 0px 30px;
  min-width: 400px;
  padding: 10px;
  border: 2px solid snow;
  border-radius: 5px;
  background: rgb(32, 40, 82, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  color: snow;
  margin: 30px 0px;
}

h2 {
  color: snow;
  margin-bottom: 10px;
}

.add-information-popup {
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

.add-results-popup {
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

.popup {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
}

.avatar {
  display: flex;
}

.select {
  background-color: transparent;
  font-size: 18px;
  color: snow;
  border: none;
}

.select option {
  color: snow;
  background-color: steelblue;
}

label {
  font-size: 22px;
  color: snow;
  margin-bottom: 7px;
}

.data {
  display: flex;
  flex-direction: column;
}

input {
  padding: 0.5rem;
  border-radius: 5px;
  margin-bottom: 10px;
  background: transparent;
  border: 2px solid rgb(161, 161, 161);
  color: snow;
}

.result {
  margin-top: 30px;
}

.btn {
  font-size: 16px;
  background: transparent;
  color: snow;
  border-radius: 5px;
  padding: 7px 4px;
  margin-left: 20px;
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

.link {
  color: snow;
  text-decoration: none;
}

.actions {
  display: flex;
}
</style>
