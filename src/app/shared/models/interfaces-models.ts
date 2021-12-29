/* export interface IResult {
  mal_id: number;
  url: string;
  image_url: string;
  title: string;
  airing: boolean;
  synopsis: string;
  type: string;
  episodes: number;
  score: number;
  start_date: Date;
  end_date?: Date;
  members: number;
  rated: string;
}

export interface IRootObject {
  request_hash: string;
  request_cached: boolean;
  request_cache_expiry: number;
  results: IResult[];
  last_page: number;
} */
export interface IPartialAnimeManga{
  title:string;
  image_url:string;
}

export class PartialAnimeManga{
  protected constructor(
    public title = '',
    public image_url = ''
  ){}

  public static Build(item: IPartialAnimeManga):PartialAnimeManga{
    return new this (
      item.title,
      item.image_url
    )
  }
}
