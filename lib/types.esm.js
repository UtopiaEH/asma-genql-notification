export default {
    "scalars": [
        0,
        2,
        3,
        9,
        17,
        19,
        20,
        25,
        26,
        35,
        37,
        42,
        51,
        53,
        58,
        59,
        68,
        70,
        71,
        73
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
            "id": [
                73
            ],
            "path": [
                3
            ],
            "seen": [
                0
            ],
            "service": [
                38
            ],
            "service_id": [
                73
            ],
            "severity": [
                59
            ],
            "subject_id": [
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
                        17,
                        "[notifications_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                11
            ],
            "min": [
                12
            ],
            "__typename": [
                3
            ]
        },
        "notifications_bool_exp": {
            "_and": [
                8
            ],
            "_not": [
                8
            ],
            "_or": [
                8
            ],
            "id": [
                74
            ],
            "path": [
                4
            ],
            "seen": [
                1
            ],
            "service": [
                41
            ],
            "service_id": [
                74
            ],
            "severity": [
                60
            ],
            "subject_id": [
                74
            ],
            "__typename": [
                3
            ]
        },
        "notifications_constraint": {},
        "notifications_insert_input": {
            "id": [
                73
            ],
            "path": [
                3
            ],
            "seen": [
                0
            ],
            "service": [
                47
            ],
            "service_id": [
                73
            ],
            "severity": [
                59
            ],
            "subject_id": [
                73
            ],
            "__typename": [
                3
            ]
        },
        "notifications_max_fields": {
            "id": [
                73
            ],
            "path": [
                3
            ],
            "service_id": [
                73
            ],
            "subject_id": [
                73
            ],
            "__typename": [
                3
            ]
        },
        "notifications_min_fields": {
            "id": [
                73
            ],
            "path": [
                3
            ],
            "service_id": [
                73
            ],
            "subject_id": [
                73
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
                9
            ],
            "update_columns": [
                19
            ],
            "where": [
                8
            ],
            "__typename": [
                3
            ]
        },
        "notifications_order_by": {
            "id": [
                20
            ],
            "path": [
                20
            ],
            "seen": [
                20
            ],
            "service": [
                49
            ],
            "service_id": [
                20
            ],
            "severity": [
                20
            ],
            "subject_id": [
                20
            ],
            "__typename": [
                3
            ]
        },
        "notifications_pk_columns_input": {
            "id": [
                73
            ],
            "__typename": [
                3
            ]
        },
        "notifications_select_column": {},
        "notifications_set_input": {
            "id": [
                73
            ],
            "path": [
                3
            ],
            "seen": [
                0
            ],
            "service_id": [
                73
            ],
            "severity": [
                59
            ],
            "subject_id": [
                73
            ],
            "__typename": [
                3
            ]
        },
        "notifications_update_column": {},
        "order_by": {},
        "service_enums": {
            "description": [
                3
            ],
            "service": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "service_enums_aggregate": {
            "aggregate": [
                23
            ],
            "nodes": [
                21
            ],
            "__typename": [
                3
            ]
        },
        "service_enums_aggregate_fields": {
            "count": [
                2,
                {
                    "columns": [
                        35,
                        "[service_enums_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                29
            ],
            "min": [
                30
            ],
            "__typename": [
                3
            ]
        },
        "service_enums_bool_exp": {
            "_and": [
                24
            ],
            "_not": [
                24
            ],
            "_or": [
                24
            ],
            "description": [
                4
            ],
            "service": [
                4
            ],
            "__typename": [
                3
            ]
        },
        "service_enums_constraint": {},
        "service_enums_enum": {},
        "service_enums_enum_comparison_exp": {
            "_eq": [
                26
            ],
            "_in": [
                26
            ],
            "_is_null": [
                0
            ],
            "_neq": [
                26
            ],
            "_nin": [
                26
            ],
            "__typename": [
                3
            ]
        },
        "service_enums_insert_input": {
            "description": [
                3
            ],
            "service": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "service_enums_max_fields": {
            "description": [
                3
            ],
            "service": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "service_enums_min_fields": {
            "description": [
                3
            ],
            "service": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "service_enums_mutation_response": {
            "affected_rows": [
                2
            ],
            "returning": [
                21
            ],
            "__typename": [
                3
            ]
        },
        "service_enums_on_conflict": {
            "constraint": [
                25
            ],
            "update_columns": [
                37
            ],
            "where": [
                24
            ],
            "__typename": [
                3
            ]
        },
        "service_enums_order_by": {
            "description": [
                20
            ],
            "service": [
                20
            ],
            "__typename": [
                3
            ]
        },
        "service_enums_pk_columns_input": {
            "service": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "service_enums_select_column": {},
        "service_enums_set_input": {
            "description": [
                3
            ],
            "service": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "service_enums_update_column": {},
        "services": {
            "customer_id": [
                73
            ],
            "email_ch": [
                0
            ],
            "enabled": [
                0
            ],
            "id": [
                73
            ],
            "message": [
                3
            ],
            "push_ch": [
                0
            ],
            "service": [
                26
            ],
            "sms_ch": [
                0
            ],
            "title": [
                3
            ],
            "updated_at": [
                71
            ],
            "user_id": [
                73
            ],
            "__typename": [
                3
            ]
        },
        "services_aggregate": {
            "aggregate": [
                40
            ],
            "nodes": [
                38
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
                        51,
                        "[services_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                44
            ],
            "min": [
                45
            ],
            "__typename": [
                3
            ]
        },
        "services_bool_exp": {
            "_and": [
                41
            ],
            "_not": [
                41
            ],
            "_or": [
                41
            ],
            "customer_id": [
                74
            ],
            "email_ch": [
                1
            ],
            "enabled": [
                1
            ],
            "id": [
                74
            ],
            "message": [
                4
            ],
            "push_ch": [
                1
            ],
            "service": [
                27
            ],
            "sms_ch": [
                1
            ],
            "title": [
                4
            ],
            "updated_at": [
                72
            ],
            "user_id": [
                74
            ],
            "__typename": [
                3
            ]
        },
        "services_constraint": {},
        "services_insert_input": {
            "customer_id": [
                73
            ],
            "email_ch": [
                0
            ],
            "enabled": [
                0
            ],
            "id": [
                73
            ],
            "message": [
                3
            ],
            "push_ch": [
                0
            ],
            "service": [
                26
            ],
            "sms_ch": [
                0
            ],
            "title": [
                3
            ],
            "updated_at": [
                71
            ],
            "user_id": [
                73
            ],
            "__typename": [
                3
            ]
        },
        "services_max_fields": {
            "customer_id": [
                73
            ],
            "id": [
                73
            ],
            "message": [
                3
            ],
            "title": [
                3
            ],
            "updated_at": [
                71
            ],
            "user_id": [
                73
            ],
            "__typename": [
                3
            ]
        },
        "services_min_fields": {
            "customer_id": [
                73
            ],
            "id": [
                73
            ],
            "message": [
                3
            ],
            "title": [
                3
            ],
            "updated_at": [
                71
            ],
            "user_id": [
                73
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
                38
            ],
            "__typename": [
                3
            ]
        },
        "services_obj_rel_insert_input": {
            "data": [
                43
            ],
            "on_conflict": [
                48
            ],
            "__typename": [
                3
            ]
        },
        "services_on_conflict": {
            "constraint": [
                42
            ],
            "update_columns": [
                53
            ],
            "where": [
                41
            ],
            "__typename": [
                3
            ]
        },
        "services_order_by": {
            "customer_id": [
                20
            ],
            "email_ch": [
                20
            ],
            "enabled": [
                20
            ],
            "id": [
                20
            ],
            "message": [
                20
            ],
            "push_ch": [
                20
            ],
            "service": [
                20
            ],
            "sms_ch": [
                20
            ],
            "title": [
                20
            ],
            "updated_at": [
                20
            ],
            "user_id": [
                20
            ],
            "__typename": [
                3
            ]
        },
        "services_pk_columns_input": {
            "id": [
                73
            ],
            "__typename": [
                3
            ]
        },
        "services_select_column": {},
        "services_set_input": {
            "customer_id": [
                73
            ],
            "email_ch": [
                0
            ],
            "enabled": [
                0
            ],
            "id": [
                73
            ],
            "message": [
                3
            ],
            "push_ch": [
                0
            ],
            "service": [
                26
            ],
            "sms_ch": [
                0
            ],
            "title": [
                3
            ],
            "updated_at": [
                71
            ],
            "user_id": [
                73
            ],
            "__typename": [
                3
            ]
        },
        "services_update_column": {},
        "severity_enums": {
            "description": [
                3
            ],
            "severity": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "severity_enums_aggregate": {
            "aggregate": [
                56
            ],
            "nodes": [
                54
            ],
            "__typename": [
                3
            ]
        },
        "severity_enums_aggregate_fields": {
            "count": [
                2,
                {
                    "columns": [
                        68,
                        "[severity_enums_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                62
            ],
            "min": [
                63
            ],
            "__typename": [
                3
            ]
        },
        "severity_enums_bool_exp": {
            "_and": [
                57
            ],
            "_not": [
                57
            ],
            "_or": [
                57
            ],
            "description": [
                4
            ],
            "severity": [
                4
            ],
            "__typename": [
                3
            ]
        },
        "severity_enums_constraint": {},
        "severity_enums_enum": {},
        "severity_enums_enum_comparison_exp": {
            "_eq": [
                59
            ],
            "_in": [
                59
            ],
            "_is_null": [
                0
            ],
            "_neq": [
                59
            ],
            "_nin": [
                59
            ],
            "__typename": [
                3
            ]
        },
        "severity_enums_insert_input": {
            "description": [
                3
            ],
            "severity": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "severity_enums_max_fields": {
            "description": [
                3
            ],
            "severity": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "severity_enums_min_fields": {
            "description": [
                3
            ],
            "severity": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "severity_enums_mutation_response": {
            "affected_rows": [
                2
            ],
            "returning": [
                54
            ],
            "__typename": [
                3
            ]
        },
        "severity_enums_on_conflict": {
            "constraint": [
                58
            ],
            "update_columns": [
                70
            ],
            "where": [
                57
            ],
            "__typename": [
                3
            ]
        },
        "severity_enums_order_by": {
            "description": [
                20
            ],
            "severity": [
                20
            ],
            "__typename": [
                3
            ]
        },
        "severity_enums_pk_columns_input": {
            "severity": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "severity_enums_select_column": {},
        "severity_enums_set_input": {
            "description": [
                3
            ],
            "severity": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "severity_enums_update_column": {},
        "timestamptz": {},
        "timestamptz_comparison_exp": {
            "_eq": [
                71
            ],
            "_gt": [
                71
            ],
            "_gte": [
                71
            ],
            "_in": [
                71
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                71
            ],
            "_lte": [
                71
            ],
            "_neq": [
                71
            ],
            "_nin": [
                71
            ],
            "__typename": [
                3
            ]
        },
        "uuid": {},
        "uuid_comparison_exp": {
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
        "Query": {
            "notifications": [
                5,
                {
                    "distinct_on": [
                        17,
                        "[notifications_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        15,
                        "[notifications_order_by!]"
                    ],
                    "where": [
                        8
                    ]
                }
            ],
            "notifications_aggregate": [
                6,
                {
                    "distinct_on": [
                        17,
                        "[notifications_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        15,
                        "[notifications_order_by!]"
                    ],
                    "where": [
                        8
                    ]
                }
            ],
            "notifications_by_pk": [
                5,
                {
                    "id": [
                        73,
                        "uuid!"
                    ]
                }
            ],
            "service_enums": [
                21,
                {
                    "distinct_on": [
                        35,
                        "[service_enums_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        33,
                        "[service_enums_order_by!]"
                    ],
                    "where": [
                        24
                    ]
                }
            ],
            "service_enums_aggregate": [
                22,
                {
                    "distinct_on": [
                        35,
                        "[service_enums_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        33,
                        "[service_enums_order_by!]"
                    ],
                    "where": [
                        24
                    ]
                }
            ],
            "service_enums_by_pk": [
                21,
                {
                    "service": [
                        3,
                        "String!"
                    ]
                }
            ],
            "services": [
                38,
                {
                    "distinct_on": [
                        51,
                        "[services_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        49,
                        "[services_order_by!]"
                    ],
                    "where": [
                        41
                    ]
                }
            ],
            "services_aggregate": [
                39,
                {
                    "distinct_on": [
                        51,
                        "[services_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        49,
                        "[services_order_by!]"
                    ],
                    "where": [
                        41
                    ]
                }
            ],
            "services_by_pk": [
                38,
                {
                    "id": [
                        73,
                        "uuid!"
                    ]
                }
            ],
            "severity_enums": [
                54,
                {
                    "distinct_on": [
                        68,
                        "[severity_enums_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        66,
                        "[severity_enums_order_by!]"
                    ],
                    "where": [
                        57
                    ]
                }
            ],
            "severity_enums_aggregate": [
                55,
                {
                    "distinct_on": [
                        68,
                        "[severity_enums_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        66,
                        "[severity_enums_order_by!]"
                    ],
                    "where": [
                        57
                    ]
                }
            ],
            "severity_enums_by_pk": [
                54,
                {
                    "severity": [
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
                13,
                {
                    "where": [
                        8,
                        "notifications_bool_exp!"
                    ]
                }
            ],
            "delete_notifications_by_pk": [
                5,
                {
                    "id": [
                        73,
                        "uuid!"
                    ]
                }
            ],
            "delete_service_enums": [
                31,
                {
                    "where": [
                        24,
                        "service_enums_bool_exp!"
                    ]
                }
            ],
            "delete_service_enums_by_pk": [
                21,
                {
                    "service": [
                        3,
                        "String!"
                    ]
                }
            ],
            "delete_services": [
                46,
                {
                    "where": [
                        41,
                        "services_bool_exp!"
                    ]
                }
            ],
            "delete_services_by_pk": [
                38,
                {
                    "id": [
                        73,
                        "uuid!"
                    ]
                }
            ],
            "delete_severity_enums": [
                64,
                {
                    "where": [
                        57,
                        "severity_enums_bool_exp!"
                    ]
                }
            ],
            "delete_severity_enums_by_pk": [
                54,
                {
                    "severity": [
                        3,
                        "String!"
                    ]
                }
            ],
            "insert_notifications": [
                13,
                {
                    "objects": [
                        10,
                        "[notifications_insert_input!]!"
                    ],
                    "on_conflict": [
                        14
                    ]
                }
            ],
            "insert_notifications_one": [
                5,
                {
                    "object": [
                        10,
                        "notifications_insert_input!"
                    ],
                    "on_conflict": [
                        14
                    ]
                }
            ],
            "insert_service_enums": [
                31,
                {
                    "objects": [
                        28,
                        "[service_enums_insert_input!]!"
                    ],
                    "on_conflict": [
                        32
                    ]
                }
            ],
            "insert_service_enums_one": [
                21,
                {
                    "object": [
                        28,
                        "service_enums_insert_input!"
                    ],
                    "on_conflict": [
                        32
                    ]
                }
            ],
            "insert_services": [
                46,
                {
                    "objects": [
                        43,
                        "[services_insert_input!]!"
                    ],
                    "on_conflict": [
                        48
                    ]
                }
            ],
            "insert_services_one": [
                38,
                {
                    "object": [
                        43,
                        "services_insert_input!"
                    ],
                    "on_conflict": [
                        48
                    ]
                }
            ],
            "insert_severity_enums": [
                64,
                {
                    "objects": [
                        61,
                        "[severity_enums_insert_input!]!"
                    ],
                    "on_conflict": [
                        65
                    ]
                }
            ],
            "insert_severity_enums_one": [
                54,
                {
                    "object": [
                        61,
                        "severity_enums_insert_input!"
                    ],
                    "on_conflict": [
                        65
                    ]
                }
            ],
            "update_notifications": [
                13,
                {
                    "_set": [
                        18
                    ],
                    "where": [
                        8,
                        "notifications_bool_exp!"
                    ]
                }
            ],
            "update_notifications_by_pk": [
                5,
                {
                    "_set": [
                        18
                    ],
                    "pk_columns": [
                        16,
                        "notifications_pk_columns_input!"
                    ]
                }
            ],
            "update_service_enums": [
                31,
                {
                    "_set": [
                        36
                    ],
                    "where": [
                        24,
                        "service_enums_bool_exp!"
                    ]
                }
            ],
            "update_service_enums_by_pk": [
                21,
                {
                    "_set": [
                        36
                    ],
                    "pk_columns": [
                        34,
                        "service_enums_pk_columns_input!"
                    ]
                }
            ],
            "update_services": [
                46,
                {
                    "_set": [
                        52
                    ],
                    "where": [
                        41,
                        "services_bool_exp!"
                    ]
                }
            ],
            "update_services_by_pk": [
                38,
                {
                    "_set": [
                        52
                    ],
                    "pk_columns": [
                        50,
                        "services_pk_columns_input!"
                    ]
                }
            ],
            "update_severity_enums": [
                64,
                {
                    "_set": [
                        69
                    ],
                    "where": [
                        57,
                        "severity_enums_bool_exp!"
                    ]
                }
            ],
            "update_severity_enums_by_pk": [
                54,
                {
                    "_set": [
                        69
                    ],
                    "pk_columns": [
                        67,
                        "severity_enums_pk_columns_input!"
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
                        17,
                        "[notifications_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        15,
                        "[notifications_order_by!]"
                    ],
                    "where": [
                        8
                    ]
                }
            ],
            "notifications_aggregate": [
                6,
                {
                    "distinct_on": [
                        17,
                        "[notifications_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        15,
                        "[notifications_order_by!]"
                    ],
                    "where": [
                        8
                    ]
                }
            ],
            "notifications_by_pk": [
                5,
                {
                    "id": [
                        73,
                        "uuid!"
                    ]
                }
            ],
            "service_enums": [
                21,
                {
                    "distinct_on": [
                        35,
                        "[service_enums_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        33,
                        "[service_enums_order_by!]"
                    ],
                    "where": [
                        24
                    ]
                }
            ],
            "service_enums_aggregate": [
                22,
                {
                    "distinct_on": [
                        35,
                        "[service_enums_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        33,
                        "[service_enums_order_by!]"
                    ],
                    "where": [
                        24
                    ]
                }
            ],
            "service_enums_by_pk": [
                21,
                {
                    "service": [
                        3,
                        "String!"
                    ]
                }
            ],
            "services": [
                38,
                {
                    "distinct_on": [
                        51,
                        "[services_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        49,
                        "[services_order_by!]"
                    ],
                    "where": [
                        41
                    ]
                }
            ],
            "services_aggregate": [
                39,
                {
                    "distinct_on": [
                        51,
                        "[services_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        49,
                        "[services_order_by!]"
                    ],
                    "where": [
                        41
                    ]
                }
            ],
            "services_by_pk": [
                38,
                {
                    "id": [
                        73,
                        "uuid!"
                    ]
                }
            ],
            "severity_enums": [
                54,
                {
                    "distinct_on": [
                        68,
                        "[severity_enums_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        66,
                        "[severity_enums_order_by!]"
                    ],
                    "where": [
                        57
                    ]
                }
            ],
            "severity_enums_aggregate": [
                55,
                {
                    "distinct_on": [
                        68,
                        "[severity_enums_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        66,
                        "[severity_enums_order_by!]"
                    ],
                    "where": [
                        57
                    ]
                }
            ],
            "severity_enums_by_pk": [
                54,
                {
                    "severity": [
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