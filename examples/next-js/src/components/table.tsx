'use client';

import {styled} from '@/styled-system/jsx';
import {table} from '@/styled-system/recipes';
import {createStyleContext} from '@/utils/create-style-context';
import {ark} from '@ark-ui/react';

const {withProvider, withContext} = createStyleContext(table);

export const Table = withProvider(styled(ark.table), 'root');
export const TableBody = withContext(styled(ark.tbody), 'body');
export const TableCaption = withContext(styled(ark.caption), 'caption');
export const TableCell = withContext(styled(ark.td), 'cell');
export const TableFooter = withContext(styled(ark.tfoot), 'footer');
export const TableHead = withContext(styled(ark.thead), 'head');
export const TableHeader = withContext(styled(ark.th), 'header');
export const TableRow = withContext(styled(ark.tr), 'row');
