
import { Link } from 'react-router-dom';
import FetchUserData from '../utils/FetchData';
import FetchTeacher from '../utils/FetchTeacher';
import TeacherLogout from './TeacherLogout';

const SideNav = ({ token }) => {
     const user = FetchUserData(token)
     const teacher = FetchTeacher(token)
     return (
          <div className="side-bar">
               <div id="close-btn" className="close-side-bar">
                    <i className="fa fa-close"></i>
               </div>

               <div className="profile">
                    {token && user ? (
                         <>
                              <img src={user.profileImg} alt="" />
                              <h3>{user.name}</h3>
                              <span>student</span>
                              <Link className='link btn' to={`/user_profile`}>
                                   view profile
                              </Link>
                         </>
                    ) : token && teacher ? (
                         <>
                              <img src={teacher.profileImg} alt="" />
                              <h3>{teacher.name}</h3>
                              <span>Teacher</span>
                              <Link className='link btn' to={`/dash_profile/${teacher?._id}`} >
                                   view profile
                              </Link>
                         </>
                    ) : (
                         <>
                              <h3>please login or register</h3>
                              <div className="flex-btn">
                                   <Link className='link option-btn' to="/user_login" >login</Link>
                                   <Link className='link option-btn' to="/user_signup" >register</Link>
                              </div>
                         </>
                    )}
               </div>
               <nav className="navbar">
                    {token && user ? (
                         <>
                              <Link className='link' to="/">
                                   <i className="fa fa-home"></i>
                                   <span>Home</span>
                              </Link>
                              <Link className='link' to="/about">
                                   <i className="fa fa-question"></i>
                                   <span>About</span>
                              </Link>
                              <Link className='link' to="/courses">
                                   <i className="fa fa-graduation-cap"></i>
                                   <span>Courses</span>
                              </Link>
                              <Link className='link' to="/teachers">
                                   <i className="fa fa-users"></i>
                                   <span>Teachers</span>
                              </Link>
                              <Link className='link' to="/contact">
                                   <i className="fa fa-headphones"></i>
                                   <span>Contact</span>
                              </Link>
                         </>
                    ) : token && teacher ? (
                         <>
                              <Link className='link' to='/dashboard'><i className="fas fa-home"></i><span>home</span></Link>
                              <Link className='link' to="/content"><i className="fas fa-graduation-cap"></i><span>contents</span></Link>
                              <Link className='link' to='/404'><i className="fas fa-comment"></i><span>comments</span></Link>
                              <TeacherLogout />
                         </>
                    ): (
                         <>
                              <Link className='link' to="/">
                                   <i className="fa fa-home"></i>
                                   <span>Home</span>
                              </Link>
                              <Link className='link' to="/about">
                                   <i className="fa fa-question"></i>
                                   <span>About</span>
                              </Link>
                              <Link className='link' to="/courses">
                                   <i className="fa fa-graduation-cap"></i>
                                   <span>Courses</span>
                              </Link>
                              <Link className='link' to="/teachers">
                                   <i className="fa fa-users"></i>
                                   <span>Teachers</span>
                              </Link>
                              <Link className='link' to="/contact">
                                   <i className="fa fa-headphones"></i>
                                   <span>Contact</span>
                              </Link>
                         </>
                    ) }

               </nav>

          </div>
     );
};

export default SideNav;


