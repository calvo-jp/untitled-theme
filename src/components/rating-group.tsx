'use client';

import {styled} from '@/styled-system/jsx';
import {ratingGroup} from '@/styled-system/recipes';
import {createStyleContext} from '@/utils/create-style-context';
import {RatingGroup as ArkRatingGroup} from '@ark-ui/react/rating-group';

const {withProvider, withContext} = createStyleContext(ratingGroup);

export const RatingGroup = withProvider(styled(ArkRatingGroup.Root), 'root');
export const RatingGroupControl = withContext(styled(ArkRatingGroup.Control), 'control');
export const RatingGroupItem = withContext(styled(ArkRatingGroup.Item), 'item');
export const RatingGroupLabel = withContext(styled(ArkRatingGroup.Label), 'label');
