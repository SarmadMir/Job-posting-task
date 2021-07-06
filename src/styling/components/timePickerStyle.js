import { colors } from "../../constants/theme";
import { makeStyles } from "@material-ui/core/styles";

export const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: colors.MUTED_LIGHT,
        borderRadius: 10,
        alignItems: 'center',
        // justifyContent: 'center',
        width: '430px',
        height: '50px'
    },
    day: {
        backgroundColor: colors.PRIMARY,
        color: 'white',
        textTransform: 'uppercase',
        borderRadius: 10,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '166px'
    },
    time: {
        display: 'flex',
        justifyContent: 'center',
        marginLeft:'10%'
    }
}

export const useStylesForPicker = makeStyles(() => ({
    input: {
        cursor: 'pointer',
        width: '75px',
        color: colors.MUTED_TEXT,
        "& .MuiInput-input": {
            cursor: 'pointer'
        },
        "& .Mui-disabled": {
            cursor: 'default'
        },
    }
}))