import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import Cart from './components/Cart/Cart'
import Layout from './components/Layout/Layout'
import Products from './components/Shop/Products'

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible)
  const cart = useSelector((state) => state.cart)
  useEffect(() => {
    fetch('https://react-http-6b4a6.firebaseio.com/cart.json', {
      // firebase 연결 후 해제함
      method: 'PUT',
      body: JSON.stringify(cart),
    }) // 백엔드 연결하기
  }, [cart])
  useEffect()
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  )
}

export default App
