import { Component } from '@angular/core';


class MenuItem {
  text: string;
  ID: number;
  childern?: MenuItem[];
  url:string; 
  icon?:string;
}

@Component({
  selector: 'app-navigator',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  menu1 : MenuItem = { text:"Login",ID:1,url:"auth/login",icon:"lock_open" };
  menu2 : MenuItem = { text:"Register",ID:1,url:"auth/register",icon:"note_add" };
  menuItems: MenuItem[] = [this.menu1,this.menu2]
}
