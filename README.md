# Deploy a VM to Hetzner Cloud

This is work in progress, if you want to check it out do the following:

## Install
1. Install cdktf and terraform from Hashicorp:
   https://developer.hashicorp.com/terraform/tutorials/cdktf/cdktf-install
2. Check out the repo and npm install
3. You need a Hetzner account and an API Key. Create one
4. Find the env.json.change-me file, update it with your Hetzner API_KEY credentials.
5. Rename the file to env.json
6. Execute:

npm run get

npm run synth

npm run deploy
