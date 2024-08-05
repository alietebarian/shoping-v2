import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";

function NewPost() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const postData = async () => {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
    });

    return response.json();
  };

  const mutation = useMutation({
    mutationFn: postData,
    onSuccess: (data) => {
      console.log("Data successfully added:", data);
    },
    onError: (error) => {
      console.error("Error adding data:", error);
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="p-16 w-[60%] m-auto">
      <h1 className="py-5 mb-8 text-xl font-bold">افزودن پست جدید</h1>
      <form
        className="flex flex-col bg-slate-200 px-6 rounded-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="p-4 text-xl font-bold mt-8">عکس</label>
        <input
          type="text"
          className="bg-inherit p-2 py-2  w-[60%] mr-6 focus:outline-none border-2 border-gray-500 rounded-md"
          {...register("imag", { required: "این فیلد خالی است" })}
        />
        {errors.imag && (
          <p className="text-red-500 mr-6 mt-3">{errors.imag.message}</p>
        )}

        <label className="p-4 text-xl font-bold">موضوع</label>
        <input
          type="text"
          className="bg-inherit p-2 py-2  w-[60%] mr-6 focus:outline-none border-2 border-gray-500 rounded-md"
          {...register("title", { required: "این فیلد خالی است" })}
        />
        {errors.title && (
          <p className="text-red-500 mr-6 mt-3">{errors.title.message}</p>
        )}

        <label className="p-4 text-xl font-bold">توضیحات</label>
        <input
          type="text"
          className="bg-inherit p-2 py-2  w-[60%] mr-6 focus:outline-none border-2 border-gray-500 rounded-md"
          {...register("desc", { required: "این فیلد خالی است" })}
        />
        {errors.desc && (
          <p className="text-red-500 mr-6 mt-3">{errors.desc.message}</p>
        )}

        <label className="p-4 text-xl font-bold">نوع محصول</label>
        <input
          type="text"
          className="bg-inherit p-2  w-[60%] mr-6 focus:outline-none border-2 border-gray-500 rounded-md"
          {...register("cat", { required: "این فیلد خالی است" })}
        />
        {errors.cat && (
          <p className="text-red-500 mr-6 mt-3">{errors.cat.message}</p>
        )}

        <input
          type="submit"
          className="border-4 cursor-pointer border-blue-500 w-[30%] m-auto py-2 mt-6 mb-6 rounded-md font-bold"
        />
      </form>
    </div>
  );
}

export default NewPost;
