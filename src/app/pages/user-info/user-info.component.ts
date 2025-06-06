import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-user-info',
  standalone: false,
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent {
  id = 0;

  constructor(private route:ActivatedRoute){
    this.id=route.snapshot.params['id'];
   
  }
}
