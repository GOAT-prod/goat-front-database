"use client";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { SkeletonCard } from "@/components/SkeletonCard";
import { ProductCard } from "./ProductCard";
import { getProducts } from "../../../(services)/products";
import { Product } from "../../../../@types";

export const ProductsCatalog = () => {
  const router = useRouter();

  const onRedirectToProduct = (product: Product) => {
    router.push(`/shop/${product.id}`);
  };

  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <div className="grid grid-cols-4 gap-[24px] p-[24px] pt-0">
      {isLoading &&
        Array(12)
          .fill(0)
          .map((_, index) => {
            return <SkeletonCard key={index} />;
          })}
      {data &&
        data?.map((product, index) => (
          <div key={index}>
            <ProductCard
              product={product}
              onClick={() => onRedirectToProduct(product)}
            />
          </div>
        ))}
    </div>
  );
};