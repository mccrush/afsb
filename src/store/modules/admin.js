import fireApp from './../../firebase'
import { getFirestore, doc, setDoc, updateDoc, deleteDoc, collection, query, orderBy, getDocs } from "firebase/firestore"
const db = getFirestore(fireApp)

export default {
  state: {
    loading: false,
    group: [],
    undergroup: [],
    org: [],
    sponsor: []
  },
  mutations: {
    removeItem(state, { type, id }) {
      state[type] = state[type].filter(item => item.id !== id)
    },
    updateItem(state, { item }) {
      const index = state[item.type].findIndex(el => el.id === item.id)
      state[item.type][index] = item
      //console.log('admin.js: m updateItem(): Данные обновлены')
    },
    addItem(state, { item }) {
      state[item.type].push(item)
    },
    setItems(state, { type, items }) {
      state[type] = items
    },
    updateLoadingStatus(state, value) {
      state.loading = value
    },
  },
  actions: {
    async removeItem({ commit }, { item }) {
      try {
        commit('updateLoadingStatus', true)
        commit('removeItem', { type: item.type, id: item.id })
        await deleteDoc(doc(db, item.type, item.id))
        commit('updateLoadingStatus', false)
        console.log('admin.js: removeItem(): Данные удалены')
      } catch (error) {
        console.error('admin.js: removeItem(): error', error)
      }
    },
    async updateItem({ commit }, { item }) {
      //console.log('store admin.js updateItem() item:', item);
      try {
        commit('updateLoadingStatus', true)
        commit('updateItem', { item })
        const itemRef = doc(db, item.type, item.id)
        await updateDoc(itemRef, item)
        commit('updateLoadingStatus', false)
        console.log('admin.js: a updateItem(): Данные обновлены')
      } catch (error) {
        console.error('admin.js: updateItem(): error', error)
      }
    },
    async addItem({ commit }, { item }) {
      try {
        commit('updateLoadingStatus', true)
        commit('addItem', { item })
        await setDoc(doc(db, item.type, item.id), item)
        commit('updateLoadingStatus', false)
        console.log('admin.js: addItem(): Данные добавлены')
      } catch (error) {
        console.error('admin.js: addItem(): error', error)
      }
    },
    async getItems({ commit }, { type }) {
      commit('updateLoadingStatus', true)
      let tempArray = []
      const q = query(collection(db, type), orderBy("position"))
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        tempArray.push(doc.data())
      })
      commit('setItems', { type, items: tempArray })
      commit('updateLoadingStatus', false)
    }
  },
  getters: {
    loading: state => state.loading,
    group: state => state.group,
    undergroup: state => state.undergroup,
    org: state => state.org,
    sponsor: state => state.sponsor
  }
}