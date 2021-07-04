import { colors } from '../../constants/theme'

export const styles = {
    stylesForButton: {
        color: "white",
        cursor: "pointer",
        borderRadius: 5,
        backgroundColor: colors.PRIMARY_LIGHT,
        height: "50px",
        width: '250px',
        display: 'flex',
        justifyContent: 'space-evenly',
        whiteSpace: 'nowrap'
    },
    stylesForTransparentButton: {
        color: '#707070',
        cursor: "pointer",
        borderRadius: 5,
        border: `1px solid #8C8C8C`,
        backgroundColor: 'transparent',
        height: "50px",
        width: '250px',
        display: 'flex',
        justifyContent: 'space-evenly',
        whiteSpace: 'nowrap',
        fontWeight: '600'
    }
}