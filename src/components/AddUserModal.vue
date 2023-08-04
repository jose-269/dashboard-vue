<template>
    <div class="modal fade" id="addUserModal" tabindex="-1" aria-labelledby="addUserModal" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="d-flex justify-content-between align-items-center my-4 px-3 mb-5">
                    <h5 class="modal-title" id="exampleModalLabel">Crear Usuario</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="fullNameInput" class="form-label mb-0 my-label">Nombre y apellido</label>
                        <input type="email" class="form-control" v-model="newUser.fullName" id="fullNameInput" placeholder="Ingrese nombre y apellido">
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="userNameInput" class="form-label mb-0 my-label">Nombre de usuario</label>
                        <input type="email" class="form-control" v-model="newUser.userName" id="userNameInput" placeholder="Ingrese nombre de usuario">
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="emailInput" class="form-label mb-0 my-label">Correo</label>
                        <input type="email" class="form-control" v-model="newUser.email" id="emailInput" placeholder="Ingrese Correo">
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="phoneInput" class="form-label mb-0 my-label">Teléfono</label>
                        <input type="email" class="form-control" v-model="newUser.phone" id="phoneInput" placeholder="Ingrese teléfono">
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="webInput" class="form-label mb-0 my-label">Sitio  Web</label>
                        <input type="email" class="form-control" v-model="newUser.webSite" id="webInput" placeholder="Ingrese Sitio web">
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="companyInput" class="form-label mb-0 my-label">Nombre compañía</label>
                        <input type="email" class="form-control" v-model="newUser.company" id="companyInput" placeholder="Ingrese nombre compañía">
                    </div>

                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn save-btn px-5" data-bs-dismiss="modal" @click="sendNewUser">Guardar</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script >
import { mapMutations } from 'vuex';

export default {
	name: 'AddUserModal',
	data() {
			return {
					newUser: {
							fullName: '',
							userName: '',
							email: '',
							phone: '',
							webSite: '',
							company: ''
					}
			}
	},
	methods: {
		...mapMutations(['AddUser']),
		sendNewUser() {
			if(!this.newUser.fullName || !this.newUser.userName || !this.newUser.email || !this.newUser.phone || !this.newUser.webSite || !this.newUser.company ) return;

			this.AddUser(this.newUser);

			this.newUser.fullName = '';
			this.newUser.userName = '';
			this.newUser.email = '';
			this.newUser.phone = '';
			this.newUser.webSite = '';
			this.newUser.company = '';
			
		}
	},

}

</script>

<style lang="scss" scoped>
.my-label {
    font-weight: bold;
    font-size: 13px;
}
.save-btn {
    background-color: var(--second-blue);
    color: #fff;
}
</style>