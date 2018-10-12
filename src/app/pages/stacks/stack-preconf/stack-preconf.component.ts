import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stack-preconf',
  templateUrl: './stack-preconf.component.html',
  styleUrls: ['./stack-preconf.component.css'],
})
export class StackPreconfComponent implements OnInit {
  public stacks = [
    { img: '/assets/wp-icon.png', name: 'WordPress' },
    { img: '/assets/mongo-icon.png', name: 'Mongo' },
    { img: '/assets/nginx-icon.png', name: 'NGINX' },
  ];
  constructor(private router: Router) {}

  ngOnInit() {}

  toCreate(stack: string) {
    this.router.navigate(['/stacks/create', { preconf: stack }]);
  }
}
