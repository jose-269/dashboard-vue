<template>
  <div class="row" v-if="isDataLoaded">
    <div class="col-md-6 my-5">
      <div class="chart" ref="donutChart" style="height: 400px;"  v-if="isDataLoaded"></div>
    </div>
    <div class="col-md-6 my-5">
      <h4 class="donut-title">Titulo </h4>
      <p class="user-text">{{ userPost?.title }}</p>

      <h4 class="donut-title">Descripción </h4>
      <p class="user-text">{{ userPost?.body }}</p>

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
        this.chart.innerRadius = am4core.percent(36);
        this.chart.radius = am4core.percent(90);
        
        let series = this.chart.series.push(new am4charts.PieSeries());
        
        series.dataFields.value = "posts";
        series.dataFields.category = "name";
  
        series.labels.template.disabled = true; 
        series.ticks.template.disabled = true; 
        let label = series.createChild(am4core.Label);
        label.text = `{value} ${this.userPostLength}`;
        label.fontSize = 24;
        label.fontWeight = 700;
        label.paddingBottom = 20
        label.paddingTop = 4;
        label.horizontalCenter = "middle";
        label.verticalCenter = "middle";
        label.fill = am4core.color('#33535F');
        label.rotation = -100
        let postLabel = series.createChild(am4core.Label);
        postLabel.text = "Posts";
        postLabel.fontSize = 14;
        postLabel.fontWeight = 700;
        postLabel.fill = am4core.color("#33535F");
        postLabel.verticalCenter = "top"; 
        postLabel.horizontalCenter = "middle";
        postLabel.rotation = -100;
        postLabel.paddingTop = 4;

        series.slices.template.states.getKey("hover").properties.shiftRadius = 0.1;
        series.slices.template.propertyFields.fill = "color"
        series.slices.template.stroke = am4core.color("#fff");
        series.slices.template.strokeWidth = 4;

  
      this.chart.data = [
        {
          "name": this.userFilter,
          "posts": this.userPostLength,
          "color": am4core.color("#6B7A7F")

        },
        {
          "name": "All",
          "posts": this.allPosts,
          "color": am4core.color("#379ABA")

        }
      ];
      series.rotation = 100;
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
  width: 240px;
  height: 240px !important;
}
.donut-title {
  font-size: 16px;
  font-weight: bold;
  color: var(--dark-blue);
}
.user-text {
  font-size: 14px;
  color: var(--dark-grey);
}
</style>
