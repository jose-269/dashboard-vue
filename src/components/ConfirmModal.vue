<template>
	<!-- Modal -->
	<div class="modal confirm-modal fade"  id="confirmModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" :style="{display: showModal }">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				
				<div class="modal-body text-center">
					<img src="@/assets/ticket.webp" class="info-logo my-5" alt="info logo">

					<h3 class="modal-title mb-5">Guardado exitosamente</h3>
					<button type="button" class="btn custom-btn"  @click="closeModal">Guardar</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
	name: 'ConfirmModal',
	data() {
		return {
			showModal: 'none',
			confirmModal: null
		};
	},
	computed: {
		...mapState(["confirm"]),
	},
	watch: {
		confirm(newConfirm) {
			if (newConfirm) {
				this.confirmModal = new bootstrap.Modal(document.getElementById("confirmModal"));
				this.confirmModal.show();
			} 
		}
	},
	methods: {
		...mapMutations(['setConfirm']),
		closeModal() {
			this.setConfirm(false)
			this.confirmModal.hide()
		},
	},
};
</script>

<style lang="scss" scoped>
#confirmModal {
	background-color: rgba(0, 0, 0, 0.4);

}

.confirm-modal.d-block {
  display: block;
  opacity: 0;
  transition: opacity 5s ease;
}
.modal-content {
	border-radius: 25px;
}
.info-logo {
	width: 160px;
}
.modal-title {
	font-size: 24px;
	font-weight: bold;
	color: var(--dark-blue);
}
.custom-btn {
	background-color: var(--second-blue);
	color: #fff;
	font-weight: bold;
	width: 198px;
	border-radius: 10px;
}
</style>
