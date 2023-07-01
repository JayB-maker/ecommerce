import { AboutPage, CartPage, ContactPage, GalleryPage, HomePage, ShopPage } from "./pages";

export const routes = [
  {
    title: "Home Page",
    subRoutes: [],
    component: <HomePage />,
    route: "/",
  },
  {
    title: "About Page",
    subRoutes: [],
    component: <AboutPage />,
    route: "/about",
  },
  {
    title: "Shop Page",
    subRoutes: [],
    component: <ShopPage />,
    route: "/shop",
  },
  {
    title: "Cart Page",
    subRoutes: [],
    component: <CartPage />,
    route: "/cart",
  },
  {
    title: "Gallery Page",
    subRoutes: [],
    component: <GalleryPage />,
    route: "/gallery",
  },
  {
    title: "Contact",
    subRoutes: [],
    component: <ContactPage />,
    route: "/contact",
  },
];
