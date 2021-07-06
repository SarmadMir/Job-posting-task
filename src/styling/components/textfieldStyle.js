import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../constants/theme";

export const useStylesForInput = makeStyles(() => ({
    height: {
        height: '50px'
    },
    input: {
        backgroundColor: "white",
        borderRadius: 5,
        boxShadow: '0px 5px #ADB9DB29',
        "&:after": {
            borderBottomColor: "black",
        },
        "&:hover": {
            backgroundColor: "white",
        },
        "&:disabled": {
            color: "gray",
        },
        "&:focus": {
            backgroundColor: "white",
            borderRadius: 5
        },
    },
    root: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#DEE2E6'
            },
            '&:hover fieldset': {
                borderColor: colors.MUTED,
            },
            '&.Mui-focused fieldset': {
                borderColor: colors.MUTED_TEXT,
            },
        },
        "& .MuiFormLabel-root": {
            color: 'gray'
        },
        "& .MuiSelect-icon": {
            top: 0,
            right: 0,
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            borderRadius: 5,
            padding: '12px',
            backgroundColor: colors.MUTED,
        },
        "& .MuiSvgIcon-root": {
            width: '50px',
        }
    }
}));