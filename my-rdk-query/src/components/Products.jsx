import { useGetAllProductsQuery } from "../app/features/services/dummyData";

const Products = () => {
    const res = useGetAllProductsQuery();

    if (res.isLoading) return "Loading"
    return (
        <main>
            {
                res.data.map((post) => (
                    <h1 key={post.id}>{post.title}</h1>
                ))
            }
        </main>
    );
}

export default Products;