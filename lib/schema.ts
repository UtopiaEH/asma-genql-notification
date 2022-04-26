import type {FieldsSelection,Observable} from '@genql/runtime'

export type Scalars = {
    Boolean: boolean,
    Int: number,
    String: string,
    timestamptz: string,
    uuid: string,
}


/** mutation root */
export interface mutation_root {
    /** delete data from the table: "notifications" */
    delete_notifications?: notifications_mutation_response
    /** delete single row from the table: "notifications" */
    delete_notifications_by_pk?: notifications
    /** delete data from the table: "service" */
    delete_service?: service_mutation_response
    /** delete single row from the table: "service" */
    delete_service_by_pk?: service
    /** delete data from the table: "services" */
    delete_services?: services_mutation_response
    /** delete single row from the table: "services" */
    delete_services_by_pk?: services
    /** delete data from the table: "severity" */
    delete_severity?: severity_mutation_response
    /** delete single row from the table: "severity" */
    delete_severity_by_pk?: severity
    /** delete data from the table: "trigger" */
    delete_trigger?: trigger_mutation_response
    /** delete single row from the table: "trigger" */
    delete_trigger_by_pk?: trigger
    /** insert data into the table: "notifications" */
    insert_notifications?: notifications_mutation_response
    /** insert a single row into the table: "notifications" */
    insert_notifications_one?: notifications
    /** insert data into the table: "service" */
    insert_service?: service_mutation_response
    /** insert a single row into the table: "service" */
    insert_service_one?: service
    /** insert data into the table: "services" */
    insert_services?: services_mutation_response
    /** insert a single row into the table: "services" */
    insert_services_one?: services
    /** insert data into the table: "severity" */
    insert_severity?: severity_mutation_response
    /** insert a single row into the table: "severity" */
    insert_severity_one?: severity
    /** insert data into the table: "trigger" */
    insert_trigger?: trigger_mutation_response
    /** insert a single row into the table: "trigger" */
    insert_trigger_one?: trigger
    /** update data of the table: "notifications" */
    update_notifications?: notifications_mutation_response
    /** update single row of the table: "notifications" */
    update_notifications_by_pk?: notifications
    /** update data of the table: "service" */
    update_service?: service_mutation_response
    /** update single row of the table: "service" */
    update_service_by_pk?: service
    /** update data of the table: "services" */
    update_services?: services_mutation_response
    /** update single row of the table: "services" */
    update_services_by_pk?: services
    /** update data of the table: "severity" */
    update_severity?: severity_mutation_response
    /** update single row of the table: "severity" */
    update_severity_by_pk?: severity
    /** update data of the table: "trigger" */
    update_trigger?: trigger_mutation_response
    /** update single row of the table: "trigger" */
    update_trigger_by_pk?: trigger
    __typename: 'mutation_root'
}


/** columns and relationships of "notifications" */
export interface notifications {
    created_at: Scalars['timestamptz']
    deleted_at?: Scalars['timestamptz']
    id: Scalars['uuid']
    message: Scalars['String']
    seen: Scalars['Boolean']
    /** An object relationship */
    service: services
    service_id: Scalars['uuid']
    subject_id: Scalars['uuid']
    title: Scalars['String']
    trigger: trigger_enum
    updated_at: Scalars['timestamptz']
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
    created_at?: Scalars['timestamptz']
    deleted_at?: Scalars['timestamptz']
    id?: Scalars['uuid']
    message?: Scalars['String']
    service_id?: Scalars['uuid']
    subject_id?: Scalars['uuid']
    title?: Scalars['String']
    updated_at?: Scalars['timestamptz']
    __typename: 'notifications_max_fields'
}


/** aggregate min on columns */
export interface notifications_min_fields {
    created_at?: Scalars['timestamptz']
    deleted_at?: Scalars['timestamptz']
    id?: Scalars['uuid']
    message?: Scalars['String']
    service_id?: Scalars['uuid']
    subject_id?: Scalars['uuid']
    title?: Scalars['String']
    updated_at?: Scalars['timestamptz']
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
export type notifications_select_column = 'created_at' | 'deleted_at' | 'id' | 'message' | 'seen' | 'service_id' | 'subject_id' | 'title' | 'trigger' | 'updated_at'


/** update columns of table "notifications" */
export type notifications_update_column = 'created_at' | 'deleted_at' | 'id' | 'message' | 'seen' | 'service_id' | 'subject_id' | 'title' | 'trigger' | 'updated_at'


/** column ordering options */
export type order_by = 'asc' | 'asc_nulls_first' | 'asc_nulls_last' | 'desc' | 'desc_nulls_first' | 'desc_nulls_last'

export interface query_root {
    /** fetch data from the table: "notifications" */
    notifications: notifications[]
    /** An aggregate relationship */
    notifications_aggregate: notifications_aggregate
    /** fetch data from the table: "notifications" using primary key columns */
    notifications_by_pk?: notifications
    /** fetch data from the table: "service" */
    service: service[]
    /** fetch aggregated fields from the table: "service" */
    service_aggregate: service_aggregate
    /** fetch data from the table: "service" using primary key columns */
    service_by_pk?: service
    /** fetch data from the table: "services" */
    services: services[]
    /** fetch aggregated fields from the table: "services" */
    services_aggregate: services_aggregate
    /** fetch data from the table: "services" using primary key columns */
    services_by_pk?: services
    /** fetch data from the table: "severity" */
    severity: severity[]
    /** fetch aggregated fields from the table: "severity" */
    severity_aggregate: severity_aggregate
    /** fetch data from the table: "severity" using primary key columns */
    severity_by_pk?: severity
    /** fetch data from the table: "trigger" */
    trigger: trigger[]
    /** fetch aggregated fields from the table: "trigger" */
    trigger_aggregate: trigger_aggregate
    /** fetch data from the table: "trigger" using primary key columns */
    trigger_by_pk?: trigger
    __typename: 'query_root'
}


/** columns and relationships of "service" */
export interface service {
    description: Scalars['String']
    name: Scalars['String']
    __typename: 'service'
}


/** aggregated selection of "service" */
export interface service_aggregate {
    aggregate?: service_aggregate_fields
    nodes: service[]
    __typename: 'service_aggregate'
}


/** aggregate fields of "service" */
export interface service_aggregate_fields {
    count: Scalars['Int']
    max?: service_max_fields
    min?: service_min_fields
    __typename: 'service_aggregate_fields'
}


/** unique or primary key constraints on table "service" */
export type service_constraint = 'service_pkey'

export type service_enum = 'async_chat' | 'calendar' | 'qnr'


/** aggregate max on columns */
export interface service_max_fields {
    description?: Scalars['String']
    name?: Scalars['String']
    __typename: 'service_max_fields'
}


/** aggregate min on columns */
export interface service_min_fields {
    description?: Scalars['String']
    name?: Scalars['String']
    __typename: 'service_min_fields'
}


/** response of any mutation on the table "service" */
export interface service_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: service[]
    __typename: 'service_mutation_response'
}


/** select columns of table "service" */
export type service_select_column = 'description' | 'name'


/** update columns of table "service" */
export type service_update_column = 'description' | 'name'


/** columns and relationships of "services" */
export interface services {
    created_at: Scalars['timestamptz']
    customer_id?: Scalars['uuid']
    email_channel: Scalars['Boolean']
    enabled: Scalars['Boolean']
    id: Scalars['uuid']
    message: Scalars['String']
    /** fetch data from the table: "notifications" */
    notifications: notifications[]
    /** An aggregate relationship */
    notifications_aggregate: notifications_aggregate
    push_channel: Scalars['Boolean']
    service: service_enum
    sms_channel: Scalars['Boolean']
    title: Scalars['String']
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
export type services_constraint = 'services_pkey'


/** aggregate max on columns */
export interface services_max_fields {
    created_at?: Scalars['timestamptz']
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
    created_at?: Scalars['timestamptz']
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
export type services_select_column = 'created_at' | 'customer_id' | 'email_channel' | 'enabled' | 'id' | 'message' | 'push_channel' | 'service' | 'sms_channel' | 'title' | 'updated_at' | 'user_id'


/** update columns of table "services" */
export type services_update_column = 'created_at' | 'customer_id' | 'email_channel' | 'enabled' | 'id' | 'message' | 'push_channel' | 'service' | 'sms_channel' | 'title' | 'updated_at' | 'user_id'


/** columns and relationships of "severity" */
export interface severity {
    description: Scalars['String']
    name: Scalars['String']
    __typename: 'severity'
}


/** aggregated selection of "severity" */
export interface severity_aggregate {
    aggregate?: severity_aggregate_fields
    nodes: severity[]
    __typename: 'severity_aggregate'
}


/** aggregate fields of "severity" */
export interface severity_aggregate_fields {
    count: Scalars['Int']
    max?: severity_max_fields
    min?: severity_min_fields
    __typename: 'severity_aggregate_fields'
}


/** unique or primary key constraints on table "severity" */
export type severity_constraint = 'severity_pkey'


/** aggregate max on columns */
export interface severity_max_fields {
    description?: Scalars['String']
    name?: Scalars['String']
    __typename: 'severity_max_fields'
}


/** aggregate min on columns */
export interface severity_min_fields {
    description?: Scalars['String']
    name?: Scalars['String']
    __typename: 'severity_min_fields'
}


/** response of any mutation on the table "severity" */
export interface severity_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: severity[]
    __typename: 'severity_mutation_response'
}


/** select columns of table "severity" */
export type severity_select_column = 'description' | 'name'


/** update columns of table "severity" */
export type severity_update_column = 'description' | 'name'

export interface subscription_root {
    /** fetch data from the table: "notifications" */
    notifications: notifications[]
    /** An aggregate relationship */
    notifications_aggregate: notifications_aggregate
    /** fetch data from the table: "notifications" using primary key columns */
    notifications_by_pk?: notifications
    /** fetch data from the table: "service" */
    service: service[]
    /** fetch aggregated fields from the table: "service" */
    service_aggregate: service_aggregate
    /** fetch data from the table: "service" using primary key columns */
    service_by_pk?: service
    /** fetch data from the table: "services" */
    services: services[]
    /** fetch aggregated fields from the table: "services" */
    services_aggregate: services_aggregate
    /** fetch data from the table: "services" using primary key columns */
    services_by_pk?: services
    /** fetch data from the table: "severity" */
    severity: severity[]
    /** fetch aggregated fields from the table: "severity" */
    severity_aggregate: severity_aggregate
    /** fetch data from the table: "severity" using primary key columns */
    severity_by_pk?: severity
    /** fetch data from the table: "trigger" */
    trigger: trigger[]
    /** fetch aggregated fields from the table: "trigger" */
    trigger_aggregate: trigger_aggregate
    /** fetch data from the table: "trigger" using primary key columns */
    trigger_by_pk?: trigger
    __typename: 'subscription_root'
}


/** columns and relationships of "trigger" */
export interface trigger {
    name: Scalars['String']
    __typename: 'trigger'
}


/** aggregated selection of "trigger" */
export interface trigger_aggregate {
    aggregate?: trigger_aggregate_fields
    nodes: trigger[]
    __typename: 'trigger_aggregate'
}


/** aggregate fields of "trigger" */
export interface trigger_aggregate_fields {
    count: Scalars['Int']
    max?: trigger_max_fields
    min?: trigger_min_fields
    __typename: 'trigger_aggregate_fields'
}


/** unique or primary key constraints on table "trigger" */
export type trigger_constraint = 'trigger_pkey'

export type trigger_enum = 'insert_ticket' | 'insert_ticket_message'


/** aggregate max on columns */
export interface trigger_max_fields {
    name?: Scalars['String']
    __typename: 'trigger_max_fields'
}


/** aggregate min on columns */
export interface trigger_min_fields {
    name?: Scalars['String']
    __typename: 'trigger_min_fields'
}


/** response of any mutation on the table "trigger" */
export interface trigger_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: trigger[]
    __typename: 'trigger_mutation_response'
}


