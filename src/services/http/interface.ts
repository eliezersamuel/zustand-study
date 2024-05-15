export interface httpClient {
  get: (url: string) => void;
  post: (url: string) => void;
  put: (url: string) => void;
  delete: (url: string) => void;
}
