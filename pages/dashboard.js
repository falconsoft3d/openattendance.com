import React from 'react'
import Attendance from '../components/backend/Attendance';
import BackLayout from "../components/backend/BackLayout";
import { useAuth } from '../context/AuthUserContext';

export default function Dashboard() {
  console.log(useAuth());

  return (
    <BackLayout>
        <Attendance />
    </BackLayout>
  );
}
