import { ewUpdateSchema }    from '../ew-update';

// let jsonValidator          = require('is-my-json-valid');
import * as jsonValidator    from 'is-my-json-valid';

let validator = jsonValidator(<any>ewUpdateSchema, {verbose : true, greedy : true});

let testMsgs = [];

testMsgs.push({
    version  : 1,
    datetime : "2018-07-10T00:39:18Z",
    msg_type : "initResponses",
    ew_id    : 7,
    responses : [
        {
            elem_num   : 1,
            elem_alias : "happiness",
            value      : { choice : 1, abbrev : "Happy together" }
        },
        {
            elem_num   : 3,
            elem_alias : "questions",
            value      : "Love them!"
        },
        {
            elem_num   : 4,
            elem_alias : "favorites",
            value      : [ { choice : 1, abbrev : "blue" }, { choice : 3, abbrev : "red"} ]
        }
    ]
});


testMsgs.push({
    version  : 1,
    datetime : "2018-07-10T00:39:18Z",
    msg_type : "initResponses",
    ew_id    : 7,
    responses : []  // indicates no responses yet
});


testMsgs.push({
    version  : 1,
    datetime : "2018-07-10T00:39:18Z",
    msg_type : "updateResponses",
    ew_id    : 7,
    responses : [
        {
            elem_num   : 1,
            elem_alias : "happiness",
            value      : { choice : 1, abbrev : "Happy together" }
        }
    ]
});

testMsgs.push({
    version  : 1,
    datetime : "2018-07-10T00:39:18Z",
    msg_type : "updateResponses",
    ew_id    : 7,
    responses : [
        {
            elem_num   : 3,
            elem_alias : "questions",
            value      : "How can I get more?"
        }
    ]
});

testMsgs.push({
    version  : 1,
    datetime : "2018-07-10T00:39:18Z",
    msg_type : "updateResponses",
    ew_id    : 7,
    responses : [
        {
            elem_num   : 4,
            elem_alias : "favorites",
            value      : [
                { choice : 'p', abbrev : "purple" },
                { choice : 'y', abbrev : "yellow" }
            ]
        }
    ]
});

testMsgs.push({
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
});

testMsgs.push({
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
});

function runTest(msg:any, msgNum:number) {
    let isValid = validator(msg);

    if (!isValid) {
        console.log(`EW Update message ${msgNum} invalid, with errors:`, validator.errors, msg);
    } else {
        console.log(`Test ${msgNum} passed`);
    }
}

for (let i = 0; i < testMsgs.length; i++) {
    runTest(testMsgs[i], i);
}
