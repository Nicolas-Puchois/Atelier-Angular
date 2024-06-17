import { Component } from "@angular/core";
import { WelcomeService } from "../welcome.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"],
  standalone: true,
})
export class WelcomeComponent {
  message: string;

  constructor(private welcomeService: WelcomeService) {
    this.message = this.welcomeService.getMessage();
  }

  updateMessage(newMessage: string) {
    this.welcomeService.setMessage(newMessage);
    this.message = this.welcomeService.getMessage();
  }
}