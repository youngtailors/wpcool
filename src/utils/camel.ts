import { camelizeKeys } from 'humps'
export const camelize = object =>
  camelizeKeys(object, (key, convert) =>
    /^[A-Z0-9_]+$/.test(key) ? key : convert(key),
  )
