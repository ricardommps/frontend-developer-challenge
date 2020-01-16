// @flow

import React from 'react'
import { Route, Switch, Redirect, Link } from 'react-router-dom'
import Header from '../components/Header/header'
import Newsletter from './Newsletter/newsletter'
import Footer from './Footer/footer'
import Products from './Products/products'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

type Props = {
    match: {
        url: string
    }
}

export default function HomePage({ match: { url } }: Props) {
    return (
        <div>
            <Header/>
            <Products />
            <Newsletter/>
            <Footer/>
        </div>
    )
}