'use client';

import {styled} from '@/styled-system/jsx';
import {select} from '@/styled-system/recipes';
import {createStyleContext} from '@/utils/create-style-context';
import {Select as ArkSelect} from '@ark-ui/react/select';

const {withProvider, withContext} = createStyleContext(select);

export const Select = withProvider(styled(ArkSelect.Root), 'root');
export const SelectClearTrigger = withContext(styled(ArkSelect.ClearTrigger), 'clearTrigger');
export const SelectContent = withContext(styled(ArkSelect.Content), 'content');
export const SelectControl = withContext(styled(ArkSelect.Control), 'control');
export const SelectIndicator = withContext(styled(ArkSelect.Indicator), 'indicator');
export const SelectItem = withContext(styled(ArkSelect.Item), 'item');
export const SelectItemGroup = withContext(styled(ArkSelect.ItemGroup), 'itemGroup');
export const SelectItemGroupLabel = withContext(styled(ArkSelect.ItemGroupLabel), 'itemGroupLabel');
export const SelectItemIndicator = withContext(styled(ArkSelect.ItemIndicator), 'itemIndicator');
export const SelectItemText = withContext(styled(ArkSelect.ItemText), 'itemText');
export const SelectLabel = withContext(styled(ArkSelect.Label), 'label');
export const SelectPositioner = withContext(styled(ArkSelect.Positioner), 'positioner');
export const SelectTrigger = withContext(styled(ArkSelect.Trigger), 'trigger');
export const SelectValueText = withContext(styled(ArkSelect.ValueText), 'valueText');
