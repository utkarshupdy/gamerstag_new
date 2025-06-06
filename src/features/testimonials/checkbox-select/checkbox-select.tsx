"use client";
import { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { IoIosArrowDown } from "react-icons/io";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      backgroundColor: "black",
      color: "white",
    },
  },
};

const features = [
  { name: "All Features", subFeatures: [] },
  { name: "Main Feature 1", subFeatures: ["SubFeature1", "SubFeature2"] },
  { name: "Main Feature 2", subFeatures: ["SubFeature3", "SubFeature4"] },
];

export default function MultipleSelectCheckmarks() {
  const [personName, setPersonName] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value,
    );
  };

  return (
    <div>
      <FormControl focused={false} className="w-full">
        <InputLabel
          id="demo-multiple-checkbox-label"
          className="flex w-full items-center justify-between text-white/40"
        >
          All Features <IoIosArrowDown className="text-2xl" />
        </InputLabel>

        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={
            <OutlinedInput
              label="Feature"
              placeholder="All Features"
              className="text-white"
            />
          }
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
          className="border-1 rounded-none border border-solid border-white/35 text-white"
        >
          {features.map((feature) => [
            <MenuItem
              key={feature.name}
              value={feature.name}
              className="hover:bg-neutral-900"
            >
              <Checkbox
                checked={personName.includes(feature.name)}
                className="text-white"
              />
              <ListItemText primary={feature.name} />
            </MenuItem>,
            feature.subFeatures.map((subFeature) => (
              <MenuItem
                key={subFeature}
                value={subFeature}
                sx={{ pl: 4, fontSize: "5px", scrollbarColor: "red" }}
                className="text-white/80 hover:bg-neutral-900"
              >
                <Checkbox
                  checked={personName.includes(subFeature)}
                  className="text-white/80"
                />
                <ListItemText primary={subFeature} />
              </MenuItem>
            )),
          ])}
        </Select>
      </FormControl>
    </div>
  );
}
