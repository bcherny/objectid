declare module "objectid" {
  interface ObjectId {
    (): string
    isValid(objectId: string): boolean
  }
  export default ObjectId
}