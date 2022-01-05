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
}

export class PartialContent{
  protected constructor(
    public rank = 0,
    public title = '',
    public url = '',
    public image_url='',
  ){}
  public static Build(item:IPartialContent):PartialContent{
    return new this(
      item.rank,
      item.title,
      item.url,
      item.image_url
    )
  }
}


