import {FieldsSelection,Observable} from '@genql/runtime'

export type Scalars = {
    Boolean: boolean,
    Int: number,
    String: string,
    timestamptz: any,
    uuid: any,
}


/** mutation root */
export interface mutation_root {
    /** delete data from the table: "notifications" */
    delete_notifications?: notifications_mutation_response
    /** delete single row from the table: "notifications" */
    delete_notifications_by_pk?: notifications
    /** delete data from the table: "service_enums" */
    delete_service_enums?: service_enums_mutation_response
    /** delete single row from the table: "service_enums" */
    delete_service_enums_by_pk?: service_enums
    /** delete data from the table: "services" */
    delete_services?: services_mutation_response
    /** delete single row from the table: "services" */
    delete_services_by_pk?: services
    /** delete data from the table: "severity_enums" */
    delete_severity_enums?: severity_enums_mutation_response
    /** delete single row from the table: "severity_enums" */
    delete_severity_enums_by_pk?: severity_enums
    /** insert data into the table: "notifications" */
    insert_notifications?: notifications_mutation_response
    /** insert a single row into the table: "notifications" */
    insert_notifications_one?: notifications
    /** insert data into the table: "service_enums" */
    insert_service_enums?: service_enums_mutation_response
    /** insert a single row into the table: "service_enums" */
    insert_service_enums_one?: service_enums
    /** insert data into the table: "services" */
    insert_services?: services_mutation_response
    /** insert a single row into the table: "services" */
    insert_services_one?: services
    /** insert data into the table: "severity_enums" */
    insert_severity_enums?: severity_enums_mutation_response
    /** insert a single row into the table: "severity_enums" */
    insert_severity_enums_one?: severity_enums
    /** update data of the table: "notifications" */
    update_notifications?: notifications_mutation_response
    /** update single row of the table: "notifications" */
    update_notifications_by_pk?: notifications
    /** update data of the table: "service_enums" */
    update_service_enums?: service_enums_mutation_response
    /** update single row of the table: "service_enums" */
    update_service_enums_by_pk?: service_enums
    /** update data of the table: "services" */
    update_services?: services_mutation_response
    /** update single row of the table: "services" */
    update_services_by_pk?: services
    /** update data of the table: "severity_enums" */
    update_severity_enums?: severity_enums_mutation_response
    /** update single row of the table: "severity_enums" */
    update_severity_enums_by_pk?: severity_enums
    __typename: 'mutation_root'
}


/** columns and relationships of "notifications" */
export interface notifications {
    id: Scalars['uuid']
    path?: Scalars['String']
    seen: Scalars['Boolean']
    /** An object relationship */
    service: services
    service_id: Scalars['uuid']
    severity: severity_enums_enum
    subject_id?: Scalars['uuid']
    __typename: 'notifications'
}


/** aggregated selection of "notifications" */
export interface notifications_aggregate {
    aggregate?: notifications_aggregate_fields
    nodes: notifications[]
    __typename: 'notifications_aggregate'
}


/** aggregate fields of "notifications" */
export interface notifications_aggregate_fields {
    count: Scalars['Int']
    max?: notifications_max_fields
    min?: notifications_min_fields
    __typename: 'notifications_aggregate_fields'
}


/** unique or primary key constraints on table "notifications" */
export type notifications_constraint = 'notifications_pkey'


/** aggregate max on columns */
export interface notifications_max_fields {
    id?: Scalars['uuid']
    path?: Scalars['String']
    service_id?: Scalars['uuid']
    subject_id?: Scalars['uuid']
    __typename: 'notifications_max_fields'
}


/** aggregate min on columns */
export interface notifications_min_fields {
    id?: Scalars['uuid']
    path?: Scalars['String']
    service_id?: Scalars['uuid']
    subject_id?: Scalars['uuid']
    __typename: 'notifications_min_fields'
}


/** response of any mutation on the table "notifications" */
export interface notifications_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: notifications[]
    __typename: 'notifications_mutation_response'
}


/** select columns of table "notifications" */
export type notifications_select_column = 'id' | 'path' | 'seen' | 'service_id' | 'severity' | 'subject_id'


/** update columns of table "notifications" */
export type notifications_update_column = 'id' | 'path' | 'seen' | 'service_id' | 'severity' | 'subject_id'


/** column ordering options */
export type order_by = 'asc' | 'asc_nulls_first' | 'asc_nulls_last' | 'desc' | 'desc_nulls_first' | 'desc_nulls_last'

export interface query_root {
    /** fetch data from the table: "notifications" */
    notifications: notifications[]
    /** fetch aggregated fields from the table: "notifications" */
    notifications_aggregate: notifications_aggregate
    /** fetch data from the table: "notifications" using primary key columns */
    notifications_by_pk?: notifications
    /** fetch data from the table: "service_enums" */
    service_enums: service_enums[]
    /** fetch aggregated fields from the table: "service_enums" */
    service_enums_aggregate: service_enums_aggregate
    /** fetch data from the table: "service_enums" using primary key columns */
    service_enums_by_pk?: service_enums
    /** fetch data from the table: "services" */
    services: services[]
    /** fetch aggregated fields from the table: "services" */
    services_aggregate: services_aggregate
    /** fetch data from the table: "services" using primary key columns */
    services_by_pk?: services
    /** fetch data from the table: "severity_enums" */
    severity_enums: severity_enums[]
    /** fetch aggregated fields from the table: "severity_enums" */
    severity_enums_aggregate: severity_enums_aggregate
    /** fetch data from the table: "severity_enums" using primary key columns */
    severity_enums_by_pk?: severity_enums
    __typename: 'query_root'
}


/** columns and relationships of "service_enums" */
export interface service_enums {
    description: Scalars['String']
    service: Scalars['String']
    __typename: 'service_enums'
}


/** aggregated selection of "service_enums" */
export interface service_enums_aggregate {
    aggregate?: service_enums_aggregate_fields
    nodes: service_enums[]
    __typename: 'service_enums_aggregate'
}


/** aggregate fields of "service_enums" */
export interface service_enums_aggregate_fields {
    count: Scalars['Int']
    max?: service_enums_max_fields
    min?: service_enums_min_fields
    __typename: 'service_enums_aggregate_fields'
}


/** unique or primary key constraints on table "service_enums" */
export type service_enums_constraint = 'service_enums_pkey'

export type service_enums_enum = 'async_chat' | 'calendar' | 'qnr'


/** aggregate max on columns */
export interface service_enums_max_fields {
    description?: Scalars['String']
    service?: Scalars['String']
    __typename: 'service_enums_max_fields'
}


/** aggregate min on columns */
export interface service_enums_min_fields {
    description?: Scalars['String']
    service?: Scalars['String']
    __typename: 'service_enums_min_fields'
}


/** response of any mutation on the table "service_enums" */
export interface service_enums_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: service_enums[]
    __typename: 'service_enums_mutation_response'
}


/** select columns of table "service_enums" */
export type service_enums_select_column = 'description' | 'service'


/** update columns of table "service_enums" */
export type service_enums_update_column = 'description' | 'service'


/** columns and relationships of "services" */
export interface services {
    customer_id: Scalars['uuid']
    email_ch: Scalars['Boolean']
    enabled: Scalars['Boolean']
    id: Scalars['uuid']
    message?: Scalars['String']
    push_ch: Scalars['Boolean']
    service: service_enums_enum
    sms_ch: Scalars['Boolean']
    title?: Scalars['String']
    updated_at: Scalars['timestamptz']
    user_id: Scalars['uuid']
    __typename: 'services'
}


/** aggregated selection of "services" */
export interface services_aggregate {
    aggregate?: services_aggregate_fields
    nodes: services[]
    __typename: 'services_aggregate'
}


/** aggregate fields of "services" */
export interface services_aggregate_fields {
    count: Scalars['Int']
    max?: services_max_fields
    min?: services_min_fields
    __typename: 'services_aggregate_fields'
}


/** unique or primary key constraints on table "services" */
export type services_constraint = 'services_pkey' | 'services_service_key'


/** aggregate max on columns */
export interface services_max_fields {
    customer_id?: Scalars['uuid']
    id?: Scalars['uuid']
    message?: Scalars['String']
    title?: Scalars['String']
    updated_at?: Scalars['timestamptz']
    user_id?: Scalars['uuid']
    __typename: 'services_max_fields'
}


/** aggregate min on columns */
export interface services_min_fields {
    customer_id?: Scalars['uuid']
    id?: Scalars['uuid']
    message?: Scalars['String']
    title?: Scalars['String']
    updated_at?: Scalars['timestamptz']
    user_id?: Scalars['uuid']
    __typename: 'services_min_fields'
}


/** response of any mutation on the table "services" */
export interface services_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: services[]
    __typename: 'services_mutation_response'
}


/** select columns of table "services" */
export type services_select_column = 'customer_id' | 'email_ch' | 'enabled' | 'id' | 'message' | 'push_ch' | 'service' | 'sms_ch' | 'title' | 'updated_at' | 'user_id'


/** update columns of table "services" */
export type services_update_column = 'customer_id' | 'email_ch' | 'enabled' | 'id' | 'message' | 'push_ch' | 'service' | 'sms_ch' | 'title' | 'updated_at' | 'user_id'


/** columns and relationships of "severity_enums" */
export interface severity_enums {
    description: Scalars['String']
    severity: Scalars['String']
    __typename: 'severity_enums'
}


/** aggregated selection of "severity_enums" */
export interface severity_enums_aggregate {
    aggregate?: severity_enums_aggregate_fields
    nodes: severity_enums[]
    __typename: 'severity_enums_aggregate'
}


/** aggregate fields of "severity_enums" */
export interface severity_enums_aggregate_fields {
    count: Scalars['Int']
    max?: severity_enums_max_fields
    min?: severity_enums_min_fields
    __typename: 'severity_enums_aggregate_fields'
}


/** unique or primary key constraints on table "severity_enums" */
export type severity_enums_constraint = 'severity_enums_pkey'

export type severity_enums_enum = 'important' | 'regular' | 'urgent'


/** aggregate max on columns */
export interface severity_enums_max_fields {
    description?: Scalars['String']
    severity?: Scalars['String']
    __typename: 'severity_enums_max_fields'
}


/** aggregate min on columns */
export interface severity_enums_min_fields {
    description?: Scalars['String']
    severity?: Scalars['String']
    __typename: 'severity_enums_min_fields'
}


/** response of any mutation on the table "severity_enums" */
export interface severity_enums_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: severity_enums[]
    __typename: 'severity_enums_mutation_response'
}


/** select columns of table "severity_enums" */
export type severity_enums_select_column = 'description' | 'severity'


/** update columns of table "severity_enums" */
export type severity_enums_update_column = 'description' | 'severity'

export interface subscription_root {
    /** fetch data from the table: "notifications" */
    notifications: notifications[]
    /** fetch aggregated fields from the table: "notifications" */
    notifications_aggregate: notifications_aggregate
    /** fetch data from the table: "notifications" using primary key columns */
    notifications_by_pk?: notifications
    /** fetch data from the table: "service_enums" */
    service_enums: service_enums[]
    /** fetch aggregated fields from the table: "service_enums" */
    service_enums_aggregate: service_enums_aggregate
    /** fetch data from the table: "service_enums" using primary key columns */
    service_enums_by_pk?: service_enums
    /** fetch data from the table: "services" */
    services: services[]
    /** fetch aggregated fields from the table: "services" */
    services_aggregate: services_aggregate
    /** fetch data from the table: "services" using primary key columns */
    services_by_pk?: services
    /** fetch data from the table: "severity_enums" */
    severity_enums: severity_enums[]
    /** fetch aggregated fields from the table: "severity_enums" */
    severity_enums_aggregate: severity_enums_aggregate
    /** fetch data from the table: "severity_enums" using primary key columns */
    severity_enums_by_pk?: severity_enums
    __typename: 'subscription_root'
}

export type Query = query_root
export type Mutation = mutation_root
export type Subscription = subscription_root


