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
  readonly created_at: 'created_at'
  readonly deleted_at: 'deleted_at'
  readonly id: 'id'
  readonly message: 'message'
  readonly seen: 'seen'
  readonly service_id: 'service_id'
  readonly subject_id: 'subject_id'
  readonly title: 'title'
  readonly trigger: 'trigger'
  readonly updated_at: 'updated_at'
}

export declare const enumnotificationsUpdateColumn: {
  readonly created_at: 'created_at'
  readonly deleted_at: 'deleted_at'
  readonly id: 'id'
  readonly message: 'message'
  readonly seen: 'seen'
  readonly service_id: 'service_id'
  readonly subject_id: 'subject_id'
  readonly title: 'title'
  readonly trigger: 'trigger'
  readonly updated_at: 'updated_at'
}

export declare const enumorderBy: {
  readonly asc: 'asc'
  readonly asc_nulls_first: 'asc_nulls_first'
  readonly asc_nulls_last: 'asc_nulls_last'
  readonly desc: 'desc'
  readonly desc_nulls_first: 'desc_nulls_first'
  readonly desc_nulls_last: 'desc_nulls_last'
}

export declare const enumserviceConstraint: {
  readonly service_pkey: 'service_pkey'
}

export declare const enumserviceEnum: {
  readonly async_chat: 'async_chat'
  readonly calendar: 'calendar'
  readonly qnr: 'qnr'
}

export declare const enumserviceSelectColumn: {
  readonly description: 'description'
  readonly name: 'name'
}

export declare const enumserviceUpdateColumn: {
  readonly description: 'description'
  readonly name: 'name'
}

export declare const enumservicesConstraint: {
  readonly services_pkey: 'services_pkey'
}

export declare const enumservicesSelectColumn: {
  readonly created_at: 'created_at'
  readonly customer_id: 'customer_id'
  readonly email_channel: 'email_channel'
  readonly enabled: 'enabled'
  readonly id: 'id'
  readonly message: 'message'
  readonly push_channel: 'push_channel'
  readonly service: 'service'
  readonly sms_channel: 'sms_channel'
  readonly title: 'title'
  readonly updated_at: 'updated_at'
  readonly user_id: 'user_id'
}

export declare const enumservicesUpdateColumn: {
  readonly created_at: 'created_at'
  readonly customer_id: 'customer_id'
  readonly email_channel: 'email_channel'
  readonly enabled: 'enabled'
  readonly id: 'id'
  readonly message: 'message'
  readonly push_channel: 'push_channel'
  readonly service: 'service'
  readonly sms_channel: 'sms_channel'
  readonly title: 'title'
  readonly updated_at: 'updated_at'
  readonly user_id: 'user_id'
}

export declare const enumseverityConstraint: {
  readonly severity_pkey: 'severity_pkey'
}

export declare const enumseveritySelectColumn: {
  readonly description: 'description'
  readonly name: 'name'
}

export declare const enumseverityUpdateColumn: {
  readonly description: 'description'
  readonly name: 'name'
}

export declare const enumtriggerConstraint: {
  readonly trigger_pkey: 'trigger_pkey'
}

export declare const enumtriggerEnum: {
  readonly insert_ticket: 'insert_ticket'
  readonly insert_ticket_message: 'insert_ticket_message'
}

export declare const enumtriggerSelectColumn: {
  readonly name: 'name'
}

export declare const enumtriggerUpdateColumn: {
  readonly name: 'name'
}
