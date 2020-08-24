import { Component, OnInit, Input } from '@angular/core';
import { Operation } from 'src/app/models/Operation';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item:Operation;
  constructor() { }

  ngOnInit(): void {
  
  }

}
