import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {

  public chartType1: string = 'pie';

  public chartDatasets1: Array<any> = [
    {data: [180, 50, 100, 40, 120], label: 'My First dataset'}
  ];

  public chartLabels1: Array<any> = ['Angular', 'Python', 'Ruby', 'Delphi', 'Typescript'];

  public chartColors1: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };

  public chartDatasets2: Array<any> = [
    {data: [180, 50, 100, 40, 120], label: 'My First dataset'}
  ];

  public chartLabels2: Array<any> = ['Oral Quiz', 'Essay', 'Fill In', 'Multiple Choice', 'Final Exam'];

  public chartColors2: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];

  public chartType3: string = 'bar';

  public chartDatasets3: Array<any> = [
    {data: [180, 50, 100, 40, 120], label: 'My First dataset'}
  ];

  public chartLabels3: Array<any> = ['Oral Quiz', 'Essay', 'Fill In', 'Multiple Choice', 'Final Exam'];

  public chartColors3: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('/assets/questions.json', { headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
      , responseType: 'text' }).subscribe((res) => {
      console.log(res);
    });
  }



  public chartClicked(e: any): void {
  }

  public chartHovered(e: any): void {
  }

}
