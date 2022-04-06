
var mutation_root_possibleTypes = ['mutation_root']
export var ismutation_root = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismutation_root"')
  return mutation_root_possibleTypes.includes(obj.__typename)
}



var notifications_possibleTypes = ['notifications']
export var isnotifications = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isnotifications"')
  return notifications_possibleTypes.includes(obj.__typename)
}



var notifications_aggregate_possibleTypes = ['notifications_aggregate']
export var isnotifications_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isnotifications_aggregate"')
  return notifications_aggregate_possibleTypes.includes(obj.__typename)
}



var notifications_aggregate_fields_possibleTypes = ['notifications_aggregate_fields']
export var isnotifications_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isnotifications_aggregate_fields"')
  return notifications_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var notifications_max_fields_possibleTypes = ['notifications_max_fields']
export var isnotifications_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isnotifications_max_fields"')
  return notifications_max_fields_possibleTypes.includes(obj.__typename)
}



var notifications_min_fields_possibleTypes = ['notifications_min_fields']
export var isnotifications_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isnotifications_min_fields"')
  return notifications_min_fields_possibleTypes.includes(obj.__typename)
}



var notifications_mutation_response_possibleTypes = ['notifications_mutation_response']
export var isnotifications_mutation_response = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isnotifications_mutation_response"')
  return notifications_mutation_response_possibleTypes.includes(obj.__typename)
}



var query_root_possibleTypes = ['query_root']
export var isquery_root = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isquery_root"')
  return query_root_possibleTypes.includes(obj.__typename)
}



var service_enums_possibleTypes = ['service_enums']
export var isservice_enums = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isservice_enums"')
  return service_enums_possibleTypes.includes(obj.__typename)
}



var service_enums_aggregate_possibleTypes = ['service_enums_aggregate']
export var isservice_enums_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isservice_enums_aggregate"')
  return service_enums_aggregate_possibleTypes.includes(obj.__typename)
}



var service_enums_aggregate_fields_possibleTypes = ['service_enums_aggregate_fields']
export var isservice_enums_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isservice_enums_aggregate_fields"')
  return service_enums_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var service_enums_max_fields_possibleTypes = ['service_enums_max_fields']
export var isservice_enums_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isservice_enums_max_fields"')
  return service_enums_max_fields_possibleTypes.includes(obj.__typename)
}



var service_enums_min_fields_possibleTypes = ['service_enums_min_fields']
export var isservice_enums_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isservice_enums_min_fields"')
  return service_enums_min_fields_possibleTypes.includes(obj.__typename)
}



var service_enums_mutation_response_possibleTypes = ['service_enums_mutation_response']
export var isservice_enums_mutation_response = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isservice_enums_mutation_response"')
  return service_enums_mutation_response_possibleTypes.includes(obj.__typename)
}



var services_possibleTypes = ['services']
export var isservices = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isservices"')
  return services_possibleTypes.includes(obj.__typename)
}



var services_aggregate_possibleTypes = ['services_aggregate']
export var isservices_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isservices_aggregate"')
  return services_aggregate_possibleTypes.includes(obj.__typename)
}



var services_aggregate_fields_possibleTypes = ['services_aggregate_fields']
export var isservices_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isservices_aggregate_fields"')
  return services_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var services_max_fields_possibleTypes = ['services_max_fields']
export var isservices_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isservices_max_fields"')
  return services_max_fields_possibleTypes.includes(obj.__typename)
}



var services_min_fields_possibleTypes = ['services_min_fields']
export var isservices_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isservices_min_fields"')
  return services_min_fields_possibleTypes.includes(obj.__typename)
}



var services_mutation_response_possibleTypes = ['services_mutation_response']
export var isservices_mutation_response = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isservices_mutation_response"')
  return services_mutation_response_possibleTypes.includes(obj.__typename)
}



var severity_enums_possibleTypes = ['severity_enums']
export var isseverity_enums = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isseverity_enums"')
  return severity_enums_possibleTypes.includes(obj.__typename)
}



var severity_enums_aggregate_possibleTypes = ['severity_enums_aggregate']
export var isseverity_enums_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isseverity_enums_aggregate"')
  return severity_enums_aggregate_possibleTypes.includes(obj.__typename)
}



var severity_enums_aggregate_fields_possibleTypes = ['severity_enums_aggregate_fields']
export var isseverity_enums_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isseverity_enums_aggregate_fields"')
  return severity_enums_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var severity_enums_max_fields_possibleTypes = ['severity_enums_max_fields']
export var isseverity_enums_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isseverity_enums_max_fields"')
  return severity_enums_max_fields_possibleTypes.includes(obj.__typename)
}



var severity_enums_min_fields_possibleTypes = ['severity_enums_min_fields']
export var isseverity_enums_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isseverity_enums_min_fields"')
  return severity_enums_min_fields_possibleTypes.includes(obj.__typename)
}



var severity_enums_mutation_response_possibleTypes = ['severity_enums_mutation_response']
export var isseverity_enums_mutation_response = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isseverity_enums_mutation_response"')
  return severity_enums_mutation_response_possibleTypes.includes(obj.__typename)
}



var subscription_root_possibleTypes = ['subscription_root']
export var issubscription_root = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "issubscription_root"')
  return subscription_root_possibleTypes.includes(obj.__typename)
}



var triggers_enums_possibleTypes = ['triggers_enums']
export var istriggers_enums = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "istriggers_enums"')
  return triggers_enums_possibleTypes.includes(obj.__typename)
}



var triggers_enums_aggregate_possibleTypes = ['triggers_enums_aggregate']
export var istriggers_enums_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "istriggers_enums_aggregate"')
  return triggers_enums_aggregate_possibleTypes.includes(obj.__typename)
}



var triggers_enums_aggregate_fields_possibleTypes = ['triggers_enums_aggregate_fields']
export var istriggers_enums_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "istriggers_enums_aggregate_fields"')
  return triggers_enums_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var triggers_enums_max_fields_possibleTypes = ['triggers_enums_max_fields']
export var istriggers_enums_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "istriggers_enums_max_fields"')
  return triggers_enums_max_fields_possibleTypes.includes(obj.__typename)
}



var triggers_enums_min_fields_possibleTypes = ['triggers_enums_min_fields']
export var istriggers_enums_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "istriggers_enums_min_fields"')
  return triggers_enums_min_fields_possibleTypes.includes(obj.__typename)
}



var triggers_enums_mutation_response_possibleTypes = ['triggers_enums_mutation_response']
export var istriggers_enums_mutation_response = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "istriggers_enums_mutation_response"')
  return triggers_enums_mutation_response_possibleTypes.includes(obj.__typename)
}
