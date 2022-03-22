import * as React from 'react';
import { sideMenuList } from './mockup';
import styles from "./SlideMenu.module.css"
import { Menu } from 'antd';
import { GifOutlined } from "@ant-design/icons"
interface ISlideHeaderProps {
}

const SlideHeader: React.FunctionComponent<ISlideHeaderProps> = (props) => {
    return (
        <Menu mode='vertical' className={styles["slide-meun"]}>
            {
                sideMenuList.map((item, index) => (
                    <Menu.SubMenu key={`side-${index}`} 
                                  title={<span><GifOutlined />{item.title}</span>}>
                        {
                            item.subMenu.map((m, subIndex) => (
                                <Menu.SubMenu key={`side-${index}-${subIndex}`} 
                                              title={<span><GifOutlined />{m.title}</span>}>
                                    {
                                        m.subMenu.map(
                                            (t, itemIndex) => (
                                                <Menu.Item key={`side-${index}-${subIndex}-${itemIndex}`} >
                                                    {<span><GifOutlined />{t}</span>}
                                                </Menu.Item>
                                            )
                                        )
                                    }
                                </Menu.SubMenu>
                            ))
                        }
                    </Menu.SubMenu>
                ))
            }
        </Menu>)
};

export default SlideHeader;
