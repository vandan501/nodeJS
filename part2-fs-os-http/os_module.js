//List of Content
//1  Userul Commands to fetch information from OS
//2  Examples and output

/**
 * 
 
//**************OS module*************************************************************

-->The OS module in Node.js is utilized to retrive details about the operating system of a computer.
-->It offers methods for communication with the computers operating system,includig retriving the hostname and the amount of available system memory in bytes. 

-> os.arch();
-> os.freemem();
-> os.totalmem();
-> os.networkInterfaces();
-> os.tmpdir();

otheres methods

-> os.endianness();
-> os.hostname();
-> os.type();
-> os.platform();
-> os.release();
*/

const os=require('os');
console.log("CPU:",os.arch())
//CPU x64


console.log("Free Memory:"+os.freemem())
//Free Memory:2428051456

console.log("Total MEmery:"+os.totalmem())
// Total MEmery:8491368448

console.log("Network interfaces:"+JSON.stringify(os.networkInterfaces()))
/**
Network interfaces:{"vEthernet (Default Switch)":[{"address":"fe80::b50:98c:b61:87af","netmask":"ffff:ffff:ffff:ffff::","family":"IPv6","mac":"00:15:5d:33:86:1f","internal":false,"cidr":"fe80::b50:98c:b61:87af/64","scopeid":28},{"address":"172.31.0.1","netmask":"255.255.240.0","family":"IPv4","mac":"00:15:5d:33:86:1f","internal":false,"cidr":"172.31.0.1/20"}],"Local Area Connection* 2":[{"address":"fe80::95c5:1b82:baf0:1fde","netmask":"ffff:ffff:ffff:ffff::","family":"IPv6","mac":"6a:00:e3:fa:53:6d","internal":false,"cidr":"fe80::95c5:1b82:baf0:1fde/64","scopeid":19},{"address":"192.168.137.1","netmask":"255.255.255.0","family":"IPv4","mac":"6a:00:e3:fa:53:6d","internal":false,"cidr":"192.168.137.1/24"}],"Wi-Fi":[{"address":"fe80::60d2:b845:6db9:3b17","netmask":"ffff:ffff:ffff:ffff::","family":"IPv6","mac":"58:00:e3:fa:53:6d","internal":false,"cidr":"fe80::60d2:b845:6db9:3b17/64","scopeid":17},{"address":"192.168.1.5","netmask":"255.255.255.0","family":"IPv4","mac":"58:00:e3:fa:53:6d","internal":false,"cidr":"192.168.1.5/24"}],"Loopback Pseudo-Interface 1":[{"address":"::1","netmask":"ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff","family":"IPv6","mac":"00:00:00:00:00:00","internal":true,"cidr":"::1/128","scopeid":0},{"address":"127.0.0.1","netmask":"255.0.0.0","family":"IPv4","mac":"00:00:00:00:00:00","internal":true,"cidr":"127.0.0.1/8"}]} */

console.log("OS default temp dir:"+os.tmpdir())
// OS default temp dir:C:\Users\VANDAN~1\AppData\Local\Temp 

console.log("Endianess:"+os.endianness())
//Endianess:LE

console.log("Hostname:"+os.hostname())
// Hostname:VandanRaaval-2002

console.log("OS type:"+os.type())
// OS type:Windows_NT

console.log("OS Platform:"+os.platform())
// OS Platform:win32

console.log("OS Release:"+os.release())
// OS Release:10.0.19045