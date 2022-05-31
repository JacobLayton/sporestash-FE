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

function ContactForm() {
  const [contactValues, setContactValues] = useState(defaultContactValues);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [categoryError, setCategoryError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleCategoryChange = (e) => {
    let { name, value } = e.target;
    const updatedFormValues = {
      ...contactValues,
      [name]: value,
    };
    if (name === "contact_category") {
      setCategoryError(false);
    }
    setContactValues(updatedFormValues);
  };
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    const updatedFormValues = {
      ...contactValues,
      [name]: value,
    };
    if (name === "contact_name") {
      setNameError(false);
    }
    if (name === "contact_email") {
      setEmailError(false);
    }
    if (name === "contact_subject") {
      setSubjectError(false);
    }
    if (name === "contact_message") {
      setMessageError(false);
    }
    setContactValues(updatedFormValues);
  };

  function formValidation(formData) {
    let allFieldsComplete = true;
    if (formData.contact_category === "") {
      setCategoryError(true);
      allFieldsComplete = false;
    }
    if (formData.contact_name === "") {
      setNameError(true);
      allFieldsComplete = false;
    }
    if (formData.contact_email === "") {
      setEmailError(true);
      allFieldsComplete = false;
    }
    if (formData.contact_subject === "") {
      setSubjectError(true);
      allFieldsComplete = false;
    }
    if (formData.contact_message === "") {
      setMessageError(true);
      allFieldsComplete = false;
    }
    return allFieldsComplete;
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const allFieldsComplete = formValidation(contactValues);
    if (allFieldsComplete) {
      const messageData = {
        category: contactValues.contact_category,
        name: contactValues.contact_name,
        email: contactValues.contact_email,
        subject: contactValues.contact_subject,
        message: contactValues.contact_message,
      };
      await axios
        .post(process.env.REACT_APP_EMAIL_URL, { messageData })
        .then((res) => {
          console.log("res: ", res);
          setFormSubmitted(true);
        })
        .catch((err) => {
          console.log("Error: ", err);
        });
    }
  };
  return (
    <div className="contact-form-container">
      <h1>Contact Us</h1>
      {formSubmitted ? (
        <div className="thankyou-submission">
          <h2>Your message has been sent</h2>
          <h3>Please allow 48 hours for us to respond</h3>
        </div>
      ) : (
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
                  error={categoryError}
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
                error={nameError}
              />
              <TextField
                id="contact-email-input"
                name="contact_email"
                label="Email"
                type="text"
                value={contactValues.contact_email}
                onChange={handleInputChange}
                sx={{ m: 1 }}
                error={emailError}
              />
              <TextField
                id="contact-subject-input"
                name="contact_subject"
                label="Contact Subject"
                type="text"
                value={contactValues.contact_subject}
                onChange={handleInputChange}
                sx={{ m: 1 }}
                error={subjectError}
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
                error={messageError}
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
      )}
    </div>
  );
}

export default ContactForm;
