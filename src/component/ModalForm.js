import React from 'react';
import './style.css';
const ModalForm = ({ name, email, id, onSubmit, closeModal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedName = e.target.elements.name.value;
    const updatedEmail = e.target.elements.email.value;
    const updatedId = e.target.elements.id.value;

    onSubmit(updatedName, updatedEmail, updatedId);
  }

  return (
    <form onSubmit={handleSubmit}>
        <h1>Update </h1>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input" type="text" name="name" defaultValue={name} required />
        </div>
      </div>
      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input className="input" type="email" name="email" defaultValue={email} required />
        </div>
      </div>
      <div className="field">
        <label className="label">Id</label>
        <div className="control">
          <input className="input" type="text" name="id" defaultValue={id} required />
        </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button type="submit" className="button is-primary">Submit</button>
        </div>
        <div className="control">
          <button type="button" className="button is-link" onClick={closeModal}>Cancel</button>
        </div>
      </div>
    </form>
  );
}

export default ModalForm;
