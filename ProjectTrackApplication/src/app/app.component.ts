import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  months = ['january','February','March','April','May','June','July','August','September'];

  IsCondition = false;

  changeCondition(){
    this.IsCondition = this.IsCondition?false:true;
  }

}
