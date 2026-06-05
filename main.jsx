import React from 'react';
import { createRoot } from 'react-dom/client';
import { Camera } from 'lucide-react';
import './style.css';

function App(){
  const [page,setPage]=React.useState('home');
  const [user,setUser]=React.useState({name:'Marry Doe',email:'Marry@Gmail.Com'});

  const input = (label, placeholder='Marry Doe', type='text', required=true) => (
    <div className="field">
      <label>{label}{required && <span>*</span>}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );

  if(page==='home') return <main className="phone bottom">
    <section>
      <h1>Welcome to PopX</h1>
      <p className="lead">Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit,</p>
      <button className="primary" onClick={()=>setPage('register')}>Create Account</button>
      <button className="secondary" onClick={()=>setPage('login')}>Already Registered? Login</button>
    </section>
  </main>;

  if(page==='register') return <main className="phone formpage">
    <section>
      <h1>Create your<br/>PopX account</h1>
      {input('Full Name')}
      {input('Phone number')}
      {input('Email address')}
      {input('Password ', 'Marry Doe', 'password')}
      {input('Company name', 'Marry Doe', 'text', false)}
      <div className="agency">Are you an Agency?<span>*</span></div>
      <div className="radios">
        <label><input type="radio" name="agency" defaultChecked/> <span>Yes</span></label>
        <label><input type="radio" name="agency"/> <span>No</span></label>
      </div>
    </section>
    <button className="primary fixed" onClick={()=>setPage('account')}>Create Account</button>
  </main>;

  if(page==='login') return <main className="phone formpage">
    <section>
      <h1>Signin to your<br/>PopX account</h1>
      <p className="lead">Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit,</p>
      {input('Email Address','Enter email address','email',false)}
      {input('Password','Enter password','password',false)}
      <button className="disabled" onClick={()=>setPage('account')}>Login</button>
    </section>
  </main>;

  return <main className="phone account">
    <h2>Account Settings</h2>
    <div className="card">
      <div className="profile">
        <div className="avatar-wrap">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face" alt="profile" className="avatar" />
          <span className="cam"><Camera size={18}/></span>
        </div>
        <div><h3>{user.name}</h3><p>{user.email}</p></div>
      </div>
      <p className="bio">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
    </div>
  </main>;
}

createRoot(document.getElementById('root')).render(<App/>);
