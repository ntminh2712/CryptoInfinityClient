import React from "react";
import {HeaderContainer} from "./CustomStyled";
import {CaretDownOutlined, SearchOutlined} from "@ant-design/icons";
import {Dropdown, Menu, Input, Affix} from "antd";
import {Link} from "react-router-dom";

const Header: React.FC = () => {
  const menu = <Menu>
    <Menu.Item><Link to="/posts">Test</Link></Menu.Item>
    <Menu.Item><Link to="/posts">Test</Link></Menu.Item>
    <Menu.Item><Link to="/posts">Test</Link></Menu.Item>
    <Menu.Item><Link to="/posts">Test</Link></Menu.Item>
    <Menu.Item><Link to="/posts">Test</Link></Menu.Item>
  </Menu>

  const {Search} = Input;
  const onSearch = (value: string) => console.log(value);

  /**
   * [
   *     {
   *         "termTaxonomyId": "4",
   *         "taxonomy": "Bitcoin News",
   *         "description": "Tin tức chứng khoán",
   *         "parent": "1",
   *         "level": 2,
   *         "order": 1
   *     },
   *     {
   *         "termTaxonomyId": "5",
   *         "taxonomy": "CrytoNews",
   *         "description": "Tin tức cryto",
   *         "parent": "1",
   *         "level": 2,
   *         "order": 2
   *     },
   *     {
   *         "termTaxonomyId": "3",
   *         "taxonomy": "Guide",
   *         "description": "Hướng dẫn",
   *         "parent": "0",
   *         "level": 1,
   *         "order": 3
   *     },
   *     {
   *         "termTaxonomyId": "2",
   *         "taxonomy": "Learn",
   *         "description": "Học",
   *         "parent": "0",
   *         "level": 1,
   *         "order": 2
   *     },
   *     {
   *         "termTaxonomyId": "1",
   *         "taxonomy": "News",
   *         "description": "Tin tức",
   *         "parent": "0",
   *         "level": 1,
   *         "order": 1
   *     }
   * ]
   */

  return (
    <HeaderContainer>
      <div className="header-top">

      </div>
      <Affix offsetTop={0}>
        <nav>
          <div className="nav-wrapper">
            <div className="nav-top">
              <Link to="/" className="nav-top-logo">
                <img src="https://www.coinnerd.com/wp-content/uploads/2021/12/logo.svg" alt="logo"/>
              </Link>
              <div className="nav-top-user">
                <Link to="/">Sign In</Link> / <Link to="/">Sign Out</Link>
              </div>
            </div>
            <div className="nav-content">
              <div className="nav-content-list-items">
                <div className="nav-content-item">
                  <Dropdown overlay={menu}>
                    {/*<a className="ant-dropdown-link nav-content-item-before" onClick={e => e.preventDefault()}>*/}
                    {/*  News <CaretDownOutlined/>*/}
                    {/*</a>*/}
                    <Link to="/posts">
                      News <CaretDownOutlined/>
                    </Link>
                  </Dropdown>
                </div>
                <div className="nav-content-item">
                  <Dropdown overlay={menu}>
                    {/*<a className="ant-dropdown-link nav-content-item-before" onClick={e => e.preventDefault()}>*/}
                    {/*  Our Review <CaretDownOutlined/>*/}
                    {/*</a>*/}
                    <Link to="/posts">
                      Our Review <CaretDownOutlined/>
                    </Link>
                  </Dropdown>
                </div>
                <div className="nav-content-item">
                  <Dropdown overlay={menu}>
                    {/*<a className="ant-dropdown-link nav-content-item-before" onClick={e => e.preventDefault()}>*/}
                    {/*  Learn <CaretDownOutlined/>*/}
                    {/*</a>*/}
                    <Link to="/posts">
                      Learn <CaretDownOutlined/>
                    </Link>
                  </Dropdown>
                </div>
                <div className="nav-content-item">
                  <Dropdown overlay={menu}>
                    {/*<a className="ant-dropdown-link nav-content-item-before" onClick={e => e.preventDefault()}>*/}
                    {/*  Featured Events <CaretDownOutlined/>*/}
                    {/*</a>*/}
                    <Link to="/posts">
                      Featured Events <CaretDownOutlined/>
                    </Link>
                  </Dropdown>
                </div>
                <div className="nav-content-item">
                  <Link to="/posts">
                    Guides
                  </Link>
                </div>
                <div className="nav-content-item nav-content-item-before">
                  <Dropdown overlay={menu}>
                    {/*<a className="ant-dropdown-link nav-content-item-before" onClick={e => e.preventDefault()}>*/}
                    {/*  Ecosystem <CaretDownOutlined/>*/}
                    {/*</a>*/}
                    <Link to="/posts">
                      Ecosystem <CaretDownOutlined/>
                    </Link>
                  </Dropdown>
                </div>
                <div className="nav-content-item">
                  <Link to="/posts">
                    Hot
                  </Link>
                </div>
              </div>
              <div className="nav-content-search">
                <Search
                  placeholder="Search..."
                  allowClear
                  enterButton={<SearchOutlined/>}
                  size="large"
                  onSearch={onSearch}
                />
              </div>
            </div>
          </div>
        </nav>
      </Affix>
    </HeaderContainer>
  )
}

export default Header;
