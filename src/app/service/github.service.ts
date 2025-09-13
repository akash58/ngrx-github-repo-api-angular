import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GitHubService {
  private apiUrl = 'https://api.github.com/search/repositories';

  constructor(private http: HttpClient) {}

  searchRepos(query?: any, language?: any, star?: any): Observable<any> {
    console.log(query + 'query', language + 'language', star + 'star')
    return this.http.get<any>(`${this.apiUrl}?q=${query}&language=${language}&s=${star}&o=desc`);
  }
}