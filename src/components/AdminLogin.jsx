import React, { useEffect } from 'react';

const AdminLogin = () => {
  useEffect(() => {
    const passwordField = document.getElementById('password');

    const handleMouseMove = (event) => {
      if (!passwordField.matches(':focus') && !passwordField.matches(':invalid')) {
        const eyes = document.getElementsByClassName('eye');

        for (let eye of eyes) {
          const x = eye.getBoundingClientRect().left + 10;
          const y = eye.getBoundingClientRect().top + 10;
          const rad = Math.atan2(event.pageX - x, event.pageY - y);
          const rot = (rad * (180 / Math.PI) * -1) + 180;

          eye.style.transform = `rotate(${rot}deg)`;
        }
      }
    };

    const handleFocusPassword = () => {
      document.getElementById('face').style.transform = 'translateX(30px)';
      const eyes = document.getElementsByClassName('eye');

      for (let eye of eyes) {
        eye.style.transform = 'rotate(100deg)';
      }
    };

    const handleFocusOutPassword = () => {
      document.getElementById('face').style.transform = 'translateX(0)';
      if (passwordField.checkValidity()) {
        document.getElementById('ball').classList.toggle('sad');
      } else {
        document.getElementById('ball').classList.toggle('sad');
        const eyes = document.getElementsByClassName('eye');

        for (let eye of eyes) {
          eye.style.transform = 'rotate(215deg)';
        }
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    passwordField.addEventListener('focus', handleFocusPassword);
    passwordField.addEventListener('focusout', handleFocusOutPassword);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      passwordField.removeEventListener('focus', handleFocusPassword);
      passwordField.removeEventListener('focusout', handleFocusOutPassword);
    };
  }, []);

  const handleMouseOverSubmit = () => {
    document.getElementById('ball').classList.toggle('look_at');
  };

  const handleMouseOutSubmit = () => {
    document.getElementById('ball').classList.toggle('look_at');
  };

  return (
    <main className="h-screen grid grid-cols-2 p-24">
      <section className="flex flex-col items-center form">
        <div className="logo w-10 h-10 rounded-full bg-black text-white flex items-center justify-center mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            {/* Your SVG path here */}
          </svg>
        </div>
        <h1 className="form__title text-center text-blue-900 font-semibold text-2xl mb-2">Log in to your Account</h1>
        <p className="form__description text-center text-gray-700 mb-8">Welcome back! Please, enter your information</p>
        {/* Your form HTML here */}
      </section>
      <section className="form__animation flex items-center justify-center bg-gray-100 rounded-2xl overflow-hidden">
        <div id="ball" className="ball">
          <div id="face">
            <div className="ball__eyes flex gap-12 mt-12 justify-center">
              <div className="eye_wrap overflow-hidden">
                <span className="eye block bg-white w-12 h-12 rounded-full p-3"></span>
              </div>
              <div className="eye_wrap overflow-hidden">
                <span className="eye block bg-white w-12 h-12 rounded-full p-3"></span>
              </div>
            </div>
            <div className="ball__mouth w-12 h-12 bg-black rounded-full mt-10 mx-auto"></div>
          </div>
        </div>
        <div className="ball__shadow bg-gray-200 shadow-md rounded-full h-5 w-60 transform scale-0.1 animate-shrink"></div>
      </section>
    </main>
  );
};

export default AdminLogin;