/** select columns of table "trigger" */
export type trigger_select_column = 'name'


/** update columns of table "trigger" */
export type trigger_update_column = 'name'

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
    /** delete data from the table: "service" */
    delete_service?: [{
    /** filter the rows which have to be deleted */
    where: service_bool_exp},service_mutation_responseRequest]
    /** delete single row from the table: "service" */
    delete_service_by_pk?: [{name: Scalars['String']},serviceRequest]
    /** delete data from the table: "services" */
    delete_services?: [{
    /** filter the rows which have to be deleted */
    where: services_bool_exp},services_mutation_responseRequest]
    /** delete single row from the table: "services" */
    delete_services_by_pk?: [{id: Scalars['uuid']},servicesRequest]
    /** delete data from the table: "severity" */
    delete_severity?: [{
    /** filter the rows which have to be deleted */
    where: severity_bool_exp},severity_mutation_responseRequest]
    /** delete single row from the table: "severity" */
    delete_severity_by_pk?: [{name: Scalars['String']},severityRequest]
    /** delete data from the table: "trigger" */
    delete_trigger?: [{
    /** filter the rows which have to be deleted */
    where: trigger_bool_exp},trigger_mutation_responseRequest]
    /** delete single row from the table: "trigger" */
    delete_trigger_by_pk?: [{name: Scalars['String']},triggerRequest]
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
    /** insert data into the table: "service" */
    insert_service?: [{
    /** the rows to be inserted */
    objects: service_insert_input[],
    /** on conflict condition */
    on_conflict?: (service_on_conflict | null)},service_mutation_responseRequest]
    /** insert a single row into the table: "service" */
    insert_service_one?: [{
    /** the row to be inserted */
    object: service_insert_input,
    /** on conflict condition */
    on_conflict?: (service_on_conflict | null)},serviceRequest]
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
    /** insert data into the table: "severity" */
    insert_severity?: [{
    /** the rows to be inserted */
    objects: severity_insert_input[],
    /** on conflict condition */
    on_conflict?: (severity_on_conflict | null)},severity_mutation_responseRequest]
    /** insert a single row into the table: "severity" */
    insert_severity_one?: [{
    /** the row to be inserted */
    object: severity_insert_input,
    /** on conflict condition */
    on_conflict?: (severity_on_conflict | null)},severityRequest]
    /** insert data into the table: "trigger" */
    insert_trigger?: [{
    /** the rows to be inserted */
    objects: trigger_insert_input[],
    /** on conflict condition */
    on_conflict?: (trigger_on_conflict | null)},trigger_mutation_responseRequest]
    /** insert a single row into the table: "trigger" */
    insert_trigger_one?: [{
    /** the row to be inserted */
    object: trigger_insert_input,
    /** on conflict condition */
    on_conflict?: (trigger_on_conflict | null)},triggerRequest]
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
    /** update data of the table: "service" */
    update_service?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (service_set_input | null),
    /** filter the rows which have to be updated */
    where: service_bool_exp},service_mutation_responseRequest]
    /** update single row of the table: "service" */
    update_service_by_pk?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (service_set_input | null),pk_columns: service_pk_columns_input},serviceRequest]
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
    /** update data of the table: "severity" */
    update_severity?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (severity_set_input | null),
    /** filter the rows which have to be updated */
    where: severity_bool_exp},severity_mutation_responseRequest]
    /** update single row of the table: "severity" */
    update_severity_by_pk?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (severity_set_input | null),pk_columns: severity_pk_columns_input},severityRequest]
    /** update data of the table: "trigger" */
    update_trigger?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (trigger_set_input | null),
    /** filter the rows which have to be updated */
    where: trigger_bool_exp},trigger_mutation_responseRequest]
    /** update single row of the table: "trigger" */
    update_trigger_by_pk?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (trigger_set_input | null),pk_columns: trigger_pk_columns_input},triggerRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "notifications" */
