import React from 'react';
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStylesForInput } from "../../styling/components/textfieldStyle"
import PropTypes from 'prop-types'

function Dropdown({
    id,
    placeholder,
    label,
    name,
    value,
    options,
    error,
    onChange,
}) {
    const classes = useStylesForInput();

    return (
        <TextField
            required
            select
            fullWidth
            id={id}
            placeholder={placeholder}
            name={name}
            helperText={error && error}
            value={value ? value : " "}
            onChange={onChange}
            label={label}
            error={error ? true : false}
            variant="outlined"
            className={classes.root}
            InputProps={{ className: [classes.input, classes.height] }}
            SelectProps={{ IconComponent: ExpandMoreIcon }}
            InputLabelProps={{ shrink: true }}
        >
            <MenuItem value=" " key=" ">
                Enter Value...
            </MenuItem>

            {options && options.map(val => {
                return (
                    <MenuItem key={val.key} value={val.value}>{val.key}</MenuItem>
                )
            })}
        </TextField>
    )
}

Dropdown.propTypes = {
    id: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    error: PropTypes.any,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(Object)
}

export default Dropdown