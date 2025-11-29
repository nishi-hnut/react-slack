export class User {
  id!: string;
  name!: string;
  email!: string;
  thumbnailUrl?: string;

  constructor(props: User) {
    Object.assign(this, props);
  }
}
