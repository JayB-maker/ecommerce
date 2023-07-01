import CartHeroSection from '../components/websiteSection/cart/cartHeroSection'
import MainCart from '../components/websiteSection/cart/mainCart'
import Layout from '../ui/layout'

const CartPage = () => {
  return (
    <Layout>
        <CartHeroSection />
        <MainCart />
    </Layout>
  )
}

export default CartPage