import { makeStyles } from "@material-ui/core/styles";

const useStylesForInput = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(0),
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
        "& .MuiTextField-root": {
            backgroundColor: "white"
        },
        "& .Mui-focused": {
            backgroundColor: "white",
        },
        "& .Mui-disabled": {
            backgroundColor: "white",
            color: 'black'
        },
        "& .MuiFormLabel-root": {
            color: 'gray'
        },
    }
}));

const useStylesForSearchInput = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(0),
    },
    input: {
        backgroundColor: "white",
        borderRadius: 5,
        height: 50,
        "&:hover": {
            backgroundColor: "white",
        }
    },
    root: {
        "& .MuiTextField-root": {
            backgroundColor: "white"
        },
        "& .Mui-focused": {
            backgroundColor: "white",
            color: "gray"
        }
    }
}));

const useStylesForDropdown = makeStyles((theme) => ({
    formControl: {
        backgroundColor: 'white',
        borderRadius: 5,
        width: '200px',
        border: '1px solid black',
        padding: '0px 10px 0px 12px',
        margin: '0px 10px 0px 10px',
        "& .MuiNativeSelect-root": {
            backgroundColor: "white",
            borderRadius: 15,
            padding: '12px 0px 12px 0px'
        }
    }
}));

export { useStylesForInput, useStylesForSearchInput, useStylesForDropdown }