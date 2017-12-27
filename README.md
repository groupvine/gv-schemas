# GroupVine API Schemas

Example use, using ```is-my-json-valid``` npm package:

```
import { ewSchema }          from 'gv-schemas';

let jsonValidator          = require('is-my-json-valid');

let validator = jsonValidator(ewSchema, {verbose : true, greedy : true});

let ewDef = {
    ew_name : "Test EW",
    next_elem_num : 2,

    elements : [
        { elem_num : 1, elem_type : 6, label : "Your thoughts?" }
    ]
};

let isValid = validator(ewDef);

if (!isValid) {
    console.log("Invalid, with errors:", validator.errors);
}
```

