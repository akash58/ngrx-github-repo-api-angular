// store/github.effects.ts
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as GithubActions from './github.actions';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { GitHubService } from '../service/github.service';

@Injectable()
export class GithubEffects {
  actions$ = inject(Actions)

  constructor(private githubService: GitHubService) {}

  searchRepos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GithubActions.searchRepos),
      switchMap(({ query, language, star }) =>
        this.githubService.searchRepos(query, language, star).pipe(
          map((response: any) => GithubActions.searchReposSuccess({ repos: response.items })),
          catchError((error) => of(GithubActions.searchReposFailure({ error })))
        )
      )
    )
  );

  
}
