interface ObjectId {
  (): string
  isValid(objectId: string): boolean
}
declare var objectId: ObjectId
export = objectId