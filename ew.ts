
export let ewSchema = {
    required : true,
    type : "object",
    additionalProperties : false,
    properties : {
        ew_id        : { type : "integer" },  // assigned by DB
        account_id   : { type : "integer" },  // assigned by DB
        parent_ew_id : { type : ["integer", "null"] },

        locked       : { type : "boolean" },
        due_date     : { type : ["string", "null"], format : "date-time" },

        ew_name   : { required : true, type : "string" },
        ew_alias  : { type : "string", pattern : "^[a-zA-Z0-9_-]+$" },

        dflt_lang : { type : "string"},
        dflt_deliv_eng : { type : "string", minLength : 2, maxLength : 2 },

        ticketing_rqd : { type : "boolean" },
        anonymousity  : { type : "integer", minimum : 0, maximum : 3 },

        next_elem_num : { type : "integer"},

        elements  : {
            required : true,
            type : "array",
            items : {
                type : "object",
                additionalProperties : false,
                properties : {
                    elem_num    : { required : true, type : "integer" },
                    elem_type   : { required : true, type : "integer", minimum : 1, maximum : 7 },
                    label       : { required : true, type : "string" },
                    elem_alias  : { type : "string", pattern : "^[a-zA-Z0-9_]+$" },  // dash disallowed
                    display_fmt : { type : "integer", minimum : 0, maximum : 1 },
                    results_fmt : { type : "integer", minimum : 0, maximum : 10 },
                    required    : { type : "boolean" },
                    choices     : {
                        type  : "array",
                        items : {
                            additionalProperties : false,
                            properties : {
                                label    : { required : true, type : "string" },
                                value    : { required : true, type : ["string", "number"] },
                                abbrev   : { type : "string" },
                                imageUrl : { type : "string", format : "url" }
                            }
                        }
                    },
                    validators : {
                        type : "object",
                        additionalProperties : false,
                        properties : {
                            min      : { type : "integer" },
                            max      : { type : "integer" },
                            maxLen   : { type : "integer" },
                            chars_re : { type : "string" },
                            input_re : { type : "string" }
                        }
                    }
                }
            }
        },

        style         : {
            type : ["object", "null"],
            properties : {
                "theme" : {
                    type : "object",
                    properties : {
                        "text-primary-color"       : { type : "string" },
                        "text-accent-color"        : { type : "string" },
                        "text-dark-color"          : { type : "string" },
                        "text-light-color"         : { type : "string" },
                        "background-primary-color" : { type : "string" },
                        "input-accent-color"       : { type : "string" },
                        "chart-color1"             : { type : "string" },
                        "chart-color2"             : { type : "string" },
                        "chart-color3"             : { type : "string" },
                        "chart-color4"             : { type : "string" },
                        "chart-color5"             : { type : "string" }
                    }
                },
                "props" : {}
            }
        },
        base_style_id : { type : ["integer", "null"] },

        actions : {
            type  : "array",
            items : {
                type : "object",
                additionalProperties : false,
                properties : {
                    type      : { required : true, type : "integer", minimum : 1, maximum : 3 },
                    condition : { type : "string" },
                    details   : {
                        type : "object",
                        additionalProperties : false,
                        properties : {
                            toAdrs : {
                                required : true,
                                type     : "array",
                                items    : { type : "string" }
                            },
                            fromAdr : { type : "string" },
                            engine : { type : "string", minLength : 2, maxLength : 2 }
                        }
                    },
                    delay_s   : { type : "number" }
                }
            }
        },

        listing_config : {},
        created        : {},
        updated        : {},
        deleted        : {}
    }
};
