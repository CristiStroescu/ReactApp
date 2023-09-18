import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createUser, retrieveUser } from "./UsersService";

const UserCreate = () => {
    const [form, setForm] = useState({
      id: "",
      name: "",
      username: "",
      email: "",
      phone: "",
      website: "",
    });
  const navigate = useNavigate();


  const updateField = ({ name, value }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleCreate = async () => {
    try {
      const { id } = await createUser(form);
      alert(`Created user with the name "${form.name}" and ID ${form.id}.`);
      navigate(`/admin/${id}`);
    } catch (e) {
      console.warn(e);
    }
  };

  if (form === null) {
    return <div className="loading-text">Loading...</div>;
  }

  return (
    <div>
      <form className="user-edit">
        <div className="label-and-input">
          <label>
            Id:
            <input
              type="number"
              name="id"
              id="id"
              placeholder="ID"
              className="user-edit-input"
              value={form.id}
              onChange={({ target }) =>
                updateField({ name: target.id, value: parseInt(target.value, 10) })
              }
            />
          </label>
          <label>
            Name:
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="user-edit-input"
              value={form.name}
              onChange={({ target }) => updateField(target)}
            />
          </label>
          <label>
            Username:
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="user-edit-input"
              value={form.username}
              onChange={({ target }) => updateField(target)}
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="user-edit-input"
              value={form.email}
              onChange={({ target }) => updateField(target)}
            />
          </label>

          <label>
            Phone:
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="user-edit-input"
              value={form.phone}
              onChange={({ target }) => updateField(target)}
            />
          </label>

          <label>
            Website:
            <input
              type="text"
              name="website"
              placeholder="Website"
              className="user-edit-input"
              value={form.website}
              onChange={({ target }) => updateField(target)}
            />
          </label>
        </div>
      </form>
      <div className="edit-buttons">
        <button className="back-button-edit" onClick={() => navigate(-1)}>
          Back
        </button>
        <button
          className="save-button-edit"
          onClick={handleCreate}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default UserCreate;
