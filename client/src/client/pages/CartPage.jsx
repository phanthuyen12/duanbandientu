import React, { useEffect, useState } from "react";
import Preloader from "../helper/Preloader";
import ColorInit from "../helper/ColorInit";
import HeaderTwo from "../components/HeaderTwo";
import Breadcrumb from "../components/Breadcrumb";
import FooterTwo from "../components/FooterTwo";
import BottomFooter from "../components/BottomFooter";
import CartSection from "../components/CartSection";
import ShippingOne from "../components/ShippingOne";
import ScrollToTop from "react-scroll-to-top";
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux';
import { removeFromProduct,updateProductQuantity } from '../../redux/acction/cartActions.ts'; // Đảm bảo đường dẫn đúng

import QuantityControl from '../helper/QuantityControl'

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items); // Lấy danh sách sản phẩm trong giỏ hàng
  const [quantities, setQuantities] = useState({}); // State để lưu trữ số lượng cho từng sản phẩm

  const handleRemoveToCart = (id) => {
      console.log(id);
      dispatch(removeFromProduct(id)); // Gửi action để xóa sản phẩm khỏi giỏ hàng
  };

  useEffect(() => {
      // Khởi tạo quantities với số lượng sản phẩm từ cartItems
      const initialQuantities = {};
      cartItems.forEach(item => {
          initialQuantities[item.ProductID] = item.quantity; // Gán số lượng cho từng sản phẩm
      });
      setQuantities(initialQuantities);
      console.log(cartItems);
  }, [cartItems]); // Chỉ chạy khi cartItems thay đổi

  const incrementQuantity = (id) => {
    setQuantities(prevQuantities => {
        const newQuantity = (prevQuantities[id] || 0) + 1; // Tăng số lượng cho sản phẩm
        dispatch(updateProductQuantity(id, newQuantity)); // Gửi action cập nhật số lượng sản phẩm
        return {
            ...prevQuantities,
            [id]: newQuantity,
        };
    });
};

