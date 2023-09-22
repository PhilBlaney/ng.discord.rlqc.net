import { Component, ViewChild, AfterViewInit,ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { Aliases } from '../_models';
import { RLQCService } from '../_services';
import { first } from 'rxjs/operators';
import  {NavbarService}  from 'src/services/navbar-service.service';

const ELEMENT_DATA: Aliases[] = [
];
let typingTimer:any;
let doneTypingInterval = 500;

@Component({
  selector: 'app-name-history',
  templateUrl: './name-history.component.html',
  styleUrls: ['./name-history.component.scss']
})
export class NameHistoryComponent implements AfterViewInit{
  
  displayedColumns: string[] = ['discord', 'name', 'timestamp', ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  public dataAliases: Aliases[] = [];
  private selectedGuild:string = "";
  constructor(private rlqcService: RLQCService, private changeDetectorRef: ChangeDetectorRef, private navbarService: NavbarService){

  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  async ngOnInit(){
    this.navbarService.events$.forEach(event => this.selectedGuild = event);
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyfilter(value: string)  {
    clearTimeout(typingTimer)
    typingTimer = setTimeout(()=>this.getAliases(value), doneTypingInterval);
  }
  getAliases(value:string){
    this.dataAliases = [];
    if(value){
      this.rlqcService.getAll('aliases/'+value+'/'+value,this.navbarService.createHeader(this.selectedGuild)).pipe(first()).subscribe(element =>{
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
