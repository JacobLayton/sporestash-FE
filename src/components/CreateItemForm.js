import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
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
import { Button } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

function getDate() {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const dateString = `${year}-${month}-${day}`;
  return dateString;
}

const defaultValues = {
  item_name: "",
  item_category: "",
  image_url: "",
  item_blurb: "",
  item_description: "",
  item_price: "",
  item_quantity: "",
  units_available: null,
  is_available: "",
  created_date: getDate(),
  is_active: "",
  swab_price: "",
  print_price: "",
  syringe_price: "",
  swab_available: false,
  print_available: false,
  syringe_available: false,
  swab_quantity: "",
  print_quantity: "",
  syringe_quantity: "",
  hide_type: null,
  display_size: false,
  sizes_available: [],
};

const sizes = ["XS", "SM", "MD", "LG", "XL", "XXL"];

function CreateItemForm() {
  const { getAccessTokenSilently } = useAuth0();
  const [formValues, setFormValues] = useState(defaultValues);

  const handleCategoryChange = (e) => {
    let { name, value } = e.target;
    const updatedFormValues = {
      ...formValues,
      [name]: value,
    };
    if (value === "cubensis" || value === "exotic") {
      updatedFormValues.item_price = "";
      updatedFormValues.display_size = false;
      updatedFormValues.sizes_available = [];
    }
    if (value === "merch") {
      updatedFormValues.swab_available = false;
      updatedFormValues.print_available = false;
      updatedFormValues.syringe_available = false;
      updatedFormValues.swab_price = "";
      updatedFormValues.print_price = "";
      updatedFormValues.syringe_price = "";
      updatedFormValues.swab_quantity = "";
      updatedFormValues.print_quantity = "";
      updatedFormValues.syringe_quantity = "";
    }
    setFormValues(updatedFormValues);
  };
  const handleSporePriceChange = (e) => {
    let { name, value } = e.target;
    if (
      (name.includes("price") || name.includes("quantity")) &&
      value !== null &&
      value !== 0 &&
      value !== ""
    ) {
      value = Number(value);
    }
    const updatedFormValues = {
      ...formValues,
      [name]: value,
    };
    const itemPrice = updatedFormValues.item_price;
    if (itemPrice === 0 || itemPrice === "" || itemPrice > value) {
      updatedFormValues.item_price = value;
    }
    setFormValues(updatedFormValues);
  };
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    if (
      (name.includes("price") || name.includes("quantity")) &&
      value !== null &&
      value !== 0 &&
      value !== ""
    ) {
      value = Number(value);
    }
    const updatedFormValues = {
      ...formValues,
      [name]: value,
    };
    setFormValues(updatedFormValues);
  };
  const handleBooleanChange = (e) => {
    const name = e.target.name;
    const value = e.target.value === "true";
    const updatedFormValues = {
      ...formValues,
      [name]: value,
    };
    if (name === "display_size" && value === false) {
      updatedFormValues.sizes_available = [];
    }
    setFormValues(updatedFormValues);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = await getAccessTokenSilently();
    const formValuesCopy = formValues;
    const formObjKeys = Object.keys(formValuesCopy);
    for (let i = 0; i < formObjKeys.length; i++) {
      if (
        (formObjKeys[i].includes("price") ||
          formObjKeys[i].includes("quantity")) &&
        formValuesCopy[formObjKeys[i]] === ""
      ) {
        formValuesCopy[formObjKeys[i]] = null;
      }
    }
    if (formValues.sizes_available && formValues.sizes_available.length > 0) {
      formValuesCopy.sizes_available = JSON.stringify(
        formValues.sizes_available
      );
    } else {
      formValuesCopy.sizes_available = null;
    }
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/items`, formValuesCopy, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("RES: ", res);
      })
      .catch((err) => {
        console.log("Error creating item: ", err);
      });
  };
  return (
    <div className="create-form-container">
      <form onSubmit={handleSubmit}>
        <Grid>
          <Grid container direction="column">
            <TextField
              id="name-input"
              name="item_name"
              label="Item Name"
              type="text"
              value={formValues.item_name}
              onChange={handleInputChange}
              sx={{ m: 1 }}
            />
            <FormControl fullWidth>
              <InputLabel id="category-label" sx={{ ml: 1, mt: 1 }}>
                Category
              </InputLabel>
              <Select
                id="category-select"
                name="item_category"
                labelId="category-label"
                label="Category"
                value={formValues.item_category}
                onChange={handleCategoryChange}
                sx={{ m: 1 }}
              >
                <MenuItem value={"cubensis"}>Cubensis</MenuItem>
                <MenuItem value={"exotic"}>Exotic</MenuItem>
                <MenuItem value={"merch"}>Merch</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="image-url"
              name="image_url"
              label="Image URL"
              type="text"
              value={formValues.image_url}
              onChange={handleInputChange}
              sx={{ m: 1 }}
            />
            <TextField
              id="blurb-input"
              name="item_blurb"
              label="Item Blurb"
              type="text"
              value={formValues.item_blurb}
              onChange={handleInputChange}
              sx={{ m: 1 }}
            />
            <TextField
              id="description-input"
              name="item_description"
              label="Item Description"
              multiline
              minRows={3}
              type="text"
              value={formValues.item_description}
              onChange={handleInputChange}
              sx={{ m: 1 }}
            />
            {formValues.item_category === "merch" ? (
              <TextField
                id="price-input"
                name="item_price"
                label="Item Price"
                type="number"
                value={formValues.item_price}
                onChange={handleInputChange}
                sx={{ m: 1 }}
              />
            ) : null}
            {formValues.item_category === "merch" ? (
              <TextField
                id="quantity-input"
                name="item_quantity"
                label="Quantity On Hand"
                type="number"
                value={formValues.item_quantity}
                onChange={handleInputChange}
                sx={{ m: 1 }}
              />
            ) : null}
            <FormControl>
              <FormLabel sx={{ ml: 2 }}>Is Available?</FormLabel>
              <RadioGroup
                name="is_available"
                value={formValues.is_available}
                onChange={handleBooleanChange}
                row
                sx={{ ml: 2 }}
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
              <FormLabel sx={{ ml: 2 }}>Is Active?</FormLabel>
              <RadioGroup
                name="is_active"
                value={formValues.is_active}
                onChange={handleBooleanChange}
                row
                sx={{ ml: 2 }}
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
            {formValues.item_category === "cubensis" ||
            formValues.item_category === "exotic" ? (
              <FormControl>
                <FormLabel sx={{ ml: 2 }}>Swab Available?</FormLabel>
                <RadioGroup
                  name="swab_available"
                  value={formValues.swab_available}
                  onChange={handleBooleanChange}
                  row
                  sx={{ ml: 2 }}
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
            ) : null}
            {formValues.swab_available === true ? (
              <Grid container direction="column">
                <TextField
                  id="swab-price"
                  name="swab_price"
                  label="Swab Price"
                  type="number"
                  value={formValues.swab_price}
                  onChange={handleInputChange}
                  onBlur={handleSporePriceChange}
                  sx={{ m: 1 }}
                />
                <TextField
                  id="swab-quantity"
                  name="swab_quantity"
                  label="Swab Quantity On Hand"
                  type="number"
                  value={formValues.swab_quantity}
                  onChange={handleInputChange}
                  sx={{ m: 1 }}
                />
              </Grid>
            ) : null}
            {formValues.item_category === "cubensis" ||
            formValues.item_category === "exotic" ? (
              <FormControl>
                <FormLabel sx={{ ml: 2 }}>Print Available?</FormLabel>
                <RadioGroup
                  name="print_available"
                  value={formValues.print_available}
                  onChange={handleBooleanChange}
                  row
                  sx={{ ml: 2 }}
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
            ) : null}
            {formValues.print_available === true ? (
              <Grid container direction="column">
                <TextField
                  id="print-price"
                  name="print_price"
                  label="Print Price"
                  type="number"
                  value={formValues.print_price}
                  onChange={handleInputChange}
                  onBlur={handleSporePriceChange}
                  sx={{ m: 1 }}
                />
                <TextField
                  id="print-quantity"
                  name="print_quantity"
                  label="Print Quantity On Hand"
                  type="number"
                  value={formValues.print_quantity}
                  onChange={handleInputChange}
                  sx={{ m: 1 }}
                />
              </Grid>
            ) : null}
            {formValues.item_category === "cubensis" ||
            formValues.item_category === "exotic" ? (
              <FormControl>
                <FormLabel sx={{ ml: 2 }}>Syringe Available?</FormLabel>
                <RadioGroup
                  name="syringe_available"
                  value={formValues.syringe_available}
                  onChange={handleBooleanChange}
                  row
                  sx={{ ml: 2 }}
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
            ) : null}
            {formValues.syringe_available === true ? (
              <Grid container direction="column">
                <TextField
                  id="syringe-price"
                  name="syringe_price"
                  label="Syringe Price"
                  type="number"
                  value={formValues.syringe_price}
                  onChange={handleInputChange}
                  onBlur={handleSporePriceChange}
                  sx={{ m: 1 }}
                />
                <TextField
                  id="syringe-quantity"
                  name="syringe_quantity"
                  label="Syringe Quantity On Hand"
                  type="number"
                  value={formValues.syringe_quantity}
                  onChange={handleInputChange}
                  sx={{ m: 1 }}
                />
              </Grid>
            ) : null}
            {formValues.item_category === "merch" ? (
              <FormControl>
                <FormLabel sx={{ ml: 2 }}>Display Size?</FormLabel>
                <RadioGroup
                  name="display_size"
                  value={formValues.display_size}
                  onChange={handleBooleanChange}
                  row
                  sx={{ ml: 2 }}
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
            ) : null}
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
                  sx={{ m: 1 }}
                >
                  {sizes.map((size) => (
                    <MenuItem key={size} value={size}>
                      <Checkbox
                        checked={formValues.sizes_available.indexOf(size) > -1}
                      />
                      <ListItemText primary={size} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : null}
          </Grid>
          <div className="item-form-buttons">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              id="create-form-submit-button"
            >
              Submit
            </Button>
            <div className="form-spacer" />
            <Link to="/admin">
              <Button
                variant="outlined"
                color="secondary"
                id="form-cancel-button"
              >
                Cancel
              </Button>
            </Link>
          </div>
        </Grid>
      </form>
    </div>
  );
}

export default CreateItemForm;
