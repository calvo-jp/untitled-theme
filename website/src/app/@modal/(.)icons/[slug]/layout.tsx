import type {PropsWithChildren} from 'react';
import {Modal} from './modal';

export default function Layout({children}: PropsWithChildren) {
	return <Modal>{children}</Modal>;
}
