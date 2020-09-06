import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent {
  @Input() days: number;
  @Input() week: number;
  @Input() type: string;
  @Output() updateValue = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  updateCount() {
    this.updateValue.emit();
  }
}
