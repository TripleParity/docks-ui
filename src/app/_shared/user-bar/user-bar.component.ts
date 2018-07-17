import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../_services/auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-bar",
  templateUrl: "./user-bar.component.html",
  styleUrls: ["./user-bar.component.css"]
})
export class UserBarComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  public logout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }
}
