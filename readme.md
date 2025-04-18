### Node.js (v12+ recomendado) e o npm (vem junto com o Node).

####  No terminal, a partir da pasta raiz do projeto (onde está o package.json), execute:

- npm install

####  Isso vai baixar o Tailwind CSS, PostCSS e Autoprefixer.

#### Para gerar o CSS pronto, rode:

- npm run build

**isso criará o arquivo dist/output.css.**

####  Enquanto desenvolve, para recompilar automaticamente sempre que editar o CSS, use:

- npm run watch:css

#### Por fim, abra o index.html (na pasta src/) num servidor estático ou simplesmente com um plugin de ?Live Server? no VS Code, ou ainda:

- npx serve src
