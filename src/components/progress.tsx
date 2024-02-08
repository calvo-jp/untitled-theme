'use client';

import {styled} from '@/styled-system/jsx';
import {progress} from '@/styled-system/recipes';
import {createStyleContext} from '@/utils/create-style-context';
import {Progress as ArkProgress} from '@ark-ui/react/progress';

const {withProvider, withContext} = createStyleContext(progress);

export const Progress = withProvider(styled(ArkProgress.Root), 'root');
export const ProgressCircle = withContext(styled(ArkProgress.Circle), 'circle');
export const ProgressCircleRange = withContext(
	styled(ArkProgress.CircleRange),
	'circleRange',
);
export const ProgressCircleTrack = withContext(
	styled(ArkProgress.CircleTrack),
	'circleTrack',
);
export const ProgressLabel = withContext(styled(ArkProgress.Label), 'label');
export const ProgressRange = withContext(styled(ArkProgress.Range), 'range');
export const ProgressTrack = withContext(styled(ArkProgress.Track), 'track');
export const ProgressValueText = withContext(
	styled(ArkProgress.ValueText),
	'valueText',
);
export const ProgressView = withContext(styled(ArkProgress.View), 'view');
