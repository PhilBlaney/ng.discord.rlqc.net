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

const ELEMENT_DATA: Support[] = [
];

@Component({
  selector: 'app-support-history',
  templateUrl: './support-history.component.html',
  styleUrls: ['./support-history.component.scss']
})
export class SupportHistoryComponent implements AfterViewInit{
  public id: string | null = "";
  public dataSupport: Support[] = [];
  displayedColumns: string[] = ['support_id', 'author_id', 'name', 'content'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private route: ActivatedRoute, private rlqcService: RLQCService, public dialog:MatDialog){}
  openDialog(value:string){
    this.dialog.open(SupportDialogComponent,{
      width:'60%',
      data:value,
    })
  }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id){
      this.dialog.open(SupportDialogComponent,{
        width:'60%',
        data:this.id,
      })
    }
 }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllLoopMsg();
  }
  applyfilter(value: string){
    this.dataSupport = [];
    if(value){
      this.rlqcService.getAll('support/group/'+value).pipe(first()).subscribe(element =>{
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
    else{
      this.getAllLoopMsg();
    }
  }
  getAllLoopMsg(){
    this.dataSupport = [];
    this.rlqcService.getAll('support/group/').pipe(first()).subscribe(element =>{
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
