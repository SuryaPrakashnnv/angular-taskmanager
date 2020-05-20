import { Injectable } from '@angular/core';

@Injectable(
  // {
  // this provideIn root is for access all over the app
  // providedIn: 'root'
  // if we don't want to access all over the app
  // we just import and add providers in any of module we are used in 
  // }
)
export class DashboardService {

  constructor() { }

  getTeamMemberSummary(): any[] {
    var teamMembersSummary = [
      { region: 'East', teamMembersCount: 20, unavailableMembers: 4 },
      { region: 'West', teamMembersCount: 15, unavailableMembers: 8 },
      { region: 'South', teamMembersCount: 17, unavailableMembers: 1 },
      { region: 'North', teamMembersCount: 15, unavailableMembers: 6 }
    ];
    return teamMembersSummary;
  }

}
