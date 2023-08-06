<template>
    <div class="modal fade" :id="`detailModal${id}`" tabindex="-1" aria-labelledby="detailModal" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content px-4">
          <div class="d-flex justify-content-between align-items-center my-4 px-3 mb-4">
              <h5 class="modal-title" id="detailModal">Detalle Usuario <b>{{ modalUser[0].name }}</b></h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
              <p class="company-title mb-1"> <i class="fa-solid fa-circle-info"></i> Compañia <b>{{ modalUser[0].company.name }}</b></p>
              <hr class="my-1">
              <DonutChart :id="id" />
              
          </div>
        </div>
      </div>
    </div>
</template>


<script>
import {  mapState, mapGetters } from 'vuex';
import DonutChart from '@/components/DonutChart.vue';

export default {
  name: 'DetailModal',
  data() {
    return {
        modalUser: null,
        modalDetails: null,
        company: ''
    }
  },
  
  computed: {
    ...mapState(['users', 'details', 'modalId']),
    
    setModalUser() {
        const filter = this.users.filter(user => user.id === this.id);
        this.modalUser = filter;
        return filter;
    }
  },
  created () {
    this.setModalUser;
    this.company = this.setModalUser[0].company.name
  },
  props: {
    id: {
        type: Number,
    },
  },
  components: {
    DonutChart,
  },
  
}
</script>

<style lang="scss" scoped>
.modal-title {
  font-size: 24px;
  color: var(--dark-blue);
}
.company-title {
  color: var(--first-blue);
}

@media (min-width: 576px) {
	.modal-dialog {
			max-width: 700px !important;
			margin: 1.75rem auto;
	}

}
</style>