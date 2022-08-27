import { Component, OnDestroy, OnInit } from "@angular/core";

import Chart from "chart.js";
import * as echarts from "echarts";

@Component({
  moduleId: module.id,
  selector: "app-staks",
  templateUrl: "staks.component.html",
  styleUrls: ["./staks.component.css"],
})
export class StaksComponent implements OnInit, OnDestroy {
  public canvas: any;
  public chartWidth: any;
  public chartHeight: any;
  public ctx: any;
  public chartColor: any;
  public chartEmail: any;
  public chartHours: any;

  public one: any;
  public two: any;
  public three: any;
  public four: any;
  public five: any;

  constructor() {
    this.chartWidth = this.f_rule_of_three(300, 300, window.screen.height);
    this.chartHeight = this.f_rule_of_three(800, 300, window.screen.height);
  }
  ngOnInit() {
    this.one = 1;
    this.two = true;
    this.three = true;
    this.four = true;
    this.five = true;
    this.f_grafico_semana();
  }
  ngOnDestroy() {
    delete this.f_grafico_semana;
    this.f_rule_of_three = undefined;
  }

  f_grafico_semana() {
    this.chartWidth = this.f_rule_of_three(500, 300, window.screen.width);
    this.chartHeight = this.f_rule_of_three(800, 300, window.screen.height);

    document.getElementById("graficoStaks").innerHTML = `
        <canvas id="graficomain" width="${this.chartWidth}px" height="${this.chartHeight}px" > </canvas>
        
        `;

    const myChart = echarts.init(document.getElementById(`graficomain`));
    myChart.setOption({
      xAxis: {
        type: "category",
        data: ["JavaScript", "TypeScript", "Angular", "Node", "Ionic"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [
            {
              value: 90,
              itemStyle: {
                color: "#ff9210",
              },
            },
            {
              value: 80,
              itemStyle: {
                color: "#ff9210",
              },
            },
            {
              value: 70,
              itemStyle: {
                color: "#ff9210",
              },
            },
            {
              value: 80,
              itemStyle: {
                color: "#ff9210",
              },
            },
            {
              value: 90,
              itemStyle: {
                color: "#ff9210",
              },
            },
          ],
          //   itemStyle: {
          //     color:[ '#5470c6','#91cc75','#fac858','#a90000','#a90000','#a90000','#a90000',]

          //   },
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgb(242, 75, 20)",
          },
        },
      ],
    });

    this.change();
  }

  change() {
    setTimeout(async () => {
      if (
        this.chartWidth != this.f_rule_of_three(500, 300, window.screen.width)
      ) {
        await this.f_grafico_semana();
      } else {
        this.change();
      }
    }, 1000);
  }

  f_rule_of_three(a, b, c) {
    return (c * b) / a;
  }
  f_clickTrueOrFalse(e) {
    if ((this.one = true)) {
      this.one = false;
    }
    if ((this.two = 2)) {
      this.two = true;
    }
    if ((this.three = 3)) {
      this.three = true;
    }
    if ((this.four = 4)) {
      this.four = true;
    }
    if ((this.five = 5)) {
      this.five = true;
    }
  }
}
