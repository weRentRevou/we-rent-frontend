export async function fetchProduct() {
    try {
      const response = await fetch('https://api-werent.ahmadcloud.my.id/product/1', {
        cache: 'no-store', // Ensures fresh data on every request
      });
      if (!response.ok) {
        throw new Error("Failed to fetch product");
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error("Error fetching product:", error);
      return null;
    }
  }