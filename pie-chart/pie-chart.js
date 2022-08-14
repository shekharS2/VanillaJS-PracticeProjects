const slider = document.getElementsByClassName("slider")[0];
const pieChart = document.getElementsByClassName("pie-chart")[0];
slider.addEventListener("input", (e) => {
    pieChart.style = `--percentage: ${e.target.value}%`;
});