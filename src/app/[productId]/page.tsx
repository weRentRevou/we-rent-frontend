import ProductDetailWrapper from "@/_containers/detail-page/ProductDetailWrapper";
import { fetchProductById } from "@/services/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const queryClient = new QueryClient();

  const productId = Number((await params).productId);

  await queryClient.prefetchQuery({
    queryKey: ["product", productId],
    queryFn: () => fetchProductById(productId),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductDetailWrapper productId={productId} />
    </HydrationBoundary>
  );
}
