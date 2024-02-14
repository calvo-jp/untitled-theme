'use client';

import {styled} from '@/styled-system/jsx';
import {avatar} from '@/styled-system/recipes';
import {createStyleContext} from '@/utils/create-style-context';
import {Avatar as ArkAvatar} from '@ark-ui/react/avatar';

const {withProvider, withContext} = createStyleContext(avatar);

export const Avatar = withProvider(styled(ArkAvatar.Root), 'root');
export const AvatarImage = withContext(styled(ArkAvatar.Image), 'image');
export const AvatarFallback = withContext(styled(ArkAvatar.Fallback), 'fallback');
