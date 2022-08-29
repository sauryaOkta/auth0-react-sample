import React, { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const CountryPicker = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

  countries.registerLocale(enLocale);
  const countryObj = countries.getNames("en", { select: "official" });

  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key,
    };
  });

  const selectCountryHandler = (value) => setSelectedCountry(value);

  return (
    <React.Fragment>
      <FormControl sx={{ width: "100%" }}>
        <FormLabel variant="body1">Country</FormLabel>
        <Select
          displayEmpty
          value={selectedCountry}
          onChange={(e) => selectCountryHandler(e.target.value)}
          input={<OutlinedInput />}
        >
          {!!countryArr?.length &&
            countryArr.map(({ label, value }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </React.Fragment>
  );
};

export default CountryPicker;
