"use client"

import React, { useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Dashboard from '../../components/dashboard/Dashboard'
import Analitycs from '../../components/analitycs/Analitycs'

function Page() {


  return (
    <div>
      <Dashboard />
      <Analitycs />
    </div>
  );
}

export default Page;
