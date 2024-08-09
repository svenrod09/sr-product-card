import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProducts";
import React, { createContext, CSSProperties } from "react";
import { InitialValues, onChangeArgs, Product, ProductCardHandlers, ProductContextProps } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: ( args: ProductCardHandlers ) => JSX.Element,
  className?: string;
  style?: CSSProperties;
  onChange?: ( args: onChangeArgs ) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        maxCount,
        product,
      }}
    >
      <div className={ `${styles.productCard} ${ className }` } style={ style }>
        { children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,

          increaseBy,
          reset
        }) 
        }

        {/* 
        <ProductImage img={ product.img } />  

        <ProductTitle title={ product.title } />

        <ProductButtons increaseBy={ increaseBy } counter={ counter }  />
        */}
      </div>
    </Provider>
  );
};
