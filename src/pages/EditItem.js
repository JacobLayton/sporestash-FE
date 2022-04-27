import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import axios from "axios";
import EditItemForm from "../components/EditItemForm";
import DeleteModal from "../components/DeleteModal";
import { useAuth0 } from "@auth0/auth0-react";
import "../styles/edit-item.css";

function EditItem(props) {
  const { getAccessTokenSilently } = useAuth0();
  let navigate = useNavigate();
  let location = useLocation();
  const [deleteModalOpen, setdeleteModalOpen] = useState(false);
  const [itemData, setItemData] = useState({});
  const { id } = useParams();
  function handleModalOpen() {
    setdeleteModalOpen(true);
  }
  function handleModalClose() {
    setdeleteModalOpen(false);
  }

  useEffect(() => {
    let mounting = true;
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/items/${id}`)
      .then((res) => {
        if (mounting) {
          setItemData(res.data[0]);
        }
      })
      .catch((err) => {
        console.log("Error in get request", err);
      });
    return () => (mounting = false);
  }, [id]);

  const handleDelete = async (event) => {
    event.preventDefault();
    const token = await getAccessTokenSilently();
    axios
      .delete(`${process.env.REACT_APP_SERVER_URL}/items/${itemData.item_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("RES: ", res);
        navigate("/admin" + location.search);
      })
      .catch((err) => {
        console.log("Error creating item: ", err);
      });
  };
  return (
    <div className="edit-item-container">
      <h1>Edit Existing Item</h1>
      {itemData.hasOwnProperty("item_id") ? (
        <div>
          <EditItemForm itemData={itemData} handleModalOpen={handleModalOpen} />
          <DeleteModal
            open={deleteModalOpen}
            handleClose={handleModalClose}
            handleDelete={handleDelete}
          />
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default withAuthenticationRequired(EditItem, {
  onRedirecting: () => <div>Redirecting you to the login page...</div>,
});
