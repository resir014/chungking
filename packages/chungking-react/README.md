# @resir014/chungking-react

> @resir014's personal design system.

## Install

```bash
# yarn
$ yarn add @resir014/chungking-react @emotion/react @emotion/styled
# npm
$ npm i @resir014/chungking-react @emotion/react @emotion/styled
```

## Usage

First, wrap your entire app inside `ChungkingProvider`. This will apply the Emotion theme provider, as well as style resets.

```tsx
import { ChungkingProvider } from '@resir014/chungking-react'

export default function MyApp() {
  return (
    <ChungkingProvider>
      <App />
    </ChungkingProvider>
  )
}
```

> For Next.js, you need to set this up in `pages/_app.js` or `pages/_app.tsx`

### Example

The following is an example for the Button component.

```tsx
import * as React from 'react'
import { Button } from '@resir014/chungking-react'

export default function Component() {
  return <Button>Push Me</Button>
}
```

## Developing Locally

From the root `stereo` directory, install the project dependencies.

```sh-session
$ yarn
```

To start developing components, you have to run the Storybook server.

```sh-session
$ cd packages/chungking-react
$ yarn storybook
info Storybook started on => http://localhost:6006/
```

The storybook server is available at `http://localhost:6006`. Note that any new component needs to have at least one story as a demo, and some tests.
