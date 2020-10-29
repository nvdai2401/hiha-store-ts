import React from 'react';
import { IEvent } from 'definitions/event';

type Props = {
  value: string;
  name: string;
  label: string;
  type: string;
  required: boolean;
  handleChange: (event: IEvent) => void;
};

function TextField(props: Props): React.ReactElement {
  const { value, name, label, type, required, handleChange } = props;

  return (
    <div className="text-field">
      <input
        id={`text-field-${name}`}
        value={value}
        name={name}
        className="text-field__input"
        onChange={handleChange}
        type={type}
        required={required}
      />
      {label ? (
        <label
          htmlFor={`text-field-${name}`}
          className={`${value.length ? 'is-shrink' : ''} text-field__label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}

export default TextField;
