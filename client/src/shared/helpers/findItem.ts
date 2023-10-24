export function findItem<T extends { id: string | null }>(
  id: string | null,
  items: T[]
) {
  const foundItem = items?.find(
    (item) => item?.id?.toString() === id?.toString()
  );
  if (!foundItem) {
    console.error("Item not found");
  }
  return foundItem;
}
