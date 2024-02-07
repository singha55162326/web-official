import { NewsType } from "./newType";

export interface News{
   
    news_id:number;
    news_title_la:string;

    news_content_la:number;
    vido_url:string;
    news_image:string;
    posting_date:string;
    posting_time:string;
    tags:string;
    
    news_sub_title_la:string;
    news_title_eng:string;
    news_content_eng:string;
    news_sub_title_eng:string
    newType:NewsType;
    taxNews:string[]




    



}