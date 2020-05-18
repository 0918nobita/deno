import { encode } from 'https://deno.land/std@0.51.0/encoding/utf8.ts';

const url = Deno.args[0];
const res = await fetch(url);
const body = new Uint8Array(await res.arrayBuffer());
await Deno.stdout.write(body.slice(0, 100));
await Deno.stdout.write(encode('...'));
