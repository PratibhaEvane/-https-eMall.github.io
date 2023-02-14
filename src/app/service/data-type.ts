export interface ProductList {
    prod_name: String,
    prod_price: Number,
    prod_cate: String,
    prod_brand: String,
    prod_image: typeof Image,
}
export interface Admin {
    adminid: string,
    password: string;
}
export interface CategoryList {
    cate_name: string;
}
export interface BrandList {
    brand_name: string;
}
