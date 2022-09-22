import http from 'src/utils/http'

const URL = 'products'

const productApi = {
  getProducts() {
    return http.get(URL)
  }
}

export default productApi
