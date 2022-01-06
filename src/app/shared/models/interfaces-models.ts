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
  export interface IPartialContent{
    rank:number;
    title:string;
    url:string;
    image_url:string;
    start_date:string;
    end_date:string;
}

export class PartialContent{
  protected constructor(
    public rank = 0,
    public title = '',
    public url = '',
    public image_url='',
    public start_date='',
    public end_date='',
  ){}
  public static Build(item:IPartialContent):PartialContent{
    return new this(
      item.rank,
      item.title,
      item.url,
      item.image_url,
      item.start_date,
      item.end_date
    )
  }
}


