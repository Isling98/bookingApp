export class Bruger {
  public id: number;
  public firstName: string;
  public username: string;
  public lastName: string;
  public bookingList: number[];

  constructor(id: number, firstName: string, username: string,
              lastName: string, bookingList: number[]) {
    this.id = id;
    this.firstName = firstName;
    this.username = username;
    this.lastName = lastName;
    this.bookingList = bookingList;
  }
}
