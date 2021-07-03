// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push(name);
  return drivers;
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
  return drivers;
}

function destructivelyRemoveLastDriver(){
  drivers.pop();
  return drivers;
}

function destructivelyRemoveFirstDriver(){
  drivers.shift();
  return drivers;
}

function appendDriver(name){
  const newDriver = [...drivers, name];
  return newDriver;
}

function prependDriver(name){
  const newDriver = [name, ...drivers];
  return newDriver;
}
 function removeLastDriver(){
  const newDrivers = drivers.slice(0, drivers.length - 1)
  return newDrivers
 }

 function removeFirstDriver(){
   const newDrivers = drivers.slice(1)
   return newDrivers
 }
