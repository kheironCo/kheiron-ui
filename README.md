<a href="https://kheiron-ui.vercel.app/" target="_blank">
<p align="center">
  <img src="https://avatars.githubusercontent.com/u/158779561?s=48&v=4" width="50" height="50" alt="KheironCo.js" />
</p>
</a>

<h3 align="center">
  Build faster your React Web with KUI.
</h3>

[![Static Badge](https://img.shields.io/badge/documentation-Storybook-ff4785)](https://kheiron-ui.vercel.app)
[![Stable Release](https://img.shields.io/npm/v/kheiron-ui.svg)](https://npm.im/kheiron-ui)
[![Downloads](https://img.shields.io/npm/dm/kheiron-ui.svg)](https://www.npmjs.com/package/kheiron-ui)
[![npm](https://img.shields.io/npm/dt/kheiron-ui.svg)](https://www.npmjs.com/package/kheiron-ui)
[![license](https://badgen.now.sh/badge/license/MIT)](./LICENSE)

<!-- [![Discord](https://img.shields.io/discord/769256827007139912.svg?style=flat-square)](https://discord.gg/pJSg287) -->
<!-- [![Blazing Fast](https://badgen.now.sh/badge/speed/blazing%20%F0%9F%94%A5/green)](https://npm.im/kheiron-ui) -->
<!-- [![gzip size](http://img.badgesize.io/https://unpkg.com/formik@latest/dist/formik.esm.js?compression=gzip)](https://unpkg.com/formik@latest/dist/formik.esm.js) -->

## Install

```bash
npm install kheiron-ui
```

## Quickstart

```tsx
import { TableKUI } from 'kheiron-ui';

<TableKUI
  keys={['id', 'name']}
  head={{ id: 'ID', name: 'Name' }}
  head={[
    { id: 'AB1', name: 'One' },
    { id: 'A2K', name: 'Two' },
    { id: 'D3C', name: 'Three' },
  ]}
/>;
```

### TableKUI

```tsx
import { TableKUI, UserProfileCardKUI } from 'kheiron-ui';

<TableKUI
  keys={['id', 'user']}
  head={{ id: 'ID', user: 'User' }}
  body={[
    {
      id: 'KUI',
      user: {
        image: 'https://avatars.githubusercontent.com/u/158779561?s=48&v=4',
        name: 'Kheiron',
        email: 'kheiron-ui@example.com',
      },
    },
    ...
  ]}
  limit={5}
  neighbors={1}
  renderBody={({ value, key }) => {
    switch (key) {
      case 'user': {
        return (
          <UserProfileCardKUI
            image={value?.image || ''}
            head={value?.name || ''}
            body={value?.email || ''}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              alert(value?.name);
            }}
          />
        );
      }
      default: {
        return <>{String(value)}</>;
      }
    }
  }}
/>;
```

![Static](./assets/table.png)

<!-- ## Organization

[List of organizations and projects using Formik](https://github.com/jaredpalmer/formik/issues/87) -->

## Authors and Team

![Static Badge](https://img.shields.io/badge/Code-💻-purple 'Code')
![Static Badge](https://img.shields.io/badge/Design-🎨-pink 'Design')
![Static Badge](https://img.shields.io/badge/Documentation-📖-blue 'Documentation')
![Static Badge](https://img.shields.io/badge/Planning-💡-orange 'Planning')
![Static Badge](https://img.shields.io/badge/Bug-🐛-green 'Bug')
![Static Badge](https://img.shields.io/badge/Reviews-👀-gold 'Reviews')
![Static Badge](https://img.shields.io/badge/Test-🧪-red 'Test')
![Static Badge](https://img.shields.io/badge/UX/UI-⚙-gray 'UX/UI')

<!-- 🤔💬 -->

- Juan Marcos Mansilla [![Static Badge](https://img.shields.io/badge/LinkedIn-blue 'LinkedIn')](https://www.linkedin.com/in/juan-marcos-mansilla/) <span style="opacity:0">\_\_\_</span>
  ![Static Badge](https://img.shields.io/badge/💻-purple 'Code')
  ![Static Badge](https://img.shields.io/badge/🎨-pink 'Design')
  ![Static Badge](https://img.shields.io/badge/💡-orange 'Planning')
  ![Static Badge](https://img.shields.io/badge/📖-blue 'Documentation')
  ![Static Badge](https://img.shields.io/badge/🧪-red 'Test')
  ![Static Badge](https://img.shields.io/badge/🐛-green 'Bug')
  ![Static Badge](https://img.shields.io/badge/👀-gold 'Reviews')
- Gina Paola Medina [![Static Badge](https://img.shields.io/badge/LinkedIn-blue 'LinkedIn')](https://www.linkedin.com/in/ginapaolamedina/) <span style="opacity:0">\_\_\_</span>
  ![Static Badge](https://img.shields.io/badge/👀-gold 'Reviews')
  ![Static Badge](https://img.shields.io/badge/🧪-red 'Test')
  ![Static Badge](https://img.shields.io/badge/⚙-gray 'UX/UI')
- Gaston Jaurena [![Static Badge](https://img.shields.io/badge/LinkedIn-blue)](https://www.linkedin.com/in/gaston-jaurena-73a130235/) <span style="opacity:0">\_\_\_</span>
  ![Static Badge](https://img.shields.io/badge/💻-purple 'Code')
  ![Static Badge](https://img.shields.io/badge/🎨-pink 'Design')
  ![Static Badge](https://img.shields.io/badge/📖-blue 'Documentation')
  ![Static Badge](https://img.shields.io/badge/🐛-green 'Bug')
- Alejandro Torres [![Static Badge](https://img.shields.io/badge/LinkedIn-blue)](https://www.linkedin.com/in/jalejotorresm5286/) <span style="opacity:0">\_\_\_</span>
  ![Static Badge](https://img.shields.io/badge/💻-purple 'Code')
  ![Static Badge](https://img.shields.io/badge/🎨-pink 'Design')
  ![Static Badge](https://img.shields.io/badge/📖-blue 'Documentation')
  ![Static Badge](https://img.shields.io/badge/🐛-green 'Bug')
- Andres Rodriguez [![Static Badge](https://img.shields.io/badge/LinkedIn-blue)](https://www.linkedin.com/in/andres-rodriguez-038880238/) <span style="opacity:0">\_\_\_</span>
  ![Static Badge](https://img.shields.io/badge/💻-purple 'Code')
  ![Static Badge](https://img.shields.io/badge/📖-blue 'Documentation')
  ![Static Badge](https://img.shields.io/badge/🐛-green 'Bug')
- Brian Padilla [![Static Badge](https://img.shields.io/badge/LinkedIn-blue)](https://www.linkedin.com/in/brianpadilla01/) <span style="opacity:0">\_\_\_</span>
  ![Static Badge](https://img.shields.io/badge/💻-purple 'Code')
  ![Static Badge](https://img.shields.io/badge/📖-blue 'Documentation')
  ![Static Badge](https://img.shields.io/badge/🐛-green 'Bug')

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<!-- [<img src="https://avatars2.githubusercontent.com/u/4060187?v=4" width="100px;"/><br /><sub><b>Jared Palmer</b></sub>](http://jaredpalmer.com)<br />
[💬](#question-jaredpalmer "Answering Questions")
[💻](https://github.com/jaredpalmer/formik/commits?author=jaredpalmer "Code") 
[🎨](#design-jaredpalmer "Design")
[📖](https://github.com/jaredpalmer/formik/commits?author=jaredpalmer "Documentation") 
[💡](#example-jaredpalmer "Examples") 
[🤔](#ideas-jaredpalmer "Ideas, Planning, & Feedback") 
[👀](#review-jaredpalmer "Reviewed Pull Requests") 
[⚠️](https://github.com/jaredpalmer/formik/commits?author=jaredpalmer "Tests")
[🐛](https://github.com/jaredpalmer/formik/issues?q=author%3Aeonwhite "Bug reports") -->
