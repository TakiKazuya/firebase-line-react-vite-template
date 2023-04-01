import "./alias";
import "./initializer/firebase"

if (!process.env.FUNCTION_TARGET || process.env.FUNCTION_TARGET === "lineBot") {
  exports.lineBot = require("./endpoints/lineBot");
}
