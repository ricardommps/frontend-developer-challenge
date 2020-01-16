// @flow

import React, { Component } from 'react'
import NewsletterForm from './newsletter-form'

class Newsletter extends Component {
    render() {
        return (
            <div className="newsletter">
                <p className="title">Compartilhe a novidade</p>
                <p className="subTitle">Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
                <NewsletterForm/>
            </div>
        )
    }
}

export default Newsletter