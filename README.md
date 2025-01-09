# React Router Dom Nested Route Issue

This repository demonstrates a problem with nested routes in React Router Dom v6. The nested route `/contact/form` is not rendering correctly. The parent route `/contact` renders, but the child route does not.

## Bug

The `App.js` file contains the buggy code. The nested route is defined as follows:

```javascript
<Route path="/contact" element={<Contact />} >
  <Route path="form" element={<ContactForm/>}/>
</Route>
```

## Solution

The solution is provided in `AppSolution.js`.  The issue was resolved by ensuring that the parent route is an element that correctly renders the child route. In this case, an `<Outlet />` component will render the child routes.