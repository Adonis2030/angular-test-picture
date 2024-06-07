export interface ITourist {
  name: string;
  description: string;
  location: string;
  picture: string;
  rating: number;
}

export interface IResponse {
  tourists: ITourist[];
}
