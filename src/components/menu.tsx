'use client';

import {styled} from '@/styled-system/jsx';
import {menu} from '@/styled-system/recipes';
import {createStyleContext} from '@/utils/create-style-context';
import {Menu as ArkMenu} from '@ark-ui/react/menu';

const {withProvider, withContext} = createStyleContext(menu);

export const Menu = withProvider(ArkMenu.Root);
export const MenuArrow = withContext(styled(ArkMenu.Arrow), 'arrow');
export const MenuArrowTip = withContext(styled(ArkMenu.ArrowTip), 'arrowTip');
export const MenuContent = withContext(styled(ArkMenu.Content), 'content');
export const MenuContextTrigger = withContext(
	styled(ArkMenu.ContextTrigger),
	'contextTrigger',
);
export const MenuItem = withContext(styled(ArkMenu.Item), 'item');
export const MenuItemGroup = withContext(
	styled(ArkMenu.ItemGroup),
	'itemGroup',
);
export const MenuItemGroupLabel = withContext(
	styled(ArkMenu.ItemGroupLabel),
	'itemGroupLabel',
);
export const MenuOptionItem = withContext(
	styled(ArkMenu.OptionItem),
	'optionItem',
);
export const MenuPositioner = withContext(
	styled(ArkMenu.Positioner),
	'positioner',
);
export const MenuSeparator = withContext(
	styled(ArkMenu.Separator),
	'separator',
);
export const MenuTrigger = withContext(styled(ArkMenu.Trigger), 'trigger');
export const MenuTriggerItem = withContext(
	styled(ArkMenu.TriggerItem),
	'triggerItem',
);
