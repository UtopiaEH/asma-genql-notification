export default {
    "scalars": [
        0,
        2,
        3,
        11,
        21,
        23,
        24,
        29,
        30,
        39,
        41,
        46,
        55,
        57,
        62,
        70,
        72,
        73,
        79,
        80,
        89,
        91,
        92
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
                73
            ],
            "deleted_at": [
                73
            ],
            "id": [
                92
            ],
            "message": [
                3
            ],
            "seen": [
                0
            ],
            "service": [
                42
            ],
            "service_id": [
                92
            ],
            "subject_id": [
                92
            ],
            "title": [
                3
            ],
            "trigger": [
                80
            ],
            "updated_at": [
                73
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
                        21,
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
                24
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
                18
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
                74
            ],
            "deleted_at": [
                74
            ],
            "id": [
                93
            ],
            "message": [
                4
            ],
            "seen": [
                1
            ],
            "service": [
                45
            ],
            "service_id": [
                93
            ],
            "subject_id": [
                93
            ],
            "title": [
                4
            ],
            "trigger": [
                81
            ],
            "updated_at": [
                74
            ],
            "__typename": [
                3
            ]
        },
        "notifications_constraint": {},
        "notifications_insert_input": {
            "created_at": [
                73
            ],
            "deleted_at": [
                73
            ],
            "id": [
                92
            ],
            "message": [
                3
            ],
            "seen": [
                0
            ],
            "service": [
                51
            ],
            "service_id": [
                92
            ],
            "subject_id": [
                92
            ],
            "title": [
                3
            ],
            "trigger": [
                80
            ],
            "updated_at": [
                73
            ],
            "__typename": [
                3
            ]
        },
        "notifications_max_fields": {
            "created_at": [
                73
            ],
            "deleted_at": [
                73
            ],
            "id": [
                92
            ],
            "message": [
                3
            ],
            "service_id": [
                92
            ],
            "subject_id": [
                92
            ],
            "title": [
                3
            ],
            "updated_at": [
                73
            ],
            "__typename": [
                3
            ]
        },
        "notifications_max_order_by": {
            "created_at": [
                24
            ],
            "deleted_at": [
                24
            ],
            "id": [
                24
            ],
            "message": [
                24
            ],
            "service_id": [
                24
            ],
            "subject_id": [
                24
            ],
            "title": [
                24
            ],
            "updated_at": [
                24
            ],
            "__typename": [
                3
            ]
        },
        "notifications_min_fields": {
            "created_at": [
                73
            ],
            "deleted_at": [
                73
            ],
            "id": [
                92
            ],
            "message": [
                3
            ],
            "service_id": [
                92
            ],
            "subject_id": [
                92
            ],
            "title": [
                3
            ],
            "updated_at": [
                73
            ],
            "__typename": [
                3
            ]
        },
        "notifications_min_order_by": {
            "created_at": [
                24
            ],
            "deleted_at": [
                24
            ],
            "id": [
                24
            ],
            "message": [
                24
            ],
            "service_id": [
                24
            ],
            "subject_id": [
                24
            ],
            "title": [
                24
            ],
            "updated_at": [
                24
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
        "notifications_on_conflict": {
            "constraint": [
                11
            ],
            "update_columns": [
                23
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
                24
            ],
            "deleted_at": [
                24
            ],
            "id": [
                24
            ],
            "message": [
                24
            ],
            "seen": [
                24
            ],
            "service": [
                53
            ],
            "service_id": [
                24
            ],
            "subject_id": [
                24
            ],
            "title": [
                24
            ],
            "trigger": [
                24
            ],
            "updated_at": [
                24
            ],
            "__typename": [
                3
            ]
        },
        "notifications_pk_columns_input": {
            "id": [
                92
            ],
            "__typename": [
                3
            ]
        },
        "notifications_select_column": {},
        "notifications_set_input": {
            "created_at": [
                73
            ],
            "deleted_at": [
                73
            ],
            "id": [
                92
            ],
            "message": [
                3
            ],
            "seen": [
                0
            ],
            "service_id": [
                92
            ],
            "subject_id": [
                92
            ],
            "title": [
                3
            ],
            "trigger": [
                80
            ],
            "updated_at": [
                73
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
                27
            ],
            "nodes": [
                25
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
                        39,
                        "[service_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                33
            ],
            "min": [
                34
            ],
            "__typename": [
                3
            ]
        },
        "service_bool_exp": {
            "_and": [
                28
            ],
            "_not": [
                28
            ],
            "_or": [
                28
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
                30
            ],
            "_in": [
                30
            ],
            "_is_null": [
                0
            ],
            "_neq": [
                30
            ],
            "_nin": [
                30
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
                25
            ],
            "__typename": [
                3
            ]
        },
        "service_on_conflict": {
            "constraint": [
                29
            ],
            "update_columns": [
                41
            ],
            "where": [
                28
            ],
            "__typename": [
                3
            ]
        },
        "service_order_by": {
            "description": [
                24
            ],
            "name": [
                24
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
            "created_at": [
                73
            ],
            "customer_id": [
                92
            ],
            "email_channel": [
                0
            ],
            "enabled": [
                0
            ],
            "id": [
                92
            ],
            "message": [
                3
            ],
            "notifications": [
                5,
                {
                    "distinct_on": [
                        21,
                        "[notifications_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        19,
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
                        21,
                        "[notifications_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        19,
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
                30
            ],
            "sms_channel": [
                0
            ],
            "title": [
                3
            ],
            "updated_at": [
                73
            ],
            "user_id": [
                92
            ],
            "__typename": [
                3
            ]
        },
        "services_aggregate": {
            "aggregate": [
                44
            ],
            "nodes": [
                42
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
                        55,
                        "[services_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                48
            ],
            "min": [
                49
            ],
            "__typename": [
                3
            ]
        },
        "services_bool_exp": {
            "_and": [
                45
            ],
            "_not": [
                45
            ],
            "_or": [
                45
            ],
            "created_at": [
                74
            ],
            "customer_id": [
                93
            ],
            "email_channel": [
                1
            ],
            "enabled": [
                1
            ],
            "id": [
                93
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
                31
            ],
            "sms_channel": [
                1
            ],
            "title": [
                4
            ],
            "updated_at": [
                74
            ],
            "user_id": [
                93
            ],
            "__typename": [
                3
            ]
        },
        "services_constraint": {},
        "services_insert_input": {
            "created_at": [
                73
            ],
            "customer_id": [
                92
            ],
            "email_channel": [
                0
            ],
            "enabled": [
                0
            ],
            "id": [
                92
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
                30
            ],
            "sms_channel": [
                0
            ],
            "title": [
                3
            ],
            "updated_at": [
                73
            ],
            "user_id": [
                92
            ],
            "__typename": [
                3
            ]
        },
        "services_max_fields": {
            "created_at": [
                73
            ],
            "customer_id": [
                92
            ],
            "id": [
                92
            ],
            "message": [
                3
            ],
            "title": [
                3
            ],
            "updated_at": [
                73
            ],
            "user_id": [
                92
            ],
            "__typename": [
                3
            ]
        },
        "services_min_fields": {
            "created_at": [
                73
            ],
            "customer_id": [
                92
            ],
            "id": [
                92
            ],
            "message": [
                3
            ],
            "title": [
                3
            ],
            "updated_at": [
                73
            ],
            "user_id": [
                92
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
                42
            ],
            "__typename": [
                3
            ]
        },
        "services_obj_rel_insert_input": {
            "data": [
                47
            ],
            "on_conflict": [
                52
            ],
            "__typename": [
                3
            ]
        },
        "services_on_conflict": {
            "constraint": [
                46
            ],
            "update_columns": [
                57
            ],
            "where": [
                45
            ],
            "__typename": [
                3
            ]
        },
        "services_order_by": {
            "created_at": [
                24
            ],
            "customer_id": [
                24
            ],
            "email_channel": [
                24
            ],
            "enabled": [
                24
            ],
            "id": [
                24
            ],
            "message": [
                24
            ],
            "notifications_aggregate": [
                8
            ],
            "push_channel": [
                24
            ],
            "service": [
                24
            ],
            "sms_channel": [
                24
            ],
            "title": [
                24
            ],
            "updated_at": [
                24
            ],
            "user_id": [
                24
            ],
            "__typename": [
                3
            ]
        },
        "services_pk_columns_input": {
            "id": [
                92
            ],
            "__typename": [
                3
            ]
        },
        "services_select_column": {},
        "services_set_input": {
            "created_at": [
                73
            ],
            "customer_id": [
                92
            ],
            "email_channel": [
                0
            ],
            "enabled": [
                0
            ],
            "id": [
                92
            ],
            "message": [
                3
            ],
            "push_channel": [
                0
            ],
            "service": [
                30
            ],
            "sms_channel": [
                0
            ],
            "title": [
                3
            ],
            "updated_at": [
                73
            ],
            "user_id": [
                92
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
                60
            ],
            "nodes": [
                58
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
                        70,
                        "[severity_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                64
            ],
            "min": [
                65
            ],
            "__typename": [
                3
            ]
        },
        "severity_bool_exp": {
            "_and": [
                61
            ],
            "_not": [
                61
            ],
            "_or": [
                61
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
                58
            ],
            "__typename": [
                3
            ]
        },
        "severity_on_conflict": {
            "constraint": [
                62
            ],
            "update_columns": [
                72
            ],
            "where": [
                61
            ],
            "__typename": [
                3
            ]
        },
        "severity_order_by": {
            "description": [
                24
            ],
            "name": [
                24
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
        "timestamptz": {},
        "timestamptz_comparison_exp": {
            "_eq": [
                73
            ],
            "_gt": [
                73
            ],
            "_gte": [
                73
            ],
            "_in": [
                73
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                73
            ],
            "_lte": [
                73
            ],
            "_neq": [
                73
            ],
            "_nin": [
                73
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
                77
            ],
            "nodes": [
                75
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
                        89,
                        "[trigger_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                83
            ],
            "min": [
                84
            ],
            "__typename": [
                3
            ]
        },
        "trigger_bool_exp": {
            "_and": [
                78
            ],
            "_not": [
                78
            ],
            "_or": [
                78
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
                80
            ],
            "_in": [
                80
            ],
            "_is_null": [
                0
            ],
            "_neq": [
                80
            ],
            "_nin": [
                80
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
                75
            ],
            "__typename": [
                3
            ]
        },
        "trigger_on_conflict": {
            "constraint": [
                79
            ],
            "update_columns": [
                91
            ],
            "where": [
                78
            ],
            "__typename": [
                3
            ]
        },
        "trigger_order_by": {
            "name": [
                24
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
        "uuid": {},
        "uuid_comparison_exp": {
            "_eq": [
                92
            ],
            "_gt": [
                92
            ],
            "_gte": [
                92
            ],
            "_in": [
                92
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                92
            ],
            "_lte": [
                92
            ],
            "_neq": [
                92
            ],
            "_nin": [
                92
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
                        21,
                        "[notifications_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        19,
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
                        21,
                        "[notifications_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        19,
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
                        92,
                        "uuid!"
                    ]
                }
            ],
            "service": [
                25,
                {
                    "distinct_on": [
                        39,
                        "[service_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        37,
                        "[service_order_by!]"
                    ],
                    "where": [
                        28
                    ]
                }
            ],
            "service_aggregate": [
                26,
                {
                    "distinct_on": [
                        39,
                        "[service_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        37,
                        "[service_order_by!]"
                    ],
                    "where": [
                        28
                    ]
                }
            ],
            "service_by_pk": [
                25,
                {
                    "name": [
                        3,
                        "String!"
                    ]
                }
            ],
            "services": [
                42,
                {
                    "distinct_on": [
                        55,
                        "[services_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        53,
                        "[services_order_by!]"
                    ],
                    "where": [
                        45
                    ]
                }
            ],
            "services_aggregate": [
                43,
                {
                    "distinct_on": [
                        55,
                        "[services_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        53,
                        "[services_order_by!]"
                    ],
                    "where": [
                        45
                    ]
                }
            ],
            "services_by_pk": [
                42,
                {
                    "id": [
                        92,
                        "uuid!"
                    ]
                }
            ],
            "severity": [
                58,
                {
                    "distinct_on": [
                        70,
                        "[severity_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        68,
                        "[severity_order_by!]"
                    ],
                    "where": [
                        61
                    ]
                }
            ],
            "severity_aggregate": [
                59,
                {
                    "distinct_on": [
                        70,
                        "[severity_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        68,
                        "[severity_order_by!]"
                    ],
                    "where": [
                        61
                    ]
                }
            ],
            "severity_by_pk": [
                58,
                {
                    "name": [
                        3,
                        "String!"
                    ]
                }
            ],
            "trigger": [
                75,
                {
                    "distinct_on": [
                        89,
                        "[trigger_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        87,
                        "[trigger_order_by!]"
                    ],
                    "where": [
                        78
                    ]
                }
            ],
            "trigger_aggregate": [
                76,
                {
                    "distinct_on": [
                        89,
                        "[trigger_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        87,
                        "[trigger_order_by!]"
                    ],
                    "where": [
                        78
                    ]
                }
            ],
            "trigger_by_pk": [
                75,
                {
                    "name": [
                        3,
                        "String!"
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
                        92,
                        "uuid!"
                    ]
                }
            ],
            "delete_service": [
                35,
                {
                    "where": [
                        28,
                        "service_bool_exp!"
                    ]
                }
            ],
            "delete_service_by_pk": [
                25,
                {
                    "name": [
                        3,
                        "String!"
                    ]
                }
            ],
            "delete_services": [
                50,
                {
                    "where": [
                        45,
                        "services_bool_exp!"
                    ]
                }
            ],
            "delete_services_by_pk": [
                42,
                {
                    "id": [
                        92,
                        "uuid!"
                    ]
                }
            ],
            "delete_severity": [
                66,
                {
                    "where": [
                        61,
                        "severity_bool_exp!"
                    ]
                }
            ],
            "delete_severity_by_pk": [
                58,
                {
                    "name": [
                        3,
                        "String!"
                    ]
                }
            ],
            "delete_trigger": [
                85,
                {
                    "where": [
                        78,
                        "trigger_bool_exp!"
                    ]
                }
            ],
            "delete_trigger_by_pk": [
                75,
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
                        18
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
                        18
                    ]
                }
            ],
            "insert_service": [
                35,
                {
                    "objects": [
                        32,
                        "[service_insert_input!]!"
                    ],
                    "on_conflict": [
                        36
                    ]
                }
            ],
            "insert_service_one": [
                25,
                {
                    "object": [
                        32,
                        "service_insert_input!"
                    ],
                    "on_conflict": [
                        36
                    ]
                }
            ],
            "insert_services": [
                50,
                {
                    "objects": [
                        47,
                        "[services_insert_input!]!"
                    ],
                    "on_conflict": [
                        52
                    ]
                }
            ],
            "insert_services_one": [
                42,
                {
                    "object": [
                        47,
                        "services_insert_input!"
                    ],
                    "on_conflict": [
                        52
                    ]
                }
            ],
            "insert_severity": [
                66,
                {
                    "objects": [
                        63,
                        "[severity_insert_input!]!"
                    ],
                    "on_conflict": [
                        67
                    ]
                }
            ],
            "insert_severity_one": [
                58,
                {
                    "object": [
                        63,
                        "severity_insert_input!"
                    ],
                    "on_conflict": [
                        67
                    ]
                }
            ],
            "insert_trigger": [
                85,
                {
                    "objects": [
                        82,
                        "[trigger_insert_input!]!"
                    ],
                    "on_conflict": [
                        86
                    ]
                }
            ],
            "insert_trigger_one": [
                75,
                {
                    "object": [
                        82,
                        "trigger_insert_input!"
                    ],
                    "on_conflict": [
                        86
                    ]
                }
            ],
            "update_notifications": [
                17,
                {
                    "_set": [
                        22
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
                        22
                    ],
                    "pk_columns": [
                        20,
                        "notifications_pk_columns_input!"
                    ]
                }
            ],
            "update_service": [
                35,
                {
                    "_set": [
                        40
                    ],
                    "where": [
                        28,
                        "service_bool_exp!"
                    ]
                }
            ],
            "update_service_by_pk": [
                25,
                {
                    "_set": [
                        40
                    ],
                    "pk_columns": [
                        38,
                        "service_pk_columns_input!"
                    ]
                }
            ],
            "update_services": [
                50,
                {
                    "_set": [
                        56
                    ],
                    "where": [
                        45,
                        "services_bool_exp!"
                    ]
                }
            ],
            "update_services_by_pk": [
                42,
                {
                    "_set": [
                        56
                    ],
                    "pk_columns": [
                        54,
                        "services_pk_columns_input!"
                    ]
                }
            ],
            "update_severity": [
                66,
                {
                    "_set": [
                        71
                    ],
                    "where": [
                        61,
                        "severity_bool_exp!"
                    ]
                }
            ],
            "update_severity_by_pk": [
                58,
                {
                    "_set": [
                        71
                    ],
                    "pk_columns": [
                        69,
                        "severity_pk_columns_input!"
                    ]
                }
            ],
            "update_trigger": [
                85,
                {
                    "_set": [
                        90
                    ],
                    "where": [
                        78,
                        "trigger_bool_exp!"
                    ]
                }
            ],
            "update_trigger_by_pk": [
                75,
                {
                    "_set": [
                        90
                    ],
                    "pk_columns": [
                        88,
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
                        21,
                        "[notifications_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        19,
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
                        21,
                        "[notifications_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        19,
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
                        92,
                        "uuid!"
                    ]
                }
            ],
            "service": [
                25,
                {
                    "distinct_on": [
                        39,
                        "[service_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        37,
                        "[service_order_by!]"
                    ],
                    "where": [
                        28
                    ]
                }
            ],
            "service_aggregate": [
                26,
                {
                    "distinct_on": [
                        39,
                        "[service_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        37,
                        "[service_order_by!]"
                    ],
                    "where": [
                        28
                    ]
                }
            ],
            "service_by_pk": [
                25,
                {
                    "name": [
                        3,
                        "String!"
                    ]
                }
            ],
            "services": [
                42,
                {
                    "distinct_on": [
                        55,
                        "[services_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        53,
                        "[services_order_by!]"
                    ],
                    "where": [
                        45
                    ]
                }
            ],
            "services_aggregate": [
                43,
                {
                    "distinct_on": [
                        55,
                        "[services_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        53,
                        "[services_order_by!]"
                    ],
                    "where": [
                        45
                    ]
                }
            ],
            "services_by_pk": [
                42,
                {
                    "id": [
                        92,
                        "uuid!"
                    ]
                }
            ],
            "severity": [
                58,
                {
                    "distinct_on": [
                        70,
                        "[severity_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        68,
                        "[severity_order_by!]"
                    ],
                    "where": [
                        61
                    ]
                }
            ],
            "severity_aggregate": [
                59,
                {
                    "distinct_on": [
                        70,
                        "[severity_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        68,
                        "[severity_order_by!]"
                    ],
                    "where": [
                        61
                    ]
                }
            ],
            "severity_by_pk": [
                58,
                {
                    "name": [
                        3,
                        "String!"
                    ]
                }
            ],
            "trigger": [
                75,
                {
                    "distinct_on": [
                        89,
                        "[trigger_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        87,
                        "[trigger_order_by!]"
                    ],
                    "where": [
                        78
                    ]
                }
            ],
            "trigger_aggregate": [
                76,
                {
                    "distinct_on": [
                        89,
                        "[trigger_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        87,
                        "[trigger_order_by!]"
                    ],
                    "where": [
                        78
                    ]
                }
            ],
            "trigger_by_pk": [
                75,
                {
                    "name": [
                        3,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                3
            ]
        }
    }
}