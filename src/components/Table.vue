<template>
	<div class="result-table">
		<table class="table table-striped user-table " >
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
				<tbody class="t-body">
					<tr v-for="user in users" :key="user.id">
						<td>{{ user.id }}</td>
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
				</tr>
			</tbody>
		</table>
		<ConfirmModal :confirmed="Guardado" />
 
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
	border-radius: 25px!important;
	border: 1px solid #000;
	overflow: hidden;
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
		height: 80px;
  }
}
.t-body {
	border-top: none!important;
}
.table-striped > tbody > tr:nth-child(2n+1) > td, .table-striped > tbody > tr:nth-child(2n+1) > th {
   background-color: #F2F6FB;
}
td, th {
	text-align: center;
}
td {
	height: 48;
	vertical-align: middle;
	border-bottom: none;
}
.actions-img {
  width: 20px;
}
</style>
