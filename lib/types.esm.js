export default {
    "scalars": [
        0,
        2,
        3,
        11,
        22,
        24,
        25,
        30,
        31,
        40,
        42,
        47,
        56,
        58,
        63,
        71,
        73,
        80,
        90,
        92,
        93,
        99,
        100,
        109,
        111,
        119,
        120
    ],
    "types": {
        "Boolean": {},
        "Boolean_comparison_exp": {
            "_eq": [
                0
            ],
            "_gt": [
                0
            ],
            "_gte": [
                0
            ],
            "_in": [
                0
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                0
            ],
            "_lte": [
                0
            ],
            "_neq": [
                0
            ],
            "_nin": [
                0
            ],
            "__typename": [
                3
            ]
        },
        "Int": {},
        "String": {},
        "String_comparison_exp": {
            "_eq": [
                3
            ],
            "_gt": [
                3
            ],
            "_gte": [
                3
            ],
            "_ilike": [
                3
            ],
            "_in": [
                3
            ],
            "_iregex": [
                3
            ],
            "_is_null": [
                0
            ],
            "_like": [
                3
            ],
            "_lt": [
                3
            ],
            "_lte": [
                3
            ],
            "_neq": [
                3
            ],
            "_nilike": [
                3
            ],
            "_nin": [
                3
            ],
            "_niregex": [
                3
            ],
            "_nlike": [
                3
            ],
            "_nregex": [
                3
            ],
            "_nsimilar": [
                3
            ],
            "_regex": [
                3
            ],
            "_similar": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "notifications": {
            "created_at": [
                93
            ],
            "deleted_at": [
                93
            ],
            "id": [
                120
            ],
            "message": [
                3
            ],
            "seen": [
                0
            ],
            "service": [
                43
            ],
            "service_id": [
                120
            ],
            "subject_id": [
                120
            ],
            "title": [
                3
            ],
            "trigger": [
                100
            ],
            "updated_at": [
                93
            ],
            "__typename": [
                3
            ]
        },
        "notifications_aggregate": {
            "aggregate": [
                7
            ],
            "nodes": [
                5
            ],
            "__typename": [
                3
            ]
        },
        "notifications_aggregate_fields": {
            "count": [
                2,
                {
                    "columns": [
                        22,
                        "[notifications_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                13
            ],
            "min": [
                15
            ],
            "__typename": [
                3
            ]
        },
        "notifications_aggregate_order_by": {
            "count": [
                25
            ],
            "max": [
                14
            ],
            "min": [
                16
            ],
            "__typename": [
                3
            ]
        },
        "notifications_arr_rel_insert_input": {
            "data": [
                12
            ],
            "on_conflict": [
                19
            ],
            "__typename": [
                3
            ]
        },
        "notifications_bool_exp": {
            "_and": [
                10
            ],
            "_not": [
                10
            ],
            "_or": [
                10
            ],
            "created_at": [
                94
            ],
            "deleted_at": [
                94
            ],
            "id": [
                121
            ],
            "message": [
                4
            ],
            "seen": [
                1
            ],
            "service": [
                46
            ],
            "service_id": [
                121
            ],
            "subject_id": [
                121
            ],
            "title": [
                4
            ],
            "trigger": [
                101
            ],
            "updated_at": [
                94
            ],
            "__typename": [
                3
            ]
        },
        "notifications_constraint": {},
        "notifications_insert_input": {
            "created_at": [
                93
            ],
            "deleted_at": [
                93
            ],
            "id": [
                120
            ],
            "message": [
                3
            ],
            "seen": [
                0
            ],
            "service": [
                52
            ],
            "service_id": [
                120
            ],
            "subject_id": [
                120
            ],
            "title": [
                3
            ],
            "trigger": [
                100
            ],
            "updated_at": [
                93
            ],
            "__typename": [
                3
            ]
        },
        "notifications_max_fields": {
            "created_at": [
                93
            ],
            "deleted_at": [
                93
            ],
            "id": [
                120
            ],
            "message": [
                3
            ],
            "service_id": [
                120
            ],
            "subject_id": [
                120
            ],
            "title": [
                3
            ],
            "updated_at": [
                93
            ],
            "__typename": [
                3
            ]
        },
        "notifications_max_order_by": {
            "created_at": [
                25
            ],
            "deleted_at": [
                25
            ],
            "id": [
                25
            ],
            "message": [
                25
            ],
            "service_id": [
                25
            ],
            "subject_id": [
                25
            ],
            "title": [
                25
            ],
            "updated_at": [
                25
            ],
            "__typename": [
                3
            ]
        },
        "notifications_min_fields": {
            "created_at": [
                93
            ],
            "deleted_at": [
                93
            ],
            "id": [
                120
            ],
            "message": [
                3
            ],
            "service_id": [
                120
            ],
            "subject_id": [
                120
            ],
            "title": [
                3
            ],
            "updated_at": [
                93
            ],
            "__typename": [
                3
            ]
        },
        "notifications_min_order_by": {
            "created_at": [
                25
            ],
            "deleted_at": [
                25
            ],
            "id": [
                25
            ],
            "message": [
                25
            ],
            "service_id": [
                25
            ],
            "subject_id": [
                25
            ],
            "title": [
                25
            ],
            "updated_at": [
                25
            ],
            "__typename": [
                3
            ]
        },
        "notifications_mutation_response": {
            "affected_rows": [
                2
            ],
            "returning": [
                5
            ],
            "__typename": [
                3
            ]
        },
        "notifications_obj_rel_insert_input": {
            "data": [
                12
            ],
            "on_conflict": [
                19
            ],
            "__typename": [
                3
            ]
        },
        "notifications_on_conflict": {
            "constraint": [
                11
            ],
            "update_columns": [
                24
            ],
            "where": [
                10
            ],
            "__typename": [
                3
            ]
        },
        "notifications_order_by": {
            "created_at": [
                25
            ],
            "deleted_at": [
                25
            ],
            "id": [
                25
            ],
            "message": [
                25
            ],
            "seen": [
                25
            ],
            "service": [
                54
            ],
            "service_id": [
                25
            ],
            "subject_id": [
                25
            ],
            "title": [
                25
            ],
            "trigger": [
                25
            ],
            "updated_at": [
                25
            ],
            "__typename": [
                3
            ]
        },
        "notifications_pk_columns_input": {
            "id": [
                120
            ],
            "__typename": [
                3
            ]
        },
        "notifications_select_column": {},
        "notifications_set_input": {
            "created_at": [
                93
            ],
            "deleted_at": [
                93
            ],
            "id": [
                120
            ],
            "message": [
                3
            ],
            "seen": [
                0
            ],
            "service_id": [
                120
            ],
            "subject_id": [
                120
            ],
            "title": [
                3
            ],
            "trigger": [
                100
            ],
            "updated_at": [
                93
            ],
            "__typename": [
                3
            ]
        },
        "notifications_update_column": {},
        "order_by": {},
        "service": {
            "description": [
                3
            ],
            "name": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "service_aggregate": {
            "aggregate": [
                28
            ],
            "nodes": [
                26
            ],
            "__typename": [
                3
            ]
        },
        "service_aggregate_fields": {
            "count": [
                2,
                {
                    "columns": [
                        40,
                        "[service_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                34
            ],
            "min": [
                35
            ],
            "__typename": [
                3
            ]
        },
        "service_bool_exp": {
            "_and": [
                29
            ],
            "_not": [
                29
            ],
            "_or": [
                29
            ],
            "description": [
                4
            ],
            "name": [
                4
            ],
            "__typename": [
                3
            ]
        },
        "service_constraint": {},
        "service_enum": {},
        "service_enum_comparison_exp": {
            "_eq": [
                31
            ],
            "_in": [
                31
            ],
            "_is_null": [
                0
            ],
            "_neq": [
                31
            ],
            "_nin": [
                31
            ],
            "__typename": [
                3
            ]
        },
        "service_insert_input": {
            "description": [
                3
            ],
            "name": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "service_max_fields": {
            "description": [
                3
            ],
            "name": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "service_min_fields": {
            "description": [
                3
            ],
            "name": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "service_mutation_response": {
            "affected_rows": [
                2
            ],
            "returning": [
                26
            ],
            "__typename": [
                3
            ]
        },
        "service_on_conflict": {
            "constraint": [
                30
            ],
            "update_columns": [
                42
            ],
            "where": [
                29
            ],
            "__typename": [
                3
            ]
        },
        "service_order_by": {
            "description": [
                25
            ],
            "name": [
                25
            ],
            "__typename": [
                3
            ]
        },
        "service_pk_columns_input": {
            "name": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "service_select_column": {},
        "service_set_input": {
            "description": [
                3
            ],
            "name": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "service_update_column": {},
        "services": {
            "Tickets": [
                74,
                {
                    "distinct_on": [
                        90,
                        "[ticket_service_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        88,
                        "[ticket_service_order_by!]"
                    ],
                    "where": [
                        79
                    ]
                }
            ],
            "Tickets_aggregate": [
                75,
                {
                    "distinct_on": [
                        90,
                        "[ticket_service_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        88,
                        "[ticket_service_order_by!]"
                    ],
                    "where": [
                        79
                    ]
                }
            ],
            "created_at": [
                93
            ],
            "customer_id": [
                120
            ],
            "email_channel": [
                0
            ],
            "enabled": [
                0
            ],
            "id": [
                120
            ],
            "message": [
                3
            ],
            "notifications": [
                5,
                {
                    "distinct_on": [
                        22,
                        "[notifications_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        20,
                        "[notifications_order_by!]"
                    ],
                    "where": [
                        10
                    ]
                }
            ],
            "notifications_aggregate": [
                6,
                {
                    "distinct_on": [
                        22,
                        "[notifications_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        20,
                        "[notifications_order_by!]"
                    ],
                    "where": [
                        10
                    ]
                }
            ],
            "push_channel": [
                0
            ],
            "service": [
                31
            ],
            "sms_channel": [
                0
            ],
            "title": [
                3
            ],
            "updated_at": [
                93
            ],
            "user_id": [
                120
            ],
            "__typename": [
                3
            ]
        },
        "services_aggregate": {
            "aggregate": [
                45
            ],
            "nodes": [
                43
            ],
            "__typename": [
                3
            ]
        },
        "services_aggregate_fields": {
            "count": [
                2,
                {
                    "columns": [
                        56,
                        "[services_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                49
            ],
            "min": [
                50
            ],
            "__typename": [
                3
            ]
        },
        "services_bool_exp": {
            "Tickets": [
                79
            ],
            "_and": [
                46
            ],
            "_not": [
                46
            ],
            "_or": [
                46
            ],
            "created_at": [
                94
            ],
            "customer_id": [
                121
            ],
            "email_channel": [
                1
            ],
            "enabled": [
                1
            ],
            "id": [
                121
            ],
            "message": [
                4
            ],
            "notifications": [
                10
            ],
            "push_channel": [
                1
            ],
            "service": [
                32
            ],
            "sms_channel": [
                1
            ],
            "title": [
                4
            ],
            "updated_at": [
                94
            ],
            "user_id": [
                121
            ],
            "__typename": [
                3
            ]
        },
        "services_constraint": {},
        "services_insert_input": {
            "Tickets": [
                78
            ],
            "created_at": [
                93
            ],
            "customer_id": [
                120
            ],
            "email_channel": [
                0
            ],
            "enabled": [
                0
            ],
            "id": [
                120
            ],
            "message": [
                3
            ],
            "notifications": [
                9
            ],
            "push_channel": [
                0
            ],
            "service": [
                31
            ],
            "sms_channel": [
                0
            ],
            "title": [
                3
            ],
            "updated_at": [
                93
            ],
            "user_id": [
                120
            ],
            "__typename": [
                3
            ]
        },
        "services_max_fields": {
            "created_at": [
                93
            ],
            "customer_id": [
                120
            ],
            "id": [
                120
            ],
            "message": [
                3
            ],
            "title": [
                3
            ],
            "updated_at": [
                93
            ],
            "user_id": [
                120
            ],
            "__typename": [
                3
            ]
        },
        "services_min_fields": {
            "created_at": [
                93
            ],
            "customer_id": [
                120
            ],
            "id": [
                120
            ],
            "message": [
                3
            ],
            "title": [
                3
            ],
            "updated_at": [
                93
            ],
            "user_id": [
                120
            ],
            "__typename": [
                3
            ]
        },
        "services_mutation_response": {
            "affected_rows": [
                2
            ],
            "returning": [
                43
            ],
            "__typename": [
                3
            ]
        },
        "services_obj_rel_insert_input": {
            "data": [
                48
            ],
            "on_conflict": [
                53
            ],
            "__typename": [
                3
            ]
        },
        "services_on_conflict": {
            "constraint": [
                47
            ],
            "update_columns": [
                58
            ],
            "where": [
                46
            ],
            "__typename": [
                3
            ]
        },
        "services_order_by": {
            "Tickets_aggregate": [
                77
            ],
            "created_at": [
                25
            ],
            "customer_id": [
                25
            ],
            "email_channel": [
                25
            ],
            "enabled": [
                25
            ],
            "id": [
                25
            ],
            "message": [
                25
            ],
            "notifications_aggregate": [
                8
            ],
            "push_channel": [
                25
            ],
            "service": [
                25
            ],
            "sms_channel": [
                25
            ],
            "title": [
                25
            ],
            "updated_at": [
                25
            ],
            "user_id": [
                25
            ],
            "__typename": [
                3
            ]
        },
        "services_pk_columns_input": {
            "id": [
                120
            ],
            "__typename": [
                3
            ]
        },
        "services_select_column": {},
        "services_set_input": {
            "created_at": [
                93
            ],
            "customer_id": [
                120
            ],
            "email_channel": [
                0
            ],
            "enabled": [
                0
            ],
            "id": [
                120
            ],
            "message": [
                3
            ],
            "push_channel": [
                0
            ],
            "service": [
                31
            ],
            "sms_channel": [
                0
            ],
            "title": [
                3
            ],
            "updated_at": [
                93
            ],
            "user_id": [
                120
            ],
            "__typename": [
                3
            ]
        },
        "services_update_column": {},
        "severity": {
            "description": [
                3
            ],
            "name": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "severity_aggregate": {
            "aggregate": [
                61
            ],
            "nodes": [
                59
            ],
            "__typename": [
                3
            ]
        },
        "severity_aggregate_fields": {
            "count": [
                2,
                {
                    "columns": [
                        71,
                        "[severity_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                65
            ],
            "min": [
                66
            ],
            "__typename": [
                3
            ]
        },
        "severity_bool_exp": {
            "_and": [
                62
            ],
            "_not": [
                62
            ],
            "_or": [
                62
            ],
            "description": [
                4
            ],
            "name": [
                4
            ],
            "__typename": [
                3
            ]
        },
        "severity_constraint": {},
        "severity_insert_input": {
            "description": [
                3
            ],
            "name": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "severity_max_fields": {
            "description": [
                3
            ],
            "name": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "severity_min_fields": {
            "description": [
                3
            ],
            "name": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "severity_mutation_response": {
            "affected_rows": [
                2
            ],
            "returning": [
                59
            ],
            "__typename": [
                3
            ]
        },
        "severity_on_conflict": {
            "constraint": [
                63
            ],
            "update_columns": [
                73
            ],
            "where": [
                62
            ],
            "__typename": [
                3
            ]
        },
        "severity_order_by": {
            "description": [
                25
            ],
            "name": [
                25
            ],
            "__typename": [
                3
            ]
        },
        "severity_pk_columns_input": {
            "name": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "severity_select_column": {},
        "severity_set_input": {
            "description": [
                3
            ],
            "name": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "severity_update_column": {},
        "ticket_service": {
            "Notifications": [
                5
            ],
            "Service": [
                43
            ],
            "service_id": [
                120
            ],
            "ticket_id": [
                120
            ],
            "__typename": [
                3
            ]
        },
        "ticket_service_aggregate": {
            "aggregate": [
                76
            ],
            "nodes": [
                74
            ],
            "__typename": [
                3
            ]
        },
        "ticket_service_aggregate_fields": {
            "count": [
                2,
                {
                    "columns": [
                        90,
                        "[ticket_service_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                82
            ],
            "min": [
                84
            ],
            "__typename": [
                3
            ]
        },
        "ticket_service_aggregate_order_by": {
            "count": [
                25
            ],
            "max": [
                83
            ],
            "min": [
                85
            ],
            "__typename": [
                3
            ]
        },
        "ticket_service_arr_rel_insert_input": {
            "data": [
                81
            ],
            "on_conflict": [
                87
            ],
            "__typename": [
                3
            ]
        },
        "ticket_service_bool_exp": {
            "Notifications": [
                10
            ],
            "Service": [
                46
            ],
            "_and": [
                79
            ],
            "_not": [
                79
            ],
            "_or": [
                79
            ],
            "service_id": [
                121
            ],
            "ticket_id": [
                121
            ],
            "__typename": [
                3
            ]
        },
        "ticket_service_constraint": {},
        "ticket_service_insert_input": {
            "Notifications": [
                18
            ],
            "Service": [
                52
            ],
            "service_id": [
                120
            ],
            "ticket_id": [
                120
            ],
            "__typename": [
                3
            ]
        },
        "ticket_service_max_fields": {
            "service_id": [
                120
            ],
            "ticket_id": [
                120
            ],
            "__typename": [
                3
            ]
        },
        "ticket_service_max_order_by": {
            "service_id": [
                25
            ],
            "ticket_id": [
                25
            ],
            "__typename": [
                3
            ]
        },
        "ticket_service_min_fields": {
            "service_id": [
                120
            ],
            "ticket_id": [
                120
            ],
            "__typename": [
                3
            ]
        },
        "ticket_service_min_order_by": {
            "service_id": [
                25
            ],
            "ticket_id": [
                25
            ],
            "__typename": [
                3
            ]
        },
        "ticket_service_mutation_response": {
            "affected_rows": [
                2
            ],
            "returning": [
                74
            ],
            "__typename": [
                3
            ]
        },
        "ticket_service_on_conflict": {
            "constraint": [
                80
            ],
            "update_columns": [
                92
            ],
            "where": [
                79
            ],
            "__typename": [
                3
            ]
        },
        "ticket_service_order_by": {
            "Notifications": [
                20
            ],
            "Service": [
                54
            ],
            "service_id": [
                25
            ],
            "ticket_id": [
                25
            ],
            "__typename": [
                3
            ]
        },
        "ticket_service_pk_columns_input": {
            "service_id": [
                120
            ],
            "ticket_id": [
                120
            ],
            "__typename": [
                3
            ]
        },
        "ticket_service_select_column": {},
        "ticket_service_set_input": {
            "service_id": [
                120
            ],
            "ticket_id": [
                120
            ],
            "__typename": [
                3
            ]
        },
        "ticket_service_update_column": {},
        "timestamptz": {},
        "timestamptz_comparison_exp": {
            "_eq": [
                93
            ],
            "_gt": [
                93
            ],
            "_gte": [
                93
            ],
            "_in": [
                93
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                93
            ],
            "_lte": [
                93
            ],
            "_neq": [
                93
            ],
            "_nin": [
                93
            ],
            "__typename": [
                3
            ]
        },
        "trigger": {
            "name": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "trigger_aggregate": {
            "aggregate": [
                97
            ],
            "nodes": [
                95
            ],
            "__typename": [
                3
            ]
        },
        "trigger_aggregate_fields": {
            "count": [
                2,
                {
                    "columns": [
                        109,
                        "[trigger_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                103
            ],
            "min": [
                104
            ],
            "__typename": [
                3
            ]
        },
        "trigger_bool_exp": {
            "_and": [
                98
            ],
            "_not": [
                98
            ],
            "_or": [
                98
            ],
            "name": [
                4
            ],
            "__typename": [
                3
            ]
        },
        "trigger_constraint": {},
        "trigger_enum": {},
        "trigger_enum_comparison_exp": {
            "_eq": [
                100
            ],
            "_in": [
                100
            ],
            "_is_null": [
                0
            ],
            "_neq": [
                100
            ],
            "_nin": [
                100
            ],
            "__typename": [
                3
            ]
        },
        "trigger_insert_input": {
            "name": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "trigger_max_fields": {
            "name": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "trigger_min_fields": {
            "name": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "trigger_mutation_response": {
            "affected_rows": [
                2
            ],
            "returning": [
                95
            ],
            "__typename": [
                3
            ]
        },
        "trigger_on_conflict": {
            "constraint": [
                99
            ],
            "update_columns": [
                111
            ],
            "where": [
                98
            ],
            "__typename": [
                3
            ]
        },
        "trigger_order_by": {
            "name": [
                25
            ],
            "__typename": [
                3
            ]
        },
        "trigger_pk_columns_input": {
            "name": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "trigger_select_column": {},
        "trigger_set_input": {
            "name": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "trigger_update_column": {},
        "users": {
            "services": [
                43
            ],
            "user_id": [
                120
            ],
            "__typename": [
                3
            ]
        },
        "users_aggregate": {
            "aggregate": [
                114
            ],
            "nodes": [
                112
            ],
            "__typename": [
                3
            ]
        },
        "users_aggregate_fields": {
            "count": [
                2,
                {
                    "columns": [
                        119,
                        "[users_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                116
            ],
            "min": [
                117
            ],
            "__typename": [
                3
            ]
        },
        "users_bool_exp": {
            "_and": [
                115
            ],
            "_not": [
                115
            ],
            "_or": [
                115
            ],
            "services": [
                46
            ],
            "user_id": [
                121
            ],
            "__typename": [
                3
            ]
        },
        "users_max_fields": {
            "user_id": [
                120
            ],
            "__typename": [
                3
            ]
        },
        "users_min_fields": {
            "user_id": [
                120
            ],
            "__typename": [
                3
            ]
        },
        "users_order_by": {
            "services": [
                54
            ],
            "user_id": [
                25
            ],
            "__typename": [
                3
            ]
        },
        "users_select_column": {},
        "uuid": {},
        "uuid_comparison_exp": {
            "_eq": [
                120
            ],
            "_gt": [
                120
            ],
            "_gte": [
                120
            ],
            "_in": [
                120
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                120
            ],
            "_lte": [
                120
            ],
            "_neq": [
                120
            ],
            "_nin": [
                120
            ],
            "__typename": [
                3
            ]
        },
        "Query": {
            "notifications": [
                5,
                {
                    "distinct_on": [
                        22,
                        "[notifications_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        20,
                        "[notifications_order_by!]"
                    ],
                    "where": [
                        10
                    ]
                }
            ],
            "notifications_aggregate": [
                6,
                {
                    "distinct_on": [
                        22,
                        "[notifications_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        20,
                        "[notifications_order_by!]"
                    ],
                    "where": [
                        10
                    ]
                }
            ],
            "notifications_by_pk": [
                5,
                {
                    "id": [
                        120,
                        "uuid!"
                    ]
                }
            ],
            "service": [
                26,
                {
                    "distinct_on": [
                        40,
                        "[service_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        38,
                        "[service_order_by!]"
                    ],
                    "where": [
                        29
                    ]
                }
            ],
            "service_aggregate": [
                27,
                {
                    "distinct_on": [
                        40,
                        "[service_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        38,
                        "[service_order_by!]"
                    ],
                    "where": [
                        29
                    ]
                }
            ],
            "service_by_pk": [
                26,
                {
                    "name": [
                        3,
                        "String!"
                    ]
                }
            ],
            "services": [
                43,
                {
                    "distinct_on": [
                        56,
                        "[services_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        54,
                        "[services_order_by!]"
                    ],
                    "where": [
                        46
                    ]
                }
            ],
            "services_aggregate": [
                44,
                {
                    "distinct_on": [
                        56,
                        "[services_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        54,
                        "[services_order_by!]"
                    ],
                    "where": [
                        46
                    ]
                }
            ],
            "services_by_pk": [
                43,
                {
                    "id": [
                        120,
                        "uuid!"
                    ]
                }
            ],
            "severity": [
                59,
                {
                    "distinct_on": [
                        71,
                        "[severity_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        69,
                        "[severity_order_by!]"
                    ],
                    "where": [
                        62
                    ]
                }
            ],
            "severity_aggregate": [
                60,
                {
                    "distinct_on": [
                        71,
                        "[severity_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        69,
                        "[severity_order_by!]"
                    ],
                    "where": [
                        62
                    ]
                }
            ],
            "severity_by_pk": [
                59,
                {
                    "name": [
                        3,
                        "String!"
                    ]
                }
            ],
            "ticket_service": [
                74,
                {
                    "distinct_on": [
                        90,
                        "[ticket_service_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        88,
                        "[ticket_service_order_by!]"
                    ],
                    "where": [
                        79
                    ]
                }
            ],
            "ticket_service_aggregate": [
                75,
                {
                    "distinct_on": [
                        90,
                        "[ticket_service_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        88,
                        "[ticket_service_order_by!]"
                    ],
                    "where": [
                        79
                    ]
                }
            ],
            "ticket_service_by_pk": [
                74,
                {
                    "service_id": [
                        120,
                        "uuid!"
                    ],
                    "ticket_id": [
                        120,
                        "uuid!"
                    ]
                }
            ],
            "trigger": [
                95,
                {
                    "distinct_on": [
                        109,
                        "[trigger_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        107,
                        "[trigger_order_by!]"
                    ],
                    "where": [
                        98
                    ]
                }
            ],
            "trigger_aggregate": [
                96,
                {
                    "distinct_on": [
                        109,
                        "[trigger_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        107,
                        "[trigger_order_by!]"
                    ],
                    "where": [
                        98
                    ]
                }
            ],
            "trigger_by_pk": [
                95,
                {
                    "name": [
                        3,
                        "String!"
                    ]
                }
            ],
            "users": [
                112,
                {
                    "distinct_on": [
                        119,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        118,
                        "[users_order_by!]"
                    ],
                    "where": [
                        115
                    ]
                }
            ],
            "users_aggregate": [
                113,
                {
                    "distinct_on": [
                        119,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        118,
                        "[users_order_by!]"
                    ],
                    "where": [
                        115
                    ]
                }
            ],
            "__typename": [
                3
            ]
        },
        "Mutation": {
            "delete_notifications": [
                17,
                {
                    "where": [
                        10,
                        "notifications_bool_exp!"
                    ]
                }
            ],
            "delete_notifications_by_pk": [
                5,
                {
                    "id": [
                        120,
                        "uuid!"
                    ]
                }
            ],
            "delete_service": [
                36,
                {
                    "where": [
                        29,
                        "service_bool_exp!"
                    ]
                }
            ],
            "delete_service_by_pk": [
                26,
                {
                    "name": [
                        3,
                        "String!"
                    ]
                }
            ],
            "delete_services": [
                51,
                {
                    "where": [
                        46,
                        "services_bool_exp!"
                    ]
                }
            ],
            "delete_services_by_pk": [
                43,
                {
                    "id": [
                        120,
                        "uuid!"
                    ]
                }
            ],
            "delete_severity": [
                67,
                {
                    "where": [
                        62,
                        "severity_bool_exp!"
                    ]
                }
            ],
            "delete_severity_by_pk": [
                59,
                {
                    "name": [
                        3,
                        "String!"
                    ]
                }
            ],
            "delete_ticket_service": [
                86,
                {
                    "where": [
                        79,
                        "ticket_service_bool_exp!"
                    ]
                }
            ],
            "delete_ticket_service_by_pk": [
                74,
                {
                    "service_id": [
                        120,
                        "uuid!"
                    ],
                    "ticket_id": [
                        120,
                        "uuid!"
                    ]
                }
            ],
            "delete_trigger": [
                105,
                {
                    "where": [
                        98,
                        "trigger_bool_exp!"
                    ]
                }
            ],
            "delete_trigger_by_pk": [
                95,
                {
                    "name": [
                        3,
                        "String!"
                    ]
                }
            ],
            "insert_notifications": [
                17,
                {
                    "objects": [
                        12,
                        "[notifications_insert_input!]!"
                    ],
                    "on_conflict": [
                        19
                    ]
                }
            ],
            "insert_notifications_one": [
                5,
                {
                    "object": [
                        12,
                        "notifications_insert_input!"
                    ],
                    "on_conflict": [
                        19
                    ]
                }
            ],
            "insert_service": [
                36,
                {
                    "objects": [
                        33,
                        "[service_insert_input!]!"
                    ],
                    "on_conflict": [
                        37
                    ]
                }
            ],
            "insert_service_one": [
                26,
                {
                    "object": [
                        33,
                        "service_insert_input!"
                    ],
                    "on_conflict": [
                        37
                    ]
                }
            ],
            "insert_services": [
                51,
                {
                    "objects": [
                        48,
                        "[services_insert_input!]!"
                    ],
                    "on_conflict": [
                        53
                    ]
                }
            ],
            "insert_services_one": [
                43,
                {
                    "object": [
                        48,
                        "services_insert_input!"
                    ],
                    "on_conflict": [
                        53
                    ]
                }
            ],
            "insert_severity": [
                67,
                {
                    "objects": [
                        64,
                        "[severity_insert_input!]!"
                    ],
                    "on_conflict": [
                        68
                    ]
                }
            ],
            "insert_severity_one": [
                59,
                {
                    "object": [
                        64,
                        "severity_insert_input!"
                    ],
                    "on_conflict": [
                        68
                    ]
                }
            ],
            "insert_ticket_service": [
                86,
                {
                    "objects": [
                        81,
                        "[ticket_service_insert_input!]!"
                    ],
                    "on_conflict": [
                        87
                    ]
                }
            ],
            "insert_ticket_service_one": [
                74,
                {
                    "object": [
                        81,
                        "ticket_service_insert_input!"
                    ],
                    "on_conflict": [
                        87
                    ]
                }
            ],
            "insert_trigger": [
                105,
                {
                    "objects": [
                        102,
                        "[trigger_insert_input!]!"
                    ],
                    "on_conflict": [
                        106
                    ]
                }
            ],
            "insert_trigger_one": [
                95,
                {
                    "object": [
                        102,
                        "trigger_insert_input!"
                    ],
                    "on_conflict": [
                        106
                    ]
                }
            ],
            "update_notifications": [
                17,
                {
                    "_set": [
                        23
                    ],
                    "where": [
                        10,
                        "notifications_bool_exp!"
                    ]
                }
            ],
            "update_notifications_by_pk": [
                5,
                {
                    "_set": [
                        23
                    ],
                    "pk_columns": [
                        21,
                        "notifications_pk_columns_input!"
                    ]
                }
            ],
            "update_service": [
                36,
                {
                    "_set": [
                        41
                    ],
                    "where": [
                        29,
                        "service_bool_exp!"
                    ]
                }
            ],
            "update_service_by_pk": [
                26,
                {
                    "_set": [
                        41
                    ],
                    "pk_columns": [
                        39,
                        "service_pk_columns_input!"
                    ]
                }
            ],
            "update_services": [
                51,
                {
                    "_set": [
                        57
                    ],
                    "where": [
                        46,
                        "services_bool_exp!"
                    ]
                }
            ],
            "update_services_by_pk": [
                43,
                {
                    "_set": [
                        57
                    ],
                    "pk_columns": [
                        55,
                        "services_pk_columns_input!"
                    ]
                }
            ],
            "update_severity": [
                67,
                {
                    "_set": [
                        72
                    ],
                    "where": [
                        62,
                        "severity_bool_exp!"
                    ]
                }
            ],
            "update_severity_by_pk": [
                59,
                {
                    "_set": [
                        72
                    ],
                    "pk_columns": [
                        70,
                        "severity_pk_columns_input!"
                    ]
                }
            ],
            "update_ticket_service": [
                86,
                {
                    "_set": [
                        91
                    ],
                    "where": [
                        79,
                        "ticket_service_bool_exp!"
                    ]
                }
            ],
            "update_ticket_service_by_pk": [
                74,
                {
                    "_set": [
                        91
                    ],
                    "pk_columns": [
                        89,
                        "ticket_service_pk_columns_input!"
                    ]
                }
            ],
            "update_trigger": [
                105,
                {
                    "_set": [
                        110
                    ],
                    "where": [
                        98,
                        "trigger_bool_exp!"
                    ]
                }
            ],
            "update_trigger_by_pk": [
                95,
                {
                    "_set": [
                        110
                    ],
                    "pk_columns": [
                        108,
                        "trigger_pk_columns_input!"
                    ]
                }
            ],
            "__typename": [
                3
            ]
        },
        "Subscription": {
            "notifications": [
                5,
                {
                    "distinct_on": [
                        22,
                        "[notifications_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        20,
                        "[notifications_order_by!]"
                    ],
                    "where": [
                        10
                    ]
                }
            ],
            "notifications_aggregate": [
                6,
                {
                    "distinct_on": [
                        22,
                        "[notifications_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        20,
                        "[notifications_order_by!]"
                    ],
                    "where": [
                        10
                    ]
                }
            ],
            "notifications_by_pk": [
                5,
                {
                    "id": [
                        120,
                        "uuid!"
                    ]
                }
            ],
            "service": [
                26,
                {
                    "distinct_on": [
                        40,
                        "[service_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        38,
                        "[service_order_by!]"
                    ],
                    "where": [
                        29
                    ]
                }
            ],
            "service_aggregate": [
                27,
                {
                    "distinct_on": [
                        40,
                        "[service_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        38,
                        "[service_order_by!]"
                    ],
                    "where": [
                        29
                    ]
                }
            ],
            "service_by_pk": [
                26,
                {
                    "name": [
                        3,
                        "String!"
                    ]
                }
            ],
            "services": [
                43,
                {
                    "distinct_on": [
                        56,
                        "[services_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        54,
                        "[services_order_by!]"
                    ],
                    "where": [
                        46
                    ]
                }
            ],
            "services_aggregate": [
                44,
                {
                    "distinct_on": [
                        56,
                        "[services_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        54,
                        "[services_order_by!]"
                    ],
                    "where": [
                        46
                    ]
                }
            ],
            "services_by_pk": [
                43,
                {
                    "id": [
                        120,
                        "uuid!"
                    ]
                }
            ],
            "severity": [
                59,
                {
                    "distinct_on": [
                        71,
                        "[severity_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        69,
                        "[severity_order_by!]"
                    ],
                    "where": [
                        62
                    ]
                }
            ],
            "severity_aggregate": [
                60,
                {
                    "distinct_on": [
                        71,
                        "[severity_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        69,
                        "[severity_order_by!]"
                    ],
                    "where": [
                        62
                    ]
                }
            ],
            "severity_by_pk": [
                59,
                {
                    "name": [
                        3,
                        "String!"
                    ]
                }
            ],
            "ticket_service": [
                74,
                {
                    "distinct_on": [
                        90,
                        "[ticket_service_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        88,
                        "[ticket_service_order_by!]"
                    ],
                    "where": [
                        79
                    ]
                }
            ],
            "ticket_service_aggregate": [
                75,
                {
                    "distinct_on": [
                        90,
                        "[ticket_service_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        88,
                        "[ticket_service_order_by!]"
                    ],
                    "where": [
                        79
                    ]
                }
            ],
            "ticket_service_by_pk": [
                74,
                {
                    "service_id": [
                        120,
                        "uuid!"
                    ],
                    "ticket_id": [
                        120,
                        "uuid!"
                    ]
                }
            ],
            "trigger": [
                95,
                {
                    "distinct_on": [
                        109,
                        "[trigger_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        107,
                        "[trigger_order_by!]"
                    ],
                    "where": [
                        98
                    ]
                }
            ],
            "trigger_aggregate": [
                96,
                {
                    "distinct_on": [
                        109,
                        "[trigger_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        107,
                        "[trigger_order_by!]"
                    ],
                    "where": [
                        98
                    ]
                }
            ],
            "trigger_by_pk": [
                95,
                {
                    "name": [
                        3,
                        "String!"
                    ]
                }
            ],
            "users": [
                112,
                {
                    "distinct_on": [
                        119,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        118,
                        "[users_order_by!]"
                    ],
                    "where": [
                        115
                    ]
                }
            ],
            "users_aggregate": [
                113,
                {
                    "distinct_on": [
                        119,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        118,
                        "[users_order_by!]"
                    ],
                    "where": [
                        115
                    ]
                }
            ],
            "__typename": [
                3
            ]
        }
    }
}