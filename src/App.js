import './App.css';
import { LoginForm } from './components/Form/LoginForm';

function App() {
  return (
    <div className="App">

      <div className='container-fluid p-0 d-flex align-items-center justify-content-center' style={{ height: "100vh" }}>
        <div className='row m-0 p-0' style={{ width: "30vw" }}>
          <div className='col-12 p-0'>
            <LoginForm />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
