import React from 'react'
import BackLayout from "../components/backend/BackLayout";
import { useAuth } from '../context/AuthUserContext';

export default function Profile() {
  console.log(useAuth());

  return (
    <BackLayout>
        <h1>Profile</h1>
    </BackLayout>
  );
}