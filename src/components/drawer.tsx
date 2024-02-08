'use client';

import {styled} from '@/styled-system/jsx';
import {drawer} from '@/styled-system/recipes';
import {createStyleContext} from '@/utils/create-style-context';
import {Dialog as ArkDialog} from '@ark-ui/react/dialog';
import {ark} from '@ark-ui/react/factory';

const {withProvider, withContext} = createStyleContext(drawer);

export const Drawer = withProvider(ArkDialog.Root);
export const DrawerBackdrop = withContext(
	styled(ArkDialog.Backdrop),
	'backdrop',
);
export const DrawerBody = withContext(styled(ark.div), 'body');
export const DrawerCloseTrigger = withContext(
	styled(ArkDialog.CloseTrigger),
	'closeTrigger',
);
export const DrawerContent = withContext(styled(ArkDialog.Content), 'content');
export const DrawerDescription = withContext(
	styled(ArkDialog.Description),
	'description',
);
export const DrawerFooter = withContext(styled(ark.div), 'footer');
export const DrawerHeader = withContext(styled(ark.div), 'header');
export const DrawerPositioner = withContext(
	styled(ArkDialog.Positioner),
	'positioner',
);
export const DrawerTitle = withContext(styled(ArkDialog.Title), 'title');
export const DrawerTrigger = withContext(styled(ArkDialog.Trigger), 'trigger');