/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export interface Boolean_comparison_exp {_eq?: (Scalars['Boolean'] | null),_gt?: (Scalars['Boolean'] | null),_gte?: (Scalars['Boolean'] | null),_in?: (Scalars['Boolean'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['Boolean'] | null),_lte?: (Scalars['Boolean'] | null),_neq?: (Scalars['Boolean'] | null),_nin?: (Scalars['Boolean'][] | null)}


/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface String_comparison_exp {_eq?: (Scalars['String'] | null),_gt?: (Scalars['String'] | null),_gte?: (Scalars['String'] | null),
/** does the column match the given case-insensitive pattern */
_ilike?: (Scalars['String'] | null),_in?: (Scalars['String'][] | null),
/** does the column match the given POSIX regular expression, case insensitive */
_iregex?: (Scalars['String'] | null),_is_null?: (Scalars['Boolean'] | null),
/** does the column match the given pattern */
_like?: (Scalars['String'] | null),_lt?: (Scalars['String'] | null),_lte?: (Scalars['String'] | null),_neq?: (Scalars['String'] | null),
/** does the column NOT match the given case-insensitive pattern */
_nilike?: (Scalars['String'] | null),_nin?: (Scalars['String'][] | null),
/** does the column NOT match the given POSIX regular expression, case insensitive */
_niregex?: (Scalars['String'] | null),
/** does the column NOT match the given pattern */
_nlike?: (Scalars['String'] | null),
/** does the column NOT match the given POSIX regular expression, case sensitive */
_nregex?: (Scalars['String'] | null),
/** does the column NOT match the given SQL regular expression */
_nsimilar?: (Scalars['String'] | null),
/** does the column match the given POSIX regular expression, case sensitive */
_regex?: (Scalars['String'] | null),
/** does the column match the given SQL regular expression */
_similar?: (Scalars['String'] | null)}


/** mutation root */
export interface mutation_rootRequest{
    /** delete data from the table: "notifications" */
    delete_notifications?: [{
    /** filter the rows which have to be deleted */
    where: notifications_bool_exp},notifications_mutation_responseRequest]
    /** delete single row from the table: "notifications" */
    delete_notifications_by_pk?: [{id: Scalars['uuid']},notificationsRequest]
    /** delete data from the table: "service_enums" */
    delete_service_enums?: [{
    /** filter the rows which have to be deleted */
    where: service_enums_bool_exp},service_enums_mutation_responseRequest]
    /** delete single row from the table: "service_enums" */
    delete_service_enums_by_pk?: [{service: Scalars['String']},service_enumsRequest]
    /** delete data from the table: "services" */
    delete_services?: [{
    /** filter the rows which have to be deleted */
    where: services_bool_exp},services_mutation_responseRequest]
    /** delete single row from the table: "services" */
    delete_services_by_pk?: [{id: Scalars['uuid']},servicesRequest]
    /** delete data from the table: "severity_enums" */
    delete_severity_enums?: [{
    /** filter the rows which have to be deleted */
    where: severity_enums_bool_exp},severity_enums_mutation_responseRequest]
    /** delete single row from the table: "severity_enums" */
    delete_severity_enums_by_pk?: [{severity: Scalars['String']},severity_enumsRequest]
    /** insert data into the table: "notifications" */
    insert_notifications?: [{
    /** the rows to be inserted */
    objects: notifications_insert_input[],
    /** on conflict condition */
    on_conflict?: (notifications_on_conflict | null)},notifications_mutation_responseRequest]
    /** insert a single row into the table: "notifications" */
    insert_notifications_one?: [{
    /** the row to be inserted */
    object: notifications_insert_input,
    /** on conflict condition */
    on_conflict?: (notifications_on_conflict | null)},notificationsRequest]
    /** insert data into the table: "service_enums" */
    insert_service_enums?: [{
    /** the rows to be inserted */
    objects: service_enums_insert_input[],
    /** on conflict condition */
    on_conflict?: (service_enums_on_conflict | null)},service_enums_mutation_responseRequest]
    /** insert a single row into the table: "service_enums" */
    insert_service_enums_one?: [{
    /** the row to be inserted */
    object: service_enums_insert_input,
    /** on conflict condition */
    on_conflict?: (service_enums_on_conflict | null)},service_enumsRequest]
    /** insert data into the table: "services" */
    insert_services?: [{
    /** the rows to be inserted */
    objects: services_insert_input[],
    /** on conflict condition */
    on_conflict?: (services_on_conflict | null)},services_mutation_responseRequest]
    /** insert a single row into the table: "services" */
    insert_services_one?: [{
    /** the row to be inserted */
    object: services_insert_input,
    /** on conflict condition */
    on_conflict?: (services_on_conflict | null)},servicesRequest]
    /** insert data into the table: "severity_enums" */
    insert_severity_enums?: [{
    /** the rows to be inserted */
    objects: severity_enums_insert_input[],
    /** on conflict condition */
    on_conflict?: (severity_enums_on_conflict | null)},severity_enums_mutation_responseRequest]
    /** insert a single row into the table: "severity_enums" */
    insert_severity_enums_one?: [{
    /** the row to be inserted */
    object: severity_enums_insert_input,
    /** on conflict condition */
    on_conflict?: (severity_enums_on_conflict | null)},severity_enumsRequest]
    /** update data of the table: "notifications" */
    update_notifications?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (notifications_set_input | null),
    /** filter the rows which have to be updated */
    where: notifications_bool_exp},notifications_mutation_responseRequest]
    /** update single row of the table: "notifications" */
    update_notifications_by_pk?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (notifications_set_input | null),pk_columns: notifications_pk_columns_input},notificationsRequest]
    /** update data of the table: "service_enums" */
    update_service_enums?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (service_enums_set_input | null),
    /** filter the rows which have to be updated */
    where: service_enums_bool_exp},service_enums_mutation_responseRequest]
    /** update single row of the table: "service_enums" */
    update_service_enums_by_pk?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (service_enums_set_input | null),pk_columns: service_enums_pk_columns_input},service_enumsRequest]
    /** update data of the table: "services" */
    update_services?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (services_set_input | null),
    /** filter the rows which have to be updated */
    where: services_bool_exp},services_mutation_responseRequest]
    /** update single row of the table: "services" */
    update_services_by_pk?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (services_set_input | null),pk_columns: services_pk_columns_input},servicesRequest]
    /** update data of the table: "severity_enums" */
    update_severity_enums?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (severity_enums_set_input | null),
    /** filter the rows which have to be updated */
    where: severity_enums_bool_exp},severity_enums_mutation_responseRequest]
    /** update single row of the table: "severity_enums" */
    update_severity_enums_by_pk?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (severity_enums_set_input | null),pk_columns: severity_enums_pk_columns_input},severity_enumsRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "notifications" */
