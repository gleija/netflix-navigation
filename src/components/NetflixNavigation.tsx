import React from 'react';
import classes from './NetflixNavigation.module.css';

const NetflixNavigation: React.FunctionComponent = () => {
  React.useEffect(() => {
    const open_btn = document.querySelector(
      `.${classes['open-btn']}`
    ) as HTMLButtonElement;
    const close_btn = document.querySelector(
      `.${classes['close-btn']}`
    ) as HTMLButtonElement;
    const nav = document.querySelectorAll<HTMLElement>(`.${classes.nav}`);

    open_btn?.addEventListener('click', () => {
      nav.forEach((nav_el) => nav_el.classList.add(classes.visible));
    });

    close_btn?.addEventListener('click', () => {
      nav.forEach((nav_el) => nav_el.classList.remove(classes.visible));
    });
  }, []);
  return (
    <>
      <div className={classes.mobile}>
        <div className={classes.menu}>
          <button className={`${classes['nav-btn']} ${classes['open-btn']}`}>
            <div className={classes['menu-open']}></div>
            <div className={classes['menu-open']}></div>
            <div className={classes['menu-open']}></div>
          </button>
        </div>

        <img
          src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_Logo_2014-700x188.png"
          alt="Logo"
          className={classes.logo}
        />

        <p className="text">Mobile Navigation</p>
      </div>

      <div className={`${classes.nav} ${classes['nav-black']}`}>
        <div className={`${classes.nav} ${classes['nav-red']}`}>
          <div className={`${classes.nav} ${classes['nav-white']}`}>
            <button className={`${classes['nav-btn']} ${classes['close-btn']}`}>
              <div className={classes['close-button']}>
                <div className={classes['close-container']}>
                  <div className={classes.leftright}></div>
                  <div className={classes.rightleft}></div>
                </div>
              </div>
            </button>
            <img
              src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_Logo_2014-700x188.png"
              alt="Logo"
              className={classes.logo}
            />

            <ul className={classes.list}>
              <li>
                <a href="#">Teams</a>
              </li>
              <li>
                <a href="#">Locations</a>
              </li>
              <li>
                <a href="#">Life at Netflix</a>
              </li>
              <li>
                <ul>
                  <li>
                    <a href="#">Netflix culture memo</a>
                  </li>
                  <li>
                    <a href="#">Work life balance</a>
                  </li>
                  <li>
                    <a href="#">Inclusion & diversity</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default NetflixNavigation;
