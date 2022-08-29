const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const urlencodedParser = bodyParser.urlencoded({ extended: true });

const apiRouter = express.Router();

function parseJWT(token) {
  var atob = require("atob");
  if (token != null) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(atob(base64));
  } else {
    return "Invalid or empty token was parsed";
  }
}

function parseError(error) {
  if (
    error.response.status === 403 &&
    error.response.headers["www-authenticate"]
  ) {
    var error_description_pattern = /.*error_description=\"([^\"]+)\",.*/;
    var scope_pattern = /.*scope=\"([^\"]+)\".+/;
    var des = error.response.headers["www-authenticate"].match(
      error_description_pattern
    )[1];
    var scopeRequired =
      error.response.headers["www-authenticate"].match(scope_pattern)[1];
    return des + " Required Scope: " + scopeRequired;
  }

  if (error.response.data.errorSummary) {
    return error.response.data.errorSummary;
  }
  if (error.response.data.error_description) {
    return error.response.data.error_description;
  } else {
    console.error(error);
    return "Unable to parse error cause. Check console.";
  }
}

module.exports = apiRouter;
