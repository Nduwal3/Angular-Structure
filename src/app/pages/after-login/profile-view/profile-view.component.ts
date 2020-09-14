import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss'],
})
export class ProfileViewComponent implements OnInit {
  repos;

  constructor(private http: HttpClient) {
    const URL = 'https://api.github.com/users/Nduwal3/repos';
    this.repos = this.http.get<any>(URL);
    console.log(this.repos);
    // // if required specific data(eg: items) only
    // this.repos = this.http.get<any>(URL).pipe(map(data => data.items))
    // console.log(this.repos);
    this.repos.subscribe((data) => console.log(data));

    // this.repos= this.repos.pipe(
    //   startWith(JSON.parse)
    // )
  }

  ngOnInit(): void {}
}
