import { ViewChild } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit, AfterViewInit {

  show_menu: Boolean = false;
  constructor(private router: Router, private cd: ChangeDetectorRef) {}

  ngOnInit() { }

  ngAfterViewInit(){
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.show_menu = false;
        if(!this.show_menu){
          document.getElementById("nav-menu").style.width = "0%";
        }
      }
    });
  }

  toggleMenu() {
    let nav_menu = document.getElementById("nav-menu");
    if(this.show_menu){
        nav_menu.style.width = "0%";
        this.show_menu = !this.show_menu;
    }else{
        nav_menu.style.width = "100%";
        this.show_menu = !this.show_menu;
    }
    this.cd.detectChanges();
  } 
}
