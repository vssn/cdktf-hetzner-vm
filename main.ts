import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { Provider, credentials, Server } from "./provider/hetzner";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new Provider(this, "hetzner", credentials);

    new Server(this, "server", {
      name: "my-server",
      serverType: "cx11",
      publicNet: [
        {ipv6Enabled: true}
      ],
      location: "hel1"

    })
  }
}

const app = new App();
new MyStack(app, "cdktf-hetzner-vm");
app.synth();
