<template>
  <div class="d-flex justify-content-between py-4 align-items-ceneter">
    <h1 class="main-title mb-0 align-self-center">Listado de usuarios</h1>
    <button
      class="btn ms-auto new-user-btn px-4 fw-bold py-2"
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#addUserModal"
    >
      <i class="fa-solid fa-user-plus me-1"></i>Nuevo usuario
    </button>
  </div>

  <AddUserModal />
</template>

<script>
import AddUserModal from "./AddUserModal.vue";

export default {
    name: "AddUserBtn",

  components: {
    AddUserModal,
  },
};
</script>

<style lang="scss" scoped>
.main-title {
  font-size: 24px;
  font-weight: bold;
  color: var(--dark-blue);
}
.new-user-btn {
  background-color: var(--second-blue);
  color: #fff;
  border-radius: 10px;
}
</style>
