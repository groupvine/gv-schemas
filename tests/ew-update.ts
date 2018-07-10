import { ewUpdateSchema }    from '../ew-update';

// let jsonValidator          = require('is-my-json-valid');
import * as jsonValidator    from 'is-my-json-valid';

let validator = jsonValidator(ewUpdateSchema, {verbose : true, greedy : true});

let msg1 = {
    version  : 1,
    datetime : "2018-07-10T00:39:18Z",
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


let msg2 = {
    version  : 1,
    datetime : "2018-07-10T00:39:18Z",
    msg_type : "updateResponses",
    ew_id    : 7,
    responses : [
        {
            elem_num   : 1,
            elem_alias : "happiness",
            value      : { value : 1, abbrev : "Happy together" }
        }
    ]
}

let msg3 = {
    version  : 1,
    datetime : "2018-07-10T00:39:18Z",
    msg_type : "initComments",
    ew_id    : 7,
    comments : [
        {
            datetime   : "2018-07-11T12:39:18Z",
            hidden     : true,
            responder  : { given_name : "John", family_name : "Smith" },
            commenter  : { given_name : "Sue",  family_name : "Jones" },
            value      : "blah blah",
        },
        {
            datetime   : "2018-07-11T14:39:18Z",
            responder  : { given_name : "John", family_name : "Smith" },
            commenter  : { given_name : "Administrator" },
            value      : "Thanks for the kudos!"
        }
    ]
}

let msg4 = {
    version  : 1,
    datetime : "2018-07-10T00:39:18Z",
    msg_type : "updateComments",
    ew_id    : 7,
    comments : [
        {
            datetime   : "2018-07-11T14:39:18Z",
            responder  : {},
            commenter  : {},
            value      : "Here here!"
        }
    ]
}

function runTest(msg:any, msgNum:number) {
    let isValid = validator(msg);

    if (!isValid) {
        console.log(`EW Update message ${msgNum} invalid, with errors:`, validator.errors);
    }
}

runTest(msg1, 1);
runTest(msg2, 2);
runTest(msg3, 3);
runTest(msg4, 4);