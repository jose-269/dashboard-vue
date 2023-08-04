<template>
	<div class="result-table">
		<table class="table table-striped user-table" >
				<thead class="table__head">
					<tr>
						<th scope="col">ID</th>
						<th scope="col">Nombre completo </th>
						<th scope="col">Nombre de usuario</th>
						<th scope="col">Correo</th>
						<th scope="col">Teléfono</th>
						<th scope="col">Sitio web</th>
						<th scope="col">Acciones</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="user in users" :key="user.id">
						<th scope="row">{{ user.id }}</th>
							<td>{{ user.name }}</td>
							<td>{{ user.username }}</td>
							<td>{{ user.email }}</td>
							<td>{{ user.phone }}</td>
							<td>{{ user.website }}</td>
					<td class="d-flex justify-content-around align-items-center">
							<button class="btn" data-bs-toggle="modal" :data-bs-target="`#detailModal${user.id}`" @click="$nextTick(() => sendId(user.id))">
								<img class="actions-img" src="@/assets/search.webp" alt="mostrar">
							</button>
							<button class="btn" data-bs-toggle="modal" :data-bs-target="`#isRemoveModal${user.id}`"   >
								<img class="actions-img" src="@/assets/trash.webp" alt="">
							</button>
					</td>
					<!-- MODALS -->
					<DetailModal :id="user.id" />
					<isRemoveModal :id="user.id" />
					<ConfirmModal />
					</tr>
				</tbody>
		</table>

	</div>
		

</template>

<script>
import DetailModal from '@/components/DetailModal.vue';
import isRemoveModal from '@/components/isRemoveModal.vue'
import { mapMutations } from 'vuex';
import ConfirmModal from '@/components/ConfirmModal.vue'

export default {
  name: 'Table',
	components: {
		DetailModal,
		isRemoveModal,
		ConfirmModal
	},
	methods: {
		...mapMutations(["setID", "removeUser"]),
    sendId(id) {
			this.setID(id)
    },
		
  },
  props: {
    users: {
        type: Array,
    },
  },
  
}
</script>


<style lang="scss">
.main-layout {
  background: linear-gradient( #366796, #38C6D9);
  height: 100%;
  width: 100%;
}
.result-table {
	// border: 1px solid grey;
}
.table-wrapper {
  background-color: #fff;
  width: 100%;
}
.table {
  width: 100%;

  &__head {
    background-color: #366796;
    color: #fff;
  }
}
.actions-img {
  width: 20px;
}
</style>
