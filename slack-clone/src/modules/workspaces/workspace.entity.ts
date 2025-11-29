import type { Channel } from "../channels/channels.entity";

export class Workspace {
  id!: string;
  name!: string;
  channels!: Channel[];

  constructor(props: Workspace) {
    Object.assign(this, props);
  }
}
