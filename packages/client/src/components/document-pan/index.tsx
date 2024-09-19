import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';

import { IconMore } from '@douyinfe/semi-icons';
import { Card, Image, Table } from '@douyinfe/semi-ui';

import { ILoginUser } from '@think/domains/lib/models/user';

import { FileExtIcon } from 'components/file-ext-icon';
import { useChildrenDocument, useDocumentDetail } from 'data/document';
import dayjs from 'dayjs';

import styles from './index.module.scss';

interface IProps {
  user?: ILoginUser | null;
  wikiId?: string;
  parentDocumentId: string;
}

const file_autosize = (size) => {
  const units = ['Byte', 'KB', 'MB', 'GB', 'TB'];
  let index = 0;
  while (size >= 1024) {
    size = size / 1024;
    index = index + 1;
  }
  return size.toFixed(3) + ' ' + units[index];
};

const file_autoextimg = (filename) => {
  const tmp = filename.split('.');
  const ext = tmp[tmp.length - 1];
  return <FileExtIcon ext={ext} size={26} className={styles.iconTitle} />;
};

const format_utctime = (utctime) => {
  return dayjs(utctime).format('YYYY-MM-DD HH:mm:ss');
};

export const DocumentPan: React.FC<IProps> = ({ user, wikiId, parentDocumentId }) => {
  const { data: documentAndAuth, loading: docAuthLoading, error: docAuthError } = useDocumentDetail(parentDocumentId);
  const { data: documentChildren } = useChildrenDocument({ wikiId, documentId: parentDocumentId });
  const [tableData, settableData] = useState([]);
  const columns = [
    {
      title: '文件名',
      dataIndex: 'title',
      render: (text, record, index) => {
        if (!record) return <></>;
        return (
          <>
            {file_autoextimg(text)}
            <span className={styles.fileName}>{text}</span>
          </>
        );
      },
    },
    {
      title: '大小',
      dataIndex: 'filesize',
      render: (text, record, index) => {
        if (!record) return <></>;
        return <>{record.type === 'file' && <div>{file_autosize(record.file.filesize)} </div>}</>;
      },
    },
    {
      title: '更新日期',
      dataIndex: 'updatedAt',
      render: (text, record, index) => {
        console.log(text, record, index);
        if (!record) return <></>;
        return (
          <>
            <div>{format_utctime(record.updatedAt)} </div>
          </>
        );
      },
    },
    {
      title: '操作',
      dataIndex: 'operate',
      render: () => {
        return <IconMore />;
      },
    },
  ];

  useEffect(() => {
    console.log('页面数据加载成功');
    console.log(documentAndAuth);
    console.log(documentChildren);
    settableData(documentChildren);
  }, [documentAndAuth, documentChildren]);
  const { Meta } = Card;

  return (
    <div className={styles.container}>
      <Card
        title={
          <Meta
            // @ts-ignore
            // 忽略 IDocument 中没有 folderPath 属性的错误
            title={documentAndAuth.document.folderPath}
            avatar={<Image width={24} height={24} src="/icon_ext/folder.png" className={styles.iconTitle} />}
          />
        }
        className={styles.cardTitle}
      >
        <Table columns={columns} dataSource={tableData} pagination={false} />
      </Card>
    </div>
  );
};
