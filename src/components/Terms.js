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

function Terms() {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <h1>Terms & Conditions</h1>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Ordering Restrictions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              Spore Works requires all customers to be over the age of 18 to
              purchase any material from our catalog. Proof of age may be
              required, or proof of adult permission obtained if we suspect an
              order is placed by a minor. We are very sorry if this causes any
              problems for those wishing to purchase our goods, but if you are
              under the age of 18 we ask you get your parents written consent to
              buy goods from our catalog.
            </p>
            <p>
              Please understand that we offer spores of Psilocybian genera
              mushrooms for microscopy use only. We cannot offer any advice or
              comments on the cultivation or culturing of these species, as this
              is illegal in the US and many other countries. Any indication that
              the products will be used in an illegal manner will lead to your
              order being refused and refunded.
            </p>
            <p>
              Some products may be restricted for shipment to certain states
              within the USA. Psilocybian genera spore samples cannot be shipped
              or delivered to residents in California, Georgia, or Idaho.
            </p>
            <p>
              Ordering and item restrictions may vary depending on the country
              of destination. Spore Works shipments originate within the USA.
              Some countries will not allow the importation of live culture or
              spore material, especially in hydrated syringe form. Australia and
              New Zealand will not allow any spore syringes, or culture syringes
              to pass through customs. Customers in these countries are asked to
              restrict their spore purchases to spore print samples only to
              ensure delivery may be possible. We ask that all international
              buyers consult their country's importation and duty schedules to
              be informed of any additional taxes or restrictions for
              importation of goods from our catalog. Spore Works cannot accept
              responsibility for replacement of seized or confiscated orders.
              Canadian customers choosing UPS Standard delivery option may be
              responsible for additional duty or importation brokerage fees upon
              delivery. We will not process any credit card payments originating
              in Russia or any Russian Federation countries, or from the country
              of Brazil. We ask customers in these countries to please contact
              us to make arrangements for their orders, or to process their
              order via mail ordering.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
          <Typography>Shipping Policy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Orders are typically processed and shipped within 24-48 hours of
            payment receipt. Occasional product backorder may delay your order
            for a few extra days. We will do our best to inform you if your
            order is expected to be delayed longer than 3-4 days. Transit time
            depends on the delivery method chosen during checkout. While we
            offer UPS Next Day Air, 2nd Day Air, and 3 Day Select shipping
            options, this does not guarantee your order will arrive the day
            after or two days after it is placed. We place orders with express
            shipping on priority fulfillment and do everything possible to ship
            them as soon as possible, usually with same day service. UPS express
            shipping options do not provide Saturday delivery, so orders placed
            for Next Day or 2nd Day service on Thursday or Friday may not make
            delivery until the following Monday. Orders with subtotals of over
            $200 will be shipped with signature required.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3a-content" id="panel3a-header">
          <Typography>Cleanliness Guarantee</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Culture products are sold with cleanliness and viability guarantee,
            should you find your cultures to be unviable or contaminated please
            contact us and we will make arrangements for replacement. Spores for
            Microscopy products are offered with stability and cleanliness
            guarantee. Should you find your spore sample to be unstable or
            contaminated please contact us and we will make arrangements for
            replacement.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4a-content" id="panel4a-header">
          <Typography>Refund Policy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We offer a sterility guarantee on spore and culture products for 30
            days after purchase. A 20% restocking fee will be charged on all
            returned items. Items must be in original unused condition. No
            returns without written authorization. No returns after 7 days.
            Shipping charges are not refundable. Checks may take time to clear,
            for fastest service use credit card, cashiers check, or US Postal
            money order. If the shipper for any reason returns orders to us you
            will be billed for additional shipping charges. $20.00 service
            charge will be charged on all returned checks. Liquid culture
            products are sold with cleanliness and viability guarantee, should
            you find your cultures to be unviable or contaminated please contact
            us and we will make arrangements for replacement.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Terms;
