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
  created_at: 'created_at',
  deleted_at: 'deleted_at',
  id: 'id',
  message: 'message',
  seen: 'seen',
  service_id: 'service_id',
  subject_id: 'subject_id',
  title: 'title',
  trigger: 'trigger',
  updated_at: 'updated_at',
}

export const enumnotificationsUpdateColumn = {
  created_at: 'created_at',
  deleted_at: 'deleted_at',
  id: 'id',
  message: 'message',
  seen: 'seen',
  service_id: 'service_id',
  subject_id: 'subject_id',
  title: 'title',
  trigger: 'trigger',
  updated_at: 'updated_at',
}

export const enumorderBy = {
  asc: 'asc',
  asc_nulls_first: 'asc_nulls_first',
  asc_nulls_last: 'asc_nulls_last',
  desc: 'desc',
  desc_nulls_first: 'desc_nulls_first',
  desc_nulls_last: 'desc_nulls_last',
}

export const enumserviceConstraint = {
  service_pkey: 'service_pkey',
}

export const enumserviceEnum = {
  async_chat: 'async_chat',
  calendar: 'calendar',
  qnr: 'qnr',
}

export const enumserviceSelectColumn = {
  description: 'description',
  name: 'name',
}

export const enumserviceUpdateColumn = {
  description: 'description',
  name: 'name',
}

export const enumservicesConstraint = {
  services_pkey: 'services_pkey',
}

export const enumservicesSelectColumn = {
  created_at: 'created_at',
  customer_id: 'customer_id',
  email_channel: 'email_channel',
  enabled: 'enabled',
  id: 'id',
  message: 'message',
  push_channel: 'push_channel',
  service: 'service',
  sms_channel: 'sms_channel',
  title: 'title',
  updated_at: 'updated_at',
  user_id: 'user_id',
}

export const enumservicesUpdateColumn = {
  created_at: 'created_at',
  customer_id: 'customer_id',
  email_channel: 'email_channel',
  enabled: 'enabled',
  id: 'id',
  message: 'message',
  push_channel: 'push_channel',
  service: 'service',
  sms_channel: 'sms_channel',
  title: 'title',
  updated_at: 'updated_at',
  user_id: 'user_id',
}

export const enumseverityConstraint = {
  severity_pkey: 'severity_pkey',
}

export const enumseveritySelectColumn = {
  description: 'description',
  name: 'name',
}

export const enumseverityUpdateColumn = {
  description: 'description',
  name: 'name',
}

export const enumsubjectServiceConstraint = {
  ticket_service_pkey: 'ticket_service_pkey',
}

export const enumsubjectServiceSelectColumn = {
  service_id: 'service_id',
  subject_id: 'subject_id',
}

export const enumsubjectServiceUpdateColumn = {
  service_id: 'service_id',
  subject_id: 'subject_id',
}

export const enumtriggerConstraint = {
  trigger_pkey: 'trigger_pkey',
}

export const enumtriggerEnum = {
  insert_calendar_event_attendee: 'insert_calendar_event_attendee',
  insert_calendar_event_organizer: 'insert_calendar_event_organizer',
  insert_ticket_message: 'insert_ticket_message',
  insert_ticket_user: 'insert_ticket_user',
}

export const enumtriggerSelectColumn = {
  description: 'description',
  name: 'name',
}

export const enumtriggerUpdateColumn = {
  description: 'description',
  name: 'name',
}

export const enumusersSelectColumn = {
  user_id: 'user_id',
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