export interface notificationsRequest{
    id?: boolean | number
    path?: boolean | number
    seen?: boolean | number
    /** An object relationship */
    service?: servicesRequest
    service_id?: boolean | number
    severity?: boolean | number
    subject_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "notifications" */
export interface notifications_aggregateRequest{
    aggregate?: notifications_aggregate_fieldsRequest
    nodes?: notificationsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "notifications" */
export interface notifications_aggregate_fieldsRequest{
    count?: [{columns?: (notifications_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: notifications_max_fieldsRequest
    min?: notifications_min_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "notifications". All fields are combined with a logical 'AND'. */
export interface notifications_bool_exp {_and?: (notifications_bool_exp[] | null),_not?: (notifications_bool_exp | null),_or?: (notifications_bool_exp[] | null),id?: (uuid_comparison_exp | null),path?: (String_comparison_exp | null),seen?: (Boolean_comparison_exp | null),service?: (services_bool_exp | null),service_id?: (uuid_comparison_exp | null),severity?: (severity_enums_enum_comparison_exp | null),subject_id?: (uuid_comparison_exp | null)}


/** input type for inserting data into table "notifications" */
export interface notifications_insert_input {id?: (Scalars['uuid'] | null),path?: (Scalars['String'] | null),seen?: (Scalars['Boolean'] | null),service?: (services_obj_rel_insert_input | null),service_id?: (Scalars['uuid'] | null),severity?: (severity_enums_enum | null),subject_id?: (Scalars['uuid'] | null)}


/** aggregate max on columns */
export interface notifications_max_fieldsRequest{
    id?: boolean | number
    path?: boolean | number
    service_id?: boolean | number
    subject_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface notifications_min_fieldsRequest{
    id?: boolean | number
    path?: boolean | number
    service_id?: boolean | number
    subject_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "notifications" */
export interface notifications_mutation_responseRequest{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: notificationsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on conflict condition type for table "notifications" */
export interface notifications_on_conflict {constraint: notifications_constraint,update_columns: notifications_update_column[],where?: (notifications_bool_exp | null)}


/** Ordering options when selecting data from "notifications". */
export interface notifications_order_by {id?: (order_by | null),path?: (order_by | null),seen?: (order_by | null),service?: (services_order_by | null),service_id?: (order_by | null),severity?: (order_by | null),subject_id?: (order_by | null)}


/** primary key columns input for table: notifications */
export interface notifications_pk_columns_input {id: Scalars['uuid']}


/** input type for updating data in table "notifications" */
export interface notifications_set_input {id?: (Scalars['uuid'] | null),path?: (Scalars['String'] | null),seen?: (Scalars['Boolean'] | null),service_id?: (Scalars['uuid'] | null),severity?: (severity_enums_enum | null),subject_id?: (Scalars['uuid'] | null)}

export interface query_rootRequest{
    /** fetch data from the table: "notifications" */
    notifications?: [{
    /** distinct select on columns */
    distinct_on?: (notifications_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (notifications_order_by[] | null),
    /** filter the rows returned */
    where?: (notifications_bool_exp | null)},notificationsRequest] | notificationsRequest
    /** fetch aggregated fields from the table: "notifications" */
    notifications_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (notifications_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (notifications_order_by[] | null),
    /** filter the rows returned */
    where?: (notifications_bool_exp | null)},notifications_aggregateRequest] | notifications_aggregateRequest
    /** fetch data from the table: "notifications" using primary key columns */
    notifications_by_pk?: [{id: Scalars['uuid']},notificationsRequest]
    /** fetch data from the table: "service_enums" */
    service_enums?: [{
    /** distinct select on columns */
    distinct_on?: (service_enums_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (service_enums_order_by[] | null),
    /** filter the rows returned */
    where?: (service_enums_bool_exp | null)},service_enumsRequest] | service_enumsRequest
    /** fetch aggregated fields from the table: "service_enums" */
    service_enums_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (service_enums_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (service_enums_order_by[] | null),
    /** filter the rows returned */
    where?: (service_enums_bool_exp | null)},service_enums_aggregateRequest] | service_enums_aggregateRequest
    /** fetch data from the table: "service_enums" using primary key columns */
    service_enums_by_pk?: [{service: Scalars['String']},service_enumsRequest]
    /** fetch data from the table: "services" */
    services?: [{
    /** distinct select on columns */
    distinct_on?: (services_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (services_order_by[] | null),
    /** filter the rows returned */
    where?: (services_bool_exp | null)},servicesRequest] | servicesRequest
    /** fetch aggregated fields from the table: "services" */
    services_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (services_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (services_order_by[] | null),
    /** filter the rows returned */
    where?: (services_bool_exp | null)},services_aggregateRequest] | services_aggregateRequest
    /** fetch data from the table: "services" using primary key columns */
    services_by_pk?: [{id: Scalars['uuid']},servicesRequest]
    /** fetch data from the table: "severity_enums" */
    severity_enums?: [{
    /** distinct select on columns */
    distinct_on?: (severity_enums_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (severity_enums_order_by[] | null),
    /** filter the rows returned */
    where?: (severity_enums_bool_exp | null)},severity_enumsRequest] | severity_enumsRequest
    /** fetch aggregated fields from the table: "severity_enums" */
    severity_enums_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (severity_enums_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (severity_enums_order_by[] | null),
    /** filter the rows returned */
    where?: (severity_enums_bool_exp | null)},severity_enums_aggregateRequest] | severity_enums_aggregateRequest
    /** fetch data from the table: "severity_enums" using primary key columns */
    severity_enums_by_pk?: [{severity: Scalars['String']},severity_enumsRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "service_enums" */
export interface service_enumsRequest{
    description?: boolean | number
    service?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "service_enums" */
export interface service_enums_aggregateRequest{
    aggregate?: service_enums_aggregate_fieldsRequest
    nodes?: service_enumsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "service_enums" */
export interface service_enums_aggregate_fieldsRequest{
    count?: [{columns?: (service_enums_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: service_enums_max_fieldsRequest
    min?: service_enums_min_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "service_enums". All fields are combined with a logical 'AND'. */
export interface service_enums_bool_exp {_and?: (service_enums_bool_exp[] | null),_not?: (service_enums_bool_exp | null),_or?: (service_enums_bool_exp[] | null),description?: (String_comparison_exp | null),service?: (String_comparison_exp | null)}


/** Boolean expression to compare columns of type "service_enums_enum". All fields are combined with logical 'AND'. */
export interface service_enums_enum_comparison_exp {_eq?: (service_enums_enum | null),_in?: (service_enums_enum[] | null),_is_null?: (Scalars['Boolean'] | null),_neq?: (service_enums_enum | null),_nin?: (service_enums_enum[] | null)}


/** input type for inserting data into table "service_enums" */
export interface service_enums_insert_input {description?: (Scalars['String'] | null),service?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface service_enums_max_fieldsRequest{
    description?: boolean | number
    service?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface service_enums_min_fieldsRequest{
    description?: boolean | number
    service?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "service_enums" */
export interface service_enums_mutation_responseRequest{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: service_enumsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on conflict condition type for table "service_enums" */
export interface service_enums_on_conflict {constraint: service_enums_constraint,update_columns: service_enums_update_column[],where?: (service_enums_bool_exp | null)}


/** Ordering options when selecting data from "service_enums". */
export interface service_enums_order_by {description?: (order_by | null),service?: (order_by | null)}


/** primary key columns input for table: service_enums */
export interface service_enums_pk_columns_input {service: Scalars['String']}


/** input type for updating data in table "service_enums" */
export interface service_enums_set_input {description?: (Scalars['String'] | null),service?: (Scalars['String'] | null)}


/** columns and relationships of "services" */
export interface servicesRequest{
    customer_id?: boolean | number
    email_ch?: boolean | number
    enabled?: boolean | number
    id?: boolean | number
    message?: boolean | number
    push_ch?: boolean | number
    service?: boolean | number
    sms_ch?: boolean | number
    title?: boolean | number
    updated_at?: boolean | number
    user_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "services" */
export interface services_aggregateRequest{
    aggregate?: services_aggregate_fieldsRequest
    nodes?: servicesRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "services" */
export interface services_aggregate_fieldsRequest{
    count?: [{columns?: (services_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: services_max_fieldsRequest
    min?: services_min_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "services". All fields are combined with a logical 'AND'. */
export interface services_bool_exp {_and?: (services_bool_exp[] | null),_not?: (services_bool_exp | null),_or?: (services_bool_exp[] | null),customer_id?: (uuid_comparison_exp | null),email_ch?: (Boolean_comparison_exp | null),enabled?: (Boolean_comparison_exp | null),id?: (uuid_comparison_exp | null),message?: (String_comparison_exp | null),push_ch?: (Boolean_comparison_exp | null),service?: (service_enums_enum_comparison_exp | null),sms_ch?: (Boolean_comparison_exp | null),title?: (String_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null),user_id?: (uuid_comparison_exp | null)}


/** input type for inserting data into table "services" */
export interface services_insert_input {customer_id?: (Scalars['uuid'] | null),email_ch?: (Scalars['Boolean'] | null),enabled?: (Scalars['Boolean'] | null),id?: (Scalars['uuid'] | null),message?: (Scalars['String'] | null),push_ch?: (Scalars['Boolean'] | null),service?: (service_enums_enum | null),sms_ch?: (Scalars['Boolean'] | null),title?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null),user_id?: (Scalars['uuid'] | null)}


/** aggregate max on columns */
export interface services_max_fieldsRequest{
    customer_id?: boolean | number
    id?: boolean | number
    message?: boolean | number
    title?: boolean | number
    updated_at?: boolean | number
    user_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface services_min_fieldsRequest{
    customer_id?: boolean | number
    id?: boolean | number
    message?: boolean | number
    title?: boolean | number
    updated_at?: boolean | number
    user_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "services" */
export interface services_mutation_responseRequest{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: servicesRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "services" */
export interface services_obj_rel_insert_input {data: services_insert_input,
/** on conflict condition */
on_conflict?: (services_on_conflict | null)}


/** on conflict condition type for table "services" */
export interface services_on_conflict {constraint: services_constraint,update_columns: services_update_column[],where?: (services_bool_exp | null)}


/** Ordering options when selecting data from "services". */
export interface services_order_by {customer_id?: (order_by | null),email_ch?: (order_by | null),enabled?: (order_by | null),id?: (order_by | null),message?: (order_by | null),push_ch?: (order_by | null),service?: (order_by | null),sms_ch?: (order_by | null),title?: (order_by | null),updated_at?: (order_by | null),user_id?: (order_by | null)}


/** primary key columns input for table: services */
export interface services_pk_columns_input {id: Scalars['uuid']}


/** input type for updating data in table "services" */
export interface services_set_input {customer_id?: (Scalars['uuid'] | null),email_ch?: (Scalars['Boolean'] | null),enabled?: (Scalars['Boolean'] | null),id?: (Scalars['uuid'] | null),message?: (Scalars['String'] | null),push_ch?: (Scalars['Boolean'] | null),service?: (service_enums_enum | null),sms_ch?: (Scalars['Boolean'] | null),title?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null),user_id?: (Scalars['uuid'] | null)}


/** columns and relationships of "severity_enums" */
export interface severity_enumsRequest{
    description?: boolean | number
    severity?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "severity_enums" */
export interface severity_enums_aggregateRequest{
    aggregate?: severity_enums_aggregate_fieldsRequest
    nodes?: severity_enumsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "severity_enums" */
export interface severity_enums_aggregate_fieldsRequest{
    count?: [{columns?: (severity_enums_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: severity_enums_max_fieldsRequest
    min?: severity_enums_min_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "severity_enums". All fields are combined with a logical 'AND'. */
export interface severity_enums_bool_exp {_and?: (severity_enums_bool_exp[] | null),_not?: (severity_enums_bool_exp | null),_or?: (severity_enums_bool_exp[] | null),description?: (String_comparison_exp | null),severity?: (String_comparison_exp | null)}


/** Boolean expression to compare columns of type "severity_enums_enum". All fields are combined with logical 'AND'. */
export interface severity_enums_enum_comparison_exp {_eq?: (severity_enums_enum | null),_in?: (severity_enums_enum[] | null),_is_null?: (Scalars['Boolean'] | null),_neq?: (severity_enums_enum | null),_nin?: (severity_enums_enum[] | null)}


/** input type for inserting data into table "severity_enums" */
export interface severity_enums_insert_input {description?: (Scalars['String'] | null),severity?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface severity_enums_max_fieldsRequest{
    description?: boolean | number
    severity?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface severity_enums_min_fieldsRequest{
    description?: boolean | number
    severity?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "severity_enums" */
export interface severity_enums_mutation_responseRequest{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: severity_enumsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on conflict condition type for table "severity_enums" */
export interface severity_enums_on_conflict {constraint: severity_enums_constraint,update_columns: severity_enums_update_column[],where?: (severity_enums_bool_exp | null)}


/** Ordering options when selecting data from "severity_enums". */
export interface severity_enums_order_by {description?: (order_by | null),severity?: (order_by | null)}


/** primary key columns input for table: severity_enums */
export interface severity_enums_pk_columns_input {severity: Scalars['String']}


/** input type for updating data in table "severity_enums" */
export interface severity_enums_set_input {description?: (Scalars['String'] | null),severity?: (Scalars['String'] | null)}

export interface subscription_rootRequest{
    /** fetch data from the table: "notifications" */
    notifications?: [{
    /** distinct select on columns */
    distinct_on?: (notifications_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (notifications_order_by[] | null),
    /** filter the rows returned */
    where?: (notifications_bool_exp | null)},notificationsRequest] | notificationsRequest
    /** fetch aggregated fields from the table: "notifications" */
    notifications_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (notifications_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (notifications_order_by[] | null),
    /** filter the rows returned */
    where?: (notifications_bool_exp | null)},notifications_aggregateRequest] | notifications_aggregateRequest
    /** fetch data from the table: "notifications" using primary key columns */
    notifications_by_pk?: [{id: Scalars['uuid']},notificationsRequest]
    /** fetch data from the table: "service_enums" */
    service_enums?: [{
    /** distinct select on columns */
    distinct_on?: (service_enums_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (service_enums_order_by[] | null),
    /** filter the rows returned */
    where?: (service_enums_bool_exp | null)},service_enumsRequest] | service_enumsRequest
    /** fetch aggregated fields from the table: "service_enums" */
    service_enums_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (service_enums_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (service_enums_order_by[] | null),
    /** filter the rows returned */
    where?: (service_enums_bool_exp | null)},service_enums_aggregateRequest] | service_enums_aggregateRequest
    /** fetch data from the table: "service_enums" using primary key columns */
    service_enums_by_pk?: [{service: Scalars['String']},service_enumsRequest]
    /** fetch data from the table: "services" */
    services?: [{
    /** distinct select on columns */
    distinct_on?: (services_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (services_order_by[] | null),
    /** filter the rows returned */
    where?: (services_bool_exp | null)},servicesRequest] | servicesRequest
    /** fetch aggregated fields from the table: "services" */
    services_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (services_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (services_order_by[] | null),
    /** filter the rows returned */
    where?: (services_bool_exp | null)},services_aggregateRequest] | services_aggregateRequest
    /** fetch data from the table: "services" using primary key columns */
    services_by_pk?: [{id: Scalars['uuid']},servicesRequest]
    /** fetch data from the table: "severity_enums" */
    severity_enums?: [{
    /** distinct select on columns */
    distinct_on?: (severity_enums_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (severity_enums_order_by[] | null),
    /** filter the rows returned */
    where?: (severity_enums_bool_exp | null)},severity_enumsRequest] | severity_enumsRequest
    /** fetch aggregated fields from the table: "severity_enums" */
    severity_enums_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (severity_enums_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (severity_enums_order_by[] | null),
    /** filter the rows returned */
    where?: (severity_enums_bool_exp | null)},severity_enums_aggregateRequest] | severity_enums_aggregateRequest
    /** fetch data from the table: "severity_enums" using primary key columns */
    severity_enums_by_pk?: [{severity: Scalars['String']},severity_enumsRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export interface timestamptz_comparison_exp {_eq?: (Scalars['timestamptz'] | null),_gt?: (Scalars['timestamptz'] | null),_gte?: (Scalars['timestamptz'] | null),_in?: (Scalars['timestamptz'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['timestamptz'] | null),_lte?: (Scalars['timestamptz'] | null),_neq?: (Scalars['timestamptz'] | null),_nin?: (Scalars['timestamptz'][] | null)}


/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export interface uuid_comparison_exp {_eq?: (Scalars['uuid'] | null),_gt?: (Scalars['uuid'] | null),_gte?: (Scalars['uuid'] | null),_in?: (Scalars['uuid'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['uuid'] | null),_lte?: (Scalars['uuid'] | null),_neq?: (Scalars['uuid'] | null),_nin?: (Scalars['uuid'][] | null)}

export type QueryRequest = query_rootRequest
export type MutationRequest = mutation_rootRequest
export type SubscriptionRequest = subscription_rootRequest


const mutation_root_possibleTypes = ['mutation_root']
export const ismutation_root = (obj?: { __typename?: any } | null): obj is mutation_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismutation_root"')
  return mutation_root_possibleTypes.includes(obj.__typename)
}



const notifications_possibleTypes = ['notifications']
export const isnotifications = (obj?: { __typename?: any } | null): obj is notifications => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isnotifications"')
  return notifications_possibleTypes.includes(obj.__typename)
}



const notifications_aggregate_possibleTypes = ['notifications_aggregate']
export const isnotifications_aggregate = (obj?: { __typename?: any } | null): obj is notifications_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isnotifications_aggregate"')
  return notifications_aggregate_possibleTypes.includes(obj.__typename)
}



const notifications_aggregate_fields_possibleTypes = ['notifications_aggregate_fields']
export const isnotifications_aggregate_fields = (obj?: { __typename?: any } | null): obj is notifications_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isnotifications_aggregate_fields"')
  return notifications_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const notifications_max_fields_possibleTypes = ['notifications_max_fields']
export const isnotifications_max_fields = (obj?: { __typename?: any } | null): obj is notifications_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isnotifications_max_fields"')
  return notifications_max_fields_possibleTypes.includes(obj.__typename)
}



const notifications_min_fields_possibleTypes = ['notifications_min_fields']
export const isnotifications_min_fields = (obj?: { __typename?: any } | null): obj is notifications_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isnotifications_min_fields"')
  return notifications_min_fields_possibleTypes.includes(obj.__typename)
}



const notifications_mutation_response_possibleTypes = ['notifications_mutation_response']
export const isnotifications_mutation_response = (obj?: { __typename?: any } | null): obj is notifications_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isnotifications_mutation_response"')
  return notifications_mutation_response_possibleTypes.includes(obj.__typename)
}



const query_root_possibleTypes = ['query_root']
export const isquery_root = (obj?: { __typename?: any } | null): obj is query_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isquery_root"')
  return query_root_possibleTypes.includes(obj.__typename)
}



const service_enums_possibleTypes = ['service_enums']
export const isservice_enums = (obj?: { __typename?: any } | null): obj is service_enums => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isservice_enums"')
  return service_enums_possibleTypes.includes(obj.__typename)
}



const service_enums_aggregate_possibleTypes = ['service_enums_aggregate']
export const isservice_enums_aggregate = (obj?: { __typename?: any } | null): obj is service_enums_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isservice_enums_aggregate"')
  return service_enums_aggregate_possibleTypes.includes(obj.__typename)
}



const service_enums_aggregate_fields_possibleTypes = ['service_enums_aggregate_fields']
export const isservice_enums_aggregate_fields = (obj?: { __typename?: any } | null): obj is service_enums_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isservice_enums_aggregate_fields"')
  return service_enums_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const service_enums_max_fields_possibleTypes = ['service_enums_max_fields']
export const isservice_enums_max_fields = (obj?: { __typename?: any } | null): obj is service_enums_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isservice_enums_max_fields"')
  return service_enums_max_fields_possibleTypes.includes(obj.__typename)
}



const service_enums_min_fields_possibleTypes = ['service_enums_min_fields']
export const isservice_enums_min_fields = (obj?: { __typename?: any } | null): obj is service_enums_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isservice_enums_min_fields"')
  return service_enums_min_fields_possibleTypes.includes(obj.__typename)
}



const service_enums_mutation_response_possibleTypes = ['service_enums_mutation_response']
export const isservice_enums_mutation_response = (obj?: { __typename?: any } | null): obj is service_enums_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isservice_enums_mutation_response"')
  return service_enums_mutation_response_possibleTypes.includes(obj.__typename)
}



const services_possibleTypes = ['services']
export const isservices = (obj?: { __typename?: any } | null): obj is services => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isservices"')
  return services_possibleTypes.includes(obj.__typename)
}



const services_aggregate_possibleTypes = ['services_aggregate']
export const isservices_aggregate = (obj?: { __typename?: any } | null): obj is services_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isservices_aggregate"')
  return services_aggregate_possibleTypes.includes(obj.__typename)
}



const services_aggregate_fields_possibleTypes = ['services_aggregate_fields']
export const isservices_aggregate_fields = (obj?: { __typename?: any } | null): obj is services_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isservices_aggregate_fields"')
  return services_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const services_max_fields_possibleTypes = ['services_max_fields']
export const isservices_max_fields = (obj?: { __typename?: any } | null): obj is services_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isservices_max_fields"')
  return services_max_fields_possibleTypes.includes(obj.__typename)
}



const services_min_fields_possibleTypes = ['services_min_fields']
export const isservices_min_fields = (obj?: { __typename?: any } | null): obj is services_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isservices_min_fields"')
  return services_min_fields_possibleTypes.includes(obj.__typename)
}



const services_mutation_response_possibleTypes = ['services_mutation_response']
export const isservices_mutation_response = (obj?: { __typename?: any } | null): obj is services_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isservices_mutation_response"')
  return services_mutation_response_possibleTypes.includes(obj.__typename)
}



const severity_enums_possibleTypes = ['severity_enums']
export const isseverity_enums = (obj?: { __typename?: any } | null): obj is severity_enums => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isseverity_enums"')
  return severity_enums_possibleTypes.includes(obj.__typename)
}



const severity_enums_aggregate_possibleTypes = ['severity_enums_aggregate']
export const isseverity_enums_aggregate = (obj?: { __typename?: any } | null): obj is severity_enums_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isseverity_enums_aggregate"')
  return severity_enums_aggregate_possibleTypes.includes(obj.__typename)
}



const severity_enums_aggregate_fields_possibleTypes = ['severity_enums_aggregate_fields']
export const isseverity_enums_aggregate_fields = (obj?: { __typename?: any } | null): obj is severity_enums_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isseverity_enums_aggregate_fields"')
  return severity_enums_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const severity_enums_max_fields_possibleTypes = ['severity_enums_max_fields']
export const isseverity_enums_max_fields = (obj?: { __typename?: any } | null): obj is severity_enums_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isseverity_enums_max_fields"')
  return severity_enums_max_fields_possibleTypes.includes(obj.__typename)
}



const severity_enums_min_fields_possibleTypes = ['severity_enums_min_fields']
export const isseverity_enums_min_fields = (obj?: { __typename?: any } | null): obj is severity_enums_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isseverity_enums_min_fields"')
  return severity_enums_min_fields_possibleTypes.includes(obj.__typename)
}



const severity_enums_mutation_response_possibleTypes = ['severity_enums_mutation_response']
export const isseverity_enums_mutation_response = (obj?: { __typename?: any } | null): obj is severity_enums_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isseverity_enums_mutation_response"')
  return severity_enums_mutation_response_possibleTypes.includes(obj.__typename)
}



const subscription_root_possibleTypes = ['subscription_root']
export const issubscription_root = (obj?: { __typename?: any } | null): obj is subscription_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "issubscription_root"')
  return subscription_root_possibleTypes.includes(obj.__typename)
}



/** mutation root */
export interface mutation_rootPromiseChain{
    
/** delete data from the table: "notifications" */
delete_notifications: ((args: {
/** filter the rows which have to be deleted */
where: notifications_bool_exp}) => notifications_mutation_responsePromiseChain & {get: <R extends notifications_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<notifications_mutation_response, R> | undefined)) => Promise<(FieldsSelection<notifications_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "notifications" */
delete_notifications_by_pk: ((args: {id: Scalars['uuid']}) => notificationsPromiseChain & {get: <R extends notificationsRequest>(request: R, defaultValue?: (FieldsSelection<notifications, R> | undefined)) => Promise<(FieldsSelection<notifications, R> | undefined)>}),
    
/** delete data from the table: "service_enums" */
delete_service_enums: ((args: {
/** filter the rows which have to be deleted */
where: service_enums_bool_exp}) => service_enums_mutation_responsePromiseChain & {get: <R extends service_enums_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<service_enums_mutation_response, R> | undefined)) => Promise<(FieldsSelection<service_enums_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "service_enums" */
delete_service_enums_by_pk: ((args: {service: Scalars['String']}) => service_enumsPromiseChain & {get: <R extends service_enumsRequest>(request: R, defaultValue?: (FieldsSelection<service_enums, R> | undefined)) => Promise<(FieldsSelection<service_enums, R> | undefined)>}),
    
/** delete data from the table: "services" */
delete_services: ((args: {
/** filter the rows which have to be deleted */
where: services_bool_exp}) => services_mutation_responsePromiseChain & {get: <R extends services_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<services_mutation_response, R> | undefined)) => Promise<(FieldsSelection<services_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "services" */
delete_services_by_pk: ((args: {id: Scalars['uuid']}) => servicesPromiseChain & {get: <R extends servicesRequest>(request: R, defaultValue?: (FieldsSelection<services, R> | undefined)) => Promise<(FieldsSelection<services, R> | undefined)>}),
    
/** delete data from the table: "severity_enums" */
delete_severity_enums: ((args: {
/** filter the rows which have to be deleted */
where: severity_enums_bool_exp}) => severity_enums_mutation_responsePromiseChain & {get: <R extends severity_enums_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<severity_enums_mutation_response, R> | undefined)) => Promise<(FieldsSelection<severity_enums_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "severity_enums" */
delete_severity_enums_by_pk: ((args: {severity: Scalars['String']}) => severity_enumsPromiseChain & {get: <R extends severity_enumsRequest>(request: R, defaultValue?: (FieldsSelection<severity_enums, R> | undefined)) => Promise<(FieldsSelection<severity_enums, R> | undefined)>}),
    
/** insert data into the table: "notifications" */
insert_notifications: ((args: {
/** the rows to be inserted */
objects: notifications_insert_input[],
/** on conflict condition */
on_conflict?: (notifications_on_conflict | null)}) => notifications_mutation_responsePromiseChain & {get: <R extends notifications_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<notifications_mutation_response, R> | undefined)) => Promise<(FieldsSelection<notifications_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "notifications" */
insert_notifications_one: ((args: {
/** the row to be inserted */
object: notifications_insert_input,
/** on conflict condition */
on_conflict?: (notifications_on_conflict | null)}) => notificationsPromiseChain & {get: <R extends notificationsRequest>(request: R, defaultValue?: (FieldsSelection<notifications, R> | undefined)) => Promise<(FieldsSelection<notifications, R> | undefined)>}),
    
/** insert data into the table: "service_enums" */
insert_service_enums: ((args: {
/** the rows to be inserted */
objects: service_enums_insert_input[],
/** on conflict condition */
on_conflict?: (service_enums_on_conflict | null)}) => service_enums_mutation_responsePromiseChain & {get: <R extends service_enums_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<service_enums_mutation_response, R> | undefined)) => Promise<(FieldsSelection<service_enums_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "service_enums" */
insert_service_enums_one: ((args: {
/** the row to be inserted */
object: service_enums_insert_input,
/** on conflict condition */
on_conflict?: (service_enums_on_conflict | null)}) => service_enumsPromiseChain & {get: <R extends service_enumsRequest>(request: R, defaultValue?: (FieldsSelection<service_enums, R> | undefined)) => Promise<(FieldsSelection<service_enums, R> | undefined)>}),
    
/** insert data into the table: "services" */
insert_services: ((args: {
/** the rows to be inserted */
objects: services_insert_input[],
/** on conflict condition */
on_conflict?: (services_on_conflict | null)}) => services_mutation_responsePromiseChain & {get: <R extends services_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<services_mutation_response, R> | undefined)) => Promise<(FieldsSelection<services_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "services" */
insert_services_one: ((args: {
/** the row to be inserted */
object: services_insert_input,
/** on conflict condition */
on_conflict?: (services_on_conflict | null)}) => servicesPromiseChain & {get: <R extends servicesRequest>(request: R, defaultValue?: (FieldsSelection<services, R> | undefined)) => Promise<(FieldsSelection<services, R> | undefined)>}),
    
/** insert data into the table: "severity_enums" */
insert_severity_enums: ((args: {
/** the rows to be inserted */
objects: severity_enums_insert_input[],
/** on conflict condition */
on_conflict?: (severity_enums_on_conflict | null)}) => severity_enums_mutation_responsePromiseChain & {get: <R extends severity_enums_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<severity_enums_mutation_response, R> | undefined)) => Promise<(FieldsSelection<severity_enums_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "severity_enums" */
insert_severity_enums_one: ((args: {
/** the row to be inserted */
object: severity_enums_insert_input,
/** on conflict condition */
on_conflict?: (severity_enums_on_conflict | null)}) => severity_enumsPromiseChain & {get: <R extends severity_enumsRequest>(request: R, defaultValue?: (FieldsSelection<severity_enums, R> | undefined)) => Promise<(FieldsSelection<severity_enums, R> | undefined)>}),
    
/** update data of the table: "notifications" */
update_notifications: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (notifications_set_input | null),
/** filter the rows which have to be updated */
where: notifications_bool_exp}) => notifications_mutation_responsePromiseChain & {get: <R extends notifications_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<notifications_mutation_response, R> | undefined)) => Promise<(FieldsSelection<notifications_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "notifications" */
update_notifications_by_pk: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (notifications_set_input | null),pk_columns: notifications_pk_columns_input}) => notificationsPromiseChain & {get: <R extends notificationsRequest>(request: R, defaultValue?: (FieldsSelection<notifications, R> | undefined)) => Promise<(FieldsSelection<notifications, R> | undefined)>}),
    
/** update data of the table: "service_enums" */
update_service_enums: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (service_enums_set_input | null),
/** filter the rows which have to be updated */
where: service_enums_bool_exp}) => service_enums_mutation_responsePromiseChain & {get: <R extends service_enums_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<service_enums_mutation_response, R> | undefined)) => Promise<(FieldsSelection<service_enums_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "service_enums" */
update_service_enums_by_pk: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (service_enums_set_input | null),pk_columns: service_enums_pk_columns_input}) => service_enumsPromiseChain & {get: <R extends service_enumsRequest>(request: R, defaultValue?: (FieldsSelection<service_enums, R> | undefined)) => Promise<(FieldsSelection<service_enums, R> | undefined)>}),
    
/** update data of the table: "services" */
update_services: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (services_set_input | null),
/** filter the rows which have to be updated */
where: services_bool_exp}) => services_mutation_responsePromiseChain & {get: <R extends services_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<services_mutation_response, R> | undefined)) => Promise<(FieldsSelection<services_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "services" */
update_services_by_pk: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (services_set_input | null),pk_columns: services_pk_columns_input}) => servicesPromiseChain & {get: <R extends servicesRequest>(request: R, defaultValue?: (FieldsSelection<services, R> | undefined)) => Promise<(FieldsSelection<services, R> | undefined)>}),
    
/** update data of the table: "severity_enums" */
update_severity_enums: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (severity_enums_set_input | null),
/** filter the rows which have to be updated */
where: severity_enums_bool_exp}) => severity_enums_mutation_responsePromiseChain & {get: <R extends severity_enums_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<severity_enums_mutation_response, R> | undefined)) => Promise<(FieldsSelection<severity_enums_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "severity_enums" */
update_severity_enums_by_pk: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (severity_enums_set_input | null),pk_columns: severity_enums_pk_columns_input}) => severity_enumsPromiseChain & {get: <R extends severity_enumsRequest>(request: R, defaultValue?: (FieldsSelection<severity_enums, R> | undefined)) => Promise<(FieldsSelection<severity_enums, R> | undefined)>})
}


/** mutation root */
export interface mutation_rootObservableChain{
    
/** delete data from the table: "notifications" */
delete_notifications: ((args: {
/** filter the rows which have to be deleted */
where: notifications_bool_exp}) => notifications_mutation_responseObservableChain & {get: <R extends notifications_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<notifications_mutation_response, R> | undefined)) => Observable<(FieldsSelection<notifications_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "notifications" */
delete_notifications_by_pk: ((args: {id: Scalars['uuid']}) => notificationsObservableChain & {get: <R extends notificationsRequest>(request: R, defaultValue?: (FieldsSelection<notifications, R> | undefined)) => Observable<(FieldsSelection<notifications, R> | undefined)>}),
    
/** delete data from the table: "service_enums" */
delete_service_enums: ((args: {
/** filter the rows which have to be deleted */
where: service_enums_bool_exp}) => service_enums_mutation_responseObservableChain & {get: <R extends service_enums_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<service_enums_mutation_response, R> | undefined)) => Observable<(FieldsSelection<service_enums_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "service_enums" */
delete_service_enums_by_pk: ((args: {service: Scalars['String']}) => service_enumsObservableChain & {get: <R extends service_enumsRequest>(request: R, defaultValue?: (FieldsSelection<service_enums, R> | undefined)) => Observable<(FieldsSelection<service_enums, R> | undefined)>}),
    
/** delete data from the table: "services" */
delete_services: ((args: {
/** filter the rows which have to be deleted */
where: services_bool_exp}) => services_mutation_responseObservableChain & {get: <R extends services_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<services_mutation_response, R> | undefined)) => Observable<(FieldsSelection<services_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "services" */
delete_services_by_pk: ((args: {id: Scalars['uuid']}) => servicesObservableChain & {get: <R extends servicesRequest>(request: R, defaultValue?: (FieldsSelection<services, R> | undefined)) => Observable<(FieldsSelection<services, R> | undefined)>}),
    
/** delete data from the table: "severity_enums" */
delete_severity_enums: ((args: {
/** filter the rows which have to be deleted */
where: severity_enums_bool_exp}) => severity_enums_mutation_responseObservableChain & {get: <R extends severity_enums_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<severity_enums_mutation_response, R> | undefined)) => Observable<(FieldsSelection<severity_enums_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "severity_enums" */
delete_severity_enums_by_pk: ((args: {severity: Scalars['String']}) => severity_enumsObservableChain & {get: <R extends severity_enumsRequest>(request: R, defaultValue?: (FieldsSelection<severity_enums, R> | undefined)) => Observable<(FieldsSelection<severity_enums, R> | undefined)>}),
    
/** insert data into the table: "notifications" */
insert_notifications: ((args: {
/** the rows to be inserted */
objects: notifications_insert_input[],
/** on conflict condition */
on_conflict?: (notifications_on_conflict | null)}) => notifications_mutation_responseObservableChain & {get: <R extends notifications_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<notifications_mutation_response, R> | undefined)) => Observable<(FieldsSelection<notifications_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "notifications" */
insert_notifications_one: ((args: {
/** the row to be inserted */
object: notifications_insert_input,
/** on conflict condition */
on_conflict?: (notifications_on_conflict | null)}) => notificationsObservableChain & {get: <R extends notificationsRequest>(request: R, defaultValue?: (FieldsSelection<notifications, R> | undefined)) => Observable<(FieldsSelection<notifications, R> | undefined)>}),
    
/** insert data into the table: "service_enums" */
insert_service_enums: ((args: {
/** the rows to be inserted */
objects: service_enums_insert_input[],
/** on conflict condition */
on_conflict?: (service_enums_on_conflict | null)}) => service_enums_mutation_responseObservableChain & {get: <R extends service_enums_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<service_enums_mutation_response, R> | undefined)) => Observable<(FieldsSelection<service_enums_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "service_enums" */
insert_service_enums_one: ((args: {
/** the row to be inserted */
object: service_enums_insert_input,
/** on conflict condition */
on_conflict?: (service_enums_on_conflict | null)}) => service_enumsObservableChain & {get: <R extends service_enumsRequest>(request: R, defaultValue?: (FieldsSelection<service_enums, R> | undefined)) => Observable<(FieldsSelection<service_enums, R> | undefined)>}),
    
/** insert data into the table: "services" */
insert_services: ((args: {
/** the rows to be inserted */
objects: services_insert_input[],
/** on conflict condition */
on_conflict?: (services_on_conflict | null)}) => services_mutation_responseObservableChain & {get: <R extends services_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<services_mutation_response, R> | undefined)) => Observable<(FieldsSelection<services_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "services" */
insert_services_one: ((args: {
/** the row to be inserted */
object: services_insert_input,
/** on conflict condition */
on_conflict?: (services_on_conflict | null)}) => servicesObservableChain & {get: <R extends servicesRequest>(request: R, defaultValue?: (FieldsSelection<services, R> | undefined)) => Observable<(FieldsSelection<services, R> | undefined)>}),
    
/** insert data into the table: "severity_enums" */
insert_severity_enums: ((args: {
/** the rows to be inserted */
objects: severity_enums_insert_input[],
/** on conflict condition */
on_conflict?: (severity_enums_on_conflict | null)}) => severity_enums_mutation_responseObservableChain & {get: <R extends severity_enums_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<severity_enums_mutation_response, R> | undefined)) => Observable<(FieldsSelection<severity_enums_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "severity_enums" */
insert_severity_enums_one: ((args: {
/** the row to be inserted */
object: severity_enums_insert_input,
/** on conflict condition */
on_conflict?: (severity_enums_on_conflict | null)}) => severity_enumsObservableChain & {get: <R extends severity_enumsRequest>(request: R, defaultValue?: (FieldsSelection<severity_enums, R> | undefined)) => Observable<(FieldsSelection<severity_enums, R> | undefined)>}),
    
/** update data of the table: "notifications" */
update_notifications: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (notifications_set_input | null),
/** filter the rows which have to be updated */
where: notifications_bool_exp}) => notifications_mutation_responseObservableChain & {get: <R extends notifications_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<notifications_mutation_response, R> | undefined)) => Observable<(FieldsSelection<notifications_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "notifications" */
update_notifications_by_pk: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (notifications_set_input | null),pk_columns: notifications_pk_columns_input}) => notificationsObservableChain & {get: <R extends notificationsRequest>(request: R, defaultValue?: (FieldsSelection<notifications, R> | undefined)) => Observable<(FieldsSelection<notifications, R> | undefined)>}),
    
/** update data of the table: "service_enums" */
update_service_enums: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (service_enums_set_input | null),
/** filter the rows which have to be updated */
where: service_enums_bool_exp}) => service_enums_mutation_responseObservableChain & {get: <R extends service_enums_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<service_enums_mutation_response, R> | undefined)) => Observable<(FieldsSelection<service_enums_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "service_enums" */
update_service_enums_by_pk: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (service_enums_set_input | null),pk_columns: service_enums_pk_columns_input}) => service_enumsObservableChain & {get: <R extends service_enumsRequest>(request: R, defaultValue?: (FieldsSelection<service_enums, R> | undefined)) => Observable<(FieldsSelection<service_enums, R> | undefined)>}),
    
/** update data of the table: "services" */
update_services: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (services_set_input | null),
/** filter the rows which have to be updated */
where: services_bool_exp}) => services_mutation_responseObservableChain & {get: <R extends services_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<services_mutation_response, R> | undefined)) => Observable<(FieldsSelection<services_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "services" */
update_services_by_pk: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (services_set_input | null),pk_columns: services_pk_columns_input}) => servicesObservableChain & {get: <R extends servicesRequest>(request: R, defaultValue?: (FieldsSelection<services, R> | undefined)) => Observable<(FieldsSelection<services, R> | undefined)>}),
    
/** update data of the table: "severity_enums" */
update_severity_enums: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (severity_enums_set_input | null),
/** filter the rows which have to be updated */
where: severity_enums_bool_exp}) => severity_enums_mutation_responseObservableChain & {get: <R extends severity_enums_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<severity_enums_mutation_response, R> | undefined)) => Observable<(FieldsSelection<severity_enums_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "severity_enums" */
update_severity_enums_by_pk: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (severity_enums_set_input | null),pk_columns: severity_enums_pk_columns_input}) => severity_enumsObservableChain & {get: <R extends severity_enumsRequest>(request: R, defaultValue?: (FieldsSelection<severity_enums, R> | undefined)) => Observable<(FieldsSelection<severity_enums, R> | undefined)>})
}


