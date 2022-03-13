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
- Locally preview the production build
  ```
  npm run preview
  ```

## Todo

- [x] set up tailwind.css - reusable classnames with @apply
- [ ] Dashboard Component Layout - fetches the usernames
  - [x] Seach Component - child of Dashboard
  - [x] List Component - table component containing the list of user
    - [ ] Implement checkbox-select
    - [ ] Edit User
    - [ ] Delete User
- [x] Pagination
- [x] Dark mode based on user system pereferences
- [ ] Optimize component rerendering
- [ ] Add Redux for State Management
- [ ] Add Toggle button for dark mode

### Note : Dark mode

Page automatically switches to dark mode based on current system preferences of the user.

To try light/dark mode try switching the system preferences to dark mode

- On windows, go to settings > prersonalization > colors > choose dark/light in the dropdown

## Tech stack

- react
- typescript
- tailwind
