<template>
    <div class="modal fade" :id="`isRemoveModal${id}`" tabindex="-1" aria-labelledby="isRemoveModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
							<div class="modal-body text-center">
								<img src="@/assets/info-logo.webp" class="info-logo  my-5" alt="info logo">
								<h3 class="modal-title">¿Desea eliminar este usuario?</h3>
								<p class="sub-title">Una ves eliminado no podrán revertir los cambios hechos</p>
							</div>
                <div class="py-3 text-center">
									<button type="button" class="btn btn-remove  remove-btns mx-2 mb-3" @click="removeById()" data-bs-dismiss="modal">Eliminar</button>
                    <button type="button" class="btn btn-cancel remove-btns  mx-2 mb-3" data-bs-dismiss="modal">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script >

import { mapMutations } from 'vuex';

export default {
  name: 'isRemoveModal',

  created () {
		this.id;
	},

	methods: {
		...mapMutations(["removeUser", 'setConfirm', 'setConfirmMessage']),

		removeById() {
			this.removeUser(this.id);
			this.setConfirm(true);
      this.setConfirmMessage('Eliminado');
		}
	},
	props: {
		id: {	
			type: Number,
		},
	},
}

</script>

<style lang="scss" scoped>
.info-logo {
	width: 160px;
}
.modal-title {
	font-size: 24px;
	font-weight: bold;
	color: var(--dark-blue);
}
.modal-content {
	border-radius: 25px;
}
.sub-title {
	font-size: 14px;
	color: var(--dark-grey);
}
.remove-btns {
	width: 198px;
	font-weight: bold;
	border-radius: 10px;
}
.btn-remove {
background-color: var(--second-blue);
color: #fff;

}
.btn-cancel {
	background-color: var(--dark-grey);
	color: #fff;
}
@media (min-width: 576px) {
	.modal-dialog {
			max-width: 538px !important;
			margin: 1.75rem auto;
	}

}
</style>