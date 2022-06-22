import

export class userProfile {
  constructor(stub){
    this._stub = stub;
    //this.parse_config;
    this.whoami();
  }

  whoami(this){
    var request = proto.protos.GetUserRequest();
    var response = this._stub.GetUser(request=request);
    this.session_token = response.session_token;
    this.organization_id = response.organization_id;
    this.api_host = this.config[response.profile]['api_host'];
    this.credentials = {'session_token': response.session_token, 'organization_id': response.organization_id}
    return this.credentials;
  }

}

//userProfile = new userProfile(stub);
