import { IOrganization } from './organization';
import { IUser } from './user';
import { IWiki } from './wiki';
/**
 * 文档状态枚举
 */
export declare enum DocumentStatus {
    private = "private",
    public = "public"
}

export declare enum DocumentType {
    doc = "doc",
    file = "file",
    path = "path"
}

/**
 * 文档数据定义
 */
export interface IDocument {
    id: string;
    organizationId: IOrganization['id'];
    wikiId: IWiki['id'];
    isWikiHome: boolean;
    createUserId: IUser['id'];
    createUser: IUser;
    parentDocumentId?: IDocument['id'];
    title: DocumentType;
    content: string;
    state: Uint8Array;
    status: DocumentStatus;
    views: number;
    sharePassword?: string;
    createdAt: Date;
    updatedAt: Date;
    children?: IDocument[];
}
/**
 * 文档成员权限数据定义
 */
export interface IAuthority {
    id: string;
    documentId: IDocument['id'];
    userId: IUser['id'];
    readable: boolean;
    editable: boolean;
    createUserId: IUser['id'];
}
