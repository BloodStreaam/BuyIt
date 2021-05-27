import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private route: Router, private routeExtras : ActivatedRoute) {}
  
  public checkList = true;

  public changeTab(verification){
    this.checkList = verification;
    console.log(this.checkList)
  }

  public searchProducts(){
   
    this.route.navigate(["tabs/tabs/loja"]);
  }

}
