import { useAddNewProductMutation, useDeleteProductMutation, useGetOneProductQuery, useUpdateProductMutation } from "../app/features/services/dummyData";

const OneProduct = () => {
    // const res = useGetOneProductQuery(1);
    const [addNewProduct, res] = useAddNewProductMutation()
    return (<h1 onClick={() => addNewProduct({title: "Hello There", views: 20})}>One Product</h1>);
}

export default OneProduct;