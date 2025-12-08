import React from 'react';

const ThemeToggle = ({ isDark, toggleTheme }) => {
    return (
      <label className="switch scale-75 md:scale-90">
        <input 
          className="toggle-input" 
          type="checkbox" 
          checked={isDark} 
          onChange={toggleTheme} 
        />
        <div className="slider round border border-black/10 dark:border-white/10 shadow-inner">
          <div className="sun-moon shadow-sm">
            <svg className="moon-dot moon-dot-1" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg>
            <svg className="moon-dot moon-dot-2" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg>
            <svg className="moon-dot moon-dot-3" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg>
            <svg className="light-ray light-ray-1" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg>
            <svg className="light-ray light-ray-2" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg>
            <svg className="light-ray light-ray-3" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg>
            <svg className="cloud-dark cloud-1" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg>
            <svg className="cloud-dark cloud-2" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg>
            <svg className="cloud-dark cloud-3" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg>
            <svg className="cloud-light cloud-4" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg>
            <svg className="cloud-light cloud-5" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg>
            <svg className="cloud-light cloud-6" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg>
          </div>
          <div className="stars">
            <svg className="star star-1" viewBox="0 0 20 20"><path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path></svg>
            <svg className="star star-2" viewBox="0 0 20 20"><path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path></svg>
            <svg className="star star-3" viewBox="0 0 20 20"><path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path></svg>
            <svg className="star star-4" viewBox="0 0 20 20"><path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path></svg>
          </div>
        </div>
      </label>
    );
};

export default ThemeToggle;