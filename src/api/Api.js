// @flow

import axios from 'axios'

import type { Axios } from 'axios'

const API_ROOT = 'https://frontend-intern-challenge-api.iurykrieger.now.sh'

class ApiService {
  products: Axios
  constructor() {
    const products = axios.create({
      baseURL: API_ROOT,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })

    this.products = products
  }

  get(path: string): Promise < Object > | Promise < Array < Object >> {
    return this.products.get(path).then(response => response.data)
  }
}

export default new ApiService()