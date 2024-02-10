/*!
 * Start Bootstrap - SB Admin 2 v4.1.3 (https://startbootstrap.com/theme/sb-admin-2)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin-2/blob/master/LICENSE)
 */

!(function (l) {
  "use strict";
  l("#sidebarToggle, #sidebarToggleTop").on("click", function (e) {
    l("body").toggleClass("sidebar-toggled"),
      l(".sidebar").toggleClass("toggled"),
      l(".sidebar").hasClass("toggled") &&
        l(".sidebar .collapse").collapse("hide");
  }),
    l(window).resize(function () {
      l(window).width() < 768 && l(".sidebar .collapse").collapse("hide"),
        l(window).width() < 480 &&
          !l(".sidebar").hasClass("toggled") &&
          (l("body").addClass("sidebar-toggled"),
          l(".sidebar").addClass("toggled"),
          l(".sidebar .collapse").collapse("hide"));
    }),
    l("body.fixed-nav .sidebar").on(
      "mousewheel DOMMouseScroll wheel",
      function (e) {
        var o;
        768 < l(window).width() &&
          ((o = (o = e.originalEvent).wheelDelta || -o.detail),
          (this.scrollTop += 30 * (o < 0 ? 1 : -1)),
          e.preventDefault());
      }
    ),
    l(document).on("scroll", function () {
      100 < l(this).scrollTop()
        ? l(".scroll-to-top").fadeIn()
        : l(".scroll-to-top").fadeOut();
    }),
    l(document).on("click", "a.scroll-to-top", function (e) {
      var o = l(this);
      l("html, body")
        .stop()
        .animate(
          { scrollTop: l(o.attr("href")).offset().top },
          1e3,
          "easeInOutExpo"
        ),
        e.preventDefault();
    });
})(jQuery);

// Set new default font family and font color to mimic Bootstrap's default styling
(Chart.defaults.global.defaultFontFamily = "Nunito"),
  '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = "#858796";

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Direct", "Referral", "Social"],
    datasets: [
      {
        data: [55, 30, 15],
        backgroundColor: ["#cb161d ", " #ffca40", " #000"],
        hoverBackgroundColor: [" #cb161d", " #ffca40", " #000"],
        hoverBorderColor: "rgba(234, 236, 244, 1)",
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: "#dddfeb",
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false,
    },
    cutoutPercentage: 80,
  },
});

// ==========Area Chart

// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily =
  '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = "#292b2c";

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "9.00 am",
      "12.00 pm",
      "03.00 pm",
      "06.00 pm",
      //   "Mar 5",
      //   "Mar 6",
      //   "Mar 7",
      //   "Mar 8",
      //   "Mar 9",
      //   "Mar 10",
      //   "Mar 11",
      //   "Mar 12",
      //   "Mar 13",
    ],
    datasets: [
      {
        label: "Sessions",
        lineTension: 0.3,
        backgroundColor: " rgba(205, 215, 224, 0.2)",
        borderColor: " rgb(203 22 29)",
        pointRadius: 5,
        pointBackgroundColor: "rgb(203 22 29);",
        pointBorderColor: "rgba(255,255,255,0.8)",
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(203 22 29);",
        pointHitRadius: 50,
        pointBorderWidth: 2,
        data: [
          10000, 30162, 26263, 18394, 18287, 28682, 31274, 33259, 25849, 24159,
          32651, 31984, 38451,
        ],
      },
    ],
  },
  options: {
    scales: {
      xAxes: [
        {
          time: {
            unit: "date",
          },
          gridLines: {
            display: false,
          },
          ticks: {
            maxTicksLimit: 7,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 40000,
            maxTicksLimit: 5,
          },
          gridLines: {
            color: "rgba(0, 0, 0, .125)",
          },
        },
      ],
    },
    legend: {
      display: false,
    },
  },
});

// ======================================
// Vue.component("pie-chart", {
//   extends: VueChartJs.Pie,
//   mounted() {
//     this.renderChart(
//       {
//         labels: ["VueJs", "EmberJs", "ReactJs", "AngularJs"],
//         datasets: [
//           {
//             backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
//             data: [40, 20, 80, 10],
//           },
//         ],
//       },
//       {
//         responsive: true,
//         maintainAspectRatio: false,
//         pieceLabel: {
//           mode: "percentage",
//           precision: 1,
//         },
//       }
//     );
//   },
// });

// var vm = new Vue({
//   el: ".app",
//   data: {
//     show: false,
//     message: {
//       labels: ["January", "February", "March", "April", "May", "June", "July"],
//       datasets: [
//         {
//           label: "Data One",
//           backgroundColor: "#f87979",
//           data: [40, 39, 10, 40, 39, 80, 40],
//         },
//       ],
//     },
//   },

//   mounted() {
//     //setInterval(() => {
//     //this.fillData()
//     //    },  5000)
//   },
// });