/** columns and relationships of "notifications" */
export interface notificationsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Promise<Scalars['uuid']>}),
    path: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    seen: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    
/** An object relationship */
service: (servicesPromiseChain & {get: <R extends servicesRequest>(request: R, defaultValue?: FieldsSelection<services, R>) => Promise<FieldsSelection<services, R>>}),
    service_id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Promise<Scalars['uuid']>}),
    severity: ({get: (request?: boolean|number, defaultValue?: severity_enums_enum) => Promise<severity_enums_enum>}),
    subject_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>})
}


/** columns and relationships of "notifications" */
export interface notificationsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Observable<Scalars['uuid']>}),
    path: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    seen: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    
/** An object relationship */
service: (servicesObservableChain & {get: <R extends servicesRequest>(request: R, defaultValue?: FieldsSelection<services, R>) => Observable<FieldsSelection<services, R>>}),
    service_id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Observable<Scalars['uuid']>}),
    severity: ({get: (request?: boolean|number, defaultValue?: severity_enums_enum) => Observable<severity_enums_enum>}),
    subject_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>})
}


/** aggregated selection of "notifications" */
export interface notifications_aggregatePromiseChain{
    aggregate: (notifications_aggregate_fieldsPromiseChain & {get: <R extends notifications_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<notifications_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<notifications_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends notificationsRequest>(request: R, defaultValue?: FieldsSelection<notifications, R>[]) => Promise<FieldsSelection<notifications, R>[]>})
}


