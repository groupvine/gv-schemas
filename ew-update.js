"use strict";
exports.__esModule = true;
exports.ewUpdateSchema = {
    required: true,
    type: "object",
    additionalProperties: false,
    properties: {
        version: {
            required: true,
            type: "integer",
            minimum: 1,
            maximum: 1
        },
        datetime: {
            required: true,
            type: "string",
            format: "date-time"
        },
        msg_type: {
            required: true,
            type: "string",
            "enum": ["initResponses", "initComments", "updateResponses", "updateComments"]
        },
        ew_id: {
            // in case there are multiple on the page
            required: true,
            type: "integer"
        },
        responses: {
            required: false,
            type: "array",
            items: {
                type: "object",
                additionalProperties: false,
                properties: {
                    elem_num: { required: true, type: "integer" },
                    elem_alias: { required: false, type: "string" },
                    value: {
                        required: true,
                        oneOf: [
                            {
                                type: "string"
                            },
                            {
                                type: "object",
                                additionalProperties: false,
                                properties: {
                                    value: { required: true, type: "integer" },
                                    abbrev: { required: false, type: "string" },
                                    label: { required: false, type: "string" }
                                }
                            },
                            {
                                type: "array",
                                items: {
                                    type: "object",
                                    additionalProperties: false,
                                    properties: {
                                        value: { required: true, type: "integer" },
                                        abbrev: { required: false, type: "string" },
                                        label: { required: false, type: "string" }
                                    }
                                }
                            }
                        ]
                    }
                }
            }
        },
        comments: {
            required: false,
            type: "array",
            items: {
                type: "object",
                additionalProperties: false,
                properties: {
                    datetime: {
                        required: true,
                        type: "string",
                        format: "date-time"
                    },
                    flagged: {
                        required: false,
                        type: "boolean"
                    },
                    hidden: {
                        required: false,
                        type: "boolean"
                    },
                    commenter: {
                        required: true,
                        type: "object",
                        additionalProperties: false,
                        properties: {
                            // Identity properties only filled in according to user role and anonymousity setting
                            given_name: { required: false, type: "string" },
                            family_name: { required: false, type: "string" },
                            middle_name: { required: false, type: "string" },
                            email: { required: false, type: "string" }
                        }
                    },
                    value: {
                        required: true,
                        type: "string"
                    }
                }
            }
        }
    }
};
