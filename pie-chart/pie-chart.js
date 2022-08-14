const slider = document.getElementsByClassName("slider")[0];
const pieChart = document.getElementsByClassName("pie-chart")[0];
slider.addEventListener("input", (e) => {
    console.log(e.target.value);
    // document.querySelector(".output").innerHTML = 1 
    pieChart.style = `--percentage: ${e.target.value}%`;
});