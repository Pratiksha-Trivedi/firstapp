import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employee: [
    {
      name: "ram",
      email: "pratiksha@2123",
      id: 1
    },
    {
      name: "sita",
      email: "sita@example.com",
      id: 25
    },
    {
      name: "gita",
      email: "gita@example.com",
      id: 30
    }
  ]
};

const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    getData: (state, action) => {
      state.employee = action.payload;
    },
    addData: (state, action) => {
      state.employee.push(action.payload);
    },
    deleteData: (state, action) => {
      state.employee = state.employee.filter(
        (item) => item.email !== action.payload
      );
    },
    updateDa: (state, action) => {
      const updatedEmployee = action.payload;
      state.employee = state.employee.map((item) =>{
      console.log(item.id);
      console.log(updatedEmployee.id);
        item.id === updatedEmployee.id ? updatedEmployee : item
    });
    }
  }
});

export const { getData, addData, deleteData, updateDa } = crudSlice.actions;
export default crudSlice.reducer;
