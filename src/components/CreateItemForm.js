import React, { useState } from "react";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { FormControl } from "@mui/material";
import { FormLabel } from "@mui/material";
import { RadioGroup } from "@mui/material";
import { Radio } from "@mui/material";
import { Select } from "@mui/material";
import { Checkbox } from "@mui/material";
import { InputLabel } from "@mui/material";
import { MenuItem } from "@mui/material";
import { ListItemText } from "@mui/material";
import { Input } from "@mui/material";
import { Slider } from "@mui/material";
import { Button } from "@mui/material";

const defaultValues = {
  item_name: "",
  item_category: "",
  image_url: "",
  item_blurb: "",
  item_description: "",
  item_price: null,
  item_quantity: null,
  units_available: null,
  is_available: null,
  created_date: null,
  is_active: null,
  swab_price: null,
  print_price: null,
  syringe_price: null,
  swab_available: null,
  print_available: null,
  syringe_available: null,
  hide_type: null,
  display_size: null,
  sizes_available: [],
};

const sizes = ["XS", "SM", "MD", "LG", "XL", "XXL"];

function CreateItemForm() {
  const [formValues, setFormValues] = useState(defaultValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleBooleanChange = (e) => {
    const name = e.target.name;
    const value = e.target.value === "true";
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSliderChange = (name) => (e, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };
  return (
    <div className="edit-item-container">
      <h1>CreateItemForm</h1>
      <form onSubmit={handleSubmit}>
        <Grid>
          <Grid container direction="column">
            <TextField
              id="name-input"
              name="item_name"
              label="Item Name"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
            />
            <FormControl fullWidth>
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                id="category-select"
                name="item_category"
                labelId="category-label"
                label="Category"
                value={formValues.item_category}
                onChange={handleInputChange}
              >
                <MenuItem value={"spore"}>Spore</MenuItem>
                <MenuItem value={"more"}>More</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="image-url"
              name="image_url"
              label="Image URL"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
            />
            <TextField
              id="blurb-input"
              name="item_blurb"
              label="Item Blurb"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
            />
            <TextField
              id="description-input"
              name="item_description"
              label="Item Description"
              multiline
              minRows={3}
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
            />
            <TextField
              id="price-input"
              name="item_price"
              label="Item Price"
              type="number"
              value={formValues.name}
              onChange={handleInputChange}
            />
            <TextField
              id="quantity-input"
              name="item_quantity"
              label="Quantity On Hand"
              type="number"
              value={formValues.name}
              onChange={handleInputChange}
            />
            <FormControl>
              <FormLabel>Is Available?</FormLabel>
              <RadioGroup
                name="is_available"
                value={formValues.is_available}
                onChange={handleBooleanChange}
                row
              >
                <FormControlLabel
                  value="true"
                  control={<Radio size="small" />}
                  label="Yes"
                />
                <FormControlLabel
                  value="false"
                  control={<Radio size="small" />}
                  label="No"
                />
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormLabel>Is Active?</FormLabel>
              <RadioGroup
                name="is_active"
                value={formValues.is_active}
                onChange={handleBooleanChange}
                row
              >
                <FormControlLabel
                  value="true"
                  control={<Radio size="small" />}
                  label="Yes"
                />
                <FormControlLabel
                  value="false"
                  control={<Radio size="small" />}
                  label="No"
                />
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormLabel>Swab Available?</FormLabel>
              <RadioGroup
                name="swab_available"
                value={formValues.swab_available}
                onChange={handleBooleanChange}
                row
              >
                <FormControlLabel
                  value="true"
                  control={<Radio size="small" />}
                  label="Yes"
                />
                <FormControlLabel
                  value="false"
                  control={<Radio size="small" />}
                  label="No"
                />
              </RadioGroup>
            </FormControl>
            <TextField
              id="swab-price"
              name="swab_price"
              label="Swab Price"
              type="number"
              value={formValues.name}
              onChange={handleInputChange}
            />
            <FormControl>
              <FormLabel>Print Available?</FormLabel>
              <RadioGroup
                name="print_available"
                value={formValues.print_available}
                onChange={handleBooleanChange}
                row
              >
                <FormControlLabel
                  value="true"
                  control={<Radio size="small" />}
                  label="Yes"
                />
                <FormControlLabel
                  value="false"
                  control={<Radio size="small" />}
                  label="No"
                />
              </RadioGroup>
            </FormControl>
            <TextField
              id="print-price"
              name="print_price"
              label="Print Price"
              type="number"
              value={formValues.name}
              onChange={handleInputChange}
            />
            <FormControl>
              <FormLabel>Syringe Available?</FormLabel>
              <RadioGroup
                name="syringe_available"
                value={formValues.syringe_available}
                onChange={handleBooleanChange}
                row
              >
                <FormControlLabel
                  value="true"
                  control={<Radio size="small" />}
                  label="Yes"
                />
                <FormControlLabel
                  value="false"
                  control={<Radio size="small" />}
                  label="No"
                />
              </RadioGroup>
            </FormControl>
            <TextField
              id="syringe-price"
              name="syringe_price"
              label="Syringe Price"
              type="number"
              value={formValues.name}
              onChange={handleInputChange}
            />
            <FormControl>
              <FormLabel>Display Size?</FormLabel>
              <RadioGroup
                name="display_size"
                value={formValues.display_size}
                onChange={handleBooleanChange}
                row
              >
                <FormControlLabel
                  value="true"
                  control={<Radio size="small" />}
                  label="Yes"
                />
                <FormControlLabel
                  value="false"
                  control={<Radio size="small" />}
                  label="No"
                />
              </RadioGroup>
            </FormControl>
            {formValues.display_size === true ? (
              <FormControl fullWidth>
                <InputLabel id="sizes-label">Sizes Available</InputLabel>
                <Select
                  id="sizes-available"
                  multiple
                  name="sizes_available"
                  labelId="sizes-label"
                  label="Sizes Available"
                  value={formValues.sizes_available}
                  renderValue={(selected) => selected.join(", ")}
                  onChange={handleInputChange}
                >
                  {sizes.map((size) => (
                    <MenuItem key={size} value={size}>
                      <Checkbox
                        checked={formValues.sizes_available.indexOf(size) > -1}
                      />
                      <ListItemText primary={size} />
                    </MenuItem>
                  ))}
                  {/* <MenuItem value={"xs"}>XS</MenuItem>
                    <MenuItem value={"s"}>SM</MenuItem>
                    <MenuItem value={"m"}>MD</MenuItem>
                    <MenuItem value={"l"}>LG</MenuItem>
                    <MenuItem value={"xl"}>XL</MenuItem>
                    <MenuItem value={"xxl"}>XXL</MenuItem> */}
                </Select>
              </FormControl>
            ) : null}
          </Grid>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Grid>
      </form>
    </div>
  );
}

export default CreateItemForm;
