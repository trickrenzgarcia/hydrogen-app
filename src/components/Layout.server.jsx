import { useShopQuery, CacheLong, gql, useUrl, Link } from "@shopify/hydrogen";

export function Layout({ children }){
  const { pathname } = useUrl()
  const isHome = pathname === '/'

  const { data: { shop } } = useShopQuery({
    query: SHOP_QUERY,
    cache: CacheLong(),
    preload: true
  })

  const { data: { products } } = useShopQuery({
    query: PRODUCTS_QUERY,
    cache: CacheLong(),
    preload: true
  })


  return (
    <>
      <h1>Layout {shop.name}</h1>
      <h2>Products {products.edges[0].node.title}</h2>
      {children}
    </>
  )
}

const SHOP_QUERY = gql`
  query ShopInfo {
    shop {
      name
      description
    }
  }
`;

const PRODUCTS_QUERY = gql`
  query Products {
    products(first: 5) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`