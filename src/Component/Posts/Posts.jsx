import React from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";


const fetchData = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
};

const deleteData = async (itemId) => {
  const response = await fetch(`https://fakestoreapi.com/products/${itemId}`, {
    method: "DELETE",
  });

  return response.text();
};

function Posts() {
  const queryClient = useQueryClient();

  const {
    data,
  } = useQuery({
    queryKey: ["items"],
    queryFn: fetchData,
  });

  const mutation = useMutation({
    mutationFn: deleteData,
    onSuccess: () => {
      console.log("Item deleted successfully.");
      queryClient.invalidateQueries(["items"]);
    }
  });

  const handleDelete = (itemId) => {
    console.log(`Attempting to delete item with ID: ${itemId}`);
    mutation.mutate(itemId);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      <div className="grid grid-cols-4 gap-8">
        {data?.map((item) => (
          <div
            key={item.id}
            className="w-full h-[380px] rounded-lg shadow-md flex flex-col items-center justify-center p-10"
          >
            <div className="flex flex-col mb-[10%] text-center ">
              <img
                src={item.image}
                alt="not found"
                className="w-[50%] m-auto"
              />
              <span>{item.category}</span>
              <p>{item.title}</p>
              <span className="">{item.description.substring(0, 25)}...</span>
              <div className="pt-7 flex justify-between">
                <button>ویرایش</button>
                <button onClick={() => handleDelete(item.id)}>حذف</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;