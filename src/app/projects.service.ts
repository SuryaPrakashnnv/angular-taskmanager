import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient: HttpClient) { }

  getAllProjects(): Observable<Project[]> {

    /*
    // without interceptors we have to use manually to every server request
    let currentUser = { token: '' };
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer');
    if (sessionStorage.currentUser != null) {
      currentUser = JSON.parse(sessionStorage.currentUser);
      headers = headers.set('Authorization', 'Bearer' + currentUser.token );
    }
    */
    // return this.httpClient.get<Project[]>('https://jsonplaceholder.typicode.com/posts?userId=1'
    // , { headers: headers, responseType: 'json' })
    // we have to send headers manually like above with out interceptors

    return this.httpClient.get<Project[]>('https://jsonplaceholder.typicode.com/posts?userId=1', { responseType: 'json' })
            .pipe(map(
                  (data: Project[]) => {
                    for (let i = 0; i < data.length; i++) {
                      data[i].body = (i + 1) + '. --  ' + data[i].body;
                    }
                    return data;
                  }
                ));
  }

  insertProject(newProject: Project): Observable<Project> {
    return this.httpClient.post<Project>('https://jsonplaceholder.typicode.com/posts?userId=1', newProject, { responseType: 'json' });
  }

  updateProject(curProject: Project): Observable<Project> {
    return this.httpClient.put<Project>('https://jsonplaceholder.typicode.com/posts/1', curProject, {responseType: 'json'});
  }

  // delateProject(id: number): Observable<string> {
  //   return this.httpClient.delete<string>('https://jsonplaceholder.typicode.com/posts/1', id);
  // }

  deleteProject(index: number): Observable<Project> {
    return this.httpClient.delete<Project>('https://jsonplaceholder.typicode.com/posts/1');
  }

  searchProject(searchBy: string, searchText: string): Observable<Project> {
     return this.httpClient.get<Project>('https://jsonplaceholder.typicode.com/posts/1', );
  }

}

