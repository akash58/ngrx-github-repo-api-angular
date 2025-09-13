// store/github.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as GithubActions from './github.actions';

export interface GithubState {
  repos: any[];
  loading: boolean;
  error: any;
}

export const initialState: GithubState = {
  repos: [],
  loading: false,
  error: null
};

export const githubReducer = createReducer(
  initialState,
  on(GithubActions.searchRepos, (state) => ({ ...state, loading: true })),
  on(GithubActions.searchReposSuccess, (state, { repos }) => ({
    ...state,
    repos: [...state?.repos, repos],
    loading: false
  })),
  on(GithubActions.searchReposFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
);
