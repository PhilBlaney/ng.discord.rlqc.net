import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MemberHistory } from '../_models';
import { RLQCService } from '../_services';
import { first } from 'rxjs/operators';
import { NavbarService } from 'src/services/navbar-service.service';
const ELEMENT_DATA: MemberHistory[] = [
];
let typingTimer:any;
let doneTypingInterval = 500;

@Component({
  selector: 'app-member-history',
  templateUrl: './member-history.component.html',
  styleUrls: ['./member-history.component.scss']
})
export class MemberHistoryComponent  implements AfterViewInit{
  public dataMemberHistory: MemberHistory[] = [];
  private selectedGuild:string = "";
  constructor(private rlqcService: RLQCService, private changeDetectorRef: ChangeDetectorRef, private navbarService:NavbarService){

  }
  
  displayedColumns: string[] = ['discord', 'addedBy', 'type', 'duration', 'content','timestamp'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;

  ngOnInit(){
    this.navbarService.events$.forEach(event => this.selectedGuild = event.toString());
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyfilter(value: string)
  {
    clearTimeout(typingTimer)
    typingTimer = setTimeout(()=>this.getMemberHistory(value), doneTypingInterval);
  }
  getMemberHistory(value: string){
    console.dir(value);
    this.dataMemberHistory = [];
    if(value){
      this.rlqcService.getAll('member_history/'+value+'/'+value+'/'+value,this.navbarService.createHeader(this.selectedGuild)).pipe(first()).subscribe(element =>{
        for(let e of element){
          let member : MemberHistory = {
            id : e.id,
            guild: e.guild,
            discord: e.discord,
            addedBy: e.addedBy,            
            timestamp: e.timestamp,
            type: e.type,
            duration: e.duration,
            content: e.content
          }
          
          this.dataMemberHistory.push(member);
          this.dataSource.data = this.dataMemberHistory;
        }
      })
    }
    else{
      this.dataSource.data = this.dataMemberHistory;
    }
  }
}
