import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user-api.service';
import { User } from './models/User';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService], // Fornecer o UserService aqui, se necessário
  imports: [CommonModule],
  template: `
    <li *ngFor="let user of users">
      <img src="{{user.image}}" alt="user image">
    </li>
  `
  
})
export class AppComponent implements OnInit {
  users: User[] = [];
  user: User = {image: ''};


  constructor(private service: UserService) {}
  ngOnInit() {
    this.service.getUsers().subscribe(
      (data: any) => {
        if (data && data.users) {
          this.users = data.users;
        }
      }
    );
  }
  }

