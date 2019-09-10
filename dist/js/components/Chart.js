
class Chart{

  constructor(){
    const thisChart = this;
    thisChart.getChart();
  }

  getChart(){
    const thisChart = this;

    thisChart.ctx = document.getElementById('myChart').getContext('2d');

    thisChart.initChart(thisChart.ctx);
  }

  initChart(ctx){
    const thisChart = this;

    const chartSettings = {
        type: 'line',
        data: {
            datasets: [{
                data: [20, 50, 100, 75, 25, 0],
                label: 'Left dataset',
                yAxisID: 'left-y-axis'
              }],
              labels: ['2019-9-2', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
            },
            options: {
              scales: {
                yAxes: [{
                    id: 'left-y-axis',
                    type: 'linear',
                    position: 'left'
                  }, {
                    id: 'right-y-axis',
                    type: 'linear',
                    position: 'right'
                  }]
                }
              }
            };
    var myChart = new Chart(ctx, chartSettings);
  }
}

  export default Chart;
