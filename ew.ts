
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

        context_id     : { type : ["integer", "null"]  },  // e.g., GV group_id or msg_id
        context_status : { type : ["integer", "null"], minimum : 1, maximum : 2 },  // EWContextType (currently just 1 & 2)

        ew_group_id : { type :  ["integer", "null"] },  // for grouping EWs for assembled set of responses
                    
        disp_header : { type : "boolean" }, // whether EW name & menu are shown
        disp_listing : { type : "boolean" }, // show response listing & comments

        dflt_lang : { type : "string"},
        dflt_deliv_eng : { type : "string", minLength : 2 },

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
                            maxPicks : { type : "integer" },
                            numWinners : { type : "integer" },
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
                "sass"  : { type : "string" },
                "theme" : {
                    type : "object",
                    properties : {
                        "text-primary-color"       : { type : "string", format : "color" },
                        "text-accent-color"        : { type : "string", format : "color" },
                        "text-dark-color"          : { type : "string", format : "color" },
                        "text-light-color"         : { type : "string", format : "color" },
                        "background-primary-color" : { type : "string", format : "color" },
                        "input-accent-color"       : { type : "string", format : "color" },
                        "chart-color1"             : { type : "string", format : "color" },
                        "chart-color2"             : { type : "string", format : "color" },
                        "chart-color3"             : { type : "string", format : "color" },
                        "chart-color4"             : { type : "string", format : "color" },
                        "chart-color5"             : { type : "string", format : "color" }
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
                    type      : { required : true, type : "integer", minimum : 1, maximum : 4 },
                    condition : { type : "string" },
                    details   : {
                        type : "object",
                        additionalProperties : false,
                        properties : {
                            // For email type
                            toAdrs : {
                                type     : "array",
                                items    : { type : "string" }
                            },
                            fromAdr : { type : "string" },
                            engine  : { type : "string", minLength : 2, maxLength : 2 },
                            signOff : { type : "string" },

                            // Common variables for APIs
                            // To date, supports Bronto-like SOAP APIs and Klaviyo-like REST APIs
                            server   : { type : "string" },
                            ew_alias : { type : "string" },  // overrides
                            api_url  : { type : "string" },
                            api_key  : {
                                type : "object",
                                additionalProperties: false,
                                properties : {
                                    name  : { type : "string" },
                                    value : { type : "string" }
                                }
                            }

                            // outdated
                            // wsdl     : { type : "string" },
                            // token    : { type : "string" },
                        }
                    },
                    delay_s   : { type : "number" }
                }
            }
        },

        customizations : {
            required   : true,   // even if empty
            additionalProperties : false,
            properties : {
                listing_config   : {},
                rcpt_menu_hidden : { type : "boolean" },
                comments_enabled : { type : "boolean" },
                summary_vis      : { type : "boolean" },   // whether summary chart/text is visible/hidden
                summary_incl     : { type : "boolean" },   // whether summary chart/text box is included
                static_email     : { type : "boolean" },   // whether email is rendered with only a static snapshot
                dflt_hidden      : { type : "boolean" },   // Whether responses are initially hidden
                responses_layout : {
                    type : "object",
                    additionalProperties : false,
                    properties : {
                        elements : {
                            type  : "array",
                            items : {
                                type : "object",
                                additionalProperties : false,
                                properties : {
                                    elem_num       : { type : "integer" },
                                    summary_height : { type : "integer" }
                                }
                            }
                        }
                    }
                },
                listing_layout : {
                    type : "object",
                    additionalProperties : false,
                    properties : {
                        response_columns    : { type : "integer", minimum : 1, maximum : 5 },
                        response_row_height : { type : "string" },
                        response_layout  : {
                            type  : "array",
                            items : {
                                type : "object",
                                additionalProperties : false,
                                properties : {
                                    type     : { type : "string", enum : ["textrow", "gridcell"] },
                                    elem_num : { type : "integer" },
                                    num_cols : { type : "integer", minimum : 1, maximum : 5 }
                                }
                            }
                        }
                    }
                },
                terms : {
                    // if strings, then the term is for the default language, 
                    // if objects, then properties are the language code first
                    hide             : { type : ["string", "object"] },   // Hide button for responses
                    unhide           : { type : ["string", "object"] },   // Unhide button for responses
                    listing          : { type : ["string", "object"] },   // Tab heading
                    responses        : { type : ["string", "object"] },   // Tab heading
                    something_hidden : { type : ["string", "object"] },   // Listing filter option title
                    nothing_hidden   : { type : ["string", "object"] }    // Listing filter option title
                }
            }
        },

        created        : {},
        updated        : {},
        deleted        : {}
    }
};
