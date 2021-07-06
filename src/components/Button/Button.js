import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MaterialButton from "@material-ui/core/Button";
import { FiUpload } from 'react-icons/fi'
import { styles } from '../../styling/components/buttonStyle.js'
import { colors } from '../../constants/theme.js';
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
    input: {
        display: 'none'
    }
}));

function Button({
    label,
    type,
    disabled,
    onClick,
    icon,
    variant
}) {
    const classes = useStyles();
    return (
        <>
            {type &&
                <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    type={type}
                    onChange={(e) => onClick(e)}
                />
            }
            <label htmlFor="contained-button-file">
                <MaterialButton
                    component={type && "span"}
                    disabled={disabled}
                    style={
                        disabled ? { ...styles.stylesForButton, backgroundColor: colors.MUTED }
                            : variant === 'transparent' ? styles.stylesForTransparentButton
                                : variant === 'secondary' ? { ...styles.stylesForButton, backgroundColor: colors.SECONDARY }
                                    : styles.stylesForButton
                    }
                    onClick={() => !type && onClick()}
                    variant="contained"
                >
                    {icon && <FiUpload fontSize='20' className='mr-2' />}{label}
                </MaterialButton>
            </label>
        </>
    )
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    icon: PropTypes.bool,
    variant: PropTypes.oneOf(['transparent', 'secondary'])
}

export default Button;