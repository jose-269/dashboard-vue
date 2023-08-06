import { createLogger, createStore } from "vuex";

export default createStore({
  state: {
    users: [],
    details: [],
    modalId: null,
    usersPost: {},
    confirm: false,
    cofirmMessage: ''
  },
  getters: {
    userLengthPosts (state)  {
      if(state.modalId ) return state.details.filter(user => user.userId === state.modalId).length
    }
  },

  mutations: {
    setConfirmMessage(state, msg) {
      if (!msg) return;
      state.cofirmMessage = msg
    },
    setConfirm(state, confirm) {
      state.confirm = confirm
    },
    setUsers(state, payload) {
      if(!payload) return;
      state.users = payload
    },
    setDetails(state, payload) {
      if(!payload) return;
      state.details = payload;
    },
    setID(state, id) {
      if(!id) return;
      state.modalId = id
    },
    setUserPost(state, post) {
      if(!post) return;
      state.usersPost = post
    },
    AddUser(state, user) {
      if(!user) return;
      const newId = state.users.map(user => user.id);
      const maxId = newId.reduce((a,b) => Math.max(a,b));
      const obj = {
        id: maxId +1,
        name: user.fullName,
        username: user.userName,
        email: user.email,
        phone: user.phone,
        website: user.webSite,
        company: {
          bs: '',
          catchPhrase: '',
          name: user.company
        }
      }
      state.users.push(obj)
    },
    removeUser(state, id) {
      if(!id) return;
      const filter = state.users.filter(user => user.id === id)[0];
      const index = state.users.indexOf(filter);
      // console.log(index);
      // console.log(id);
      if(index !== -1) state.users.splice(index, 1);
    }
  },
  actions: {
    async getUsers ({ commit }) {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const user = await res.json();
        console.log(user);
         commit("setUsers", user);
        
      } catch (error) {
        console.log(error);
      }
    },
    async getDetails({ commit }) {
  
      try {
  
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const details = await res.json();
         commit('setDetails', details);
        
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
