import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStylesForDropdown } from "../../styling/components/textfieldStyle"

export default function Dropdown({
    options,
    handleDropdown,
    value
}) {
    const classes = useStylesForDropdown();

    return (
        <FormControl className={classes.formControl}>
            <NativeSelect
                value={value}
                name="Select Type"
                IconComponent={ExpandMoreIcon}
                onChange={(e) => handleDropdown(e)}
                disableUnderline={true}
                inputProps={{ 'aria-label': 'wardrobe types' }}
            >
                {options.map((val) => {
                    return <option disabled={val === value} key={val} value={val}>{val}</option>
                })}
            </NativeSelect>
        </FormControl >
    )
}