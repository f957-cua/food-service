import { NavLink, Outlet } from "react-router-dom";
import cn from 'classnames';
import styles from './Layout.module.css';
import Button from '../../components/Button/Button';

export default function Layout() {
    return (
        <div className={styles['layout']}>
            <div className={styles['sidebar']}>
                <div className={styles['user']}>
                    <img src="/avatar.png" alt="avatar-icon" className={styles['avatar']} />
                    <div className={styles['name']}>Ivan Filipchyk</div>
                    <div className={styles['email']}>ifilipchyk@gmail.com</div>
                </div>
                <div className={styles['menu']}>
                    <NavLink
                        to="/"
                        className={({ isActive }) => cn(styles['link'], {
                            [styles.active]: isActive
                            }
                        )}
                    >
                        <img src="/menu-icon.svg" alt="menu-icon" />
                        Menu
                    </NavLink>
                    <NavLink
                        to="/cart"
                        className={({ isActive }) => cn(styles['link'], {
                            [styles.active]: isActive
                            }
                        )}>
                        <img src="/cart-icon.svg" alt="cart-icon" />
                        Cart
                    </NavLink>
                </div>
                <Button className={styles['exit']}>
                    <img src="/exit-icon.svg" alt="exit-icon" />
                    Exit
                </Button>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}