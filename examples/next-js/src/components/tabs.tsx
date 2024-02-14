'use client';

import {styled} from '@/styled-system/jsx';
import {tabs} from '@/styled-system/recipes';
import {createStyleContext} from '@/utils/create-style-context';
import {Tabs as ArkTabs} from '@ark-ui/react/tabs';

const {withProvider, withContext} = createStyleContext(tabs);

export const Tabs = withProvider(styled(ArkTabs.Root), 'root');
export const TabsContent = withContext(styled(ArkTabs.Content), 'content');
export const TabsIndicator = withContext(styled(ArkTabs.Indicator), 'indicator');
export const TabsList = withContext(styled(ArkTabs.List), 'list');
export const TabsTrigger = withContext(styled(ArkTabs.Trigger), 'trigger');
