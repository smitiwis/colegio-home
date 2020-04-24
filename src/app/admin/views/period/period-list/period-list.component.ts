import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-period-list',
  templateUrl: './period-list.component.html'
})
export class PeriodListComponent implements OnInit {
  page: any = {};
  rows = [];


  constructor() { }

  ngOnInit() {
    this.page.pageNumber = 0;
    this.page.size = 20;
    this.setPage({ offset: 0 });
  }


  setPage(pageInfo) {
    // console.log(pageInfo)
    this.page.pageNumber = pageInfo.offset;
    setTimeout(() => {
      this.page.totalElements = 100;
      this.page.totalPages = 10;
      this.page.size = 10;
      this.rows = [

        {
          "name": "Christine Compton",
          "gender": "female",
          "company": "Bleeko"
        },
        {
          "name": "Milagros Finch",
          "gender": "female",
          "company": "Handshake"
        },
        {
          "name": "Ericka Alvarado",
          "gender": "female",
          "company": "Lyrichord"
        },
        {
          "name": "Sylvia Sosa",
          "gender": "female",
          "company": "Circum"
        },
        {
          "name": "Humphrey Curtis",
          "gender": "male",
          "company": "Corepan"
        }
      ];
    }, 100);

    // this.serverResultsService.getResults(this.page).subscribe(pagedData => {
    //   this.page = pagedData.page;
    //   this.rows = pagedData.data;
    // });
  }
}
