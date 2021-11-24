import { EmbeddedHtml } from '@/components/common/EmbeddedHtml';
import styles from './Benefit.module.css';

interface Props {
  html: string;
}

export const Body = ({ html }: Props) => {
  return <EmbeddedHtml html={html} />;
};