export interface notificationsRequest{
    created_at?: boolean | number
    deleted_at?: boolean | number
    id?: boolean | number
    message?: boolean | number
    seen?: boolean | number
    /** An object relationship */
    service?: servicesRequest
    service_id?: boolean | number
    subject_id?: boolean | number
    title?: boolean | number
    trigger?: boolean | number
    updated_at?: boolean | number
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


/** order by aggregate values of table "notifications" */
export interface notifications_aggregate_order_by {count?: (order_by | null),max?: (notifications_max_order_by | null),min?: (notifications_min_order_by | null)}


/** input type for inserting array relation for remote table "notifications" */
export interface notifications_arr_rel_insert_input {data: notifications_insert_input[],
/** on conflict condition */
on_conflict?: (notifications_on_conflict | null)}


/** Boolean expression to filter rows from the table "notifications". All fields are combined with a logical 'AND'. */
export interface notifications_bool_exp {_and?: (notifications_bool_exp[] | null),_not?: (notifications_bool_exp | null),_or?: (notifications_bool_exp[] | null),created_at?: (timestamptz_comparison_exp | null),deleted_at?: (timestamptz_comparison_exp | null),id?: (uuid_comparison_exp | null),message?: (String_comparison_exp | null),seen?: (Boolean_comparison_exp | null),service?: (services_bool_exp | null),service_id?: (uuid_comparison_exp | null),subject_id?: (uuid_comparison_exp | null),title?: (String_comparison_exp | null),trigger?: (trigger_enum_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** input type for inserting data into table "notifications" */
export interface notifications_insert_input {created_at?: (Scalars['timestamptz'] | null),deleted_at?: (Scalars['timestamptz'] | null),id?: (Scalars['uuid'] | null),message?: (Scalars['String'] | null),seen?: (Scalars['Boolean'] | null),service?: (services_obj_rel_insert_input | null),service_id?: (Scalars['uuid'] | null),subject_id?: (Scalars['uuid'] | null),title?: (Scalars['String'] | null),trigger?: (trigger_enum | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate max on columns */
export interface notifications_max_fieldsRequest{
    created_at?: boolean | number
    deleted_at?: boolean | number
    id?: boolean | number
    message?: boolean | number
    service_id?: boolean | number
    subject_id?: boolean | number
    title?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "notifications" */
export interface notifications_max_order_by {created_at?: (order_by | null),deleted_at?: (order_by | null),id?: (order_by | null),message?: (order_by | null),service_id?: (order_by | null),subject_id?: (order_by | null),title?: (order_by | null),updated_at?: (order_by | null)}


/** aggregate min on columns */
export interface notifications_min_fieldsRequest{
    created_at?: boolean | number
    deleted_at?: boolean | number
    id?: boolean | number
    message?: boolean | number
    service_id?: boolean | number
    subject_id?: boolean | number
    title?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "notifications" */
export interface notifications_min_order_by {created_at?: (order_by | null),deleted_at?: (order_by | null),id?: (order_by | null),message?: (order_by | null),service_id?: (order_by | null),subject_id?: (order_by | null),title?: (order_by | null),updated_at?: (order_by | null)}


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
export interface notifications_order_by {created_at?: (order_by | null),deleted_at?: (order_by | null),id?: (order_by | null),message?: (order_by | null),seen?: (order_by | null),service?: (services_order_by | null),service_id?: (order_by | null),subject_id?: (order_by | null),title?: (order_by | null),trigger?: (order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: notifications */
export interface notifications_pk_columns_input {id: Scalars['uuid']}


/** input type for updating data in table "notifications" */
export interface notifications_set_input {created_at?: (Scalars['timestamptz'] | null),deleted_at?: (Scalars['timestamptz'] | null),id?: (Scalars['uuid'] | null),message?: (Scalars['String'] | null),seen?: (Scalars['Boolean'] | null),service_id?: (Scalars['uuid'] | null),subject_id?: (Scalars['uuid'] | null),title?: (Scalars['String'] | null),trigger?: (trigger_enum | null),updated_at?: (Scalars['timestamptz'] | null)}

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
    /** An aggregate relationship */
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
    /** fetch data from the table: "service" */
    service?: [{
    /** distinct select on columns */
    distinct_on?: (service_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (service_order_by[] | null),
    /** filter the rows returned */
    where?: (service_bool_exp | null)},serviceRequest] | serviceRequest
    /** fetch aggregated fields from the table: "service" */
    service_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (service_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (service_order_by[] | null),
    /** filter the rows returned */
    where?: (service_bool_exp | null)},service_aggregateRequest] | service_aggregateRequest
    /** fetch data from the table: "service" using primary key columns */
    service_by_pk?: [{name: Scalars['String']},serviceRequest]
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
    /** fetch data from the table: "severity" */
    severity?: [{
    /** distinct select on columns */
    distinct_on?: (severity_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (severity_order_by[] | null),
    /** filter the rows returned */
    where?: (severity_bool_exp | null)},severityRequest] | severityRequest
    /** fetch aggregated fields from the table: "severity" */
    severity_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (severity_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (severity_order_by[] | null),
    /** filter the rows returned */
    where?: (severity_bool_exp | null)},severity_aggregateRequest] | severity_aggregateRequest
    /** fetch data from the table: "severity" using primary key columns */
    severity_by_pk?: [{name: Scalars['String']},severityRequest]
    /** fetch data from the table: "trigger" */
    trigger?: [{
    /** distinct select on columns */
    distinct_on?: (trigger_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (trigger_order_by[] | null),
    /** filter the rows returned */
    where?: (trigger_bool_exp | null)},triggerRequest] | triggerRequest
    /** fetch aggregated fields from the table: "trigger" */
    trigger_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (trigger_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (trigger_order_by[] | null),
    /** filter the rows returned */
    where?: (trigger_bool_exp | null)},trigger_aggregateRequest] | trigger_aggregateRequest
    /** fetch data from the table: "trigger" using primary key columns */
    trigger_by_pk?: [{name: Scalars['String']},triggerRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "service" */
export interface serviceRequest{
    description?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "service" */
export interface service_aggregateRequest{
    aggregate?: service_aggregate_fieldsRequest
    nodes?: serviceRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "service" */
export interface service_aggregate_fieldsRequest{
    count?: [{columns?: (service_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: service_max_fieldsRequest
    min?: service_min_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "service". All fields are combined with a logical 'AND'. */
export interface service_bool_exp {_and?: (service_bool_exp[] | null),_not?: (service_bool_exp | null),_or?: (service_bool_exp[] | null),description?: (String_comparison_exp | null),name?: (String_comparison_exp | null)}


/** Boolean expression to compare columns of type "service_enum". All fields are combined with logical 'AND'. */
export interface service_enum_comparison_exp {_eq?: (service_enum | null),_in?: (service_enum[] | null),_is_null?: (Scalars['Boolean'] | null),_neq?: (service_enum | null),_nin?: (service_enum[] | null)}


/** input type for inserting data into table "service" */
export interface service_insert_input {description?: (Scalars['String'] | null),name?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface service_max_fieldsRequest{
    description?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface service_min_fieldsRequest{
    description?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "service" */
export interface service_mutation_responseRequest{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: serviceRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on conflict condition type for table "service" */
export interface service_on_conflict {constraint: service_constraint,update_columns: service_update_column[],where?: (service_bool_exp | null)}


/** Ordering options when selecting data from "service". */
export interface service_order_by {description?: (order_by | null),name?: (order_by | null)}


/** primary key columns input for table: service */
export interface service_pk_columns_input {name: Scalars['String']}


/** input type for updating data in table "service" */
export interface service_set_input {description?: (Scalars['String'] | null),name?: (Scalars['String'] | null)}


/** columns and relationships of "services" */
export interface servicesRequest{
    created_at?: boolean | number
    customer_id?: boolean | number
    email_channel?: boolean | number
    enabled?: boolean | number
    id?: boolean | number
    message?: boolean | number
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
    /** An aggregate relationship */
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
    push_channel?: boolean | number
    service?: boolean | number
    sms_channel?: boolean | number
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
export interface services_bool_exp {_and?: (services_bool_exp[] | null),_not?: (services_bool_exp | null),_or?: (services_bool_exp[] | null),created_at?: (timestamptz_comparison_exp | null),customer_id?: (uuid_comparison_exp | null),email_channel?: (Boolean_comparison_exp | null),enabled?: (Boolean_comparison_exp | null),id?: (uuid_comparison_exp | null),message?: (String_comparison_exp | null),notifications?: (notifications_bool_exp | null),push_channel?: (Boolean_comparison_exp | null),service?: (service_enum_comparison_exp | null),sms_channel?: (Boolean_comparison_exp | null),title?: (String_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null),user_id?: (uuid_comparison_exp | null)}


/** input type for inserting data into table "services" */
export interface services_insert_input {created_at?: (Scalars['timestamptz'] | null),customer_id?: (Scalars['uuid'] | null),email_channel?: (Scalars['Boolean'] | null),enabled?: (Scalars['Boolean'] | null),id?: (Scalars['uuid'] | null),message?: (Scalars['String'] | null),notifications?: (notifications_arr_rel_insert_input | null),push_channel?: (Scalars['Boolean'] | null),service?: (service_enum | null),sms_channel?: (Scalars['Boolean'] | null),title?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null),user_id?: (Scalars['uuid'] | null)}


/** aggregate max on columns */
export interface services_max_fieldsRequest{
    created_at?: boolean | number
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
    created_at?: boolean | number
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
export interface services_order_by {created_at?: (order_by | null),customer_id?: (order_by | null),email_channel?: (order_by | null),enabled?: (order_by | null),id?: (order_by | null),message?: (order_by | null),notifications_aggregate?: (notifications_aggregate_order_by | null),push_channel?: (order_by | null),service?: (order_by | null),sms_channel?: (order_by | null),title?: (order_by | null),updated_at?: (order_by | null),user_id?: (order_by | null)}


/** primary key columns input for table: services */
export interface services_pk_columns_input {id: Scalars['uuid']}


/** input type for updating data in table "services" */
export interface services_set_input {created_at?: (Scalars['timestamptz'] | null),customer_id?: (Scalars['uuid'] | null),email_channel?: (Scalars['Boolean'] | null),enabled?: (Scalars['Boolean'] | null),id?: (Scalars['uuid'] | null),message?: (Scalars['String'] | null),push_channel?: (Scalars['Boolean'] | null),service?: (service_enum | null),sms_channel?: (Scalars['Boolean'] | null),title?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null),user_id?: (Scalars['uuid'] | null)}


/** columns and relationships of "severity" */
export interface severityRequest{
    description?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "severity" */
export interface severity_aggregateRequest{
    aggregate?: severity_aggregate_fieldsRequest
    nodes?: severityRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "severity" */
export interface severity_aggregate_fieldsRequest{
    count?: [{columns?: (severity_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: severity_max_fieldsRequest
    min?: severity_min_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "severity". All fields are combined with a logical 'AND'. */
export interface severity_bool_exp {_and?: (severity_bool_exp[] | null),_not?: (severity_bool_exp | null),_or?: (severity_bool_exp[] | null),description?: (String_comparison_exp | null),name?: (String_comparison_exp | null)}


/** input type for inserting data into table "severity" */
export interface severity_insert_input {description?: (Scalars['String'] | null),name?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface severity_max_fieldsRequest{
    description?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface severity_min_fieldsRequest{
    description?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "severity" */
export interface severity_mutation_responseRequest{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: severityRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on conflict condition type for table "severity" */
export interface severity_on_conflict {constraint: severity_constraint,update_columns: severity_update_column[],where?: (severity_bool_exp | null)}


/** Ordering options when selecting data from "severity". */
export interface severity_order_by {description?: (order_by | null),name?: (order_by | null)}


/** primary key columns input for table: severity */
export interface severity_pk_columns_input {name: Scalars['String']}


/** input type for updating data in table "severity" */
export interface severity_set_input {description?: (Scalars['String'] | null),name?: (Scalars['String'] | null)}

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
    /** An aggregate relationship */
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
    /** fetch data from the table: "service" */
    service?: [{
    /** distinct select on columns */
    distinct_on?: (service_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (service_order_by[] | null),
    /** filter the rows returned */
    where?: (service_bool_exp | null)},serviceRequest] | serviceRequest
    /** fetch aggregated fields from the table: "service" */
    service_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (service_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (service_order_by[] | null),
    /** filter the rows returned */
    where?: (service_bool_exp | null)},service_aggregateRequest] | service_aggregateRequest
    /** fetch data from the table: "service" using primary key columns */
    service_by_pk?: [{name: Scalars['String']},serviceRequest]
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
    /** fetch data from the table: "severity" */
    severity?: [{
    /** distinct select on columns */
    distinct_on?: (severity_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (severity_order_by[] | null),
    /** filter the rows returned */
    where?: (severity_bool_exp | null)},severityRequest] | severityRequest
    /** fetch aggregated fields from the table: "severity" */
    severity_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (severity_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (severity_order_by[] | null),
    /** filter the rows returned */
    where?: (severity_bool_exp | null)},severity_aggregateRequest] | severity_aggregateRequest
    /** fetch data from the table: "severity" using primary key columns */
    severity_by_pk?: [{name: Scalars['String']},severityRequest]
    /** fetch data from the table: "trigger" */
    trigger?: [{
    /** distinct select on columns */
    distinct_on?: (trigger_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (trigger_order_by[] | null),
    /** filter the rows returned */
    where?: (trigger_bool_exp | null)},triggerRequest] | triggerRequest
    /** fetch aggregated fields from the table: "trigger" */
    trigger_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (trigger_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (trigger_order_by[] | null),
    /** filter the rows returned */
    where?: (trigger_bool_exp | null)},trigger_aggregateRequest] | trigger_aggregateRequest
    /** fetch data from the table: "trigger" using primary key columns */
    trigger_by_pk?: [{name: Scalars['String']},triggerRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export interface timestamptz_comparison_exp {_eq?: (Scalars['timestamptz'] | null),_gt?: (Scalars['timestamptz'] | null),_gte?: (Scalars['timestamptz'] | null),_in?: (Scalars['timestamptz'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['timestamptz'] | null),_lte?: (Scalars['timestamptz'] | null),_neq?: (Scalars['timestamptz'] | null),_nin?: (Scalars['timestamptz'][] | null)}


/** columns and relationships of "trigger" */
export interface triggerRequest{
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "trigger" */
export interface trigger_aggregateRequest{
    aggregate?: trigger_aggregate_fieldsRequest
    nodes?: triggerRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "trigger" */
export interface trigger_aggregate_fieldsRequest{
    count?: [{columns?: (trigger_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: trigger_max_fieldsRequest
    min?: trigger_min_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "trigger". All fields are combined with a logical 'AND'. */
export interface trigger_bool_exp {_and?: (trigger_bool_exp[] | null),_not?: (trigger_bool_exp | null),_or?: (trigger_bool_exp[] | null),name?: (String_comparison_exp | null)}


/** Boolean expression to compare columns of type "trigger_enum". All fields are combined with logical 'AND'. */
export interface trigger_enum_comparison_exp {_eq?: (trigger_enum | null),_in?: (trigger_enum[] | null),_is_null?: (Scalars['Boolean'] | null),_neq?: (trigger_enum | null),_nin?: (trigger_enum[] | null)}


/** input type for inserting data into table "trigger" */
export interface trigger_insert_input {name?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface trigger_max_fieldsRequest{
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface trigger_min_fieldsRequest{
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "trigger" */
export interface trigger_mutation_responseRequest{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: triggerRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on conflict condition type for table "trigger" */
export interface trigger_on_conflict {constraint: trigger_constraint,update_columns: trigger_update_column[],where?: (trigger_bool_exp | null)}


/** Ordering options when selecting data from "trigger". */
export interface trigger_order_by {name?: (order_by | null)}


/** primary key columns input for table: trigger */
export interface trigger_pk_columns_input {name: Scalars['String']}


/** input type for updating data in table "trigger" */
export interface trigger_set_input {name?: (Scalars['String'] | null)}


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



const service_possibleTypes = ['service']
export const isservice = (obj?: { __typename?: any } | null): obj is service => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isservice"')
  return service_possibleTypes.includes(obj.__typename)
}



const service_aggregate_possibleTypes = ['service_aggregate']
export const isservice_aggregate = (obj?: { __typename?: any } | null): obj is service_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isservice_aggregate"')
  return service_aggregate_possibleTypes.includes(obj.__typename)
}



const service_aggregate_fields_possibleTypes = ['service_aggregate_fields']
export const isservice_aggregate_fields = (obj?: { __typename?: any } | null): obj is service_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isservice_aggregate_fields"')
  return service_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const service_max_fields_possibleTypes = ['service_max_fields']
export const isservice_max_fields = (obj?: { __typename?: any } | null): obj is service_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isservice_max_fields"')
  return service_max_fields_possibleTypes.includes(obj.__typename)
}



const service_min_fields_possibleTypes = ['service_min_fields']
export const isservice_min_fields = (obj?: { __typename?: any } | null): obj is service_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isservice_min_fields"')
  return service_min_fields_possibleTypes.includes(obj.__typename)
}



const service_mutation_response_possibleTypes = ['service_mutation_response']
export const isservice_mutation_response = (obj?: { __typename?: any } | null): obj is service_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isservice_mutation_response"')
  return service_mutation_response_possibleTypes.includes(obj.__typename)
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



const severity_possibleTypes = ['severity']
export const isseverity = (obj?: { __typename?: any } | null): obj is severity => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isseverity"')
  return severity_possibleTypes.includes(obj.__typename)
}



const severity_aggregate_possibleTypes = ['severity_aggregate']
export const isseverity_aggregate = (obj?: { __typename?: any } | null): obj is severity_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isseverity_aggregate"')
  return severity_aggregate_possibleTypes.includes(obj.__typename)
}



const severity_aggregate_fields_possibleTypes = ['severity_aggregate_fields']
export const isseverity_aggregate_fields = (obj?: { __typename?: any } | null): obj is severity_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isseverity_aggregate_fields"')
  return severity_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const severity_max_fields_possibleTypes = ['severity_max_fields']
export const isseverity_max_fields = (obj?: { __typename?: any } | null): obj is severity_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isseverity_max_fields"')
  return severity_max_fields_possibleTypes.includes(obj.__typename)
}



const severity_min_fields_possibleTypes = ['severity_min_fields']
export const isseverity_min_fields = (obj?: { __typename?: any } | null): obj is severity_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isseverity_min_fields"')
  return severity_min_fields_possibleTypes.includes(obj.__typename)
}



const severity_mutation_response_possibleTypes = ['severity_mutation_response']
export const isseverity_mutation_response = (obj?: { __typename?: any } | null): obj is severity_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isseverity_mutation_response"')
  return severity_mutation_response_possibleTypes.includes(obj.__typename)
}



const subscription_root_possibleTypes = ['subscription_root']
export const issubscription_root = (obj?: { __typename?: any } | null): obj is subscription_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "issubscription_root"')
  return subscription_root_possibleTypes.includes(obj.__typename)
}



const trigger_possibleTypes = ['trigger']
export const istrigger = (obj?: { __typename?: any } | null): obj is trigger => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istrigger"')
  return trigger_possibleTypes.includes(obj.__typename)
}



const trigger_aggregate_possibleTypes = ['trigger_aggregate']
export const istrigger_aggregate = (obj?: { __typename?: any } | null): obj is trigger_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istrigger_aggregate"')
  return trigger_aggregate_possibleTypes.includes(obj.__typename)
}



const trigger_aggregate_fields_possibleTypes = ['trigger_aggregate_fields']
export const istrigger_aggregate_fields = (obj?: { __typename?: any } | null): obj is trigger_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istrigger_aggregate_fields"')
  return trigger_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const trigger_max_fields_possibleTypes = ['trigger_max_fields']
export const istrigger_max_fields = (obj?: { __typename?: any } | null): obj is trigger_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istrigger_max_fields"')
  return trigger_max_fields_possibleTypes.includes(obj.__typename)
}



const trigger_min_fields_possibleTypes = ['trigger_min_fields']
export const istrigger_min_fields = (obj?: { __typename?: any } | null): obj is trigger_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istrigger_min_fields"')
  return trigger_min_fields_possibleTypes.includes(obj.__typename)
}



const trigger_mutation_response_possibleTypes = ['trigger_mutation_response']
export const istrigger_mutation_response = (obj?: { __typename?: any } | null): obj is trigger_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istrigger_mutation_response"')
  return trigger_mutation_response_possibleTypes.includes(obj.__typename)
}



/** mutation root */
export interface mutation_rootPromiseChain{
    
/** delete data from the table: "notifications" */
delete_notifications: ((args: {
/** filter the rows which have to be deleted */
where: notifications_bool_exp}) => notifications_mutation_responsePromiseChain & {get: <R extends notifications_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<notifications_mutation_response, R> | undefined)) => Promise<(FieldsSelection<notifications_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "notifications" */
delete_notifications_by_pk: ((args: {id: Scalars['uuid']}) => notificationsPromiseChain & {get: <R extends notificationsRequest>(request: R, defaultValue?: (FieldsSelection<notifications, R> | undefined)) => Promise<(FieldsSelection<notifications, R> | undefined)>}),
    
/** delete data from the table: "service" */
delete_service: ((args: {
/** filter the rows which have to be deleted */
where: service_bool_exp}) => service_mutation_responsePromiseChain & {get: <R extends service_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<service_mutation_response, R> | undefined)) => Promise<(FieldsSelection<service_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "service" */
delete_service_by_pk: ((args: {name: Scalars['String']}) => servicePromiseChain & {get: <R extends serviceRequest>(request: R, defaultValue?: (FieldsSelection<service, R> | undefined)) => Promise<(FieldsSelection<service, R> | undefined)>}),
    
/** delete data from the table: "services" */
delete_services: ((args: {
/** filter the rows which have to be deleted */
where: services_bool_exp}) => services_mutation_responsePromiseChain & {get: <R extends services_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<services_mutation_response, R> | undefined)) => Promise<(FieldsSelection<services_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "services" */
delete_services_by_pk: ((args: {id: Scalars['uuid']}) => servicesPromiseChain & {get: <R extends servicesRequest>(request: R, defaultValue?: (FieldsSelection<services, R> | undefined)) => Promise<(FieldsSelection<services, R> | undefined)>}),
    
/** delete data from the table: "severity" */
delete_severity: ((args: {
/** filter the rows which have to be deleted */
where: severity_bool_exp}) => severity_mutation_responsePromiseChain & {get: <R extends severity_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<severity_mutation_response, R> | undefined)) => Promise<(FieldsSelection<severity_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "severity" */
delete_severity_by_pk: ((args: {name: Scalars['String']}) => severityPromiseChain & {get: <R extends severityRequest>(request: R, defaultValue?: (FieldsSelection<severity, R> | undefined)) => Promise<(FieldsSelection<severity, R> | undefined)>}),
    
/** delete data from the table: "trigger" */
delete_trigger: ((args: {
/** filter the rows which have to be deleted */
where: trigger_bool_exp}) => trigger_mutation_responsePromiseChain & {get: <R extends trigger_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<trigger_mutation_response, R> | undefined)) => Promise<(FieldsSelection<trigger_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "trigger" */
delete_trigger_by_pk: ((args: {name: Scalars['String']}) => triggerPromiseChain & {get: <R extends triggerRequest>(request: R, defaultValue?: (FieldsSelection<trigger, R> | undefined)) => Promise<(FieldsSelection<trigger, R> | undefined)>}),
    
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
    
/** insert data into the table: "service" */
insert_service: ((args: {
/** the rows to be inserted */
objects: service_insert_input[],
/** on conflict condition */
on_conflict?: (service_on_conflict | null)}) => service_mutation_responsePromiseChain & {get: <R extends service_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<service_mutation_response, R> | undefined)) => Promise<(FieldsSelection<service_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "service" */
insert_service_one: ((args: {
/** the row to be inserted */
object: service_insert_input,
/** on conflict condition */
on_conflict?: (service_on_conflict | null)}) => servicePromiseChain & {get: <R extends serviceRequest>(request: R, defaultValue?: (FieldsSelection<service, R> | undefined)) => Promise<(FieldsSelection<service, R> | undefined)>}),
    
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
    
/** insert data into the table: "severity" */
insert_severity: ((args: {
/** the rows to be inserted */
objects: severity_insert_input[],
/** on conflict condition */
on_conflict?: (severity_on_conflict | null)}) => severity_mutation_responsePromiseChain & {get: <R extends severity_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<severity_mutation_response, R> | undefined)) => Promise<(FieldsSelection<severity_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "severity" */
insert_severity_one: ((args: {
/** the row to be inserted */
object: severity_insert_input,
/** on conflict condition */
on_conflict?: (severity_on_conflict | null)}) => severityPromiseChain & {get: <R extends severityRequest>(request: R, defaultValue?: (FieldsSelection<severity, R> | undefined)) => Promise<(FieldsSelection<severity, R> | undefined)>}),
    
/** insert data into the table: "trigger" */
insert_trigger: ((args: {
/** the rows to be inserted */
objects: trigger_insert_input[],
/** on conflict condition */
on_conflict?: (trigger_on_conflict | null)}) => trigger_mutation_responsePromiseChain & {get: <R extends trigger_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<trigger_mutation_response, R> | undefined)) => Promise<(FieldsSelection<trigger_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "trigger" */
insert_trigger_one: ((args: {
/** the row to be inserted */
object: trigger_insert_input,
/** on conflict condition */
on_conflict?: (trigger_on_conflict | null)}) => triggerPromiseChain & {get: <R extends triggerRequest>(request: R, defaultValue?: (FieldsSelection<trigger, R> | undefined)) => Promise<(FieldsSelection<trigger, R> | undefined)>}),
    
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
    
/** update data of the table: "service" */
update_service: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (service_set_input | null),
/** filter the rows which have to be updated */
where: service_bool_exp}) => service_mutation_responsePromiseChain & {get: <R extends service_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<service_mutation_response, R> | undefined)) => Promise<(FieldsSelection<service_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "service" */
update_service_by_pk: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (service_set_input | null),pk_columns: service_pk_columns_input}) => servicePromiseChain & {get: <R extends serviceRequest>(request: R, defaultValue?: (FieldsSelection<service, R> | undefined)) => Promise<(FieldsSelection<service, R> | undefined)>}),
    
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
    
/** update data of the table: "severity" */
update_severity: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (severity_set_input | null),
/** filter the rows which have to be updated */
where: severity_bool_exp}) => severity_mutation_responsePromiseChain & {get: <R extends severity_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<severity_mutation_response, R> | undefined)) => Promise<(FieldsSelection<severity_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "severity" */
update_severity_by_pk: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (severity_set_input | null),pk_columns: severity_pk_columns_input}) => severityPromiseChain & {get: <R extends severityRequest>(request: R, defaultValue?: (FieldsSelection<severity, R> | undefined)) => Promise<(FieldsSelection<severity, R> | undefined)>}),
    
/** update data of the table: "trigger" */
update_trigger: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (trigger_set_input | null),
/** filter the rows which have to be updated */
where: trigger_bool_exp}) => trigger_mutation_responsePromiseChain & {get: <R extends trigger_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<trigger_mutation_response, R> | undefined)) => Promise<(FieldsSelection<trigger_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "trigger" */
update_trigger_by_pk: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (trigger_set_input | null),pk_columns: trigger_pk_columns_input}) => triggerPromiseChain & {get: <R extends triggerRequest>(request: R, defaultValue?: (FieldsSelection<trigger, R> | undefined)) => Promise<(FieldsSelection<trigger, R> | undefined)>})
}


/** mutation root */
export interface mutation_rootObservableChain{
    
/** delete data from the table: "notifications" */
delete_notifications: ((args: {
/** filter the rows which have to be deleted */
where: notifications_bool_exp}) => notifications_mutation_responseObservableChain & {get: <R extends notifications_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<notifications_mutation_response, R> | undefined)) => Observable<(FieldsSelection<notifications_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "notifications" */
delete_notifications_by_pk: ((args: {id: Scalars['uuid']}) => notificationsObservableChain & {get: <R extends notificationsRequest>(request: R, defaultValue?: (FieldsSelection<notifications, R> | undefined)) => Observable<(FieldsSelection<notifications, R> | undefined)>}),
    
/** delete data from the table: "service" */
delete_service: ((args: {
/** filter the rows which have to be deleted */
where: service_bool_exp}) => service_mutation_responseObservableChain & {get: <R extends service_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<service_mutation_response, R> | undefined)) => Observable<(FieldsSelection<service_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "service" */
delete_service_by_pk: ((args: {name: Scalars['String']}) => serviceObservableChain & {get: <R extends serviceRequest>(request: R, defaultValue?: (FieldsSelection<service, R> | undefined)) => Observable<(FieldsSelection<service, R> | undefined)>}),
    
/** delete data from the table: "services" */
delete_services: ((args: {
/** filter the rows which have to be deleted */
where: services_bool_exp}) => services_mutation_responseObservableChain & {get: <R extends services_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<services_mutation_response, R> | undefined)) => Observable<(FieldsSelection<services_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "services" */
delete_services_by_pk: ((args: {id: Scalars['uuid']}) => servicesObservableChain & {get: <R extends servicesRequest>(request: R, defaultValue?: (FieldsSelection<services, R> | undefined)) => Observable<(FieldsSelection<services, R> | undefined)>}),
    
/** delete data from the table: "severity" */
delete_severity: ((args: {
/** filter the rows which have to be deleted */
where: severity_bool_exp}) => severity_mutation_responseObservableChain & {get: <R extends severity_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<severity_mutation_response, R> | undefined)) => Observable<(FieldsSelection<severity_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "severity" */
delete_severity_by_pk: ((args: {name: Scalars['String']}) => severityObservableChain & {get: <R extends severityRequest>(request: R, defaultValue?: (FieldsSelection<severity, R> | undefined)) => Observable<(FieldsSelection<severity, R> | undefined)>}),
    
/** delete data from the table: "trigger" */
delete_trigger: ((args: {
/** filter the rows which have to be deleted */
where: trigger_bool_exp}) => trigger_mutation_responseObservableChain & {get: <R extends trigger_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<trigger_mutation_response, R> | undefined)) => Observable<(FieldsSelection<trigger_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "trigger" */
delete_trigger_by_pk: ((args: {name: Scalars['String']}) => triggerObservableChain & {get: <R extends triggerRequest>(request: R, defaultValue?: (FieldsSelection<trigger, R> | undefined)) => Observable<(FieldsSelection<trigger, R> | undefined)>}),
    
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
    
/** insert data into the table: "service" */
insert_service: ((args: {
/** the rows to be inserted */
objects: service_insert_input[],
/** on conflict condition */
on_conflict?: (service_on_conflict | null)}) => service_mutation_responseObservableChain & {get: <R extends service_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<service_mutation_response, R> | undefined)) => Observable<(FieldsSelection<service_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "service" */
insert_service_one: ((args: {
/** the row to be inserted */
object: service_insert_input,
/** on conflict condition */
on_conflict?: (service_on_conflict | null)}) => serviceObservableChain & {get: <R extends serviceRequest>(request: R, defaultValue?: (FieldsSelection<service, R> | undefined)) => Observable<(FieldsSelection<service, R> | undefined)>}),
    
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
    
/** insert data into the table: "severity" */
insert_severity: ((args: {
/** the rows to be inserted */
objects: severity_insert_input[],
/** on conflict condition */
on_conflict?: (severity_on_conflict | null)}) => severity_mutation_responseObservableChain & {get: <R extends severity_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<severity_mutation_response, R> | undefined)) => Observable<(FieldsSelection<severity_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "severity" */
insert_severity_one: ((args: {
/** the row to be inserted */
object: severity_insert_input,
/** on conflict condition */
on_conflict?: (severity_on_conflict | null)}) => severityObservableChain & {get: <R extends severityRequest>(request: R, defaultValue?: (FieldsSelection<severity, R> | undefined)) => Observable<(FieldsSelection<severity, R> | undefined)>}),
    
/** insert data into the table: "trigger" */
insert_trigger: ((args: {
/** the rows to be inserted */
objects: trigger_insert_input[],
/** on conflict condition */
on_conflict?: (trigger_on_conflict | null)}) => trigger_mutation_responseObservableChain & {get: <R extends trigger_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<trigger_mutation_response, R> | undefined)) => Observable<(FieldsSelection<trigger_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "trigger" */
insert_trigger_one: ((args: {
/** the row to be inserted */
object: trigger_insert_input,
/** on conflict condition */
on_conflict?: (trigger_on_conflict | null)}) => triggerObservableChain & {get: <R extends triggerRequest>(request: R, defaultValue?: (FieldsSelection<trigger, R> | undefined)) => Observable<(FieldsSelection<trigger, R> | undefined)>}),
    
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
    
/** update data of the table: "service" */
update_service: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (service_set_input | null),
/** filter the rows which have to be updated */
where: service_bool_exp}) => service_mutation_responseObservableChain & {get: <R extends service_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<service_mutation_response, R> | undefined)) => Observable<(FieldsSelection<service_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "service" */
update_service_by_pk: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (service_set_input | null),pk_columns: service_pk_columns_input}) => serviceObservableChain & {get: <R extends serviceRequest>(request: R, defaultValue?: (FieldsSelection<service, R> | undefined)) => Observable<(FieldsSelection<service, R> | undefined)>}),
    
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
    
/** update data of the table: "severity" */
update_severity: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (severity_set_input | null),
/** filter the rows which have to be updated */
where: severity_bool_exp}) => severity_mutation_responseObservableChain & {get: <R extends severity_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<severity_mutation_response, R> | undefined)) => Observable<(FieldsSelection<severity_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "severity" */
update_severity_by_pk: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (severity_set_input | null),pk_columns: severity_pk_columns_input}) => severityObservableChain & {get: <R extends severityRequest>(request: R, defaultValue?: (FieldsSelection<severity, R> | undefined)) => Observable<(FieldsSelection<severity, R> | undefined)>}),
    
/** update data of the table: "trigger" */
update_trigger: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (trigger_set_input | null),
/** filter the rows which have to be updated */
where: trigger_bool_exp}) => trigger_mutation_responseObservableChain & {get: <R extends trigger_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<trigger_mutation_response, R> | undefined)) => Observable<(FieldsSelection<trigger_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "trigger" */
update_trigger_by_pk: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (trigger_set_input | null),pk_columns: trigger_pk_columns_input}) => triggerObservableChain & {get: <R extends triggerRequest>(request: R, defaultValue?: (FieldsSelection<trigger, R> | undefined)) => Observable<(FieldsSelection<trigger, R> | undefined)>})
}


/** columns and relationships of "notifications" */
export interface notificationsPromiseChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    deleted_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Promise<Scalars['uuid']>}),
    message: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    seen: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    
/** An object relationship */
service: (servicesPromiseChain & {get: <R extends servicesRequest>(request: R, defaultValue?: FieldsSelection<services, R>) => Promise<FieldsSelection<services, R>>}),
    service_id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Promise<Scalars['uuid']>}),
    subject_id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Promise<Scalars['uuid']>}),
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    trigger: ({get: (request?: boolean|number, defaultValue?: trigger_enum) => Promise<trigger_enum>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>})
}


/** columns and relationships of "notifications" */
export interface notificationsObservableChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    deleted_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Observable<Scalars['uuid']>}),
    message: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    seen: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    
/** An object relationship */
service: (servicesObservableChain & {get: <R extends servicesRequest>(request: R, defaultValue?: FieldsSelection<services, R>) => Observable<FieldsSelection<services, R>>}),
    service_id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Observable<Scalars['uuid']>}),
    subject_id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Observable<Scalars['uuid']>}),
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    trigger: ({get: (request?: boolean|number, defaultValue?: trigger_enum) => Observable<trigger_enum>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>})
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
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    deleted_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>}),
    message: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    service_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>}),
    subject_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>}),
    title: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate max on columns */
