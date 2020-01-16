// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FETCH_PRODUCTS_IF_NEEDED, FETCH_PRODUCTS} from '../../actionTypes'
import { selectProducts } from '../../selectors/products'
import type { Dispatch, State } from '../../types'
import type { ProductsState } from '../../types/products'
import type { Connector } from 'react-redux'
import { cloneDeep, isEqual} from 'lodash';

type Props = {
    products: ProductsState,
    match: {
      url: string
    },
    fetchProductsIfNeeded(): void,
    fetchProducts(page: number): void
}

const initialState = {
    content: [],
    nextPage: "",
    currentPage : 1
  }

class Products extends Component<Props>  {

    constructor(props: Props) {
        super(props)
        this.state = initialState;
    }
    componentDidMount() {
        this._loadAllProducts()
    }

    static getDerivedStateFromProps(props, state) {
        if(props.products.items.nextPage !== state.nextPage && props.products.items.products){ 
            return {
                content : state.content.concat(props.products.items.products),
                nextPage: props.products.items.nextPage
            }
        }
        return null;
    }

    handleLoadMore = () => {
        let { currentPage } = this.state
        currentPage++
        this.setState({currentPage : currentPage}, function () {
            this._loadAllProducts()
        }); 
    }

    handleCheckout = (item) => {
        console.log(item)
    }

    _loadAllProducts = () => {
        this.props.fetchProducts(this.state.currentPage)
    }
    render() {
        const { loading } = this.props.products
        const { content } = this.state
        return (
            <div className="container products-cards">
                <div className="row">
                    <p className="product-title">Sua seleção especial</p>
                </div>
                <div className="row">
                    <div className="content">
                        {content.map((item,key) => (
                                <div className="card" key={item.id}>
                                    <img className="card-img-top" src={item.image} />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">{item.description}</p>
                                        <p className="card-text oldPrice">De: R${item.oldPrice}</p>
                                        <p className="card-text price">Por: R${item.price}</p>
                                        <p className="card-text">ou {item.installments.count}x de R${item.installments.value} </p>
                                        <button 
                                            type="button" 
                                            className="btn btn-light btn-buy"
                                            onClick = {() => this.handleCheckout(item)}
                                        >
                                            Comprar
                                        </button>   
                                    </div>         
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="row">
                    <button 
                        type="button" 
                        className="btn btn-light"
                        onClick={() => this.handleLoadMore()}    
                    >
                        Ainda mais produtos aqui!
                    </button>  
                </div>
            </div>
        )
    }
}

function mapStateToProps(state: State) {
    return {
      products: selectProducts(state)
    }
  }
  
  function mapDispatchToProps(dispatch: Dispatch) {
    return {
      fetchProductsIfNeeded: () => dispatch({ type: FETCH_PRODUCTS_IF_NEEDED }),
      fetchProducts: (page: number) => dispatch({ type: FETCH_PRODUCTS, page })
    }
  }
  
  const connector: Connector<{}, Props> = connect(
    mapStateToProps,
    mapDispatchToProps
  )

export default connector(Products)