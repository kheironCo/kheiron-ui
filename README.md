<a href="https://kheiron-ui.vercel.app/" target="_blank">
<p align="center">
  <img src="https://avatars.githubusercontent.com/u/158779561?s=48&v=4" width="50" height="50" alt="KheironCo.js" />
</p>
</a>

<h3 align="center">
  Build faster your React Web with KUI.
</h3>

[![Stable Release](https://img.shields.io/npm/v/kheiron-ui.svg)](https://npm.im/kheiron-ui)
[![Downloads](https://img.shields.io/npm/dm/kheiron-ui.svg)](https://www.npmjs.com/package/kheiron-ui)
[![npm](https://img.shields.io/npm/dt/kheiron-ui.svg)](https://www.npmjs.com/package/kheiron-ui)
[![license](https://badgen.now.sh/badge/license/MIT)](./LICENSE)

[![Static Badge](https://img.shields.io/badge/documentation-Storybook-ff4785?style=for-the-badge)](https://kheiron-ui.vercel.app)


kheiron-ui is a UI component library with semantic HTML, optimized to accelerate user interface development in web applications. Designed with productivity and simplicity in mind, kheiron-ui offers a comprehensive solution for creating robust forms and tables without the need to invest time in complex configurations.

## Install

```bash
npm install kheiron-ui
```

## Quickstart

### Forms and Modal

> This example are using react-hook-form how complement

```tsx
import {
  AtomDiv,
  ButtonKUI,
  InputFieldCheckboxKUI,
  InputFieldPasswordKUI,
  InputFieldTextKUI,
  ModalKUI,
} from 'kheiron-ui';

<ButtonKUI label="form" onClick={() => setOpen(true)} />
<ModalKUI open={open}>
  <form onSubmit={handleSubmit(onSubmit)} style={{ width: '200px' }}>
    <InputFieldTextKUI
      width="100%"
      label="Username"
      errorMessage={errors?.username?.message}
      {...register('username')}
    />
    <InputFieldPasswordKUI
      width="100%"
      label="Password"
      errorMessage={errors?.password?.message}
      {...register('password')}
    />
    <InputFieldCheckboxKUI
      errorMessage={errors?.terms?.message || ''}
      position="right"
      label="terms and conditions"
      {...register('terms')}
    />
    <ButtonKUI
      label="Cancel"
      variant="outlined"
      type="button"
      onClick={() => setOpen((old) => !old)}
    />
    <ButtonKUI label="Submit" type="submit" />
  </form>
</ModalKUI>;
```

![Static](https://i.ibb.co/h1QmTLm/form.png 'form')
![Static](https://i.ibb.co/BVKmf4p/form-error.png 'form')

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

![Static](https://i.ibb.co/KmccknD/table.png 'Table')

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