export interface notifications_max_fieldsObservableChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    deleted_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>}),
    message: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    service_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>}),
    subject_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>}),
    title: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate min on columns */
export interface notifications_min_fieldsPromiseChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    deleted_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>}),
    message: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    service_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>}),
    subject_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>}),
    title: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate min on columns */
export interface notifications_min_fieldsObservableChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    deleted_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>}),
    message: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    service_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>}),
    subject_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>}),
    title: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>})
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
    
/** An aggregate relationship */
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
    
/** fetch data from the table: "service" */
service: ((args?: {
/** distinct select on columns */
distinct_on?: (service_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (service_order_by[] | null),
/** filter the rows returned */
where?: (service_bool_exp | null)}) => {get: <R extends serviceRequest>(request: R, defaultValue?: FieldsSelection<service, R>[]) => Promise<FieldsSelection<service, R>[]>})&({get: <R extends serviceRequest>(request: R, defaultValue?: FieldsSelection<service, R>[]) => Promise<FieldsSelection<service, R>[]>}),
    
/** fetch aggregated fields from the table: "service" */
service_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (service_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (service_order_by[] | null),
/** filter the rows returned */
where?: (service_bool_exp | null)}) => service_aggregatePromiseChain & {get: <R extends service_aggregateRequest>(request: R, defaultValue?: FieldsSelection<service_aggregate, R>) => Promise<FieldsSelection<service_aggregate, R>>})&(service_aggregatePromiseChain & {get: <R extends service_aggregateRequest>(request: R, defaultValue?: FieldsSelection<service_aggregate, R>) => Promise<FieldsSelection<service_aggregate, R>>}),
    
