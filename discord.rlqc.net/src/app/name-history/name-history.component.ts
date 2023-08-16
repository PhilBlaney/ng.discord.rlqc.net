import { Component, ViewChild, AfterViewInit,ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { Aliases } from '../_models';
import { RLQCService } from '../_services';
import { first } from 'rxjs/operators';

const ELEMENT_DATA: Aliases[] = [
];



@Component({
  selector: 'app-name-history',
  templateUrl: './name-history.component.html',
  styleUrls: ['./name-history.component.scss']
})
export class NameHistoryComponent implements AfterViewInit{
  
  displayedColumns: string[] = ['discord', 'name', 'timestamp', ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  public dataAliases: Aliases[] = [];
  constructor(private rlqcService: RLQCService, private changeDetectorRef: ChangeDetectorRef){

  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyfilter(value: string)  {
    this.dataAliases = [];
    if(value){
      this.rlqcService.getAll('aliases/'+value+'/'+value).pipe(first()).subscribe(element =>{
        for(let e of element){
          let member : Aliases = {
            id : e.id,
            guild: e.guild,
            discord: e.discord,           
            timestamp: e.timestamp,
            nick : e.nick,
            name:e.name
          }
          
          this.dataAliases.push(member);
          this.dataSource.data = this.dataAliases;
        }
      })
    }
    else{
      this.dataSource.data = this.dataAliases;
    }
    
  }
}
