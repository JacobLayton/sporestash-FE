import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import "../styles/admin-orders.css";

function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [orderDetails, setOrderDetails] = useState({});

  useEffect(() => {
    let mounting = true;
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/orders`)
      .then((res) => {
        if (mounting) {
          const ordersWithId = [];
          res.data.map((order) => {
            order.id = order.order_id;
            return ordersWithId.push(order);
          });
          setOrders(res.data);
        }
      })
      .catch((err) => {
        console.log("Error in get request", err);
      });
    return () => (mounting = false);
  }, []);
  useEffect(() => {
    let mounting = true;
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/customers`)
      .then((res) => {
        if (mounting) {
          const customerObj = {};
          res.data.map((customer) => {
            return (customerObj[customer.customer_id] = customer);
          });
          setCustomers(customerObj);
        }
      })
      .catch((err) => {
        console.log("Error in get request", err);
      });
    return () => (mounting = false);
  }, []);

  function onRowSelected(params) {
    const row = params.row;
    const customer = customers[row.customer_id];
    const orderDetailsObj = {
      order_id: row.order_id,
      order_number: row.order_number,
      fulfilled: row.fulfilled,
      ship_date: row.ship_date,
      order_date: row.order_date,
      paid: row.paid,
      order_details: Array(row.order_details),
      order_total: row.order_total,
      payment_stripe_id: row.stripe_id,
      customer_id: customer.customer_id,
      first_name: customer.first_name,
      last_name: customer.last_name,
      email: customer.email,
      phone: customer.phone,
      address_1: customer.address_1,
      address_2: customer.address_2,
      city: customer.city,
      state: customer.state,
      zip: customer.zip,
      country: customer.country,
      customer_stripe_id: customer.stripe_id,
    };
    setOrderDetails(orderDetailsObj);
  }

  function onFulfilledClick(e) {
    const today = new Date().toISOString();
    axios
      .put(
        `${process.env.REACT_APP_SERVER_URL}/orders/${orderDetails.order_id}`,
        {
          fulfilled: true,
          ship_date: today,
        }
      )
      .then((res) => {
        const orderDetailsCopy = orderDetails;
        orderDetailsCopy.fulfilled = true;
        orderDetails.ship_date = today;
        setOrderDetails(orderDetailsCopy);
        const ordersCopy = [];
        orders.map((order) => {
          if (order.order_id === orderDetails.order_id) {
            order.fulfilled = true;
            order.ship_date = today;
          }
          return ordersCopy.push(order);
        });
        setOrders(ordersCopy);
      })
      .catch((err) => {
        console.log("Error updating order fullfilled: ", err);
        alert("Could not set to fulfilled");
      });
  }

  const columns = [
    { field: "order_id", headerName: "ID", width: 60 },
    { field: "fulfilled", headerName: "Fulfilled", width: 90 },
    { field: "order_date", headerName: "Order Date", width: 150 },
    { field: "order_number", headerName: "Order Number", width: 150 },
    // { field: "order_details", headerName: "Order Details", width: 150 },
    { field: "order_total", headerName: "Order Total ($)", width: 150 },
    { field: "paid", headerName: "Paid", width: 80 },
    { field: "payment_id", headerName: "Payment ID", width: 150 },
    { field: "payment_date", headerName: "Payment Date", width: 150 },
    { field: "ship_date", headerName: "Ship Date", width: 150 },
    { field: "customer_id", headerName: "Customer ID", width: 150 },
    { field: "error_msg", headerName: "Error Message", width: 150 },
    { field: "canceled", headerName: "Canceled", width: 150 },
    { field: "stripe_id", headerName: "Strip ID", width: 150 },
  ];

  return (
    <div className="admin-orders-container">
      <h1>Admin Orders</h1>
      <div style={{ height: 500, width: "95%" }}>
        <DataGrid
          initialState={{
            sorting: {
              sortModel: [{ field: "order_id", sort: "desc" }],
            },
          }}
          rows={orders}
          columns={columns}
          disableMultipleSelection={true}
          onRowClick={onRowSelected}
          components={{ Toolbar: GridToolbar }}
        />
      </div>
      <div className="order-details-container">
        {Object.keys(orderDetails).length === 0 ? (
          <div>
            <h1>Please select a row to see details</h1>
          </div>
        ) : (
          <div className="order-details-wrapper">
            <div className="all-details">
              <div className="single-order-info">
                <h3>Order Details</h3>
                <p>Order ID: {orderDetails.order_id}</p>
                <p>Order Number: {orderDetails.order_number}</p>
                <p>Fulfilled: {String(orderDetails.fulfilled)}</p>
                <p>Ship Date: {orderDetails.ship_date}</p>
                <p>Order Date: {orderDetails.order_date}</p>
                <p>Paid: {String(orderDetails.paid)}</p>
                <p>Order Total: {orderDetails.order_total}</p>
                <p>Payment Stripe ID: {orderDetails.payment_stripe_id}</p>
              </div>
              <div className="order-item-details">
                <h3>Item Details</h3>
                {orderDetails.order_details.map((item) => {
                  return (
                    <div key={item.item_id} className="order-item">
                      <p>Item Name: {item.item_name}</p>
                      <p>Item Price: {item.item_price}</p>
                      <p>Item Quantity: {item.quantity}</p>
                    </div>
                  );
                })}
              </div>
              <div className="customer-info">
                <h3>Customer Info</h3>
                <p>Customer ID: {orderDetails.customer_id}</p>
                <p>First Name: {orderDetails.first_name}</p>
                <p>Last Name: {orderDetails.last_name}</p>
                <p>Email: {orderDetails.email}</p>
                <p>Phone: {orderDetails.phone}</p>
                <p>Address 1: {orderDetails.address_1}</p>
                <p>Address 2: {orderDetails.address_2}</p>
                <p>City: {orderDetails.city}</p>
                <p>State: {orderDetails.state}</p>
                <p>Zip: {orderDetails.zip}</p>
                <p>Country: {orderDetails.country}</p>
                <p>Customer Stripe ID: {orderDetails.customer_stripe_id}</p>
              </div>
            </div>
            <div className="admin-orders-buttons">
              <Button
                variant="contained"
                color="primary"
                onClick={onFulfilledClick}
              >
                Fulfilled
              </Button>
              <div className="spacer" />
              <Button variant="outlined" color="secondary">
                Delete Order
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default withAuthenticationRequired(AdminOrders, {
  onRedirecting: () => <div>Redirecting you to the login page...</div>,
});
