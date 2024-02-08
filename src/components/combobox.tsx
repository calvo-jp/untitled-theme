'use client';

import {styled} from '@/styled-system/jsx';
import {combobox} from '@/styled-system/recipes';
import {createStyleContext} from '@/utils/create-style-context';
import {Combobox as ArkCombobox} from '@ark-ui/react/combobox';

const {withProvider, withContext} = createStyleContext(combobox);

export const Combobox = withProvider(styled(ArkCombobox.Root), 'root');
export const ComboboxClearTrigger = withContext(
	styled(ArkCombobox.ClearTrigger),
	'clearTrigger',
);
export const ComboboxContent = withContext(
	styled(ArkCombobox.Content),
	'content',
);
export const ComboboxControl = withContext(
	styled(ArkCombobox.Control),
	'control',
);
export const ComboboxInput = withContext(styled(ArkCombobox.Input), 'input');
export const ComboboxItem = withContext(styled(ArkCombobox.Item), 'item');
export const ComboboxItemGroup = withContext(
	styled(ArkCombobox.ItemGroup),
	'itemGroup',
);
export const ComboboxItemGroupLabel = withContext(
	styled(ArkCombobox.ItemGroupLabel),
	'itemGroupLabel',
);
export const ComboboxItemIndicator = withContext(
	styled(ArkCombobox.ItemIndicator),
	'itemIndicator',
);
export const ComboboxItemText = withContext(
	styled(ArkCombobox.ItemText),
	'itemText',
);
export const ComboboxLabel = withContext(styled(ArkCombobox.Label), 'label');
export const ComboboxPositioner = withContext(
	styled(ArkCombobox.Positioner),
	'positioner',
);
export const ComboboxTrigger = withContext(
	styled(ArkCombobox.Trigger),
	'trigger',
);
