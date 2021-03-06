// Test to verify that the validateformat.arrOf format works as intended.

import { testAndReport, testResult as tr, testItem as ti } from "./test-suite.mjs";
import { Bool, Int, Or } from "../src/validateformat.mjs";

const boolFormat = new Bool();
const smallIntFormat = new Int({min: 0, max: 10});
const orFormat = new Or(boolFormat, smallIntFormat);

// Values to test and their expected state
export const tests = [

	// ### Evaluated to true :
	new tr(new ti(true, orFormat, true, "Or should match when one or more of the inside format matches")),
	new tr(new ti(5, orFormat, true, "Or should match when one or more of the inside format matches")),
	
	// ### Evaluated to false :
	new tr(new ti("foo", orFormat, false, "Or should not match when none of the inside formats matches"))
	
];