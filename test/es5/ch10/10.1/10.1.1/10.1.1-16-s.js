/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch10/10.1/10.1.1/10.1.1-16-s.js
 * @description Strict Mode - Function code that is part of a FunctionExpression is strict function code if FunctionExpression is contained in use strict
 * @noStrict
 */


function testcase() {
        "use strict";
        return function () {
            try {
                eval("var public = 1;");
                return false;
            } catch (e) {
                return e instanceof SyntaxError;
            }
        } ();
    }
runTestCase(testcase);
