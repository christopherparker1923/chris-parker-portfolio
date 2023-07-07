const { google } = require("googleapis");
const fs = require("fs");

const credentials = require("./path-to-your-credentials-file.json");
const token = require("./path-to-your-token-file.json"); // This file will be generated after the authentication process
const auth = new google.auth.OAuth2(
  credentials.client_id,
  credentials.client_secret,
  credentials.redirect_uris[0]
);
auth.setCredentials(token);