const decrementQuantity = (id) => {
    setQuantities(prevQuantities => {
        const newQuantity = Math.max((prevQuantities[id] || 1) - 1, 1); // Giảm số lượng nếu lớn hơn 1
        dispatch(updateProductQuantity(id, newQuantity)); // Gửi action cập nhật số lượng sản phẩm
        return {
            ...prevQuantities,
            [id]: newQuantity,
        };
    });
};


  return (
    <>
      {/* ColorInit */}
      <ColorInit color={true} />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#FA6400" />

      {/* Preloader */}
      <Preloader />

      {/* HeaderTwo */}
      <HeaderTwo category={true} />

      {/* Breadcrumb */}
      <Breadcrumb title={"Cart"} />

      {/* CartSection */}
      <section className="cart py-80">
        <div className="container container-lg">
          <div className="row gy-4">
            <div className="col-xl-9 col-lg-8">
              <div className="cart-table border border-gray-100 rounded-8 px-40 py-48">
                <div className="overflow-x-auto scroll-sm scroll-sm-horizontal">
                <table className="table style-three" >
                <thead style={{ padding:'100px' }}>
                      <tr>
                        <th className="h6 mb-0 text-lg fw-bold">Hành Động</th>
                        <th className="h6 mb-0 text-lg fw-bold">Tên Sản Phẩm</th>
                        <th className="h6 mb-0 text-lg fw-bold">Giá Sản Phẩm</th>
                        <th className="h6 mb-0 text-lg fw-bold">Số Lượng</th>
                        <th className="h6 mb-0 text-lg fw-bold">Tổng Tiền</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map(item => (
                        <tr key={item.ProductID}>
                          <td>
                            <button
                              type="button"
                              className="remove-tr-btn flex-align gap-12 hover-text-danger-600"
                              // Thêm hàm xóa sản phẩm nếu cần
                              onClick={() => { handleRemoveToCart(item.ProductID)  }}
                            >
                              <i className="ph ph-x-circle text-2xl d-flex" />
                              Xóa Sản Phẩm
                            </button>
                          </td>
                          <td>
                            <div className="table-product d-flex align-items-center gap-24">
                              <Link
                                to={`/product-details/${item.ProductID}`} // Giả sử bạn có route cho từng sản phẩm
                                className="table-product__thumb border border-gray-100 rounded-8 flex-center"
                              >
                                <img
                                  src={item.OtherImages[0] || 'default-image.png'} // Hình ảnh mặc định
                                  alt={item.ProductName}
                                />
                              </Link>
                              <div className="table-product__content text-start">
                                <h6 className="title text-lg fw-semibold mb-8">
                                  <Link
                                    to={`/product-details/${item.ProductID}`} // Giả sử bạn có route cho từng sản phẩm
                                    className="link text-line-2"
                                    tabIndex={0}
                                  >
                                    {item.ProductName}
                                  </Link>
                                </h6>
                                <div className="flex-align gap-16 mb-16">
                                  <div className="flex-align gap-6">
                                    <span className="text-md fw-medium text-warning-600 d-flex">
                                      <i className="ph-fill ph-star" />
                                    </span>
                                    <span className="text-md fw-semibold text-gray-900">
                                      4.8
                                    </span>
                                  </div>
                                  <span className="text-sm fw-medium text-gray-200">|</span>
                                  <span className="text-neutral-600 text-sm">128 Reviews</span>
                                </div>
                                <div className="flex-align gap-16">
                                  <Link
                                    to="/cart"
                                    className="product-card__cart btn bg-gray-50 text-heading text-sm hover-bg-main-600 hover-text-white py-7 px-8 rounded-8 flex-center gap-8 fw-medium"
                                  >
                                    Camera
                                  </Link>
                                  <Link
                                    to="/cart"
                                    className="product-card__cart btn bg-gray-50 text-heading text-sm hover-bg-main-600 hover-text-white py-7 px-8 rounded-8 flex-center gap-8 fw-medium"
                                  >
                                    Videos
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="text-lg h6 mb-0 fw-semibold">${item.Price.toFixed(2)}</span>
                          </td>
                          <td>
                            <div className="d-flex rounded-4 overflow-hidden">
            <button
                type="button"
                onClick={() => decrementQuantity(item.ProductID)}
                className="quantity__minus border border-end border-gray-100 flex-shrink-0 h-48 w-48 text-neutral-600 flex-center hover-bg-main-600 hover-text-white"
            >
                <i className="ph ph-minus" />
            </button>
            <input
                type="number"
                className="quantity__input flex-grow-1 border border-gray-100 border-start-0 border-end-0 text-center w-32 px-4"
                value={quantities[item.ProductID]}
                min={1}
                readOnly
                
            />
            <button
                type="button"
                onClick={() => incrementQuantity(item.ProductID)}
                                className="quantity__plus border border-end border-gray-100 flex-shrink-0 h-48 w-48 text-neutral-600 flex-center hover-bg-main-600 hover-text-white"
            >
                <i className="ph ph-plus" />
            </button>
        </div>
                          </td>
                          <td>
                            <span className="text-lg h6 mb-0 fw-semibold">
                              ${(item.Price * item.quantity).toFixed(2)}
                            </span>
                          </td>
                        </tr>
                      ))}

                    </tbody>
                  </table>
                </div>
                <div className="flex-between flex-wrap gap-16 mt-16">
                  <div className="flex-align gap-16">
                    <input
                      type="text"
                      className="common-input"
                      placeholder="Coupon Code"
                    />
                    <button
                      type="submit"
                      className="btn btn-main py-18 w-100 rounded-8"
                    >
                      Apply Coupon
                    </button>
                  </div>
                 
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              <div className="cart-sidebar border border-gray-100 rounded-8 px-24 py-40">
                <h6 className="text-xl mb-32">Cart Totals</h6>
                <div className="bg-color-three rounded-8 p-24">
                  <div className="mb-32 flex-between gap-8">
                    <span className="text-gray-900 font-heading-two">Subtotal</span>
                    <span className="text-gray-900 fw-semibold">$250.00</span>
                  </div>
                  <div className="mb-32 flex-between gap-8">
                    <span className="text-gray-900 font-heading-two">
                      Extimated Delivery
                    </span>
                    <span className="text-gray-900 fw-semibold">Free</span>
                  </div>
                  <div className="mb-0 flex-between gap-8">
                    <span className="text-gray-900 font-heading-two">
                      Extimated Taxs
                    </span>
                    <span className="text-gray-900 fw-semibold">USD 10.00</span>
                  </div>
                </div>
                <div className="bg-color-three rounded-8 p-24 mt-24">
                  <div className="flex-between gap-8">
                    <span className="text-gray-900 text-xl fw-semibold">Total</span>
                    <span className="text-gray-900 text-xl fw-semibold">$250.00</span>
                  </div>
                </div>
                <Link
                  to="/checkout"
                  className="btn btn-main mt-40 py-18 w-100 rounded-8"
                >
                  Proceed to checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ShippingOne */}
      <ShippingOne />

      {/* FooterTwo */}
      <FooterTwo />

      {/* BottomFooter */}
      <BottomFooter />


    </>
  );
};

export default CartPage;
