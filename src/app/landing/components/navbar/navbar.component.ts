import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor() { 
   
  }
  ngOnInit() {
  }

  navActivo(){
    var navLi = document.getElementById('nav-li');
    //navLi.addEventListener('click',  function(){
    // var resultado =  navLi.classList.add('active');
     return console.log(navLi);
    //});
  } 
}