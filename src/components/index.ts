import { ProductCard as ProductCardHOC } from "./ProductCard";

import { ProductButtons } from "./ProductButtons";
//export { ProductCard } from "./ProductCard";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductCardHOCProps } from "../interfaces/interfaces";

export { ProductButtons } from "./ProductButtons";
//export { ProductCard } from "./ProductCard";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";

export const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
});

export default ProductCard;