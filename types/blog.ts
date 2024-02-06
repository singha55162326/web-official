type Author = {
  name: string;
  image: string;
  designation: string;
};

export interface Blog{
  news_id: number;
  news_title_la: string;
  news_content_la: string;
         
  news_image: any;
  author: Author;
  tags: string[];
  publishDate: string;
};
