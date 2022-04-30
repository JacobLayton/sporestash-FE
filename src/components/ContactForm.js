import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
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

const defaultContactValues = {
  contact_category: "",
  contact_name: "",
  contact_email: "",
  contact_subject: "",
  contact_message: "",
};

// const sizes = ["XS", "SM", "MD", "LG", "XL", "XXL"];

function ContactForm() {
  let navigate = useNavigate();
  let location = useLocation();
  const [contactValues, setContactValues] = useState(defaultContactValues);

  const handleCategoryChange = (e) => {
    let { name, value } = e.target;
    const updatedFormValues = {
      ...contactValues,
      [name]: value,
    };
    setContactValues(updatedFormValues);
  };
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    const updatedFormValues = {
      ...contactValues,
      [name]: value,
    };
    setContactValues(updatedFormValues);
  };
  //   const handleBooleanChange = (e) => {
  //     const name = e.target.name;
  //     const value = e.target.value === "true";
  //     const updatedFormValues = {
  //       ...formValues,
  //       [name]: value,
  //     };
  //     if (name === "display_size" && value === false) {
  //       updatedFormValues.sizes_available = [];
  //     }
  //     setFormValues(updatedFormValues);
  //   };

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();
  //     const token = await getAccessTokenSilently();
  //     const formValuesCopy = formValues;
  //     const formObjKeys = Object.keys(formValuesCopy);
  //     for (let i = 0; i < formObjKeys.length; i++) {
  //       if (
  //         (formObjKeys[i].includes("price") ||
  //           formObjKeys[i].includes("quantity")) &&
  //         formValuesCopy[formObjKeys[i]] === ""
  //       ) {
  //         formValuesCopy[formObjKeys[i]] = null;
  //       }
  //     }
  //     if (formValues.sizes_available && formValues.sizes_available.length > 0) {
  //       formValuesCopy.sizes_available = JSON.stringify(
  //         formValues.sizes_available
  //       );
  //     } else {
  //       formValuesCopy.sizes_available = null;
  //     }
  //     axios
  //       .post(`${process.env.REACT_APP_SERVER_URL}/items`, formValuesCopy, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       })
  //       .then((res) => {
  //         console.log("RES: ", res);
  //         navigate("/admin" + location.search);
  //       })
  //       .catch((err) => {
  //         console.log("Error creating item: ", err);
  //         alert("Error creating item");
  //       });
  //   };
  const handleSubmit = async (event) => {
    event.preventDefault();
    alert(contactValues);
  };
  return (
    <div className="contact-form-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <Grid>
          <Grid container direction="column">
            <FormControl fullWidth>
              <InputLabel id="contact-category-label" sx={{ ml: 1, mt: 1 }}>
                Category
              </InputLabel>
              <Select
                id="contact-category-select"
                name="contact_category"
                labelId="contact-category-label"
                label="Category"
                value={contactValues.contact_category}
                onChange={handleCategoryChange}
                sx={{ m: 1 }}
              >
                <MenuItem value={"General Inquiry"}>General Inquiry</MenuItem>
                <MenuItem value={"Orders"}>Orders</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="contact-name-input"
              name="contact_name"
              label="Name"
              type="text"
              value={contactValues.contact_name}
              onChange={handleInputChange}
              sx={{ m: 1 }}
            />
            <TextField
              id="contact-email-input"
              name="contact_email"
              label="Email"
              type="text"
              value={contactValues.contact_email}
              onChange={handleInputChange}
              sx={{ m: 1 }}
            />
            <TextField
              id="contact-subject-input"
              name="contact_subject"
              label="Contact Subject"
              type="text"
              value={contactValues.contact_subject}
              onChange={handleInputChange}
              sx={{ m: 1 }}
            />
            <TextField
              id="contact-message-input"
              name="contact_message"
              label="Message"
              multiline
              minRows={3}
              type="text"
              value={contactValues.contact_message}
              onChange={handleInputChange}
              sx={{ m: 1 }}
            />
          </Grid>
          <div className="contact-form-buttons">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              id="contact-form-submit-button"
              sx={{ ml: 1.2 }}
            >
              Submit
            </Button>
          </div>
        </Grid>
      </form>
    </div>
  );
}

export default ContactForm;