/** fetch data from the table: "service" using primary key columns */
service_by_pk: ((args: {name: Scalars['String']}) => servicePromiseChain & {get: <R extends serviceRequest>(request: R, defaultValue?: (FieldsSelection<service, R> | undefined)) => Promise<(FieldsSelection<service, R> | undefined)>}),
    
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
    
/** fetch data from the table: "severity" */
severity: ((args?: {
/** distinct select on columns */
distinct_on?: (severity_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (severity_order_by[] | null),
/** filter the rows returned */
where?: (severity_bool_exp | null)}) => {get: <R extends severityRequest>(request: R, defaultValue?: FieldsSelection<severity, R>[]) => Promise<FieldsSelection<severity, R>[]>})&({get: <R extends severityRequest>(request: R, defaultValue?: FieldsSelection<severity, R>[]) => Promise<FieldsSelection<severity, R>[]>}),
    
/** fetch aggregated fields from the table: "severity" */
severity_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (severity_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (severity_order_by[] | null),
/** filter the rows returned */
where?: (severity_bool_exp | null)}) => severity_aggregatePromiseChain & {get: <R extends severity_aggregateRequest>(request: R, defaultValue?: FieldsSelection<severity_aggregate, R>) => Promise<FieldsSelection<severity_aggregate, R>>})&(severity_aggregatePromiseChain & {get: <R extends severity_aggregateRequest>(request: R, defaultValue?: FieldsSelection<severity_aggregate, R>) => Promise<FieldsSelection<severity_aggregate, R>>}),
    
