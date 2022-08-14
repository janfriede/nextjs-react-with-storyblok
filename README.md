## Storyblok

### Generate storyblok types

First run command `storyblok pull-components --space={SPACE_ID}` in cmd. It will download json file 
`components.{SPACE_ID}.json`. Then run command `npm run generate-sb-types` and it will create or rewrite`./src/types/storyblok.d.ts` file with new generated types.

### Set https for localhost (WIN) - needed in Storyblok V2
- run command [npm install -g mkcert](https://www.npmjs.com/package/mkcert).
- create a certificate authority by command `mkcert create-ca`, additionally you can set more details about organization, country-code etc. but for localhost purpose it is not necessary.
- next step is to create certificate itself, run `mkcert create-cert --key localhost-key.pem --cert localhost.pem`
- in root of your folder will be created four files ca.key, ca.crt, localhost-key.pem, localhost.pem
- all should be filled with certificate hashes
- now you can delete files ca.key, ca.crt in next step wont be needed
- dont forget to add localhost-key.pem, localhost.pem to gitignore!
- when you run `local-ssl-proxy --source 3010 --target 3000 --cert localhost.pem --key localhost-key.pem` proxy https://localhost:3010 will be started, displaying content from port 3000 (if is running)
- in Storyblok -> Settings -> Visual Editor change Location (default environment) to `https://localhost:3010/`
