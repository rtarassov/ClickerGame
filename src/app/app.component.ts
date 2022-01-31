import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'MyClickerGame';
//localStorage
  // If i do, load my data from backend with this token
  // If I don't have a token, ask backend for a new token


  constructor(private http: HttpClient) {  }

  ngOnInit() {
    this.setToken();
  }

  setToken(): void {
    // TODO - "Token" should be a constant, declared somewhere once only
    if (!localStorage.getItem("token")) {
      this.http.post<Token>('http://localhost:8080/token', {})
        .subscribe(token => {
        localStorage.setItem("token", token.value);
      })
    }
  }
}

interface Token {
  value: string;
}
