# SR-product-card

Este es un paquete de pruebas de despliegue en NPM

### Sven Rodriguez

## Ejemplo
```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'sr-product-card'
```

```
<ProductCard
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {( { reset, count, isMaxCountReached, maxCount, increaseBy } ) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
```