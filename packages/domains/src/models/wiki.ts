import { IUser } from './user';
import { IDocument } from './document';
import { IOrganization } from './organization';

/**
 * 知识库状态枚举
 */
export enum WikiStatus {
  private = 'private',
  public = 'public',
}

/**
 * 知识库数据定义
 */
export interface IWiki {
  id: string;
  organizationId: IOrganization['id'];
  name: string;
  avatar: string;
  type: string;
  description: string;
  createUserId: IUser['id'];
  createUser: IUser;
  status: WikiStatus;
  homeDocumentId: IDocument['id'];
  createdAt: Date;
  updatedAt: Date;
}