/** fetch data from the table: "severity" using primary key columns */
severity_by_pk: ((args: {name: Scalars['String']}) => severityPromiseChain & {get: <R extends severityRequest>(request: R, defaultValue?: (FieldsSelection<severity, R> | undefined)) => Promise<(FieldsSelection<severity, R> | undefined)>}),
    
/** fetch data from the table: "trigger" */
trigger: ((args?: {
/** distinct select on columns */
distinct_on?: (trigger_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (trigger_order_by[] | null),
/** filter the rows returned */
where?: (trigger_bool_exp | null)}) => {get: <R extends triggerRequest>(request: R, defaultValue?: FieldsSelection<trigger, R>[]) => Promise<FieldsSelection<trigger, R>[]>})&({get: <R extends triggerRequest>(request: R, defaultValue?: FieldsSelection<trigger, R>[]) => Promise<FieldsSelection<trigger, R>[]>}),
    
/** fetch aggregated fields from the table: "trigger" */
trigger_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (trigger_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (trigger_order_by[] | null),
/** filter the rows returned */
where?: (trigger_bool_exp | null)}) => trigger_aggregatePromiseChain & {get: <R extends trigger_aggregateRequest>(request: R, defaultValue?: FieldsSelection<trigger_aggregate, R>) => Promise<FieldsSelection<trigger_aggregate, R>>})&(trigger_aggregatePromiseChain & {get: <R extends trigger_aggregateRequest>(request: R, defaultValue?: FieldsSelection<trigger_aggregate, R>) => Promise<FieldsSelection<trigger_aggregate, R>>}),
    
/** fetch data from the table: "trigger" using primary key columns */
trigger_by_pk: ((args: {name: Scalars['String']}) => triggerPromiseChain & {get: <R extends triggerRequest>(request: R, defaultValue?: (FieldsSelection<trigger, R> | undefined)) => Promise<(FieldsSelection<trigger, R> | undefined)>})
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
    
/** An aggregate relationship */
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
    
/** fetch data from the table: "service" */
service: ((args?: {
/** distinct select on columns */
distinct_on?: (service_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (service_order_by[] | null),
/** filter the rows returned */
where?: (service_bool_exp | null)}) => {get: <R extends serviceRequest>(request: R, defaultValue?: FieldsSelection<service, R>[]) => Observable<FieldsSelection<service, R>[]>})&({get: <R extends serviceRequest>(request: R, defaultValue?: FieldsSelection<service, R>[]) => Observable<FieldsSelection<service, R>[]>}),
    
/** fetch aggregated fields from the table: "service" */
service_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (service_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (service_order_by[] | null),
/** filter the rows returned */
where?: (service_bool_exp | null)}) => service_aggregateObservableChain & {get: <R extends service_aggregateRequest>(request: R, defaultValue?: FieldsSelection<service_aggregate, R>) => Observable<FieldsSelection<service_aggregate, R>>})&(service_aggregateObservableChain & {get: <R extends service_aggregateRequest>(request: R, defaultValue?: FieldsSelection<service_aggregate, R>) => Observable<FieldsSelection<service_aggregate, R>>}),
    
/** fetch data from the table: "service" using primary key columns */
service_by_pk: ((args: {name: Scalars['String']}) => serviceObservableChain & {get: <R extends serviceRequest>(request: R, defaultValue?: (FieldsSelection<service, R> | undefined)) => Observable<(FieldsSelection<service, R> | undefined)>}),
    
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
    
/** fetch data from the table: "severity" */
severity: ((args?: {
/** distinct select on columns */
distinct_on?: (severity_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (severity_order_by[] | null),
/** filter the rows returned */
where?: (severity_bool_exp | null)}) => {get: <R extends severityRequest>(request: R, defaultValue?: FieldsSelection<severity, R>[]) => Observable<FieldsSelection<severity, R>[]>})&({get: <R extends severityRequest>(request: R, defaultValue?: FieldsSelection<severity, R>[]) => Observable<FieldsSelection<severity, R>[]>}),
    
/** fetch aggregated fields from the table: "severity" */
severity_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (severity_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (severity_order_by[] | null),
/** filter the rows returned */
where?: (severity_bool_exp | null)}) => severity_aggregateObservableChain & {get: <R extends severity_aggregateRequest>(request: R, defaultValue?: FieldsSelection<severity_aggregate, R>) => Observable<FieldsSelection<severity_aggregate, R>>})&(severity_aggregateObservableChain & {get: <R extends severity_aggregateRequest>(request: R, defaultValue?: FieldsSelection<severity_aggregate, R>) => Observable<FieldsSelection<severity_aggregate, R>>}),
    
