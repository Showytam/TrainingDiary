import { createStore } from 'vuex'

export default createStore({
  state: {
    trainings: [
      {
        slug: 'понеділок',
        day: 'Понеділок',
        group: 'Спина, біцепс',
        exercises: ['Підтягування', 'молотки'],
      },
      {
        slug: 'вівторок',
        day: 'Вівторок',
        group: 'Ноги, плечи',
        exercises: ['Присідання', 'махи гантелями'],
      },
    ],
  },
  getters: {},
  mutations: {
    ADD_TRAINING(state, training) {
      state.trainings.push(training)
    },
    DELETE_TRAINING(state, training) {
      state.trainings.splice(training, 1)
    },
  },
})
