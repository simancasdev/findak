import {ErrorHandler} from "./api-error";
import {ENVIRONMENT, BASE_API_URL} from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

class ApiService {
  private headers: Headers;
  private controller?: AbortController;
  private BASE_URL: string | undefined;

  constructor() {
    this.headers = new Headers();
    this.BASE_URL = BASE_API_URL;
  }

  private async addAuth(): Promise<string> {
    const token = await AsyncStorage.getItem("@auth-token");
    if (token) return `Bearer ${token}`;
    return "";
  }

  protected async _fetch(url: string, method: string, data?: any) {
    const options: RequestInit = {
      signal: this.controller?.signal,
      method: method,
      mode: "cors",
      headers: {
        ...this.headers,
        mode: "cors",
        accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        Authorization: await this.addAuth(),
      },
    };

    if (data) {
      (options as any).body =
        data instanceof FormData ? data : JSON.stringify(data);
    }
    if (ENVIRONMENT === "development") {
      console.log(
        `[${method}] ${this.BASE_URL + url} ${options.body ?? "[NO-BODY]"}`
      );
    }
    return await fetch(this.BASE_URL + url, options);
  }

  async _execute(method: string, uri: string, request?: any) {
    const record = await this._fetch(uri, method, request);

    if (record.status === 404) {
      throw new ErrorHandler("Page Not found", 404);
    }
    if (!record.ok) {
      const error = await record.json();
      throw new ErrorHandler(
        error.message || error.error || record.statusText,
        record.status
      );
    }
    return await record.json();
  }

  public async Get<T>(uri: string): Promise<T> {
    return await this._execute("GET", uri);
  }

  public async Post<T>(uri: string, data?: any): Promise<T> {
    return await this._execute("POST", uri, data);
  }

  public async Put<T>(uri: string, data: any): Promise<T> {
    return await this._execute("PUT", uri, data);
  }

  public async Delete<T>(uri: string, data?: any): Promise<T> {
    return await this._execute("DELETE", uri, data);
  }

  public cancelRequest() {
    if (this.controller) {
      this.controller.abort();
    }
  }
}

const api = new ApiService();
export {api};
