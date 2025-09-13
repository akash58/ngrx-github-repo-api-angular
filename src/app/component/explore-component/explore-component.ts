import { ChangeDetectorRef, Component } from '@angular/core';
import { GitHubService } from '../../service/github.service';
import { select, Store } from '@ngrx/store';
import * as GithubActions from '../../store/github.actions';
import { Observable } from 'rxjs';
import { GithubState } from '../../store/github.reducer';
import { BookmarkService } from '../../service/bookmark.service';


@Component({
  selector: 'app-explore-component',
  standalone: false,
  templateUrl: './explore-component.html',
  styleUrl: './explore-component.scss'
})
export class ExploreComponent {
  repos: any;
  query: any = ''; // default search
  data: any;
  languages: any = ['All', 'TypeScript', 'JavaScript', 'Python', 'Java', 'Go', 'C#', 'Ruby'];
  selectedLanguage: any = '';
  stars: any = ['Stars']
  selectedStar: any = '';

  repos$: Observable<any[]>;

  constructor(private github: GitHubService, public bookmarkService: BookmarkService, private cdr: ChangeDetectorRef, private store: Store<{ github: GithubState }>) {
    this.repos$ = this.store.pipe(select((state) => state.github.repos));
  }

  ngOnIntit(){
  }

  searchRepos() {
    console.log(this.selectedLanguage, 'this.selectedLanguage')
    if (!this.query) return;
      this.store.dispatch(GithubActions?.searchRepos({
        query: this.query,
        language: this.selectedLanguage,
        star: this.selectedStar
      })
    );
  }
}
