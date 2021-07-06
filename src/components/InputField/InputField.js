import React from 'react'
import TextField from "@material-ui/core/TextField";
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import InputAdornment from '@material-ui/core/InputAdornment'
import { useStylesForInput } from "../../styling/components/textfieldStyle"
import PropTypes from 'prop-types'

function InputField({
    id,
    type,
    placeholder,
    label,
    name,
    value,
    onChange,
    variant,
    error,
    multiline
}) {
    const classes = useStylesForInput();

    return (
        <TextField
            required
            placeholder={placeholder}
            multiline={multiline}
            type={type}
            label={label}
            id={id}
            name={name}
            value={value}
            error={error ? true : false}
            helperText={error && error}
            onChange={(e) => onChange(e)}
            rows={4}
            variant="outlined"
            className={`textInputStyle ${classes.root}`}
            InputProps={{
                className: multiline ? classes.input : [classes.input, classes.height],
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

InputField.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    multiline: PropTypes.bool,
    error: PropTypes.any,
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    variant: PropTypes.string
}

export default InputField