import { Component, OnInit } from "@angular/core";
import { ContainerService, TaskService } from "../../_services/index";

@Component({
  selector: "app-containers",
  templateUrl: "./containers.component.html",
  styleUrls: ["./containers.component.css"]
})
export class ContainersComponent implements OnInit {
  constructor(private cs: ContainerService, private ts: TaskService) {}

  ngOnInit() {}
}
