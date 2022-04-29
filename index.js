#!/usr/bin/env node

import { createServer } from "http";
import { internalIpV4 } from "internal-ip";
import qrcode from "qrcode-terminal";
import fs from "fs";
import path from "path";

const ip = await internalIpV4();
const fullPath = path.resolve(process.argv[2]);
const name = path.basename(fullPath);

qrcode.generate(`http://${ip}:3000/${name}`, { small: true });
createServer(async (_, res) => {
  fs.createReadStream(fullPath).pipe(res, { end: true });
}).listen(3000);
