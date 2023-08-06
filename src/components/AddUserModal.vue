<template>
  <div
    class="modal fade"
    id="addUserModal"
    tabindex="-1"
    aria-labelledby="addUserModal"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div
          class="d-flex justify-content-between align-items-center my-4 px-5 pb-4 border-bottom"
        >
          <h5 class="modal-title" id="exampleModalLabel">Crear Usuario</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body px-5">
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="fullNameInput" class="form-label mb-0 my-label"
                >Nombre y apellido</label
              >
              <input
                type="email"
                class="form-control add-user-input"
                v-model="newUser.fullName"
                id="fullNameInput"
                placeholder="Ingrese nombre y apellido"
              />
            </div>
            <div class="col-md-6 mb-3">
              <label for="userNameInput" class="form-label mb-0 my-label"
                >Nombre de usuario</label
              >
              <input
                type="email"
                class="form-control add-user-input"
                v-model="newUser.userName"
                id="userNameInput"
                placeholder="Ingrese nombre de usuario"
              />
            </div>
            <div class="col-md-6 mb-3">
              <label for="emailInput" class="form-label mb-0 my-label"
                >Correo</label
              >
              <input
                type="email"
                class="form-control add-user-input"
                v-model="newUser.email"
                id="emailInput"
                placeholder="Ingrese Correo"
              />
            </div>
            <div class="col-md-6 mb-3">
              <label for="phoneInput" class="form-label mb-0 my-label"
                >Teléfono</label
              >
              <input
                type="email"
                class="form-control add-user-input"
                v-model="newUser.phone"
                id="phoneInput"
                placeholder="Ingrese teléfono"
              />
            </div>
            <div class="col-md-6 mb-3">
              <label for="webInput" class="form-label mb-0 my-label"
                >Sitio Web</label
              >
              <input
                type="email"
                class="form-control add-user-input"
                v-model="newUser.webSite"
                id="webInput"
                placeholder="Ingrese Sitio web"
              />
            </div>
            <div class="col-md-6 mb-3">
              <label for="companyInput" class="form-label mb-0 my-label"
                >Nombre compañía</label
              >
              <input
                type="email"
                class="form-control add-user-input"
                v-model="newUser.company"
                id="companyInput"
                placeholder="Ingrese nombre compañía"
              />
            </div>
          </div>
        </div>
        <div class="modal-footer border-0 mt-5 px-5 mb-4">
          <button
            type="button"
            class="btn save-btn px-5 fw-bold"
            data-bs-dismiss="modal"
            @click="sendNewUser"
            :disabled="disabledWatch"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "AddUserModal",
  data() {
    return {
      newUser: {
        fullName: "",
        userName: "",
        email: "",
        phone: "",
        webSite: "",
        company: "",
        },
      isDisabled: true
    };
    },
    computed: {
      disabledWatch() {
          if (!this.newUser.fullName || !this.newUser.userName || !this.newUser.email || !this.newUser.phone || !this.newUser.webSite || !this.newUser.company) {
            return this.isDisabled = true
          } else {
            return this.isDisabled = false
        }
      },
      confirmWatch() {
        
    }
  },
  methods: {
    ...mapMutations(["AddUser", "setConfirm"]),
    sendNewUser() {
      if (
        !this.newUser.fullName ||
        !this.newUser.userName ||
        !this.newUser.email ||
        !this.newUser.phone ||
        !this.newUser.webSite ||
        !this.newUser.company
      ) return;

        // this.isDisabled = true;
    this.setConfirm(true);
      this.AddUser(this.newUser);

      this.newUser.fullName = "";
      this.newUser.userName = "";
      this.newUser.email = "";
      this.newUser.phone = "";
      this.newUser.webSite = "";
      this.newUser.company = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-content {
  width: 700px !important;
  border-radius: 25px;
}
.add-user-input {
  border: 1px solid var(--dark-blue);
  border-radius: 10px;
}

.my-label {
  font-weight: bold;
  font-size: 13px;
  color: var(--dark-blue);
}
.save-btn {
  background-color: var(--second-blue);
  color: #fff;
  border-radius: 10px;
}
@media (min-width: 576px) {
  .modal-dialog {
    max-width: 700px !important;
    margin: 1.75rem auto;
  }
}
</style>
