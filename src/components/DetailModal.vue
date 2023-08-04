<template>
    <div class="modal fade" :id="`detailModal${id}`" tabindex="-1" aria-labelledby="detailModal" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="d-flex justify-content-between align-items-center my-4 px-3 mb-5">
              <h5 class="modal-title" id="detailModal">Detalle Usuario <b>{{ modalUser[0].name }}</b></h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
              <span> <i class="fa-solid fa-circle-info"></i> <b>{{ modalUser[0].company.name }}</b></span>

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

</style>