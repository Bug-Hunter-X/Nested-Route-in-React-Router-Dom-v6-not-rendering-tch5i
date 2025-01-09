```javascript
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactLayout/>} >
          <Route path="form" element={<ContactForm/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {return <div>Home</div>}
function About() { return <div>About</div>}
function ContactLayout() { return (
  <div>
    <h1>Contact</h1>
    <Outlet/>
  </div>
);
}
function ContactForm() { return <div>Contact Form</div>}

export default App;
```