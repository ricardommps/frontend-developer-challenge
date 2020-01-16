// @flow

import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="container container-header">
                    <p>uma seleção de produtos</p>
                    <h1>especial para você</h1>
                    <p className="subTitle">Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>
                    <div className="actions">
                        <button type="button" className="btn btn-light">
                            Conheça a Linx
                        </button>    
                        <button type="button" className="btn btn-light">
                            Ajude o algorítimo
                        </button> 
                        <button type="button" className="btn btn-light">
                            Seus produtos
                        </button> 
                        <button type="button" className="btn btn-light">
                            Compartilhe
                        </button> 
                    </div>
                </div>
            </div>
        )
    }
}

export default Header