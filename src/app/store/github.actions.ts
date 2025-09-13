import { createAction, props } from '@ngrx/store';

export const searchRepos = createAction(
  '[GitHub] Search Repos',
  props<{ query: any, language: any, star: any }>()
);

export const searchReposSuccess = createAction(
  '[GitHub] Search Repos Success',
  props<{ repos: any[] }>()
);

export const searchReposFailure = createAction(
  '[GitHub] Search Repos Failure',
  props<{ error: any }>()
);