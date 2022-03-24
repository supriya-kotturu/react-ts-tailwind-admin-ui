# Admin dashboard

## Getting Started

- Clone the repo
  ```
  git clone https://github.com/supriya-kotturu/react-ts-tailwind-admin-ui.git
  ```
- Install the dependencies
  ```
  npm install
  ```
- Build the files with vite
  ```
  npm run build
  ```
- Run the tests
  ```
  npm run test
  ```
- Locally preview the production build
  ```
  npm run preview
  ```

## Todo

- [x] set up tailwind.css - reusable classnames with @apply
- [x] Dashboard Component Layout - fetches the usernames
  - [x] Seach Component - child of Dashboard
  - [x] List Component - table component containing the list of user
    - [x] Implement checkbox-select
    - [x] Edit User
    - [x] Delete User
- [x] Pagination
- [x] Dark mode based on user system pereferences
- [ ] Optimize component rerendering
- [ ] Add Redux for State Management
- [ ] Add Toggle button for dark mode
- [ ] Add Unit Tests
- [x] Publish on Netlify

### Note : Dark mode

Page automatically switches to dark mode based on current system preferences of the user.

To try light/dark mode try switching the system preferences to dark mode

- On windows, go to settings > prersonalization > colors > choose dark/light in the dropdown

### Note : Unit tests

Tests are still not written for the components.

## Tech stack

- react
- typescript
- tailwindcss

## Netlify

Try it on [https://react-ts-tailwind-admin-ui.netlify.app](https://react-ts-tailwind-admin-ui.netlify.app)
