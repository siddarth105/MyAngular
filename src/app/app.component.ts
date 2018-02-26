import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [AppService]
})
export class AppComponent {

  post: Post;
  title = 'app works!!!';

  constructor(private appService : AppService) {
    console.log('AppService : constructor');
  }

  myFunction() {
    console.log('AppComponent : myFunction');
      this.appService.getData().subscribe(post => {
      this.post = post;
      console.log(JSON.stringify(post));
      });
  }
  
  chatFunction() {
  	console.log('AppComponent : chatFunction');
  }
}

interface Post {
     value: string;
}
