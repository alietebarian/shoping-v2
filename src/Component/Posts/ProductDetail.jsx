// components/ProductDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams(); // گرفتن id از پارامترهای URL
  const [product, setProduct] = useState(null); // نگهداری اطلاعات محصول
  const [loading, setLoading] = useState(true); // وضعیت بارگذاری

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`); // دریافت اطلاعات محصول از API
        const data = await response.json();
        setProduct(data); // ذخیره اطلاعات در state
      } catch (error) {
        console.error("Failed to fetch product:", error); // مدیریت خطا
      } finally {
        setLoading(false); // پایان وضعیت بارگذاری
      }
    };

    fetchProduct(); // فراخوانی تابع دریافت اطلاعات
  }, [id]); // وابستگی به تغییر id

  if (!product) {
    return <h2>Product not found</h2>; // نمایش پیام در صورت عدم وجود محصول
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="w-full max-w-md rounded-lg shadow-md flex flex-col items-center justify-center p-10">
        <img src={product.image} alt={product.title} className="w-[50%] mb-4" />
        <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
        <span className="text-sm text-gray-600">{product.category}</span>
        <p className="mt-4">{product.description}</p>
        <p className="mt-2 font-semibold">Price: ${product.price}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
