'use client';

import {styled} from '@/styled-system/jsx';
import {pagination} from '@/styled-system/recipes';
import {createStyleContext} from '@/utils/create-style-context';
import {Pagination as ArkPagination} from '@ark-ui/react/pagination';

const {withProvider, withContext} = createStyleContext(pagination);

export const Pagination = withProvider(styled(ArkPagination.Root), 'root');
export const PaginationItem = withContext(styled(ArkPagination.Item), 'item');
export const PaginationNextTrigger = withContext(styled(ArkPagination.NextTrigger), 'nextTrigger');
export const PaginationPrevTrigger = withContext(styled(ArkPagination.PrevTrigger), 'prevTrigger');
export const PaginationEllipsis = withContext(styled(ArkPagination.Ellipsis), 'ellipsis');
