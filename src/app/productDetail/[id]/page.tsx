import { getProduct } from "@/lib/dataFetch";
import DetailProduct from "@/sections/detailProduct";
import Image from "next/image";

export default async function ProductDetail({
  params,
}: {
  params: { id: number };
}) {
  const products = await getProduct();
  const filterProduct = products.filter(
    (product: any) => product._id === `${params.id}`
  );
  return (
    <div className="container mx-auto">
      {filterProduct.map((product: any) => (
        <div key={product._id}>
          <DetailProduct product={product} />
        </div>
      ))}
    </div>
  );
}
