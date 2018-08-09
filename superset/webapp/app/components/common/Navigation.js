import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link, Location } from 'react-router';

class Navigation extends Component {

    componentDidMount() {
        const { menu } = this.refs;
        $(menu).metisMenu();
    }

    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }

    secondLevelActive(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
    }

    render() {
        return (
            <nav className="navbar-default navbar-static-side" role="navigation">
                    <ul className="nav metismenu" id="side-menu" ref="menu">
                        <li className="nav-header">
                            <div className="dropdown profile-element"> <span>
                             </span>
                                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                            <span className="clear"> <span className="block m-t-xs"> <strong className="font-bold">superset 使用者</strong>
                             </span> <span className="text-muted text-xs block">位置<b className="caret"></b></span> </span> </a>
                                <ul className="dropdown-menu animated fadeInRight m-t-xs">
                                    <li><a href="#"> 退出</a></li>
                                </ul>
                            </div>
                            <div className="logo-element">
                                IN+
                            </div>
                        </li>
                        <li className={this.activeRoute("/main")}>
                            <Link to="/main"><i className="fa fa-th-large"></i> <span className="nav-label">安 全</span></Link>
                        </li>
                        <li className={this.activeRoute("/minor")}>
                            <Link to="/minor"><i className="fa fa-th-large"></i> <span className="nav-label">管 理</span></Link>
                        </li>
                        <li className={this.activeRoute("/datasource")}>
                            <Link to="/datasource"><i className="fa fa-th-large"></i> <span className="nav-label">数据源</span></Link>
                        </li>
                        <li className={this.activeRoute("/charts")}>
                            <Link to="/charts"><i className="fa fa-th-large"></i> <span className="nav-label">Charts</span></Link>
                            <ul className={this.secondLevelActive("/charts")}>
                                 <li>
                                    <Link to="/modalList"><i className="ng-binding"></i> <span className="nav-label">模板类型</span></Link>
                                </li>
                                <li>
                                    <Link to="/chartList"><i className="ng-binding"></i> <span className="nav-label">charts列表</span></Link>
                                </li>
                            </ul>
                        </li>
                        <li className={this.activeRoute("/dashboard")}>
                            <Link to="/dashboard"><i className="fa fa-th-large"></i> <span className="nav-label">看板</span></Link>
                        </li>
                        <li className={this.activeRoute("/sqlTools")}>
                            <Link to="/sqlTools"><i className="fa fa-th-large"></i> <span className="nav-label">sql工具箱</span></Link>
                        </li>
                        <li className={this.activeRoute("/myview")}>
                            <Link to="/myview"><i className="fa fa-th-large"></i> <span className="nav-label">My View</span></Link>
                        </li>
                    </ul>

            </nav>
        )
    }
}

export default Navigation