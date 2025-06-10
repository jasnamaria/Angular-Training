import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent  {
id: string | null = '';
name: string | null = '';
age: string | null = '';

  constructor(private route: ActivatedRoute)  {}   

   ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.name = this.route.snapshot.paramMap.get('name');
    this.age = this.route.snapshot.paramMap.get('age');

   }
}