/** aggregated selection of "notifications" */
export interface notifications_aggregateObservableChain{
    aggregate: (notifications_aggregate_fieldsObservableChain & {get: <R extends notifications_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<notifications_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<notifications_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends notificationsRequest>(request: R, defaultValue?: FieldsSelection<notifications, R>[]) => Observable<FieldsSelection<notifications, R>[]>})
}


/** aggregate fields of "notifications" */
export interface notifications_aggregate_fieldsPromiseChain{
    count: ((args?: {columns?: (notifications_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (notifications_max_fieldsPromiseChain & {get: <R extends notifications_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<notifications_max_fields, R> | undefined)) => Promise<(FieldsSelection<notifications_max_fields, R> | undefined)>}),
    min: (notifications_min_fieldsPromiseChain & {get: <R extends notifications_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<notifications_min_fields, R> | undefined)) => Promise<(FieldsSelection<notifications_min_fields, R> | undefined)>})
}


/** aggregate fields of "notifications" */
export interface notifications_aggregate_fieldsObservableChain{
    count: ((args?: {columns?: (notifications_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (notifications_max_fieldsObservableChain & {get: <R extends notifications_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<notifications_max_fields, R> | undefined)) => Observable<(FieldsSelection<notifications_max_fields, R> | undefined)>}),
    min: (notifications_min_fieldsObservableChain & {get: <R extends notifications_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<notifications_min_fields, R> | undefined)) => Observable<(FieldsSelection<notifications_min_fields, R> | undefined)>})
}


