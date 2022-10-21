import React from 'react'
import BackLayout from "../components/backend/BackLayout";
import { useAuth } from '../context/AuthUserContext';

export default function Dashboard() {
  console.log(useAuth());

  return (
    <BackLayout>
        <h1>Companies</h1>
    </BackLayout>
  );
}