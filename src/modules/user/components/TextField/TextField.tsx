/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import { IEvent } from 'common/definitions/event';

interface IInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  value?: string;
  label?: string;
  classes?: string;
  handleChange: (event: IEvent) => void;
}

function TextField(props: IInputProps): React.ReactElement {
  const {
    value = '',
    name = '',
    label = '',
    type,
    required = false,
    autoFocus = false,
    classes = '',
    handleChange,
  } = props;

  return (
    <div className={`c-text-field ${classes}`}>
      <input
        id={`c-text-field-${name}`}
        value={value}
        name={name}
        className="c-text-field__input"
        onChange={handleChange}
        type={type}
        required={required}
        autoFocus={autoFocus}
      />
      {label ? (
        <label
          htmlFor={`c-text-field-${name}`}
          className={`${value.length ? 'is-shrink' : ''} c-text-field__label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}

export default TextField;
