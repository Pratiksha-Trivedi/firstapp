import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, deleteData, updateDa } from "../features/CrudeSlice"; 
import Modal from 'react-modal';
import ModalForm from "./ModalForm"; 
const Create = () => {
    
    const dispatch = useDispatch();
    const { employee } = useSelector((state) => state.crudSet);
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [updateData, setUpdateData] = useState({});
    function saveData(name, email, id) {
        if (name.trim() === '' || email.trim() === '' || id.trim() === '') return;
        const newEmployee = {
            name: name,
            email: email,
            id: id
        }
        dispatch(addData(newEmployee));
    }
    function handleDelete(email) {
        dispatch(deleteData(email));
    }

    function handleUpdateClick(name, email, id) {
        setUpdateData({ name, email, id });
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
    }

    function handleUpdateSubmit(name, email, id) {
        const local = {
            name: name,
            email: email,
            id: id
        }
        dispatch(updateDa(local));
        setIsModalOpen(false);
        setUpdateData({});
    }
    
    //dispatch(updateData(updatedEmployee));
           
    return (
        <div>
        <label>Name</label>
      <input type="text" id="name"></input>
      <label>Email</label>
      <input type="email" id="email"></input>
      <label>Id</label>
      <input type="text" id="age"></input>
     <button onClick={() => {saveData(document.getElementById('name').value,document.getElementById('email').value,document.getElementById('age').value)}}>save</button>
     
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Id</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employee.map((data, index) => (
                        <tr key={index}>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.id}</td>
                            <td>
                            <button onClick={() => handleUpdateClick(data.name, data.email, data.id)}>Update</button>
                                <button onClick={() => handleDelete(data.email)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Edit Data Modal"
            >
                <ModalForm
                    name={updateData.name}
                    email={updateData.email}
                    id={updateData.id}
                    onSubmit={handleUpdateSubmit}
                    closeModal={closeModal}
                />
            </Modal>
        </div>
    );
}

export default Create;