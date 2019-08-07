// Rover Object Goes Here
// ======================
let rover = { direction: "N", x: 0, y: 0, travelLog: [] };
console.log("rover is created ", rover);
// ======================
function turnLeft(rover) {
  switch (rover.direction.toUpperCase()) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
    default:
      break;
  }
  // console.log("turnLeft was called!", rover);
}

function turnRight(rover) {
  switch (rover.direction.toUpperCase()) {
    case "N":
      rover.direction = "E";
      break;
    case "W":
      rover.direction = "N";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "S";
      break;
    default:
      break;
  }
  // console.log("turnRight was called!", rover);
}

function warining(number) {
  console.warn("command ignored, Rover almost gets off the map");
  return number;
}

function moveForward(rover) {
  switch (rover.direction.toUpperCase()) {
    case "N":
      rover.y = rover.y > 0 ? rover.y - 1 : warining(rover.y);
      break;
    case "W":
      rover.x = rover.x > 0 ? rover.x - 1 : warining(rover.x);
      break;
    case "S":
      rover.y = rover.y < 9 ? rover.y + 1 : warining(rover.y);
      break;
    case "E":
      rover.x = rover.x < 9 ? rover.x + 1 : warining(rover.x);
      break;
    default:
      break;
  }
  // console.log("moveForward was called", rover);
}

function moveBackward (rover) {
  switch (rover.direction.toUpperCase()) {
    case "N":
      rover.y = rover.y < 9  ? rover.y + 1 : warining(rover.y);
      break;
    case "W":
      rover.x = rover.x < 9  ? rover.x + 1 : warining(rover.x);
      break;
    case "S":
      rover.y = rover.y > 0 ? rover.y - 1 : warining(rover.y);
      break;
    case "E":
      rover.x = rover.x > 0 ? rover.x - 1 : warining(rover.x);
      break;
    default:
      break;
  }
  // console.log("moveForward was called", rover);
}

function commands(command) {
  // rover.travelLog.push({x:rover.x,y:rover.y})
  for (let index = 0; index < command.length; index++) {
    switch (command[index].toUpperCase()) {
      case "R":
        turnRight(rover);
        break;
      case "L":
        turnLeft(rover);
        break;
      case "F":
        moveForward(rover);
        rover.travelLog.push({ x: rover.x, y: rover.y });
        break;
        case "B":
        moveBackward(rover);
        rover.travelLog.push({ x: rover.x, y: rover.y });
        break;
      default:
        console.warn("the command ",command[index]," is invalid")
        break;
    }
    
    console.log("command: ", command[index], " rover: ", rover);
  }
  console.log("Rover Travel Log: ", rover.travelLog);
}

commands("bfbfbfrfbfbffffffffffffbbbrfrblflbgse");
