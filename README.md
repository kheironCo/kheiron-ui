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

### Install

```bash
npm install kheiron-ui
```

### Quickstart

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

### RenderBody

```tsx
import { TableKUI, UserProfileCardKUI } from 'kheiron-ui';

<TableKUI
  keys={['id', 'user']}
  head={{ id: 'ID', user: 'User' }}
  head={[
    {
      id: 'AB1',
      user: {
        image: 'https://avatars.githubusercontent.com/u/158779561?s=48&v=4',
        name: 'User Example',
        email: 'user@example.com',
      },
    },
  ]}
  renderBody={(valueRow, key) => {
    switch (key) {
      case 'user': {
        return (
          <UserProfileCardKUI
            image={valueRow?.user?.image || ''}
            head={valueRow?.user?.name || ''}
            body={valueRow?.user?.email || ''}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              alert(valueRow?.user?.name);
            }}
          />
        );
      }
      default: {
        return value;
      }
    }
  }}
/>;
```
