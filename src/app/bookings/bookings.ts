export class Bookings {
  id: number;
  timeblock: number;
  roomId: number;
  userId: number;
  month: number;
  year: number;
  day: number;

  constructor(id: number, timeblock: number, roomId: number, userId: number, month: number, year: number, day: number) {
  this.id = id;
  this.timeblock = timeblock;
  this.roomId = roomId;
  this.userId = userId;
  this.month = month;
  this. year = year;
  this.day = day;
}
}
