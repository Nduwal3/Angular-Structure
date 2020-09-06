import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss'],
})
export class DummyComponent implements OnInit {
  @Input() type: string;

  constructor() {}

  ngOnInit(): void {
    console.log(this.type);
  }
}
