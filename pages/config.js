import React from 'react'
import BackLayout from "../components/backend/BackLayout";
import { useAuth } from '../context/AuthUserContext';

export default function Config() {
  console.log(useAuth());

  return (
    <BackLayout>
        <h1>Config</h1>
    </BackLayout>
  );
}