class User {

  constructor(
    private name: string
  ) {
  }

  setName(value: string): void {
    this.name = value;
  }

  getName(): string {
    return this.name;
  }
}

export default User;