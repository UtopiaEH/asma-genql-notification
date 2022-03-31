import {
  linkTypeMap,
  createClient as createClientOriginal,
  generateGraphqlOperation,
  assertSameVersion,
} from '@genql/runtime'
import types from './types.esm'
var typeMap = linkTypeMap(types)
export * from './guards.esm'

export var version = '2.9.0'
assertSameVersion(version)

export var createClient = function(options) {
  options = options || {}
  var optionsCopy = {
    url: 'http://localhost:7002/v1/graphql',
    queryRoot: typeMap.Query,
    mutationRoot: typeMap.Mutation,
    subscriptionRoot: typeMap.Subscription,
  }
  for (var name in options) {
    optionsCopy[name] = options[name]
  }
  return createClientOriginal(optionsCopy)
}

export const enumnotificationsConstraint = {
  notifications_pkey: 'notifications_pkey',
}

export const enumnotificationsSelectColumn = {
  id: 'id',
  path: 'path',
  seen: 'seen',
  service_id: 'service_id',
  severity: 'severity',
  subject_id: 'subject_id',
}

export const enumnotificationsUpdateColumn = {
  id: 'id',
  path: 'path',
  seen: 'seen',
  service_id: 'service_id',
  severity: 'severity',
  subject_id: 'subject_id',
}

export const enumorderBy = {
  asc: 'asc',
  asc_nulls_first: 'asc_nulls_first',
  asc_nulls_last: 'asc_nulls_last',
  desc: 'desc',
  desc_nulls_first: 'desc_nulls_first',
  desc_nulls_last: 'desc_nulls_last',
}

export const enumserviceEnumsConstraint = {
  service_enums_pkey: 'service_enums_pkey',
}

export const enumserviceEnumsEnum = {
  async_chat: 'async_chat',
  calendar: 'calendar',
  qnr: 'qnr',
}

export const enumserviceEnumsSelectColumn = {
  description: 'description',
  service: 'service',
}

export const enumserviceEnumsUpdateColumn = {
  description: 'description',
  service: 'service',
}

export const enumservicesConstraint = {
  services_pkey: 'services_pkey',
  services_service_key: 'services_service_key',
}

export const enumservicesSelectColumn = {
  customer_id: 'customer_id',
  email_ch: 'email_ch',
  enabled: 'enabled',
  id: 'id',
  message: 'message',
  push_ch: 'push_ch',
  service: 'service',
  sms_ch: 'sms_ch',
  title: 'title',
  updated_at: 'updated_at',
  user_id: 'user_id',
}

export const enumservicesUpdateColumn = {
  customer_id: 'customer_id',
  email_ch: 'email_ch',
  enabled: 'enabled',
  id: 'id',
  message: 'message',
  push_ch: 'push_ch',
  service: 'service',
  sms_ch: 'sms_ch',
  title: 'title',
  updated_at: 'updated_at',
  user_id: 'user_id',
}

export const enumseverityEnumsConstraint = {
  severity_enums_pkey: 'severity_enums_pkey',
}

export const enumseverityEnumsEnum = {
  important: 'important',
  regular: 'regular',
  urgent: 'urgent',
}

export const enumseverityEnumsSelectColumn = {
  description: 'description',
  severity: 'severity',
}

export const enumseverityEnumsUpdateColumn = {
  description: 'description',
  severity: 'severity',
}

export var generateQueryOp = function(fields) {
  return generateGraphqlOperation('query', typeMap.Query, fields)
}
export var generateMutationOp = function(fields) {
  return generateGraphqlOperation('mutation', typeMap.Mutation, fields)
}
export var generateSubscriptionOp = function(fields) {
  return generateGraphqlOperation('subscription', typeMap.Subscription, fields)
}
export var everything = {
  __scalar: true,
}
