export const deleteItem = async (id) => {
  const response = await fetch(`https://api.example.com/items/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
