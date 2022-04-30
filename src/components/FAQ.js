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
  "& .MuiAccordionSummary-content.Mui-expanded": {
    marginLeft: theme.spacing(1.1),
  },
}));

function FAQ() {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography>
            How soon are orders shipped and what are typical delivery times?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Orders are typically processed and shipped within 24-48 hours of
            payment receipt. We ship daily Monday through Friday. Orders placed
            on Friday afternoon through Sunday may not be processed and shipped
            until Monday or Tuesday, as it often takes a day or two to catch up
            from the weekend order load. Occasional product backorder may delay
            your order for a few extra days. We will do our best to inform you
            if your order is expected to be delayed longer than 3-4 days.
            Transit time depends on the delivery method chosen during checkout.
            While we offer UPS Next Day Air, 2nd Day Air, and 3 Day Select
            shipping options, this does not guarantee your order will arrive the
            day after or two days after it is placed. We place orders with
            express shipping on priority fulfillment and do everything possible
            to ship them as soon as possible. UPS express shipping options do
            not provide weekend delivery and weekends do not count towards
            delivery speed guarantee, so orders placed for Next Day or 2nd Day
            service on Thursday or Friday will likely not make delivery until
            the following Week
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
          <Typography>
            What sort of packaging do you use and how is it labeled?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Packaging will depend on the items ordered. Orders for spore prints
            are shipped in small 4 x 8 inch padded bubble mailers. Culture and
            spore syringes are mailed in small white cardboard boxes measuring
            10 x 2 x 2 inches (larger, brown boxes are used for big orders) or
            else shipped in USPS provided Priority Mail packaging. Domestic
            packages will only contain the needed labels for shipping and will
            not display outside descriptions of the packaged contents.
            International orders requiring boxes for shipping (not spore prints)
            will be labeled with a customs claim ticket describing the contents
            and value of the package. The return address label will be marked as
            "The Works" on all orders. Your name and phone number (if provided)
            will be included on the address. Please be aware for USPS mail that
            the delivery name must be listed as valid for that address, or else
            the package may be returned to us.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3a-content" id="panel3a-header">
          <Typography>How do I know if my order has been shipped?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            When placing your order be sure to include a valid email address we
            can use to contact you with tracking information. As soon as your
            order is processed and shipped a confirmation email will be sent to
            the provided email and include your UPS tracking number or Priority
            Mail delivery confirmation number. UPS tracking numbers can be used
            to track the progress of your order. Delivery confirmation from the
            US mail will only tell if and when you have successfully received
            your package.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4a-content" id="panel4a-header">
          <Typography>I am under 18, can I still order from you?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Spore Works requires all customers to be over the age of 18 to
            purchase any material from our catalog. Proof of age may be
            required, or proof of adult permission obtained if we suspect an
            order is placed by a minor. We are very sorry if this causes any
            problems for those wishing to purchase our goods, but if you are
            under the age of 18 we ask you get your parents written consent to
            buy goods from our catalog.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel5a-content" id="panel5a-header">
          <Typography>Do you ship to countries outside the USA?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We are not currently shipping orders outside the USA. Due to
            increased complications for timely and proper delivery from COVID
            related restrictions, international shipping will remain suspended
            at this time. We are monitoring the situation and hope to resume
            international shipments once mail can safely reach our customers
            without complication.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary aria-controls="panel6a-content" id="panel6a-header">
          <Typography>
            Are there any item, ordering, or shipping restrictions for
            international customers?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Ordering and item restrictions may vary depending on the country of
            destination. Some countries will not allow the importation of live
            culture or spore material, especially in hydrated syringe form.
            Australia and New Zealand will not allow any spore syringes, or
            culture syringes to pass through customs. Customers in these
            countries are asked to restrict their spore purchases to spore print
            samples only to ensure delivery may be possible. We ask that all
            international buyers consult their country's importation and duty
            schedules to be informed of any additional taxes or restrictions for
            importation of goods from our catalog. Sporeworks cannot accept
            responsibility for replacement of seized or confiscated orders.
            Canadian customers choosing UPS Standard delivery option have
            already had the brokerage fees included in their shipping costs, but
            may still be charged for duty on expensive items. We will not
            process any credit card payments originating in Russia or any
            Russian Federation countries, or from the country of Brazil.
            Furthermore, due to lack of address verification on most
            international orders, we reserve the right to refuse any large
            international orders. We ask customers in these countries to please
            contact us to make arrangements to pay for their orders via bank
            transfer or private international wire-transfer service, or to
            process their order via mail ordering.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary aria-controls="panel7a-content" id="panel7a-header">
          <Typography>What is your return and refund policy?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We offer a sterility guarantee on spore and culture products for 30
            days after purchase. A 20% restocking fee will be charged on all
            returned items. Items must be in original unused condition. No
            returns without written authorization. No returns after 30 days.
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
      <Accordion
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
      >
        <AccordionSummary aria-controls="panel8a-content" id="panel8a-header">
          <Typography>
            Do you sell Psilocybe or Panaeolus spores to residents of CA, ID, or
            GA?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Spore Works will not process any request to these states for
            Psilocybe or Panaeolus mushroom spores. California, Idaho, and
            Georgia state law may restrict possession of these mushrooms spores
            without first receiving proper permissions from the applicable state
            agricultural or research advisory agency. We regret that any order
            placed requesting these items shipped to these states will be
            refused, voided, or refunded. Residents of CA, ID, and GA are not
            restricted from ordering any other items sold on our site.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel9"}
        onChange={handleChange("panel9")}
      >
        <AccordionSummary aria-controls="panel9a-content" id="panel9a-header">
          <Typography>
            What is the difference between a spore print and a spore/culture
            syringe?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Spore prints are collections of spores taken on a sterile medium,
            usually clean paper or foil, under sterile conditions. The spores
            are collected by placing a mature mushroom cap on the medium and
            allowing the cap to release spores. The spores then adhere to the
            surface of the medium after drying and form a "print." Prints are
            often used directly to observe spores under a microscope. Spore
            syringes are simply a mixture of clean spores in a sterile solution.
            This allows for direct microscopic examination of hydrated spores.
            Liquid culture syringes of edible, medicinal, and novelty species
            contain living mycelium on a nutrient broth solution and are
            designed to allow the direct inoculation of healthy tissue into
            substrate.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel10"}
        onChange={handleChange("panel10")}
      >
        <AccordionSummary aria-controls="panel10a-content" id="panel10a-header">
          <Typography>
            My cultures or spores appear to be contaminated, now what?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            All spores and cultures are supplied with a 30 day cleanliness
            guarantee. Should you find any of our spore or culture products be
            contaminated with mold or bacteria please contact us with your
            original purchase information and we will make arrangements to
            replace your spores/cultures as per our sterility guarantee.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default FAQ;
