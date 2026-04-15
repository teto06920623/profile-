import './Products.css'

const sampleProducts = [
  { id: 1, name: 'Product 1', price: 29.99, description: 'A great product for everyday use.' },
  { id: 2, name: 'Product 2', price: 49.99, description: 'Premium quality at an affordable price.' },
  { id: 3, name: 'Product 3', price: 19.99, description: 'Best value for your money.' },
  { id: 4, name: 'Product 4', price: 99.99, description: 'Top-tier product with advanced features.' },
]

function Products() {
  return (
    <div className="products-page container">
      <h2>Our Products</h2>
      <div className="products-grid">
        {sampleProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">🛍️</div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span className="price">${product.price}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
