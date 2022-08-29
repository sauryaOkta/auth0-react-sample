class Tenent {
  constructor(tenentProfileJson, sub) {
    if (tenentProfileJson) {
      try {
        this.tenant = tenentProfileJson.okta_org_name;
        this.expires = new Date(new Date().getTime() + 200 * 60000);
        this.authorizationURL =
          tenantProfileJson.okta_org_name + "/oauth2/v1/authorize";
        this.tokenURL = tenantProfileJson.okta_org_name + "/oauth2/v1/token";
        this.userInfoURL =
          tenantProfileJson.okta_org_name + "/oauth2/v1/userinfo";
        this.clientID = tenantProfileJson.client_id;
        this.clientSecret = tenantProfileJson.client_secret;
        this.callbackURL =
          tenantProfileJson.redirect_uri + "/authorization-code/" + sub;
      } catch (error) {
        console.log("17 error --> ", error);
      }
    } else {
      try {
        this.tenant = process.env.TENANT;
        this.expires = null;
        this.issuer = process.env.TENANT;
        this.authorizationURL = process.env.TENANT + "/oauth2/v1/authorize";
        (this.tokenURL = process.env.TENANT + "/oauth2/v1/token"),
          (this.userInfoURL = process.env.TENANT + "/oauth2/v1/userinfo"),
          (this.clientID = process.env.CLIENT_ID),
          (this.clientSecret = process.env.CLIENT_SECRET),
          (this.callbackURL =
            process.env.REDIRECT_URI + "/authorization-code/" + sub);
      } catch (error) {
        console.log("32 error --> ", error);
      }
    }
  }

  isExpired() {
    console.log("Checking if tenant data is expired.");
    if (this.expires === null) {
      console.log("Tenant data set to never expire.");
      return false;
    }
    console.log("Expiry timestamp " + this.expires);
    return new Date() > this.expires;
  }
}

module.exports = Tenent;
