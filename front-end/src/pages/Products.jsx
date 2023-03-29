import React from 'react';
import NavBar from '../components/NavBar';
import dataTestsIds from '../utils/dataTestIds';

const mockProducts = [
  {
    id: 1,
    name: 'Skol Lata 250ml',
    price: 2.20,
    url_image: 'https://storage.deliveryvip.com.br/hZG6TM1Z8-CJw6PcUePMgUGkatlSRUcPSeOk1obJieg/h:256/Z3M6Ly9kZWxpdmVy/eXZpcC8zN204cnJt/a2dlY2duM3NvaG55/cjlncXIxYnp3',
  },
  {
    id: 2,
    name: 'Heineken 600ml',
    price: 7.50,
    url_image: 'https://www.cidadecancao.com/media/catalog/product/C/e/Cerveja_Heineken_600ml_0000078905498.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=310&width=310&canvas=310:310',
  },
  {
    id: 3,
    name: 'Antarctica Pilsen 300ml',
    price: 2.49,
    url_image: 'https://www.amigao.com/media/catalog/product/C/e/Cerveja_Brahma_Pilsen_Retornavel_300ml_0000020157227_3.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=310&width=310&canvas=310:310',
  }
  
]

function Products() {  

  return (
    <div className='container-product'>
      <header>
        <NavBar />
      </header>
      <main>
        {
          mockProducts.map((product) => (
            <section
              
            >
              <div data-testid={ `${dataTestsIds[15]}${product.id}` }>{ product.name }</div>
              
              <div data-testid={ `${dataTestsIds[16]}${product.id}` }>{ product.price }</div>

              <div data-testid={ `${dataTestsIds[17]}${product.id}` }>
                <img src={product.url_image} alt={product.name} />
              </div>

              <div className='product-quantity'>  
                <button data-testid={ `${dataTestsIds[19]}${product.id}` }>
                  -
                </button>

                <input data-testid={ `${dataTestsIds[20]}${product.id}` } type="number" />

                <button data-testid={ `${dataTestsIds[18]}${product.id}` }>
                  +
                </button>
              </div>
              
            </section>
          ))
        }
      </main>
    </div>
  );
}

export default Products;