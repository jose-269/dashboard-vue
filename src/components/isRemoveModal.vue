<template>
    <div class="modal fade" :id="`isRemoveModal${id}`" tabindex="-1" aria-labelledby="isRemoveModal" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
							<div class="modal-body text-center">
								<img src="@/assets/info-logo.webp" class="info-logo" alt="info logo">
								<h3>¿Desea eliminar este usuario?</h3>
								<p>Una ves eliminado no podrán revertir los cambios hechos</p>
							</div>
                <div class="py-3 text-center">
									<button type="button" class="btn btn-primary mx-2" @click="removeById()" data-bs-dismiss="modal">Eliminar</button>
                    <button type="button" class="btn btn-secondary mx-2" data-bs-dismiss="modal">Cancelar</button>
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
		...mapMutations(["removeUser"]),

		removeById() {
			this.removeUser(this.id)
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
</style>