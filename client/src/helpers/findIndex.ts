export const getObjectById = (id: string, array: object[]) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i]?.id === Number(id)) {
      return array[i]?.title;
    }
  }
  return null;
};
