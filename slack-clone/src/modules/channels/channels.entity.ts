export class Channel {
  id!: string;
  name!: string;
  constructor(props: Channel) {
    Object.assign(this, props);
  }
}
