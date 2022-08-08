import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxColumnComponent } from 'igniteui-angular';
import { Employee, employeesData } from './localData';
import { DisplayDensity, IgxGridComponent } from 'igniteui-angular';

@Component({
  selector: 'app-newgrid',
  templateUrl: './newgrid.component.html',
  styleUrls: ['./newgrid.component.scss']
})
export class NewGridComponent implements OnInit {
  @ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;

  public localData: Employee[] = [];
  title = 'newGrid';
  public comfortable: DisplayDensity = DisplayDensity.comfortable;
  public cosy: DisplayDensity = DisplayDensity.cosy;
  public compact: DisplayDensity = DisplayDensity.compact;
  public displayDensity: DisplayDensity = this.comfortable;

  ngOnInit(): void {
    this.localData = employeesData;
  }

  public onColumnInit(column: IgxColumnComponent): void {
    if (column.field === 'RegistererDate') {
      column.formatter = (date => date.toLocaleDateString());
    }
  }

  public setDensity(density: DisplayDensity) {
    this.displayDensity = density;
  }
}
