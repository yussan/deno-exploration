## Run

**Will be error**
deno run --allow-read=/usr https://deno.land/std/examples/cat.ts /etc/passwd

**Will success**
deno run --allow-read=/etc/passwrd https://deno.land/std/examples/cat.ts /etc/passwd

## References

https://deno.land/manual/getting_started/permissions
