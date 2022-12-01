import React, { useMemo, useState } from 'react';
import Router from 'next/router'
import header from '../../styles/Header.module.css'
import { frutas } from '../Main';

export default function Header ({children}) {

    return (
        <header className={header.header}>
            {children}
        </header>        
    )
}
