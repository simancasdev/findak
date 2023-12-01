import {promisify} from "util";
import {scrypt, randomBytes} from "crypto";

const scryptAsync = promisify(scrypt);

export class PswManager {
  static async toHash(password: string) {
    const salt = randomBytes(8).toString("hex");
    const buf = (await scryptAsync(password, salt, 64)) as Buffer;
    return `${buf.toString("hex")}.${salt}`;
  }

  static async compare(storePassword: string, suppliedPassword: string) {
    const [hashedPassword, salt] = storePassword.split(".");
    const buf = (await scryptAsync(suppliedPassword, salt, 64)) as Buffer;
    return buf.toString("hex") === hashedPassword;
  }
}
