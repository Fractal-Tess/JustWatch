export const query = async (search: string): Promise<void> => {
  const res = await fetch(`/api/search?query=${search}`);
  const data = await res.json();
  console.log(data);
};
