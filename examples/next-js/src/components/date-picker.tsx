'use client';

import {styled} from '@/styled-system/jsx';
import {datePicker} from '@/styled-system/recipes';
import {createStyleContext} from '@/utils/create-style-context';
import {DatePicker as ArkDatePicker} from '@ark-ui/react/date-picker';

const {withProvider, withContext} = createStyleContext(datePicker);

export const DatePicker = withProvider(styled(ArkDatePicker.Root), 'root');
export const DatePickerClearTrigger = withContext(
	styled(ArkDatePicker.ClearTrigger),
	'clearTrigger',
);
export const DatePickerContent = withContext(styled(ArkDatePicker.Content), 'content');
export const DatePickerControl = withContext(styled(ArkDatePicker.Control), 'control');
export const DatePickerInput = withContext(styled(ArkDatePicker.Input), 'input');
export const DatePickerLabel = withContext(styled(ArkDatePicker.Label), 'label');
export const DatePickerMonthSelect = withContext(styled(ArkDatePicker.MonthSelect), 'monthSelect');
export const DatePickerNextTrigger = withContext(styled(ArkDatePicker.NextTrigger), 'nextTrigger');
export const DatePickerPositioner = withContext(styled(ArkDatePicker.Positioner), 'positioner');
export const DatePickerPrevTrigger = withContext(styled(ArkDatePicker.PrevTrigger), 'prevTrigger');
export const DatePickerRangeText = withContext(styled(ArkDatePicker.RangeText), 'rangeText');
export const DatePickerTable = withContext(styled(ArkDatePicker.Table), 'table');
export const DatePickerTableBody = withContext(styled(ArkDatePicker.TableBody), 'tableBody');
export const DatePickerTableCell = withContext(styled(ArkDatePicker.TableCell), 'tableCell');
export const DatePickerTableCellTrigger = withContext(
	styled(ArkDatePicker.TableCellTrigger),
	'tableCellTrigger',
);
export const DatePickerTableHead = withContext(styled(ArkDatePicker.TableHead), 'tableHead');
export const DatePickerTableHeader = withContext(styled(ArkDatePicker.TableHeader), 'tableHeader');
export const DatePickerTableRow = withContext(styled(ArkDatePicker.TableRow), 'tableRow');
export const DatePickerTrigger = withContext(styled(ArkDatePicker.Trigger), 'trigger');
export const DatePickerView = withContext(styled(ArkDatePicker.View), 'view');
export const DatePickerViewControl = withContext(styled(ArkDatePicker.ViewControl), 'viewControl');
export const DatePickerViewTrigger = withContext(styled(ArkDatePicker.ViewTrigger), 'viewTrigger');
export const DatePickerYearSelect = withContext(styled(ArkDatePicker.YearSelect), 'yearSelect');
