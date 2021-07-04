import React from 'react'
import TextField from "@material-ui/core/TextField";
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import InputAdornment from '@material-ui/core/InputAdornment'
import { useStylesForInput, useStylesForSearchInput } from "../../styling/components/textfieldStyle"

export default function InputField({
    id,
    type,
    placeholder,
    label,
    name,
    value,
    onChange,
    disableUnderline,
    disabled,
    variant,
    multiline
}) {
    const classes = useStylesForInput();
    const sClasses = useStylesForSearchInput()

    return (
        <TextField
            placeholder={placeholder}
            multiline={multiline}
            disabled={disabled}
            type={type}
            label={label}
            id={id}
            name={name}
            value={value}
            onChange={(e) => onChange(e)}
            rows={4}
            variant="outlined"
            className={`textInputStyle ${variant === 'search' ? sClasses.root : classes.root}`}
            InputProps={{
                className: variant === 'search' ? sClasses.input : classes.input,
                disableUnderline: disableUnderline,
                endAdornment: (
                    variant === 'search' &&
                    <InputAdornment position='end'>
                        <SearchOutlined style={{ color: 'darkgray' }} />
                    </InputAdornment>
                ),
            }}
            InputLabelProps={{
                shrink: true
            }}
        />
    )
}
