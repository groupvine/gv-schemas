import { ewUpdateSchema }    from '../ew-update';

// let jsonValidator          = require('is-my-json-valid');
import * as jsonValidator    from 'is-my-json-valid';

let validator = jsonValidator(ewUpdateSchema, {verbose : true, greedy : true});

let msg = {
    version  : 1,
    datetime : "2018-07-10T00:39:18+00:00",
    msg_type : "initResponses",
    ew_id    : 7,
    responses : [
        {
            elem_num   : 1,
            elem_alias : "happiness",
            value      : { value : 1, abbrev : "Happy together" }
        },
        {
            elem_num   : 3,
            elem_alias : "questions",
            value      : "Love them!"
        },
        {
            elem_num   : 4,
            elem_alias : "favorites",
            value      : [ { value : 1, abbrev : "blue" }, { value : 3, abbrev : "red"} ]
        }
    ]
}

let isValid = validator(msg);

if (!isValid) {
    console.log("EW Update message invalid, with errors:", validator.errors);
}
