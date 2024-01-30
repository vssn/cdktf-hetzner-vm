import {HcloudProvider} from "../.gen/providers/hcloud/provider"
import {Server} from "../.gen/providers/hcloud/server"

import {API_TOKEN} from '../env.json'

const Provider = HcloudProvider;

const credentials = {
  token: API_TOKEN,
}

export {
  Provider,
  credentials,
  Server
};