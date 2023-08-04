<template>
    <div class="d-flex justify-content-end py-4">
        <button class="btn ms-auto new-user-btn px-4" type="button" data-bs-toggle="modal" data-bs-target="#addUserModal"><i class="fa-solid fa-user-plus"></i>Nuevo usuario</button>
    </div>

    <AddUserModal />
</template>

<script >
import AddUserModal from './AddUserModal.vue';


export default {
name: 'AddUserBtn',


components: {
    AddUserModal
,
},
}

</script>

<style lang="scss" scoped>
.new-user-btn {
    background-color: var(--second-blue);
    color: #fff;
    border-radius: 6px;
}
</style>