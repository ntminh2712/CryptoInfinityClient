import { Locale } from 'antd/lib/locale-provider';

export interface IRegionItem {
  key: string;
  name: string;
  flag: string;
  antdLocale: Locale;
}

export interface IRegion {
  [key: string]: IRegionItem;
}

export interface IRouteBase {
  path: string;
  title: string;
  titleVI?: string;
  titleEN?: string;
  icon?: React.FunctionComponent<{ className?: string }>;
  component?: React.ReactType;
  query?: string;
  requireAuth?: string;
  route?: string;
  login?: boolean;
  onClick?: any;
}

export interface IRoute extends IRouteBase {
  children?: IRoute[];
}

export interface IPost {
  id : number;
  postAuthor : string;
  postDale : string;
  portDaleGet : string;
  postContent : string;
  postTile : string;
  postExporpt : string;
  postStatus : string;
  commentStatus : string;
  pinaStatus : string;
  postPasswoRd : string;
  postName : string;
  toPing : string;
  pinged : string;
  postModified : string;
  postModifiedGmt : string;
  portCoMentFiered : string;
  postParent : string;
  guid: string;
  menuAndOr :number;
  postType : string;
  postMimeType : string;
  commentCount :number;

}
