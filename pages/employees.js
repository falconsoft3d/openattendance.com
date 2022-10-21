import React from 'react'
import BackLayout from "../components/backend/BackLayout";
import { useAuth } from '../context/AuthUserContext';

export default function Employees() {
  console.log(useAuth());

  return (
    <BackLayout>
        <h1>Employees</h1>
    </BackLayout>
  );
}