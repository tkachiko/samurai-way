export const updateObjectInArray = (items: Array<any>, itemId: number | string, objPropName: string, newObjProps: any) => {
  return items.map(i => i[objPropName] === itemId ? {...i, ...newObjProps} : i)
}