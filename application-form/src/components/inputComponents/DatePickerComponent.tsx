import { FC } from "react";
import { DatePicker } from "@mui/lab";
import { calander_component_props_types } from "../../constants/interfaces";

export const DatePickerComponent: FC<calander_component_props_types> = ({
  onChange,
  renderInput,
  acceptRegex,
  allowSameDateSelection,
  cancelText,
  className,
  clearable,
  clearText,
  components,
  componentsProps,
  defaultCalendarMonth,
  desktopModeMediaQuery,
  DialogProps,
  disableCloseOnSelect,
  disabled,
  disableHighlightToday,
  disableMaskedInput,
  disableOpenPicker,
  getOpenDialogAriaText,
  getViewSwitchingButtonText,
  InputAdornmentProps,
  inputFormat,
  inputRef,
  leftArrowButtonText,
  loading,
  mask,
  maxDate,
  minDate,
  onClose,
  okText,
  onAccept,
  onError,
  onMonthChange,
  onOpen,
  onViewChange,
  onYearChange,
  open,
  OpenPickerButtonProps,
  openTo,
  orientation,
  PaperProps,
  PopperProps,
  readOnly,
  reduceAnimations,
  renderDay,
  renderLoading,
  rifmFormatter,
  rightArrowButtonText,
  shouldDisableDate,
  shouldDisableYear,
  showDaysOutsideCurrentMonth,
  showTodayButton,
  showToolbar,
  todayText,
  ToolbarComponent,
  toolbarFormat,
  toolbarPlaceholder,
  toolbarTitle,
  TransitionComponent,
  value,
  views,
  label,
  disableFuture,
}) => {
  return (
    <DatePicker
      onChange={onChange}
      renderInput={renderInput}
      acceptRegex={acceptRegex}
      allowSameDateSelection={allowSameDateSelection}
      cancelText={cancelText}
      className={className}
      clearable={clearable}
      clearText={clearText}
      components={components}
      componentsProps={componentsProps}
      defaultCalendarMonth={defaultCalendarMonth}
      desktopModeMediaQuery={desktopModeMediaQuery}
      DialogProps={DialogProps}
      disableCloseOnSelect={disableCloseOnSelect}
      disabled={disabled}
      disableHighlightToday={disableHighlightToday}
      disableMaskedInput={disableMaskedInput}
      disableOpenPicker={disableOpenPicker}
      getOpenDialogAriaText={getOpenDialogAriaText}
      getViewSwitchingButtonText={getViewSwitchingButtonText}
      InputAdornmentProps={InputAdornmentProps}
      // inputFormat={inputFormat}
      inputRef={inputRef}
      leftArrowButtonText={leftArrowButtonText}
      loading={loading}
      mask={mask}
      maxDate={maxDate}
      minDate={minDate}
      onClose={onClose}
      okText={okText}
      onAccept={onAccept}
      onError={onError}
      onMonthChange={onMonthChange}
      onOpen={onOpen}
      onViewChange={onViewChange}
      onYearChange={onYearChange}
      open={open}
      OpenPickerButtonProps={OpenPickerButtonProps}
      openTo={openTo}
      orientation={orientation}
      PaperProps={PaperProps}
      PopperProps={PopperProps}
      readOnly={readOnly}
      reduceAnimations={reduceAnimations}
      renderDay={renderDay}
      renderLoading={renderLoading}
      rifmFormatter={rifmFormatter}
      rightArrowButtonText={rightArrowButtonText}
      shouldDisableDate={shouldDisableDate}
      shouldDisableYear={shouldDisableYear}
      showDaysOutsideCurrentMonth={showDaysOutsideCurrentMonth}
      showTodayButton={showTodayButton}
      showToolbar={showToolbar}
      todayText={todayText}
      ToolbarComponent={ToolbarComponent}
      toolbarFormat={toolbarFormat}
      toolbarPlaceholder={toolbarPlaceholder}
      toolbarTitle={toolbarTitle}
      TransitionComponent={TransitionComponent}
      value={value}
      views={views}
      label={label}
      disableFuture={disableFuture}
    />
  );
};