/** fetch data from the table: "severity" using primary key columns */
severity_by_pk: ((args: {name: Scalars['String']}) => severityObservableChain & {get: <R extends severityRequest>(request: R, defaultValue?: (FieldsSelection<severity, R> | undefined)) => Observable<(FieldsSelection<severity, R> | undefined)>}),
    
/** fetch data from the table: "trigger" */
trigger: ((args?: {
/** distinct select on columns */
distinct_on?: (trigger_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (trigger_order_by[] | null),
/** filter the rows returned */
where?: (trigger_bool_exp | null)}) => {get: <R extends triggerRequest>(request: R, defaultValue?: FieldsSelection<trigger, R>[]) => Observable<FieldsSelection<trigger, R>[]>})&({get: <R extends triggerRequest>(request: R, defaultValue?: FieldsSelection<trigger, R>[]) => Observable<FieldsSelection<trigger, R>[]>}),
    
/** fetch aggregated fields from the table: "trigger" */
trigger_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (trigger_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (trigger_order_by[] | null),
/** filter the rows returned */
where?: (trigger_bool_exp | null)}) => trigger_aggregateObservableChain & {get: <R extends trigger_aggregateRequest>(request: R, defaultValue?: FieldsSelection<trigger_aggregate, R>) => Observable<FieldsSelection<trigger_aggregate, R>>})&(trigger_aggregateObservableChain & {get: <R extends trigger_aggregateRequest>(request: R, defaultValue?: FieldsSelection<trigger_aggregate, R>) => Observable<FieldsSelection<trigger_aggregate, R>>}),
    
/** fetch data from the table: "trigger" using primary key columns */
trigger_by_pk: ((args: {name: Scalars['String']}) => triggerObservableChain & {get: <R extends triggerRequest>(request: R, defaultValue?: (FieldsSelection<trigger, R> | undefined)) => Observable<(FieldsSelection<trigger, R> | undefined)>})
}


/** columns and relationships of "service" */
export interface servicePromiseChain{
    description: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}


/** columns and relationships of "service" */
export interface serviceObservableChain{
    description: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}


/** aggregated selection of "service" */
export interface service_aggregatePromiseChain{
    aggregate: (service_aggregate_fieldsPromiseChain & {get: <R extends service_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<service_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<service_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends serviceRequest>(request: R, defaultValue?: FieldsSelection<service, R>[]) => Promise<FieldsSelection<service, R>[]>})
}


/** aggregated selection of "service" */
export interface service_aggregateObservableChain{
    aggregate: (service_aggregate_fieldsObservableChain & {get: <R extends service_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<service_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<service_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends serviceRequest>(request: R, defaultValue?: FieldsSelection<service, R>[]) => Observable<FieldsSelection<service, R>[]>})
}


/** aggregate fields of "service" */
export interface service_aggregate_fieldsPromiseChain{
    count: ((args?: {columns?: (service_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (service_max_fieldsPromiseChain & {get: <R extends service_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<service_max_fields, R> | undefined)) => Promise<(FieldsSelection<service_max_fields, R> | undefined)>}),
    min: (service_min_fieldsPromiseChain & {get: <R extends service_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<service_min_fields, R> | undefined)) => Promise<(FieldsSelection<service_min_fields, R> | undefined)>})
}


/** aggregate fields of "service" */
export interface service_aggregate_fieldsObservableChain{
    count: ((args?: {columns?: (service_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (service_max_fieldsObservableChain & {get: <R extends service_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<service_max_fields, R> | undefined)) => Observable<(FieldsSelection<service_max_fields, R> | undefined)>}),
    min: (service_min_fieldsObservableChain & {get: <R extends service_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<service_min_fields, R> | undefined)) => Observable<(FieldsSelection<service_min_fields, R> | undefined)>})
}


/** aggregate max on columns */
export interface service_max_fieldsPromiseChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate max on columns */
export interface service_max_fieldsObservableChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface service_min_fieldsPromiseChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface service_min_fieldsObservableChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** response of any mutation on the table "service" */
export interface service_mutation_responsePromiseChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends serviceRequest>(request: R, defaultValue?: FieldsSelection<service, R>[]) => Promise<FieldsSelection<service, R>[]>})
}


/** response of any mutation on the table "service" */
export interface service_mutation_responseObservableChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends serviceRequest>(request: R, defaultValue?: FieldsSelection<service, R>[]) => Observable<FieldsSelection<service, R>[]>})
}


/** columns and relationships of "services" */
export interface servicesPromiseChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    customer_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>}),
    email_channel: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    enabled: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Promise<Scalars['uuid']>}),
    message: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
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
    
/** An aggregate relationship */
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
    push_channel: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    service: ({get: (request?: boolean|number, defaultValue?: service_enum) => Promise<service_enum>}),
    sms_channel: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    user_id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Promise<Scalars['uuid']>})
}


/** columns and relationships of "services" */
export interface servicesObservableChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    customer_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>}),
    email_channel: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    enabled: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Observable<Scalars['uuid']>}),
    message: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
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
    
/** An aggregate relationship */
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
    push_channel: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    service: ({get: (request?: boolean|number, defaultValue?: service_enum) => Observable<service_enum>}),
    sms_channel: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
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
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    customer_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>}),
    message: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    title: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    user_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>})
}


/** aggregate max on columns */
export interface services_max_fieldsObservableChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    customer_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>}),
    message: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    title: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    user_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>})
}


/** aggregate min on columns */
export interface services_min_fieldsPromiseChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    customer_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>}),
    message: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    title: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    user_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>})
}


/** aggregate min on columns */
export interface services_min_fieldsObservableChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
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


/** columns and relationships of "severity" */
export interface severityPromiseChain{
    description: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}


/** columns and relationships of "severity" */
export interface severityObservableChain{
    description: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}


/** aggregated selection of "severity" */
export interface severity_aggregatePromiseChain{
    aggregate: (severity_aggregate_fieldsPromiseChain & {get: <R extends severity_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<severity_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<severity_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends severityRequest>(request: R, defaultValue?: FieldsSelection<severity, R>[]) => Promise<FieldsSelection<severity, R>[]>})
}


/** aggregated selection of "severity" */
export interface severity_aggregateObservableChain{
    aggregate: (severity_aggregate_fieldsObservableChain & {get: <R extends severity_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<severity_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<severity_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends severityRequest>(request: R, defaultValue?: FieldsSelection<severity, R>[]) => Observable<FieldsSelection<severity, R>[]>})
}


/** aggregate fields of "severity" */
export interface severity_aggregate_fieldsPromiseChain{
    count: ((args?: {columns?: (severity_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (severity_max_fieldsPromiseChain & {get: <R extends severity_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<severity_max_fields, R> | undefined)) => Promise<(FieldsSelection<severity_max_fields, R> | undefined)>}),
    min: (severity_min_fieldsPromiseChain & {get: <R extends severity_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<severity_min_fields, R> | undefined)) => Promise<(FieldsSelection<severity_min_fields, R> | undefined)>})
}


/** aggregate fields of "severity" */
export interface severity_aggregate_fieldsObservableChain{
    count: ((args?: {columns?: (severity_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (severity_max_fieldsObservableChain & {get: <R extends severity_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<severity_max_fields, R> | undefined)) => Observable<(FieldsSelection<severity_max_fields, R> | undefined)>}),
    min: (severity_min_fieldsObservableChain & {get: <R extends severity_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<severity_min_fields, R> | undefined)) => Observable<(FieldsSelection<severity_min_fields, R> | undefined)>})
}


/** aggregate max on columns */
export interface severity_max_fieldsPromiseChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate max on columns */
export interface severity_max_fieldsObservableChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface severity_min_fieldsPromiseChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface severity_min_fieldsObservableChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** response of any mutation on the table "severity" */
export interface severity_mutation_responsePromiseChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends severityRequest>(request: R, defaultValue?: FieldsSelection<severity, R>[]) => Promise<FieldsSelection<severity, R>[]>})
}


/** response of any mutation on the table "severity" */
export interface severity_mutation_responseObservableChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends severityRequest>(request: R, defaultValue?: FieldsSelection<severity, R>[]) => Observable<FieldsSelection<severity, R>[]>})
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
    
/** An aggregate relationship */
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
    
/** fetch data from the table: "service" */
service: ((args?: {
/** distinct select on columns */
distinct_on?: (service_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (service_order_by[] | null),
/** filter the rows returned */
where?: (service_bool_exp | null)}) => {get: <R extends serviceRequest>(request: R, defaultValue?: FieldsSelection<service, R>[]) => Promise<FieldsSelection<service, R>[]>})&({get: <R extends serviceRequest>(request: R, defaultValue?: FieldsSelection<service, R>[]) => Promise<FieldsSelection<service, R>[]>}),
    
/** fetch aggregated fields from the table: "service" */
service_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (service_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (service_order_by[] | null),
/** filter the rows returned */
where?: (service_bool_exp | null)}) => service_aggregatePromiseChain & {get: <R extends service_aggregateRequest>(request: R, defaultValue?: FieldsSelection<service_aggregate, R>) => Promise<FieldsSelection<service_aggregate, R>>})&(service_aggregatePromiseChain & {get: <R extends service_aggregateRequest>(request: R, defaultValue?: FieldsSelection<service_aggregate, R>) => Promise<FieldsSelection<service_aggregate, R>>}),
    
/** fetch data from the table: "service" using primary key columns */
service_by_pk: ((args: {name: Scalars['String']}) => servicePromiseChain & {get: <R extends serviceRequest>(request: R, defaultValue?: (FieldsSelection<service, R> | undefined)) => Promise<(FieldsSelection<service, R> | undefined)>}),
    
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
    