/** aggregate max on columns */
export interface notifications_max_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>}),
    path: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    service_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>}),
    subject_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>})
}


/** aggregate max on columns */
export interface notifications_max_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>}),
    path: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    service_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>}),
    subject_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>})
}


/** aggregate min on columns */
export interface notifications_min_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>}),
    path: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    service_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>}),
    subject_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>})
}


/** aggregate min on columns */
export interface notifications_min_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>}),
    path: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    service_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>}),
    subject_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>})
}


/** response of any mutation on the table "notifications" */
export interface notifications_mutation_responsePromiseChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends notificationsRequest>(request: R, defaultValue?: FieldsSelection<notifications, R>[]) => Promise<FieldsSelection<notifications, R>[]>})
}


/** response of any mutation on the table "notifications" */
export interface notifications_mutation_responseObservableChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends notificationsRequest>(request: R, defaultValue?: FieldsSelection<notifications, R>[]) => Observable<FieldsSelection<notifications, R>[]>})
}

export interface query_rootPromiseChain{
    
/** fetch data from the table: "notifications" */
notifications: ((args?: {
/** distinct select on columns */
distinct_on?: (notifications_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (notifications_order_by[] | null),
/** filter the rows returned */
where?: (notifications_bool_exp | null)}) => {get: <R extends notificationsRequest>(request: R, defaultValue?: FieldsSelection<notifications, R>[]) => Promise<FieldsSelection<notifications, R>[]>})&({get: <R extends notificationsRequest>(request: R, defaultValue?: FieldsSelection<notifications, R>[]) => Promise<FieldsSelection<notifications, R>[]>}),
    
/** fetch aggregated fields from the table: "notifications" */
notifications_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (notifications_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (notifications_order_by[] | null),
/** filter the rows returned */
where?: (notifications_bool_exp | null)}) => notifications_aggregatePromiseChain & {get: <R extends notifications_aggregateRequest>(request: R, defaultValue?: FieldsSelection<notifications_aggregate, R>) => Promise<FieldsSelection<notifications_aggregate, R>>})&(notifications_aggregatePromiseChain & {get: <R extends notifications_aggregateRequest>(request: R, defaultValue?: FieldsSelection<notifications_aggregate, R>) => Promise<FieldsSelection<notifications_aggregate, R>>}),
    
/** fetch data from the table: "notifications" using primary key columns */
notifications_by_pk: ((args: {id: Scalars['uuid']}) => notificationsPromiseChain & {get: <R extends notificationsRequest>(request: R, defaultValue?: (FieldsSelection<notifications, R> | undefined)) => Promise<(FieldsSelection<notifications, R> | undefined)>}),
    
/** fetch data from the table: "service_enums" */
service_enums: ((args?: {
/** distinct select on columns */
distinct_on?: (service_enums_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (service_enums_order_by[] | null),
/** filter the rows returned */
where?: (service_enums_bool_exp | null)}) => {get: <R extends service_enumsRequest>(request: R, defaultValue?: FieldsSelection<service_enums, R>[]) => Promise<FieldsSelection<service_enums, R>[]>})&({get: <R extends service_enumsRequest>(request: R, defaultValue?: FieldsSelection<service_enums, R>[]) => Promise<FieldsSelection<service_enums, R>[]>}),
    
/** fetch aggregated fields from the table: "service_enums" */
service_enums_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (service_enums_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (service_enums_order_by[] | null),
/** filter the rows returned */
where?: (service_enums_bool_exp | null)}) => service_enums_aggregatePromiseChain & {get: <R extends service_enums_aggregateRequest>(request: R, defaultValue?: FieldsSelection<service_enums_aggregate, R>) => Promise<FieldsSelection<service_enums_aggregate, R>>})&(service_enums_aggregatePromiseChain & {get: <R extends service_enums_aggregateRequest>(request: R, defaultValue?: FieldsSelection<service_enums_aggregate, R>) => Promise<FieldsSelection<service_enums_aggregate, R>>}),
    
/** fetch data from the table: "service_enums" using primary key columns */
service_enums_by_pk: ((args: {service: Scalars['String']}) => service_enumsPromiseChain & {get: <R extends service_enumsRequest>(request: R, defaultValue?: (FieldsSelection<service_enums, R> | undefined)) => Promise<(FieldsSelection<service_enums, R> | undefined)>}),
    
/** fetch data from the table: "services" */
services: ((args?: {
/** distinct select on columns */
distinct_on?: (services_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (services_order_by[] | null),
/** filter the rows returned */
where?: (services_bool_exp | null)}) => {get: <R extends servicesRequest>(request: R, defaultValue?: FieldsSelection<services, R>[]) => Promise<FieldsSelection<services, R>[]>})&({get: <R extends servicesRequest>(request: R, defaultValue?: FieldsSelection<services, R>[]) => Promise<FieldsSelection<services, R>[]>}),
    
/** fetch aggregated fields from the table: "services" */
services_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (services_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (services_order_by[] | null),
/** filter the rows returned */
where?: (services_bool_exp | null)}) => services_aggregatePromiseChain & {get: <R extends services_aggregateRequest>(request: R, defaultValue?: FieldsSelection<services_aggregate, R>) => Promise<FieldsSelection<services_aggregate, R>>})&(services_aggregatePromiseChain & {get: <R extends services_aggregateRequest>(request: R, defaultValue?: FieldsSelection<services_aggregate, R>) => Promise<FieldsSelection<services_aggregate, R>>}),
    
/** fetch data from the table: "services" using primary key columns */
services_by_pk: ((args: {id: Scalars['uuid']}) => servicesPromiseChain & {get: <R extends servicesRequest>(request: R, defaultValue?: (FieldsSelection<services, R> | undefined)) => Promise<(FieldsSelection<services, R> | undefined)>}),
    
/** fetch data from the table: "severity_enums" */
severity_enums: ((args?: {
/** distinct select on columns */
distinct_on?: (severity_enums_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (severity_enums_order_by[] | null),
/** filter the rows returned */
where?: (severity_enums_bool_exp | null)}) => {get: <R extends severity_enumsRequest>(request: R, defaultValue?: FieldsSelection<severity_enums, R>[]) => Promise<FieldsSelection<severity_enums, R>[]>})&({get: <R extends severity_enumsRequest>(request: R, defaultValue?: FieldsSelection<severity_enums, R>[]) => Promise<FieldsSelection<severity_enums, R>[]>}),
    
/** fetch aggregated fields from the table: "severity_enums" */
severity_enums_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (severity_enums_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (severity_enums_order_by[] | null),
/** filter the rows returned */
where?: (severity_enums_bool_exp | null)}) => severity_enums_aggregatePromiseChain & {get: <R extends severity_enums_aggregateRequest>(request: R, defaultValue?: FieldsSelection<severity_enums_aggregate, R>) => Promise<FieldsSelection<severity_enums_aggregate, R>>})&(severity_enums_aggregatePromiseChain & {get: <R extends severity_enums_aggregateRequest>(request: R, defaultValue?: FieldsSelection<severity_enums_aggregate, R>) => Promise<FieldsSelection<severity_enums_aggregate, R>>}),
    
/** fetch data from the table: "severity_enums" using primary key columns */
severity_enums_by_pk: ((args: {severity: Scalars['String']}) => severity_enumsPromiseChain & {get: <R extends severity_enumsRequest>(request: R, defaultValue?: (FieldsSelection<severity_enums, R> | undefined)) => Promise<(FieldsSelection<severity_enums, R> | undefined)>})
}

export interface query_rootObservableChain{
    
/** fetch data from the table: "notifications" */
notifications: ((args?: {
/** distinct select on columns */
distinct_on?: (notifications_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (notifications_order_by[] | null),
/** filter the rows returned */
where?: (notifications_bool_exp | null)}) => {get: <R extends notificationsRequest>(request: R, defaultValue?: FieldsSelection<notifications, R>[]) => Observable<FieldsSelection<notifications, R>[]>})&({get: <R extends notificationsRequest>(request: R, defaultValue?: FieldsSelection<notifications, R>[]) => Observable<FieldsSelection<notifications, R>[]>}),
    
/** fetch aggregated fields from the table: "notifications" */
notifications_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (notifications_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (notifications_order_by[] | null),
/** filter the rows returned */
where?: (notifications_bool_exp | null)}) => notifications_aggregateObservableChain & {get: <R extends notifications_aggregateRequest>(request: R, defaultValue?: FieldsSelection<notifications_aggregate, R>) => Observable<FieldsSelection<notifications_aggregate, R>>})&(notifications_aggregateObservableChain & {get: <R extends notifications_aggregateRequest>(request: R, defaultValue?: FieldsSelection<notifications_aggregate, R>) => Observable<FieldsSelection<notifications_aggregate, R>>}),
    
/** fetch data from the table: "notifications" using primary key columns */
notifications_by_pk: ((args: {id: Scalars['uuid']}) => notificationsObservableChain & {get: <R extends notificationsRequest>(request: R, defaultValue?: (FieldsSelection<notifications, R> | undefined)) => Observable<(FieldsSelection<notifications, R> | undefined)>}),
    
/** fetch data from the table: "service_enums" */
service_enums: ((args?: {
/** distinct select on columns */
distinct_on?: (service_enums_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (service_enums_order_by[] | null),
/** filter the rows returned */
where?: (service_enums_bool_exp | null)}) => {get: <R extends service_enumsRequest>(request: R, defaultValue?: FieldsSelection<service_enums, R>[]) => Observable<FieldsSelection<service_enums, R>[]>})&({get: <R extends service_enumsRequest>(request: R, defaultValue?: FieldsSelection<service_enums, R>[]) => Observable<FieldsSelection<service_enums, R>[]>}),
    
/** fetch aggregated fields from the table: "service_enums" */
service_enums_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (service_enums_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (service_enums_order_by[] | null),
/** filter the rows returned */
where?: (service_enums_bool_exp | null)}) => service_enums_aggregateObservableChain & {get: <R extends service_enums_aggregateRequest>(request: R, defaultValue?: FieldsSelection<service_enums_aggregate, R>) => Observable<FieldsSelection<service_enums_aggregate, R>>})&(service_enums_aggregateObservableChain & {get: <R extends service_enums_aggregateRequest>(request: R, defaultValue?: FieldsSelection<service_enums_aggregate, R>) => Observable<FieldsSelection<service_enums_aggregate, R>>}),
    
/** fetch data from the table: "service_enums" using primary key columns */
service_enums_by_pk: ((args: {service: Scalars['String']}) => service_enumsObservableChain & {get: <R extends service_enumsRequest>(request: R, defaultValue?: (FieldsSelection<service_enums, R> | undefined)) => Observable<(FieldsSelection<service_enums, R> | undefined)>}),
    
/** fetch data from the table: "services" */
services: ((args?: {
/** distinct select on columns */
distinct_on?: (services_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (services_order_by[] | null),
/** filter the rows returned */
where?: (services_bool_exp | null)}) => {get: <R extends servicesRequest>(request: R, defaultValue?: FieldsSelection<services, R>[]) => Observable<FieldsSelection<services, R>[]>})&({get: <R extends servicesRequest>(request: R, defaultValue?: FieldsSelection<services, R>[]) => Observable<FieldsSelection<services, R>[]>}),
    
/** fetch aggregated fields from the table: "services" */
services_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (services_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (services_order_by[] | null),
/** filter the rows returned */
where?: (services_bool_exp | null)}) => services_aggregateObservableChain & {get: <R extends services_aggregateRequest>(request: R, defaultValue?: FieldsSelection<services_aggregate, R>) => Observable<FieldsSelection<services_aggregate, R>>})&(services_aggregateObservableChain & {get: <R extends services_aggregateRequest>(request: R, defaultValue?: FieldsSelection<services_aggregate, R>) => Observable<FieldsSelection<services_aggregate, R>>}),
    
