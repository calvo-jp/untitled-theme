import type {Html} from '../types';

export interface Icon {
  displayName: string;
  content: Html;
  meta: {
    fileName: string;
  };
}
