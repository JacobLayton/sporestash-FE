import * as React from "react";
import { styled } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ExpandIcon() {
  return (
    <FontAwesomeIcon icon={["fas", "caret-down"]} className="accordion-caret" />
  );
}

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={<ExpandIcon />} {...props} />
))(({ theme }) => ({
  //   backgroundColor:
  //     theme.palette.mode === "dark"
  //       ? "rgba(255, 255, 255, .05)"
  //       : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper": {
    transform: "rotate(-90deg)",
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(0deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

function Privacy() {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <h1>Privacy Statement</h1>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography>We respect your privacy!</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              Any and all the information collected on this site will be kept
              strictly confidential and will not be sold, reused, rented,
              disclosed, or loaned!
            </p>
            <p>
              Any information you provide will be held with the utmost care and
              will not be used in ways that you have not consented to. If you
              have any questions, please feel free to call or e-mail us.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Privacy;
