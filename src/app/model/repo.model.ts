export interface RepoOwner {
    login: string;
    avatar_url: string;
    html_url: string;
  }
  
  export interface Repo {
    id: number;
    full_name: string;
    name?: string;
    description?: string | null;
    stargazers_count: number;
    language?: string | null;
    owner: RepoOwner;
    html_url: string;
  }
  