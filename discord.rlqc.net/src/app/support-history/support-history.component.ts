import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Support } from '../_models';
import { first } from 'rxjs/operators';
import { SupportDialogComponent } from '../support-dialog/support-dialog.component';
import { RLQCService } from '../_services';
import { ActivatedRoute } from '@angular/router';
import  {NavbarService}  from 'src/services/navbar-service.service';
const ELEMENT_DATA: Support[] = [
];
let typingTimer:any;
let doneTypingInterval = 500;

@Component({
  selector: 'app-support-history',
  templateUrl: './support-history.component.html',
  styleUrls: ['./support-history.component.scss']
})
export class SupportHistoryComponent implements AfterViewInit{
  public id: string | null = "";
  public dataSupport: Support[] = [];
  private selectedGuild:string = "";
  displayedColumns: string[] = ['support_id', 'author_id', 'name', 'content'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private route: ActivatedRoute, private rlqcService: RLQCService, public dialog:MatDialog, private navbarService: NavbarService){}
  openDialog(value:string){
    this.dialog.open(SupportDialogComponent,{
      width:'60%',
      data:value,
    })
  }
  onClick(event:any, value:string){
    if(event.which==2){
      window.open('/support/'+value);
    }
  }
  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id){
      this.dialog.open(SupportDialogComponent,{
        width:'60%',
        data:this.id,
      })
    }
    this.navbarService.events$.forEach(event => this.selectedGuild = event);
 }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllSupport();
  }
  applyfilter(value: string){
    clearTimeout(typingTimer)
    typingTimer = setTimeout(()=>this.getSpecificSupport(value), doneTypingInterval);
  }
  getSpecificSupport(value:string){
    this.dataSupport = [];
    if(value){
      this.rlqcService.getAll('support/group/'+value, this.navbarService.createHeader(this.selectedGuild)).pipe(first()).subscribe(element =>{
        for(let e of element){
          let member : Support = {
            support_id : e.support_id,
            message_id: e.message_id,
            channel_id: e.channel_id,
            author_id: e.author_id,
            name: e.name,
            content: e.content,
            filename: e.filename,
            filetype: e.filetype,
            timestamp: e.timestamp
          }
          
          this.dataSupport.push(member);
          
        }
        this.dataSource.data = this.dataSupport;
      });
    }
    else{
      this.getAllSupport();
    }
  }
  getAllSupport(){
    this.dataSupport = [];
    this.rlqcService.getAll('support/group/', this.navbarService.createHeader(this.selectedGuild)).pipe(first()).subscribe(element =>{
      for(let e of element){
        let member : Support = {
          support_id : e.support_id,
          message_id: e.message_id,
          channel_id: e.channel_id,
          author_id: e.author_id,
          name: e.name,
          content: e.content,
          filename: e.filename,
          filetype: e.filetype,
          timestamp: e.timestamp
        }
        
        this.dataSupport.push(member);
        this.dataSource.data = this.dataSupport;
      }
    })
  }
}
