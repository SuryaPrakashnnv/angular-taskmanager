import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  designation: string;
  userName: string;
  noOfTeamMembers: number;
  totalCostOfAllProjects: number;
  pendingTasks: number;
  upcomingProjects: number;
  projectCost: number;

  currentExpenditure: number;
  availableFunds: number;
  toDay: Date;

  clients: string[];
  projects: string[];
  years: number[] = [];
  teamMembersSummary = [];
  teamMembers = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {

    this.designation = 'Team Leader';
    this.userName = "Surya Prakash";
    this.noOfTeamMembers = 67;
    this.totalCostOfAllProjects = 2400;
    this.pendingTasks = 15;
    this.upcomingProjects = 0.2;
    this.projectCost = 211350;
    this.currentExpenditure = 96788;
    this.availableFunds = 52536;
    this.toDay = new Date();
    
    this.clients = [
      'Ruhi InfoTech Ltd.', 'NNV Software Solutions', 'Tanvi Paint Industries'
    ];

    this.projects = [
      'Project A', 'Project B', 'Project C', 'Project D', 'Project E'
    ];

    // this.years = [
    //   2020, 2019, 2018, 2017, 2016
    // ];

    for(var i = 2020; i >= 2010; i--) {
      this.years.push(i);
    }

    this.teamMembersSummary = this.dashboardService.getTeamMemberSummary();
  
    this.teamMembers = [
      { region: 'East', 
        members: [
        { id: 1, name: 'Ford', status: 'Available' },
        { id: 2, name: 'Miller', status: 'Available' },
        { id: 3, name: 'Jones', status: 'Busy' },
        { id: 4, name: 'James', status: 'Busy' }
        ] 
      },
      {
        region: 'West',
        members: [
          { id: 1, name: 'Steve', status: 'Busy' },
          { id: 2, name: 'Johns', status: 'Available' },
          { id: 3, name: 'Anna', status: 'Available' },
          { id: 4, name: 'Mike', status: 'Busy' }
        ]
      },
      {
        region: 'South',
        members: [
          { id: 1, name: 'Richard', status: 'Available' },
          { id: 2, name: 'Kins', status: 'Busy' },
          { id: 3, name: 'Kyle', status: 'Busy' },
          { id: 4, name: 'David', status: 'Available' }
        ]
      },
      {
        region: 'North',
        members: [
          { id: 1, name: 'Cristina', status: 'Available' },
          { id: 2, name: 'Williams', status: 'Busy' },
          { id: 3, name: 'Charlie', status: 'Available' },
          { id: 4, name: 'James', status: 'Busy' }
        ]
      }
    ]
  }

  onProjectChange($event) {
    console.log($event.target.innerHTML);
    if ($event.target.innerHTML == 'Project A') {
      this.projectCost = 211350;
      this.currentExpenditure = 96788;
      this.availableFunds = 52536;
    } else if ($event.target.innerHTML == 'Project B') {
      this.projectCost = 311255;
      this.currentExpenditure = 35488;
      this.availableFunds = 32222;
    } else if ($event.target.innerHTML == 'Project C') {
      this.projectCost = 941255;
      this.currentExpenditure = 14588;
      this.availableFunds = 65422;
    } else if ($event.target.innerHTML == 'Project D') {
      this.projectCost = 476255;
      this.currentExpenditure = 12588;
      this.availableFunds = 321222;
    } else if ($event.target.innerHTML == 'Project E') {
      this.projectCost = 875255;
      this.currentExpenditure = 35488;
      this.availableFunds = 426222;
    }
  }


}
