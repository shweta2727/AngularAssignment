import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './Promise.html'
})
export class PromiseComponent implements OnInit {

  constructor(){

  }
  ngOnInit(){

    /* Create Promise */
    let promise = new Promise(resolve => {
        const interval = setInterval(() => {
            const token = '12345'; // set the token from local storage
            if(token != null){
                clearInterval(interval);
                resolve();
            }
        }, 3000);
    }
    );
      
      // resolve runs the first function in .then
      promise.then(
        result => alert(result), // shows "done!" after 1 second
        error => alert(error) // doesn't run
      );
  }
}