/** fetch data from the table: "severity" */
severity: ((args?: {
/** distinct select on columns */
distinct_on?: (severity_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (severity_order_by[] | null),
/** filter the rows returned */
where?: (severity_bool_exp | null)}) => {get: <R extends severityRequest>(request: R, defaultValue?: FieldsSelection<severity, R>[]) => Promise<FieldsSelection<severity, R>[]>})&({get: <R extends severityRequest>(request: R, defaultValue?: FieldsSelection<severity, R>[]) => Promise<FieldsSelection<severity, R>[]>}),
    
/** fetch aggregated fields from the table: "severity" */
severity_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (severity_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (severity_order_by[] | null),
/** filter the rows returned */
where?: (severity_bool_exp | null)}) => severity_aggregatePromiseChain & {get: <R extends severity_aggregateRequest>(request: R, defaultValue?: FieldsSelection<severity_aggregate, R>) => Promise<FieldsSelection<severity_aggregate, R>>})&(severity_aggregatePromiseChain & {get: <R extends severity_aggregateRequest>(request: R, defaultValue?: FieldsSelection<severity_aggregate, R>) => Promise<FieldsSelection<severity_aggregate, R>>}),
    
/** fetch data from the table: "severity" using primary key columns */
severity_by_pk: ((args: {name: Scalars['String']}) => severityPromiseChain & {get: <R extends severityRequest>(request: R, defaultValue?: (FieldsSelection<severity, R> | undefined)) => Promise<(FieldsSelection<severity, R> | undefined)>}),
    
/** fetch data from the table: "trigger" */
trigger: ((args?: {
/** distinct select on columns */
distinct_on?: (trigger_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (trigger_order_by[] | null),
/** filter the rows returned */
where?: (trigger_bool_exp | null)}) => {get: <R extends triggerRequest>(request: R, defaultValue?: FieldsSelection<trigger, R>[]) => Promise<FieldsSelection<trigger, R>[]>})&({get: <R extends triggerRequest>(request: R, defaultValue?: FieldsSelection<trigger, R>[]) => Promise<FieldsSelection<trigger, R>[]>}),
    
/** fetch aggregated fields from the table: "trigger" */
trigger_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (trigger_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (trigger_order_by[] | null),
/** filter the rows returned */
where?: (trigger_bool_exp | null)}) => trigger_aggregatePromiseChain & {get: <R extends trigger_aggregateRequest>(request: R, defaultValue?: FieldsSelection<trigger_aggregate, R>) => Promise<FieldsSelection<trigger_aggregate, R>>})&(trigger_aggregatePromiseChain & {get: <R extends trigger_aggregateRequest>(request: R, defaultValue?: FieldsSelection<trigger_aggregate, R>) => Promise<FieldsSelection<trigger_aggregate, R>>}),
    
/** fetch data from the table: "trigger" using primary key columns */
trigger_by_pk: ((args: {name: Scalars['String']}) => triggerPromiseChain & {get: <R extends triggerRequest>(request: R, defaultValue?: (FieldsSelection<trigger, R> | undefined)) => Promise<(FieldsSelection<trigger, R> | undefined)>})
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
    
/** An aggregate relationship */
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
    
/** fetch data from the table: "service" */
service: ((args?: {
/** distinct select on columns */
distinct_on?: (service_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (service_order_by[] | null),
/** filter the rows returned */
where?: (service_bool_exp | null)}) => {get: <R extends serviceRequest>(request: R, defaultValue?: FieldsSelection<service, R>[]) => Observable<FieldsSelection<service, R>[]>})&({get: <R extends serviceRequest>(request: R, defaultValue?: FieldsSelection<service, R>[]) => Observable<FieldsSelection<service, R>[]>}),
    
/** fetch aggregated fields from the table: "service" */
service_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (service_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (service_order_by[] | null),
/** filter the rows returned */
where?: (service_bool_exp | null)}) => service_aggregateObservableChain & {get: <R extends service_aggregateRequest>(request: R, defaultValue?: FieldsSelection<service_aggregate, R>) => Observable<FieldsSelection<service_aggregate, R>>})&(service_aggregateObservableChain & {get: <R extends service_aggregateRequest>(request: R, defaultValue?: FieldsSelection<service_aggregate, R>) => Observable<FieldsSelection<service_aggregate, R>>}),
    
/** fetch data from the table: "service" using primary key columns */
service_by_pk: ((args: {name: Scalars['String']}) => serviceObservableChain & {get: <R extends serviceRequest>(request: R, defaultValue?: (FieldsSelection<service, R> | undefined)) => Observable<(FieldsSelection<service, R> | undefined)>}),
    
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
    
/** fetch data from the table: "severity" */
severity: ((args?: {
/** distinct select on columns */
distinct_on?: (severity_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (severity_order_by[] | null),
/** filter the rows returned */
where?: (severity_bool_exp | null)}) => {get: <R extends severityRequest>(request: R, defaultValue?: FieldsSelection<severity, R>[]) => Observable<FieldsSelection<severity, R>[]>})&({get: <R extends severityRequest>(request: R, defaultValue?: FieldsSelection<severity, R>[]) => Observable<FieldsSelection<severity, R>[]>}),
    
/** fetch aggregated fields from the table: "severity" */
severity_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (severity_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (severity_order_by[] | null),
/** filter the rows returned */
where?: (severity_bool_exp | null)}) => severity_aggregateObservableChain & {get: <R extends severity_aggregateRequest>(request: R, defaultValue?: FieldsSelection<severity_aggregate, R>) => Observable<FieldsSelection<severity_aggregate, R>>})&(severity_aggregateObservableChain & {get: <R extends severity_aggregateRequest>(request: R, defaultValue?: FieldsSelection<severity_aggregate, R>) => Observable<FieldsSelection<severity_aggregate, R>>}),
    
/** fetch data from the table: "severity" using primary key columns */
severity_by_pk: ((args: {name: Scalars['String']}) => severityObservableChain & {get: <R extends severityRequest>(request: R, defaultValue?: (FieldsSelection<severity, R> | undefined)) => Observable<(FieldsSelection<severity, R> | undefined)>}),
    
/** fetch data from the table: "trigger" */
trigger: ((args?: {
/** distinct select on columns */
distinct_on?: (trigger_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (trigger_order_by[] | null),
/** filter the rows returned */
where?: (trigger_bool_exp | null)}) => {get: <R extends triggerRequest>(request: R, defaultValue?: FieldsSelection<trigger, R>[]) => Observable<FieldsSelection<trigger, R>[]>})&({get: <R extends triggerRequest>(request: R, defaultValue?: FieldsSelection<trigger, R>[]) => Observable<FieldsSelection<trigger, R>[]>}),
    
/** fetch aggregated fields from the table: "trigger" */
trigger_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (trigger_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (trigger_order_by[] | null),
/** filter the rows returned */
where?: (trigger_bool_exp | null)}) => trigger_aggregateObservableChain & {get: <R extends trigger_aggregateRequest>(request: R, defaultValue?: FieldsSelection<trigger_aggregate, R>) => Observable<FieldsSelection<trigger_aggregate, R>>})&(trigger_aggregateObservableChain & {get: <R extends trigger_aggregateRequest>(request: R, defaultValue?: FieldsSelection<trigger_aggregate, R>) => Observable<FieldsSelection<trigger_aggregate, R>>}),
    
/** fetch data from the table: "trigger" using primary key columns */
trigger_by_pk: ((args: {name: Scalars['String']}) => triggerObservableChain & {get: <R extends triggerRequest>(request: R, defaultValue?: (FieldsSelection<trigger, R> | undefined)) => Observable<(FieldsSelection<trigger, R> | undefined)>})
}


/** columns and relationships of "trigger" */
export interface triggerPromiseChain{
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}


/** columns and relationships of "trigger" */
export interface triggerObservableChain{
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}


/** aggregated selection of "trigger" */
export interface trigger_aggregatePromiseChain{
    aggregate: (trigger_aggregate_fieldsPromiseChain & {get: <R extends trigger_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<trigger_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<trigger_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends triggerRequest>(request: R, defaultValue?: FieldsSelection<trigger, R>[]) => Promise<FieldsSelection<trigger, R>[]>})
}


/** aggregated selection of "trigger" */
export interface trigger_aggregateObservableChain{
    aggregate: (trigger_aggregate_fieldsObservableChain & {get: <R extends trigger_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<trigger_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<trigger_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends triggerRequest>(request: R, defaultValue?: FieldsSelection<trigger, R>[]) => Observable<FieldsSelection<trigger, R>[]>})
}


/** aggregate fields of "trigger" */
export interface trigger_aggregate_fieldsPromiseChain{
    count: ((args?: {columns?: (trigger_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (trigger_max_fieldsPromiseChain & {get: <R extends trigger_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<trigger_max_fields, R> | undefined)) => Promise<(FieldsSelection<trigger_max_fields, R> | undefined)>}),
    min: (trigger_min_fieldsPromiseChain & {get: <R extends trigger_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<trigger_min_fields, R> | undefined)) => Promise<(FieldsSelection<trigger_min_fields, R> | undefined)>})
}


/** aggregate fields of "trigger" */
export interface trigger_aggregate_fieldsObservableChain{
    count: ((args?: {columns?: (trigger_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (trigger_max_fieldsObservableChain & {get: <R extends trigger_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<trigger_max_fields, R> | undefined)) => Observable<(FieldsSelection<trigger_max_fields, R> | undefined)>}),
    min: (trigger_min_fieldsObservableChain & {get: <R extends trigger_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<trigger_min_fields, R> | undefined)) => Observable<(FieldsSelection<trigger_min_fields, R> | undefined)>})
}


/** aggregate max on columns */
export interface trigger_max_fieldsPromiseChain{
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate max on columns */
export interface trigger_max_fieldsObservableChain{
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface trigger_min_fieldsPromiseChain{
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface trigger_min_fieldsObservableChain{
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** response of any mutation on the table "trigger" */
export interface trigger_mutation_responsePromiseChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends triggerRequest>(request: R, defaultValue?: FieldsSelection<trigger, R>[]) => Promise<FieldsSelection<trigger, R>[]>})
}


/** response of any mutation on the table "trigger" */
export interface trigger_mutation_responseObservableChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends triggerRequest>(request: R, defaultValue?: FieldsSelection<trigger, R>[]) => Observable<FieldsSelection<trigger, R>[]>})
}