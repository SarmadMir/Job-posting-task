import React from 'react'
import MaterialButton from "@material-ui/core/Button";
import { FiUpload } from 'react-icons/fi'
import { styles } from '../../styling/components/buttonStyle.js'
import { colors } from '../../constants/theme.js';

export default function Button({
    label,
    disabled,
    onClick,
    icon,
    variant
}) {
    return (
        <MaterialButton
            disabled={disabled}
            style={
                disabled ? { ...styles.stylesForButton, backgroundColor: colors.MUTED }
                    : variant === 'transparent' ? styles.stylesForTransparentButton
                        : variant === 'secondary' ? { ...styles.stylesForButton, backgroundColor: colors.SECONDARY }
                            : styles.stylesForButton
            }
            onClick={() => onClick()}
            variant="contained"
        >
            {icon && <FiUpload fontSize='20' className='mr-2' />}{label}
        </MaterialButton>
    )
}
