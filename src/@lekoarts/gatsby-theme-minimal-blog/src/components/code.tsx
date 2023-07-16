import Code from "@lekoarts/gatsby-theme-minimal-blog/src/components/code"
import { Prism } from "prism-react-renderer"

// @ts-ignore
(typeof global !== "undefined" ? global : window).Prism = Prism;
// Add new languages by `require()`-ing it.
// See https://github.com/PrismJS/prism/tree/master/components for a full list.
require("prismjs/components/prism-java");
require("prismjs/components/prism-javascript");

export default Code