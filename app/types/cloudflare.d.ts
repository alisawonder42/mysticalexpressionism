declare module "cloudflare:workers" {
  export const env: Record<string, unknown>;
}

declare module "cloudflare:email" {
  export class EmailMessage {
    constructor(from: string, to: string, raw: string);
  }
}
