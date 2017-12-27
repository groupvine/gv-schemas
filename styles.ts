export let stylesSchema = {
    type : ["object", "null"],
    properties : {
        "theme"  : {},
        "props" : {
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
    }
};
