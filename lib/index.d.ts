import {
  FieldsSelection,
  GraphqlOperation,
  ClientOptions,
  Observable,
} from '@genql/runtime'
import { SubscriptionClient } from 'subscriptions-transport-ws'
export * from './schema'
import {
  query_rootRequest,
  query_rootPromiseChain,
  query_root,
  mutation_rootRequest,
  mutation_rootPromiseChain,
  mutation_root,
  subscription_rootRequest,
  subscription_rootObservableChain,
  subscription_root,
} from './schema'
export declare const createClient: (options?: ClientOptions) => Client
export declare const everything: { __scalar: boolean }
export declare const version: string

export interface Client {
  wsClient?: SubscriptionClient

  query<R extends query_rootRequest>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<query_root, R>>

  mutation<R extends mutation_rootRequest>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<mutation_root, R>>

  subscription<R extends subscription_rootRequest>(
    request: R & { __name?: string },
  ): Observable<FieldsSelection<subscription_root, R>>

  chain: {
    query: query_rootPromiseChain

    mutation: mutation_rootPromiseChain

    subscription: subscription_rootObservableChain
  }
}

export type QueryResult<fields extends query_rootRequest> = FieldsSelection<
  query_root,
  fields
>

export declare const generateQueryOp: (
  fields: query_rootRequest & { __name?: string },
) => GraphqlOperation
export type MutationResult<
  fields extends mutation_rootRequest
> = FieldsSelection<mutation_root, fields>

export declare const generateMutationOp: (
  fields: mutation_rootRequest & { __name?: string },
) => GraphqlOperation
export type SubscriptionResult<
  fields extends subscription_rootRequest
> = FieldsSelection<subscription_root, fields>

export declare const generateSubscriptionOp: (
  fields: subscription_rootRequest & { __name?: string },
) => GraphqlOperation

export declare const enumnotificationsConstraint: {
  readonly notifications_pkey: 'notifications_pkey'
}

export declare const enumnotificationsSelectColumn: {
  readonly id: 'id'
  readonly path: 'path'
  readonly seen: 'seen'
  readonly service_id: 'service_id'
  readonly severity: 'severity'
  readonly subject_id: 'subject_id'
}

export declare const enumnotificationsUpdateColumn: {
  readonly id: 'id'
  readonly path: 'path'
  readonly seen: 'seen'
  readonly service_id: 'service_id'
  readonly severity: 'severity'
  readonly subject_id: 'subject_id'
}

export declare const enumorderBy: {
  readonly asc: 'asc'
  readonly asc_nulls_first: 'asc_nulls_first'
  readonly asc_nulls_last: 'asc_nulls_last'
  readonly desc: 'desc'
  readonly desc_nulls_first: 'desc_nulls_first'
  readonly desc_nulls_last: 'desc_nulls_last'
}

export declare const enumserviceEnumsConstraint: {
  readonly service_enums_pkey: 'service_enums_pkey'
}

export declare const enumserviceEnumsEnum: {
  readonly async_chat: 'async_chat'
  readonly calendar: 'calendar'
  readonly qnr: 'qnr'
}

export declare const enumserviceEnumsSelectColumn: {
  readonly description: 'description'
  readonly service: 'service'
}

export declare const enumserviceEnumsUpdateColumn: {
  readonly description: 'description'
  readonly service: 'service'
}

export declare const enumservicesConstraint: {
  readonly services_pkey: 'services_pkey'
  readonly services_service_key: 'services_service_key'
}

export declare const enumservicesSelectColumn: {
  readonly customer_id: 'customer_id'
  readonly email_ch: 'email_ch'
  readonly enabled: 'enabled'
  readonly id: 'id'
  readonly message: 'message'
  readonly push_ch: 'push_ch'
  readonly service: 'service'
  readonly sms_ch: 'sms_ch'
  readonly title: 'title'
  readonly updated_at: 'updated_at'
  readonly user_id: 'user_id'
}

export declare const enumservicesUpdateColumn: {
  readonly customer_id: 'customer_id'
  readonly email_ch: 'email_ch'
  readonly enabled: 'enabled'
  readonly id: 'id'
  readonly message: 'message'
  readonly push_ch: 'push_ch'
  readonly service: 'service'
  readonly sms_ch: 'sms_ch'
  readonly title: 'title'
  readonly updated_at: 'updated_at'
  readonly user_id: 'user_id'
}

export declare const enumseverityEnumsConstraint: {
  readonly severity_enums_pkey: 'severity_enums_pkey'
}

export declare const enumseverityEnumsEnum: {
  readonly important: 'important'
  readonly regular: 'regular'
  readonly urgent: 'urgent'
}

export declare const enumseverityEnumsSelectColumn: {
  readonly description: 'description'
  readonly severity: 'severity'
}

export declare const enumseverityEnumsUpdateColumn: {
  readonly description: 'description'
  readonly severity: 'severity'
}
