const enable_ext = [
  '7z',
  'access',
  'apk',
  'avi',
  'bmp',
  'cdr',
  'compress',
  'css',
  'doc',
  'file',
  'folder',
  'gif',
  'gz',
  'html',
  'ico',
  'image',
  'java',
  'javascript',
  'jpeg',
  'jpg',
  'json',
  'log',
  'lua',
  'mkv',
  'mov',
  'mp4',
  'mpeg',
  'mpg',
  'pdf',
  'php',
  'png',
  'ppt',
  'py',
  'python',
  'rar',
  'rm',
  'rmvb',
  'sh',
  'shell',
  'sql',
  'swf',
  'tar',
  'webm',
  'webp',
  'wma',
  'wmv',
  'xls',
  'xml',
  'zip',
];
import { Image } from '@douyinfe/semi-ui';

interface IProps {
  ext?: string;
  size?: number;
  className?: any;
}

export const FileExtIcon: React.FC<IProps> = ({ ext, size, className }) => {
  const is_enable = enable_ext.includes(ext);
  const icon_url = '/icon_ext/' + (is_enable ? ext : 'file') + '.png';
  console.log('图标的url:' + icon_url);
  return <Image width={size} height={size} src={icon_url} className={className}></Image>;
};
