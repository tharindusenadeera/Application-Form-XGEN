import { TimePicker } from "@mui/lab";
import { FC } from "react";
import { TimePickerComponent_component_props_types } from "../../constants/interfaces";
import { LocalizationProviderComponent } from "./LocalizationProviderComponent";

export const TimePickerComponent: FC<
  TimePickerComponent_component_props_types
> = ({
  onChange,
  renderInput,
  acceptRegex,
  ampm,
  ampmInClock,
  cancelText,
  clearable,
  clearText,
  components,
  desktopModeMediaQuery,
  DialogProps,
  disableCloseOnSelect,
  disabled,
  disableIgnoringDatePartForTimeValidation,
  disableMaskedInput,
  disableOpenPicker,
  getClockLabelText,
  getOpenDialogAriaText,
  InputAdornmentProps,
  inputFormat,
  inputRef,
  maxTime,
  minTime,
  minutesStep,
  okText,
  onAccept,
  onClose,
  onError,
  onOpen,
  onViewChange,
  open,
  OpenPickerButtonProps,
  openTo,
  orientation,
  PaperProps,
  readOnly,
  rifmFormatter,
  showTodayButton,
  todayText,
  toolbarFormat,
  toolbarPlaceholder,
  value,
  label,
}) => {
  return (
    <LocalizationProviderComponent>
      <TimePicker
        onChange={onChange}
        renderInput={renderInput}
        acceptRegex={acceptRegex}
        ampm={ampm}
        ampmInClock={ampmInClock}
        cancelText={cancelText}
        clearable={clearable}
        clearText={clearText}
        components={components}
        desktopModeMediaQuery={desktopModeMediaQuery}
        DialogProps={DialogProps}
        disableCloseOnSelect={disableCloseOnSelect}
        disabled={disabled}
        disableIgnoringDatePartForTimeValidation={
          disableIgnoringDatePartForTimeValidation
        }
        disableMaskedInput={disableMaskedInput}
        disableOpenPicker={disableOpenPicker}
        getClockLabelText={getClockLabelText}
        getOpenDialogAriaText={getOpenDialogAriaText}
        InputAdornmentProps={InputAdornmentProps}
        inputFormat={inputFormat}
        inputRef={inputRef}
        maxTime={maxTime}
        minTime={minTime}
        minutesStep={minutesStep}
        okText={okText}
        onAccept={onAccept}
        onClose={onClose}
        onError={onError}
        onOpen={onOpen}
        onViewChange={onViewChange}
        open={open}
        OpenPickerButtonProps={OpenPickerButtonProps}
        openTo={openTo}
        orientation={orientation}
        PaperProps={PaperProps}
        readOnly={readOnly}
        rifmFormatter={rifmFormatter}
        showTodayButton={showTodayButton}
        todayText={todayText}
        toolbarFormat={toolbarFormat}
        toolbarPlaceholder={toolbarPlaceholder}
        value={value}
        label={label}
      />
    </LocalizationProviderComponent>
  );
};
