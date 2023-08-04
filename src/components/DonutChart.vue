<template>
  <div class="row" v-if="isDataLoaded">
    <div class="col-md-6">
      <div class="chart" ref="donutChart" style="height: 400px;"  v-if="isDataLoaded"></div>
    </div>
    <div class="col-md-6">
      <h4>Titulo </h4>
      <p>{{ userPost?.title }}</p>

      <h4>Descripción </h4>
      <p>{{ userPost?.body }}</p>

    </div>
  </div>
  <div v-else>Cargando...</div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default {
  name: 'DonutChart',
  
  data() {
    return {
      chart: null,
      userPost: {}
    }
  },
  computed: {
    ...mapState(['users', 'details']),
    isDataLoaded() {
      return this.users.length && this.details.length;
    },
    userFilter() {
      if (this.isDataLoaded) {
        const filter = this.users.filter((user) => user.id === this.id);
        return filter[0]?.username || '';
      }
      return '';
    },
    userPostLength() {
      if (this.isDataLoaded) {
        const posts = this.details.filter((post) => post.userId === this.id);
        this.userPost = posts[0];
        this.setUserPost(posts[0]);
        return Number(posts.length);
      }
      return 0;
    },
    allPosts() {
      if (this.isDataLoaded) {
        return this.details.length;
      }
      return 0;
    },
    pieChartData() {
      if (this.isDataLoaded) {
        return [
          {
            name: this.userFilter,
            posts: this.userPostLength,
          },
          {
            name: 'All',
            posts: this.allPosts,
          },
        ];
      }
      return [];
    }
  },
  methods: {
    ...mapMutations(['setUserPost']),
    setPieChart() {
        this.chart = am4core.create(this.$refs.donutChart, am4charts.PieChart);
        this.chart.innerRadius = am4core.percent(40);
  
        let series = this.chart.series.push(new am4charts.PieSeries());
        
        series.dataFields.value = "posts";
        series.dataFields.category = "name";
  
        series.labels.template.disabled = true; 
        series.ticks.template.disabled = true; 
        let label = series.createChild(am4core.Label);
        label.text = "{value.percent.formatNumber('#.#')}%";
        label.fontSize = 14;
        label.horizontalCenter = "middle";
        label.verticalCenter = "middle";
        series.slices.template.states.getKey("hover").properties.shiftRadius = 0.1;
  
      this.chart.data = [
        {
          "name": this.userFilter,
          "posts": this.userPostLength
        },
        {
          "name": "All",
          "posts": this.allPosts
        }
      ];
    }
  },
  mounted() {
    this.details;
    this.setPieChart()

  },
  updated () {
    this.setPieChart();
    // this.userPostLength
  },
  watch: {
    id(newId, oldId) {
    this.setPieChart(newId);
    // this.userPostLength;
  },
    userFilter(newFilter, oldFilter) {
      this.setPieChart(this.id);
      // this.userPostLength;
    },
  },
  props: {
    id: {
      type: Number,
    },
  },
}
</script>

<style lang="scss" scoped>
.chart {
  width: 200px;
  height: 200px !important;
}
</style>
