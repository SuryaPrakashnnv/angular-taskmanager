import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects.service';
import { Project } from '../../project';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];
  newProject: Project = new Project();
  editProject: Project = new Project();
  editIndex: number = null;
  deleteProject: Project = new Project();
  deleteIndex: number = null;
  searchBy: string = null;
  searchText: string = null;
  searchProjects: any[];
  searchProjectCounter = 0;


  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projectsService.getAllProjects()
      .subscribe(
        (response: Project[]) => {
          this.projects = response;
          // console.log(this.projects);
        }
        /*
        // we are removing error handling from here
        // we can do the error handling with interceptor
        ,
        (error) => {
          console.log(error);
          alert("Authentication Failed!");
        }*/
      );
  }

  onSaveClick(){
    // this.newProject = new Project();
    this.projectsService.insertProject(this.newProject).subscribe(
      (response) => {
        // Add Project to Grid
        const p: Project = new Project();
        p.userId = this.newProject.userId;
        p.id = this.newProject.id;
        p.title = this.newProject.title;
        p.body = this.newProject.body;
        this.projects.unshift(p);

        // Clear New Project Dialog - TextBoxes
        this.newProject.userId = 1;
        this.newProject.id = null;
        this.newProject.title = null;
        this.newProject.body = null;

      },
      (error) => {
        console.log(error);
      }
    );
  }

  onEditClick(event, index: number) {
    // this.projectsService.updateProject(project);
    this.editProject.userId = this.projects[index].userId;
    this.editProject.id = this.projects[index].id;
    this.editProject.title = this.projects[index].title;
    this.editProject.body = this.projects[index].body;
    this.editIndex = index;
  }

  onUpdateClick() {
    this.projectsService.updateProject(this.editProject).subscribe(
      (response: Project) => {
        const p: Project = new Project();
        p.userId = response.userId;
        p.id = response.id;
        p.title = response.title;
        p.body = response.body;
        this.projects[this.editIndex] = p;

        this.editProject.userId = 1;
        this.editProject.id = null;
        this.editProject.title = null;
        this.editProject.body = null;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onDeleteClick(event, index: number) {
    this.deleteProject.userId = this.projects[index].userId;
    this.deleteProject.id = this.projects[index].id;
    this.deleteProject.title = this.projects[index].title;
    this.deleteProject.body = this.projects[index].body;
    this.deleteIndex = index;
  }

  onDeleteConfirmClick() {
    this.projectsService.deleteProject(this.deleteProject.id).subscribe(
      (response) => {
        // this.projectsService.d
        this.projects.splice(this.deleteIndex, 1);
        this.deleteProject.userId = null;
        this.deleteProject.id = null;
        this.deleteProject.title = null;
        this.deleteProject.body = null;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  removeRow(i) {}

  onSearchClicked() {
    // for (var i = 0; i < restaurants.length; i++) {
    //   if (restaurants[i].restaurant.food == 'chicken') {
    //     return restaurants[i].restaurant.name;
    //   }
    // }
    // this.searchProjects = null;
    this.searchProjects = new Array();
    // this.searchProjects = new Project[];
    let filter;
    let str;
    console.log(this.projects);
    console.log(this.projects[3]);

    console.log('this.searchBy : ' + this.searchBy);

    if (this.searchBy === 'projectTitle'){
      filter = this.searchText.toLowerCase();
      for (let i = 0; i < this.projects.length; i++) {
        // if (this.searchText == ''+ this.projects[i].id) {
          // console.log('id: '+this.projects[i].id);
          // console.log('txt: '+this.searchText);
          // console.log('project: '+this.projects[i]);
          // let tempPro = this.projects.slice(i,1);
          // this.searchProjects.push(this.projects.slice(i, i+1));
          // console.log('s-project: ' + this.searchProjects);
        // }

        str = this.projects[i].title;
        if (str.toLowerCase().indexOf(filter) > -1) {
          this.searchProjects.push(this.projects[i]);
        }

        // for (let project of this.projects) {
        //   str = project.title;
        //   if (str.toLowerCase().indexOf(filter) > -1) {
        //     this.searchProjects.push(project);
        //   }
        // }


        // this.searchProjects[this.searchProjectCounter] = this.projects[i];
        // this.searchProjects = this.projects;
      }
      // console.log(this.searchProjects);
    } else if (this.searchBy === 'projectUserId') {
      for (let i = 0; i < this.projects.length; i++) {
        str = this.projects[i].userId;
        if (str == this.searchText) {
          this.searchProjects.push(this.projects[i]);
        }
      }
    } else if (this.searchBy === 'projectId') {
      for (let i = 0; i < this.projects.length; i++) {
        str = this.projects[i].id;
        if (str == this.searchText) {
          this.searchProjects.push(this.projects[i]);
        }
      }
    } else if (this.searchBy === 'projectBody') {
      filter = this.searchText.toLowerCase();
      for (let i = 0; i < this.projects.length; i++) {
        str = this.projects[i].body;
        if (str.toLowerCase().indexOf(filter) > -1) {
          this.searchProjects.push(this.projects[i]);
        }
      }
    }

    if (this.searchProjects.length < 1) {

    }

  }


}
