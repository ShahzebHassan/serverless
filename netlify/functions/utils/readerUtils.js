const { Readability, isProbablyReaderable } = require("@mozilla/readability");
const got = require("got");
const { JSDOM } = require("jsdom");
const window = new JSDOM("").window;
const DOMPurify = require("dompurify")(window);