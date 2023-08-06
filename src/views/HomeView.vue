<template>
  <div class="main-layout">
    
  <div class="grid-container">
    <div class="sidebar">
      <div class="d-flex justify-content-center">
        <img src="@/assets/user-logo-table.webp" class="user-logo mb-5" alt="user">

      </div>
      <ul class="list-links">
        <li class="mb-4 text-white">
          <div class="link-selected pl-3 d-flex align-items-center py-3">
            
            <i class="fa-solid fa-house ps-3 me-2"></i> <b>Inicio</b>
          </div>
        </li>
        <li class="mb-4 text-selected">
          <div class="link-selected bg-white pl-3 d-flex align-items-center py-3">

            <i class="fa-solid fa-users ps-3 text-selected me-2"></i><b>Ususarios</b>
          </div>
        </li>
      </ul>
    </div>
    <div v-if="users.length > 0"  class="table-content px-5">

      <div class="nav-links-section">
        <a href="#" class="nav-links-section__nav-links"><i class="fa-solid fa-house "></i> Inicio</a> / 
        <a href="#" class="nav-links-section__nav-links fw-bold">Usuarios</a>
      </div>

      <AddUserBtn />
      <div class="table-wrapper">
        <Table  :users="users" />
      </div>
    </div>
    <div v-else class="spinner-border text-light my-spinner" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  </div>
</template>

<script>

import {  mapState, mapActions } from 'vuex';
import Table from '@/components/Table';
import AddUserBtn from '@/components/AddUserBtn.vue';

export default {
  name: 'Home',
  computed: {
    ...mapState(['users'])
  },
  components: {
    Table,
    AddUserBtn
  },
  methods: {
    ...mapActions(['getUsers', 'getDetails']),
  },
  created () {
     this.getUsers();
     this.getDetails()
  },
  
}
</script>


<style lang="scss">
.list-links {
  list-style: none;
}
.link-selected {
  border-radius: 23px 0 0 23px;
}
.nav-links-section {
  padding: 50px 0 4px;
  border-bottom: 1px solid var(--first-grey);
  margin-bottom: 30px;
  &__nav-links {
    color: var(--dark-blue);
    text-decoration: none;
  }
}
.nav-links-section__nav-links:hover {
  color: var(--second-blue);
}
.main-layout {
  background: linear-gradient( #366796, #38C6D9);
  min-height: 110vh;
  height: 100%;
  width: 100%;
}
.grid-container {
  display: grid;
  grid-template-columns: 233px 1fr ; 
  grid-template-rows: 50px 1fr ; 
  // width: 100%;
  height: 100%;
}
.user-logo {
  width: 102.93px;
}
.sidebar {
  grid-column: 1/2;
  grid-row: 2/3;
  padding: 0 0 0 10px;
}
.my-spinner {
  grid-column: 2/3;
  grid-row: 2/3;
  margin: 300px auto;
  
}
.table-wrapper {
  background-color: #fff;
}
.table-content {
  grid-column: 2/3;
  grid-row: 2/3;
  background-color: #fff;
  border-radius: 50px 0 0 0px;
  padding-bottom: 50px;
  height: 100%;
    min-height: 110vh;
}
.text-selected {
  color: var(--second-blue);
}
.table {
  // width: 100%;

  &__head {
    background-color: #366796;
    color: #fff;
  }
}
.actions-img {
  width: 20px;
}
</style>
