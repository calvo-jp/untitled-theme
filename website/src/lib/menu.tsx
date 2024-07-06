'use client';

import {styled} from '@/styled-system/jsx';
import {Menu as ArkMenu} from '@ark-ui/react/menu';

export const Menu = ArkMenu.Root;
export const MenuContent = styled(ArkMenu.Content);
export const MenuIndicator = styled(ArkMenu.Indicator);
export const MenuItem = styled(ArkMenu.Item);
export const MenuItemGroup = styled(ArkMenu.ItemGroup);
export const MenuItemText = styled(ArkMenu.ItemText);
export const MenuItemIndicator = styled(ArkMenu.ItemIndicator);
export const MenuPositioner = styled(ArkMenu.Positioner);
export const MenuTrigger = styled(ArkMenu.Trigger);
