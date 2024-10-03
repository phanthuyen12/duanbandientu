import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import Swal from 'sweetalert2'; // Nhập SweetAlert2
import AddressInfo from './AddAdressProfile';
// Dummy components for different pages
const handleLogout = () => {
  // Xóa token từ localStorage
  localStorage.removeItem('tokenUser');

  // Hoặc xóa tất cả các mục trong localStorage (nếu cần)
  // localStorage.clear();

  // Điều hướng về trang đăng nhập hoặc trang chủ
  window.location.href = "/login";
};

const ProfileInfo = () => {
  const [userData, setUserData] = useState(null);
  const [postdata, setPostdata] = useState({
    email: '',
    tokenuser: ''
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  const tokenUser = localStorage.getItem('tokenUser');

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('tokenUser');
    window.location.reload(); // Hoặc chuyển hướng tới trang đăng nhập
  };

  const getInfo = () => {
    setLoading(true); // Set loading to true before making API call
    fetch('http://localhost:3000/api/user/checkdatauser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postdata),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.status === true) {
          setUserData(data.user); // Lưu dữ liệu người dùng vào state
        }
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => {
        console.error('Error:', error);
        setError('Đã xảy ra lỗi, vui lòng thử lại sau.');
        setLoading(false); // Set loading to false in case of error
      });
  };

  useEffect(() => {
    if (tokenUser) {
      const decodedToken = jwtDecode(tokenUser); // Giải mã token
      setPostdata({
        email: decodedToken['email'],
        tokenuser: decodedToken['tokenuser']
      });
    }
  }, [tokenUser]);

  useEffect(() => {
    if (postdata.email && postdata.tokenuser) {
      getInfo();
    }
  }, [postdata]);

  return (
    <div className="account-card">
      <div className="account-title">
        <p>Hồ sơ của bạn</p>
      </div>
      <div className="account-content">
        <div className="row">
          <div className="col-md-6 col-lg-12">
            <div className="form-group">
              <label className="form-label">Họ Và Tên</label>
              <input
                type="text"
                className="form-control"
                value={userData?.Username || (loading ? "Đang tải..." : "Không có dữ liệu")} // Handle loading state
                readOnly
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-12">
            <div className="form-group">
              <label className="form-label">Địa chỉ Email</label>
              <input
                type="email"
                className="form-control"
                value={userData?.Email || (loading ? "Đang tải..." : "Không có dữ liệu")} // Handle loading state
                readOnly
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-12">
            <div className="form-group">
              <label className="form-label">Số điện thoại</label>
              <input
                type="text"
                className="form-control"
                value={userData?.PhoneNumber
                  || (loading ? "Đang tải..." : "Không có dữ liệu")} // Handle loading state
                readOnly
              />
            </div>
          </div>
        </div>
        {/* Hiển thị thông báo lỗi nếu có */}
        {error && <div className="error-message">{error}</div>}
        {/* Nút đăng xuất */}
        <div className="row mt-3">
          <div className="col-lg-12">
            <button className="btn btn-danger btn-block" onClick={handleLogout}>
              Đăng xuất
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


const SecuritySettings = () => (
  <div className="account-card">
    <div className="account-title">
      <p>Cài Đặt Bảo Mật</p>
    </div>
    <div className="account-content">
      {/* Add your security settings here */}
      <p>Thông tin bảo mật sẽ hiển thị tại đây.</p>
    </div>
  </div>
);

const Profile = () => {
  // State for modal visibility, form data, and active component
  const [activeComponent, setActiveComponent] = useState('profile');
  // const tokenUser = localStorage.getItem('tokenUser'); // Lấy token từ localStorage
  // const [userData, setUserData] = useState(null);
  // const [postdata, setPostdata] = useState({
  //   email: '',
  //   tokenuser: ''
  // });

  // const getInfo = () => {
  //   fetch('http://localhost:3000/api/user/checkdatauser', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(postdata),
  //   })
  //     .then(response => response.json())
  //     .then(data => {

  //       console.log(data.user);
  //       if (data.status === true) {
  //         setUserData(data.user); // Lưu dữ liệu người dùng vào state
  //       }
  //     })
  //     .catch(error => console.error('Error:', error));
  // };

  useEffect(() => {
  
  }, []);

  // Function to render the active component
  const renderComponent = () => {
    switch (activeComponent) {
      case 'profile':
        return <ProfileInfo />;
      case 'address':
        return <AddressInfo />;
      case 'security':
        return <SecuritySettings />;
      default:
        return <ProfileInfo />;
    }
  };

  return (
    <section className="py-5 inner-section profile-part">
      <div className="container">
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-3">
            <div className="profile-sidebar">
              <a
                className={`sidebar_profile ${activeComponent === 'profile' ? 'active' : ''}`}
                href="#"
                onClick={() => setActiveComponent('profile')}
              >
                <p><i className="fas fa-user"></i> <span>Thông tin cá nhân</span></p>
              </a>
              <a
                className={`sidebar_profile ${activeComponent === 'address' ? 'active' : ''}`}
                href="#"
                onClick={() => setActiveComponent('address')}
              >
                <p><i className="fa-solid fa-wallet"></i> <span>Địa Chỉ Nhận Hàng</span></p>
              </a>
              <a
                className={`sidebar_profile ${activeComponent === 'security' ? 'active' : ''}`}
                href="#"
                onClick={() => setActiveComponent('security')}
              >
                <p><i className="fa-solid fa-shield-halved"></i> <span>Bảo mật</span></p>
              </a>
            </div>
          </div>
  
          {/* Main Content */}
          <div className="col-lg-9">
            <div className="profile-content">
              {renderComponent()} {/* Renders the active component */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
