import { colors } from "../../constants/theme";

export const styles = {
    counter: {
        backgroundColor: colors.PRIMARY_LIGHT,
        color: 'white',
        fontSize: 14,
        fontWeight: '500',
        borderRadius: '50%',
        minWidth: 20,
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        transform: 'translate(20px,0px)'
    },
    container: {
        minHeight: 300,
        width: 250,
        borderRadius: 10,
        border: '1px solid gray',
        position: 'absolute',
        right: 10,
        zIndex: 20,
        backgroundColor: 'white'
    }
}