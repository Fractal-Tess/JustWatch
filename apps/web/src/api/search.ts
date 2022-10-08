export const getSearch = async (search: string): Promise<void> => {
  const res = await fetch(`/api/search?search=${search}`);
  const data = await res.json();
  console.log(data);
};
