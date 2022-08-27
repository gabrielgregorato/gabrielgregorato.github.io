import { Component, OnInit } from "@angular/core";
import Chart from "chart.js";
import * as echarts from "echarts";

@Component({
  selector: "app-web",
  moduleId: module.id,
  templateUrl: "web.component.html",
  styleUrls: ["./web.component.css"],
})
export class WebComponent implements OnInit {
  public canvas: any;
  public ctx;
  public chartColor;
  public chartEmail;
  public chartHours;

  ngOnInit() {}
}