/** fetch data from the table: "services" using primary key columns */
services_by_pk: ((args: {id: Scalars['uuid']}) => servicesObservableChain & {get: <R extends servicesRequest>(request: R, defaultValue?: (FieldsSelection<services, R> | undefined)) => Observable<(FieldsSelection<services, R> | undefined)>}),
    
/** fetch data from the table: "severity_enums" */
severity_enums: ((args?: {
/** distinct select on columns */
distinct_on?: (severity_enums_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (severity_enums_order_by[] | null),
/** filter the rows returned */
where?: (severity_enums_bool_exp | null)}) => {get: <R extends severity_enumsRequest>(request: R, defaultValue?: FieldsSelection<severity_enums, R>[]) => Observable<FieldsSelection<severity_enums, R>[]>})&({get: <R extends severity_enumsRequest>(request: R, defaultValue?: FieldsSelection<severity_enums, R>[]) => Observable<FieldsSelection<severity_enums, R>[]>}),
    
/** fetch aggregated fields from the table: "severity_enums" */
severity_enums_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (severity_enums_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (severity_enums_order_by[] | null),
/** filter the rows returned */
where?: (severity_enums_bool_exp | null)}) => severity_enums_aggregateObservableChain & {get: <R extends severity_enums_aggregateRequest>(request: R, defaultValue?: FieldsSelection<severity_enums_aggregate, R>) => Observable<FieldsSelection<severity_enums_aggregate, R>>})&(severity_enums_aggregateObservableChain & {get: <R extends severity_enums_aggregateRequest>(request: R, defaultValue?: FieldsSelection<severity_enums_aggregate, R>) => Observable<FieldsSelection<severity_enums_aggregate, R>>}),
    
/** fetch data from the table: "severity_enums" using primary key columns */
severity_enums_by_pk: ((args: {severity: Scalars['String']}) => severity_enumsObservableChain & {get: <R extends severity_enumsRequest>(request: R, defaultValue?: (FieldsSelection<severity_enums, R> | undefined)) => Observable<(FieldsSelection<severity_enums, R> | undefined)>})
}


/** columns and relationships of "service_enums" */
export interface service_enumsPromiseChain{
    description: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    service: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}


/** columns and relationships of "service_enums" */
export interface service_enumsObservableChain{
    description: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    service: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}


/** aggregated selection of "service_enums" */
export interface service_enums_aggregatePromiseChain{
    aggregate: (service_enums_aggregate_fieldsPromiseChain & {get: <R extends service_enums_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<service_enums_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<service_enums_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends service_enumsRequest>(request: R, defaultValue?: FieldsSelection<service_enums, R>[]) => Promise<FieldsSelection<service_enums, R>[]>})
}


/** aggregated selection of "service_enums" */
export interface service_enums_aggregateObservableChain{
    aggregate: (service_enums_aggregate_fieldsObservableChain & {get: <R extends service_enums_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<service_enums_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<service_enums_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends service_enumsRequest>(request: R, defaultValue?: FieldsSelection<service_enums, R>[]) => Observable<FieldsSelection<service_enums, R>[]>})
}


/** aggregate fields of "service_enums" */
export interface service_enums_aggregate_fieldsPromiseChain{
    count: ((args?: {columns?: (service_enums_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (service_enums_max_fieldsPromiseChain & {get: <R extends service_enums_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<service_enums_max_fields, R> | undefined)) => Promise<(FieldsSelection<service_enums_max_fields, R> | undefined)>}),
    min: (service_enums_min_fieldsPromiseChain & {get: <R extends service_enums_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<service_enums_min_fields, R> | undefined)) => Promise<(FieldsSelection<service_enums_min_fields, R> | undefined)>})
}


/** aggregate fields of "service_enums" */
export interface service_enums_aggregate_fieldsObservableChain{
    count: ((args?: {columns?: (service_enums_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (service_enums_max_fieldsObservableChain & {get: <R extends service_enums_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<service_enums_max_fields, R> | undefined)) => Observable<(FieldsSelection<service_enums_max_fields, R> | undefined)>}),
    min: (service_enums_min_fieldsObservableChain & {get: <R extends service_enums_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<service_enums_min_fields, R> | undefined)) => Observable<(FieldsSelection<service_enums_min_fields, R> | undefined)>})
}


/** aggregate max on columns */
export interface service_enums_max_fieldsPromiseChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    service: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate max on columns */
export interface service_enums_max_fieldsObservableChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    service: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface service_enums_min_fieldsPromiseChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    service: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface service_enums_min_fieldsObservableChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    service: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** response of any mutation on the table "service_enums" */
export interface service_enums_mutation_responsePromiseChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends service_enumsRequest>(request: R, defaultValue?: FieldsSelection<service_enums, R>[]) => Promise<FieldsSelection<service_enums, R>[]>})
}


/** response of any mutation on the table "service_enums" */
export interface service_enums_mutation_responseObservableChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends service_enumsRequest>(request: R, defaultValue?: FieldsSelection<service_enums, R>[]) => Observable<FieldsSelection<service_enums, R>[]>})
}


/** columns and relationships of "services" */
export interface servicesPromiseChain{
    customer_id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Promise<Scalars['uuid']>}),
    email_ch: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    enabled: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Promise<Scalars['uuid']>}),
    message: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    push_ch: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    service: ({get: (request?: boolean|number, defaultValue?: service_enums_enum) => Promise<service_enums_enum>}),
    sms_ch: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    title: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    user_id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Promise<Scalars['uuid']>})
}


/** columns and relationships of "services" */
export interface servicesObservableChain{
    customer_id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Observable<Scalars['uuid']>}),
    email_ch: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    enabled: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Observable<Scalars['uuid']>}),
    message: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    push_ch: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    service: ({get: (request?: boolean|number, defaultValue?: service_enums_enum) => Observable<service_enums_enum>}),
    sms_ch: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    title: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    user_id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Observable<Scalars['uuid']>})
}


/** aggregated selection of "services" */
export interface services_aggregatePromiseChain{
    aggregate: (services_aggregate_fieldsPromiseChain & {get: <R extends services_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<services_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<services_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends servicesRequest>(request: R, defaultValue?: FieldsSelection<services, R>[]) => Promise<FieldsSelection<services, R>[]>})
}


/** aggregated selection of "services" */
export interface services_aggregateObservableChain{
    aggregate: (services_aggregate_fieldsObservableChain & {get: <R extends services_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<services_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<services_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends servicesRequest>(request: R, defaultValue?: FieldsSelection<services, R>[]) => Observable<FieldsSelection<services, R>[]>})
}


/** aggregate fields of "services" */
export interface services_aggregate_fieldsPromiseChain{
    count: ((args?: {columns?: (services_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (services_max_fieldsPromiseChain & {get: <R extends services_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<services_max_fields, R> | undefined)) => Promise<(FieldsSelection<services_max_fields, R> | undefined)>}),
    min: (services_min_fieldsPromiseChain & {get: <R extends services_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<services_min_fields, R> | undefined)) => Promise<(FieldsSelection<services_min_fields, R> | undefined)>})
}


/** aggregate fields of "services" */
export interface services_aggregate_fieldsObservableChain{
    count: ((args?: {columns?: (services_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (services_max_fieldsObservableChain & {get: <R extends services_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<services_max_fields, R> | undefined)) => Observable<(FieldsSelection<services_max_fields, R> | undefined)>}),
    min: (services_min_fieldsObservableChain & {get: <R extends services_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<services_min_fields, R> | undefined)) => Observable<(FieldsSelection<services_min_fields, R> | undefined)>})
}


/** aggregate max on columns */
export interface services_max_fieldsPromiseChain{
    customer_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>}),
    message: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    title: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    user_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>})
}


/** aggregate max on columns */
export interface services_max_fieldsObservableChain{
    customer_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>}),
    message: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    title: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    user_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>})
}


/** aggregate min on columns */
export interface services_min_fieldsPromiseChain{
    customer_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>}),
    message: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    title: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    user_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>})
}


/** aggregate min on columns */
export interface services_min_fieldsObservableChain{
    customer_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>}),
    message: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    title: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    user_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>})
}


/** response of any mutation on the table "services" */
export interface services_mutation_responsePromiseChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends servicesRequest>(request: R, defaultValue?: FieldsSelection<services, R>[]) => Promise<FieldsSelection<services, R>[]>})
}


/** response of any mutation on the table "services" */
export interface services_mutation_responseObservableChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends servicesRequest>(request: R, defaultValue?: FieldsSelection<services, R>[]) => Observable<FieldsSelection<services, R>[]>})
}


/** columns and relationships of "severity_enums" */
export interface severity_enumsPromiseChain{
    description: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    severity: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}


/** columns and relationships of "severity_enums" */
export interface severity_enumsObservableChain{
    description: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    severity: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}


/** aggregated selection of "severity_enums" */
export interface severity_enums_aggregatePromiseChain{
    aggregate: (severity_enums_aggregate_fieldsPromiseChain & {get: <R extends severity_enums_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<severity_enums_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<severity_enums_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends severity_enumsRequest>(request: R, defaultValue?: FieldsSelection<severity_enums, R>[]) => Promise<FieldsSelection<severity_enums, R>[]>})
}


/** aggregated selection of "severity_enums" */
export interface severity_enums_aggregateObservableChain{
    aggregate: (severity_enums_aggregate_fieldsObservableChain & {get: <R extends severity_enums_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<severity_enums_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<severity_enums_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends severity_enumsRequest>(request: R, defaultValue?: FieldsSelection<severity_enums, R>[]) => Observable<FieldsSelection<severity_enums, R>[]>})
}


/** aggregate fields of "severity_enums" */
export interface severity_enums_aggregate_fieldsPromiseChain{
    count: ((args?: {columns?: (severity_enums_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (severity_enums_max_fieldsPromiseChain & {get: <R extends severity_enums_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<severity_enums_max_fields, R> | undefined)) => Promise<(FieldsSelection<severity_enums_max_fields, R> | undefined)>}),
    min: (severity_enums_min_fieldsPromiseChain & {get: <R extends severity_enums_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<severity_enums_min_fields, R> | undefined)) => Promise<(FieldsSelection<severity_enums_min_fields, R> | undefined)>})
}


/** aggregate fields of "severity_enums" */
export interface severity_enums_aggregate_fieldsObservableChain{
    count: ((args?: {columns?: (severity_enums_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (severity_enums_max_fieldsObservableChain & {get: <R extends severity_enums_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<severity_enums_max_fields, R> | undefined)) => Observable<(FieldsSelection<severity_enums_max_fields, R> | undefined)>}),
    min: (severity_enums_min_fieldsObservableChain & {get: <R extends severity_enums_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<severity_enums_min_fields, R> | undefined)) => Observable<(FieldsSelection<severity_enums_min_fields, R> | undefined)>})
}


/** aggregate max on columns */
export interface severity_enums_max_fieldsPromiseChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    severity: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate max on columns */
export interface severity_enums_max_fieldsObservableChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    severity: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface severity_enums_min_fieldsPromiseChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    severity: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface severity_enums_min_fieldsObservableChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    severity: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** response of any mutation on the table "severity_enums" */
export interface severity_enums_mutation_responsePromiseChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends severity_enumsRequest>(request: R, defaultValue?: FieldsSelection<severity_enums, R>[]) => Promise<FieldsSelection<severity_enums, R>[]>})
}


/** response of any mutation on the table "severity_enums" */
export interface severity_enums_mutation_responseObservableChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends severity_enumsRequest>(request: R, defaultValue?: FieldsSelection<severity_enums, R>[]) => Observable<FieldsSelection<severity_enums, R>[]>})
}

