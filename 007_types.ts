// Boolean
let paidAccount : boolean = false;

// Number
let age : number = 33;
var taxRate : number = 7.5;

// String
var fullNmae : string = "zizo ribeiro";

// Array
var ages : number[] = [ 33, 32, 11];

// Tuple
let player : [number, string];
player = [3, 'coorrera'];

// Enum
enum ApprovalStatus {Approve, Pending, Reject};
let job : ApprovalStatus = ApprovalStatus.Pending;

// Any
var apiData : any[] = [123, 'Jordan', false];

// Void
function printOut(msg: string) : void {
  console.log(msg);
}