export interface subscription_rootPromiseChain{
    
/** fetch data from the table: "notifications" */
notifications: ((args?: {
/** distinct select on columns */
distinct_on?: (notifications_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (notifications_order_by[] | null),
/** filter the rows returned */
where?: (notifications_bool_exp | null)}) => {get: <R extends notificationsRequest>(request: R, defaultValue?: FieldsSelection<notifications, R>[]) => Promise<FieldsSelection<notifications, R>[]>})&({get: <R extends notificationsRequest>(request: R, defaultValue?: FieldsSelection<notifications, R>[]) => Promise<FieldsSelection<notifications, R>[]>}),
    
/** fetch aggregated fields from the table: "notifications" */
notifications_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (notifications_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (notifications_order_by[] | null),
/** filter the rows returned */
where?: (notifications_bool_exp | null)}) => notifications_aggregatePromiseChain & {get: <R extends notifications_aggregateRequest>(request: R, defaultValue?: FieldsSelection<notifications_aggregate, R>) => Promise<FieldsSelection<notifications_aggregate, R>>})&(notifications_aggregatePromiseChain & {get: <R extends notifications_aggregateRequest>(request: R, defaultValue?: FieldsSelection<notifications_aggregate, R>) => Promise<FieldsSelection<notifications_aggregate, R>>}),
    
/** fetch data from the table: "notifications" using primary key columns */
notifications_by_pk: ((args: {id: Scalars['uuid']}) => notificationsPromiseChain & {get: <R extends notificationsRequest>(request: R, defaultValue?: (FieldsSelection<notifications, R> | undefined)) => Promise<(FieldsSelection<notifications, R> | undefined)>}),
    
/** fetch data from the table: "service_enums" */
service_enums: ((args?: {
/** distinct select on columns */
distinct_on?: (service_enums_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (service_enums_order_by[] | null),
/** filter the rows returned */
where?: (service_enums_bool_exp | null)}) => {get: <R extends service_enumsRequest>(request: R, defaultValue?: FieldsSelection<service_enums, R>[]) => Promise<FieldsSelection<service_enums, R>[]>})&({get: <R extends service_enumsRequest>(request: R, defaultValue?: FieldsSelection<service_enums, R>[]) => Promise<FieldsSelection<service_enums, R>[]>}),
    
/** fetch aggregated fields from the table: "service_enums" */
service_enums_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (service_enums_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (service_enums_order_by[] | null),
/** filter the rows returned */
where?: (service_enums_bool_exp | null)}) => service_enums_aggregatePromiseChain & {get: <R extends service_enums_aggregateRequest>(request: R, defaultValue?: FieldsSelection<service_enums_aggregate, R>) => Promise<FieldsSelection<service_enums_aggregate, R>>})&(service_enums_aggregatePromiseChain & {get: <R extends service_enums_aggregateRequest>(request: R, defaultValue?: FieldsSelection<service_enums_aggregate, R>) => Promise<FieldsSelection<service_enums_aggregate, R>>}),
    
/** fetch data from the table: "service_enums" using primary key columns */
service_enums_by_pk: ((args: {service: Scalars['String']}) => service_enumsPromiseChain & {get: <R extends service_enumsRequest>(request: R, defaultValue?: (FieldsSelection<service_enums, R> | undefined)) => Promise<(FieldsSelection<service_enums, R> | undefined)>}),
    
/** fetch data from the table: "services" */
services: ((args?: {
/** distinct select on columns */
distinct_on?: (services_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (services_order_by[] | null),
/** filter the rows returned */
where?: (services_bool_exp | null)}) => {get: <R extends servicesRequest>(request: R, defaultValue?: FieldsSelection<services, R>[]) => Promise<FieldsSelection<services, R>[]>})&({get: <R extends servicesRequest>(request: R, defaultValue?: FieldsSelection<services, R>[]) => Promise<FieldsSelection<services, R>[]>}),
    
/** fetch aggregated fields from the table: "services" */
services_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (services_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (services_order_by[] | null),
/** filter the rows returned */
where?: (services_bool_exp | null)}) => services_aggregatePromiseChain & {get: <R extends services_aggregateRequest>(request: R, defaultValue?: FieldsSelection<services_aggregate, R>) => Promise<FieldsSelection<services_aggregate, R>>})&(services_aggregatePromiseChain & {get: <R extends services_aggregateRequest>(request: R, defaultValue?: FieldsSelection<services_aggregate, R>) => Promise<FieldsSelection<services_aggregate, R>>}),
    
/** fetch data from the table: "services" using primary key columns */
services_by_pk: ((args: {id: Scalars['uuid']}) => servicesPromiseChain & {get: <R extends servicesRequest>(request: R, defaultValue?: (FieldsSelection<services, R> | undefined)) => Promise<(FieldsSelection<services, R> | undefined)>}),
    
/** fetch data from the table: "severity_enums" */
severity_enums: ((args?: {
/** distinct select on columns */
distinct_on?: (severity_enums_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (severity_enums_order_by[] | null),
/** filter the rows returned */
where?: (severity_enums_bool_exp | null)}) => {get: <R extends severity_enumsRequest>(request: R, defaultValue?: FieldsSelection<severity_enums, R>[]) => Promise<FieldsSelection<severity_enums, R>[]>})&({get: <R extends severity_enumsRequest>(request: R, defaultValue?: FieldsSelection<severity_enums, R>[]) => Promise<FieldsSelection<severity_enums, R>[]>}),
    
/** fetch aggregated fields from the table: "severity_enums" */
severity_enums_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (severity_enums_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (severity_enums_order_by[] | null),
/** filter the rows returned */
where?: (severity_enums_bool_exp | null)}) => severity_enums_aggregatePromiseChain & {get: <R extends severity_enums_aggregateRequest>(request: R, defaultValue?: FieldsSelection<severity_enums_aggregate, R>) => Promise<FieldsSelection<severity_enums_aggregate, R>>})&(severity_enums_aggregatePromiseChain & {get: <R extends severity_enums_aggregateRequest>(request: R, defaultValue?: FieldsSelection<severity_enums_aggregate, R>) => Promise<FieldsSelection<severity_enums_aggregate, R>>}),
    
/** fetch data from the table: "severity_enums" using primary key columns */
severity_enums_by_pk: ((args: {severity: Scalars['String']}) => severity_enumsPromiseChain & {get: <R extends severity_enumsRequest>(request: R, defaultValue?: (FieldsSelection<severity_enums, R> | undefined)) => Promise<(FieldsSelection<severity_enums, R> | undefined)>})
}

export interface subscription_rootObservableChain{
    
/** fetch data from the table: "notifications" */
notifications: ((args?: {
/** distinct select on columns */
distinct_on?: (notifications_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (notifications_order_by[] | null),
/** filter the rows returned */
where?: (notifications_bool_exp | null)}) => {get: <R extends notificationsRequest>(request: R, defaultValue?: FieldsSelection<notifications, R>[]) => Observable<FieldsSelection<notifications, R>[]>})&({get: <R extends notificationsRequest>(request: R, defaultValue?: FieldsSelection<notifications, R>[]) => Observable<FieldsSelection<notifications, R>[]>}),
    
/** fetch aggregated fields from the table: "notifications" */
notifications_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (notifications_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (notifications_order_by[] | null),
/** filter the rows returned */
where?: (notifications_bool_exp | null)}) => notifications_aggregateObservableChain & {get: <R extends notifications_aggregateRequest>(request: R, defaultValue?: FieldsSelection<notifications_aggregate, R>) => Observable<FieldsSelection<notifications_aggregate, R>>})&(notifications_aggregateObservableChain & {get: <R extends notifications_aggregateRequest>(request: R, defaultValue?: FieldsSelection<notifications_aggregate, R>) => Observable<FieldsSelection<notifications_aggregate, R>>}),
    
/** fetch data from the table: "notifications" using primary key columns */
notifications_by_pk: ((args: {id: Scalars['uuid']}) => notificationsObservableChain & {get: <R extends notificationsRequest>(request: R, defaultValue?: (FieldsSelection<notifications, R> | undefined)) => Observable<(FieldsSelection<notifications, R> | undefined)>}),
    
/** fetch data from the table: "service_enums" */
service_enums: ((args?: {
/** distinct select on columns */
distinct_on?: (service_enums_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (service_enums_order_by[] | null),
/** filter the rows returned */
where?: (service_enums_bool_exp | null)}) => {get: <R extends service_enumsRequest>(request: R, defaultValue?: FieldsSelection<service_enums, R>[]) => Observable<FieldsSelection<service_enums, R>[]>})&({get: <R extends service_enumsRequest>(request: R, defaultValue?: FieldsSelection<service_enums, R>[]) => Observable<FieldsSelection<service_enums, R>[]>}),
    
/** fetch aggregated fields from the table: "service_enums" */
service_enums_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (service_enums_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (service_enums_order_by[] | null),
/** filter the rows returned */
where?: (service_enums_bool_exp | null)}) => service_enums_aggregateObservableChain & {get: <R extends service_enums_aggregateRequest>(request: R, defaultValue?: FieldsSelection<service_enums_aggregate, R>) => Observable<FieldsSelection<service_enums_aggregate, R>>})&(service_enums_aggregateObservableChain & {get: <R extends service_enums_aggregateRequest>(request: R, defaultValue?: FieldsSelection<service_enums_aggregate, R>) => Observable<FieldsSelection<service_enums_aggregate, R>>}),
    
/** fetch data from the table: "service_enums" using primary key columns */
service_enums_by_pk: ((args: {service: Scalars['String']}) => service_enumsObservableChain & {get: <R extends service_enumsRequest>(request: R, defaultValue?: (FieldsSelection<service_enums, R> | undefined)) => Observable<(FieldsSelection<service_enums, R> | undefined)>}),
    
/** fetch data from the table: "services" */
services: ((args?: {
/** distinct select on columns */
distinct_on?: (services_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (services_order_by[] | null),
/** filter the rows returned */
where?: (services_bool_exp | null)}) => {get: <R extends servicesRequest>(request: R, defaultValue?: FieldsSelection<services, R>[]) => Observable<FieldsSelection<services, R>[]>})&({get: <R extends servicesRequest>(request: R, defaultValue?: FieldsSelection<services, R>[]) => Observable<FieldsSelection<services, R>[]>}),
    
/** fetch aggregated fields from the table: "services" */
services_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (services_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (services_order_by[] | null),
/** filter the rows returned */
where?: (services_bool_exp | null)}) => services_aggregateObservableChain & {get: <R extends services_aggregateRequest>(request: R, defaultValue?: FieldsSelection<services_aggregate, R>) => Observable<FieldsSelection<services_aggregate, R>>})&(services_aggregateObservableChain & {get: <R extends services_aggregateRequest>(request: R, defaultValue?: FieldsSelection<services_aggregate, R>) => Observable<FieldsSelection<services_aggregate, R>>}),
    
/** fetch data from the table: "services" using primary key columns */
services_by_pk: ((args: {id: Scalars['uuid']}) => servicesObservableChain & {get: <R extends servicesRequest>(request: R, defaultValue?: (FieldsSelection<services, R> | undefined)) => Observable<(FieldsSelection<services, R> | undefined)>}),
    
/** fetch data from the table: "severity_enums" */
severity_enums: ((args?: {
/** distinct select on columns */
distinct_on?: (severity_enums_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (severity_enums_order_by[] | null),
/** filter the rows returned */
where?: (severity_enums_bool_exp | null)}) => {get: <R extends severity_enumsRequest>(request: R, defaultValue?: FieldsSelection<severity_enums, R>[]) => Observable<FieldsSelection<severity_enums, R>[]>})&({get: <R extends severity_enumsRequest>(request: R, defaultValue?: FieldsSelection<severity_enums, R>[]) => Observable<FieldsSelection<severity_enums, R>[]>}),
    
/** fetch aggregated fields from the table: "severity_enums" */
severity_enums_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (severity_enums_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (severity_enums_order_by[] | null),
/** filter the rows returned */
where?: (severity_enums_bool_exp | null)}) => severity_enums_aggregateObservableChain & {get: <R extends severity_enums_aggregateRequest>(request: R, defaultValue?: FieldsSelection<severity_enums_aggregate, R>) => Observable<FieldsSelection<severity_enums_aggregate, R>>})&(severity_enums_aggregateObservableChain & {get: <R extends severity_enums_aggregateRequest>(request: R, defaultValue?: FieldsSelection<severity_enums_aggregate, R>) => Observable<FieldsSelection<severity_enums_aggregate, R>>}),
    
/** fetch data from the table: "severity_enums" using primary key columns */
severity_enums_by_pk: ((args: {severity: Scalars['String']}) => severity_enumsObservableChain & {get: <R extends severity_enumsRequest>(request: R, defaultValue?: (FieldsSelection<severity_enums, R> | undefined)) => Observable<(FieldsSelection<severity_enums, R> | undefined)>})
}