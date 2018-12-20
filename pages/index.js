import "../style.css";
import "../customStyle.css";

import { Component } from "react";
import Axios from "axios";

export default class indexPage extends Component {
  state = {
    SoDienThoai: "",
    SoDienThoai: "",
    SoNguoi: 1,
    Email: "",
    NgayDen: "",
    NgayDi: "",
    LoaiPhong: "Phòng đơn",
    ChuThich: "",
    ListLoaiPhong: []
  };

  componentDidMount = async () => {
    const res = await Axios.get(
      "https://mighty-coast-18749.herokuapp.com/api/loaiphong"
    );
    const { data = [] } = res;
    this.setState({
      ListLoaiPhong: data
    });
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  submitFunc = async evt => {
    evt.preventDefault();

    console.log(this.state);
    await Axios.post(
      "https://mighty-coast-18749.herokuapp.com/api/online",
      this.state
    );
  };
  render() {
    return (
      <div className="w-screen h-screen backgroundImage">
        <div className="lg:flex fixed pin-l w-3/5 h-3/4 t-10/100 l-15/100 shadow-lg">
          <div
            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style={{
              backgroundImage: "url('/static/images/room.jpg')"
            }}
            title="Woman holding a mug"
          />
          <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-8 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-black font-bold text-xl mb-8 font-sans">
                Đặt phòng online
              </div>
              <form className="w-full max-w-md" onSubmit={this.submitFunc}>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                      htmlFor="grid-name"
                    >
                      Tên Khách Hàng
                    </label>
                    <input
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                      id="grid-name"
                      type="name"
                      placeholder="Nhã"
                      name="TenKhachHang"
                      value={this.state.TenKhachHang}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                      htmlFor="grid-SoDienThoai"
                    >
                      Số Điện Thoại
                    </label>
                    <input
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                      id="grid-SoDienThoai"
                      type="text"
                      placeholder="0999999999"
                      name="SoDienThoai"
                      value={this.state.SoDienThoai}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                      htmlFor="grid-SoNguoi"
                    >
                      Số Người
                    </label>
                    <input
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                      id="grid-SoNguoi"
                      type="number"
                      placeholder="3"
                      name="SoNguoi"
                      value={this.state.SoNguoi}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                      htmlFor="grid-email"
                    >
                      Email
                    </label>
                    <input
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                      id="grid-email"
                      type="email"
                      placeholder="Example@gmail.com"
                      name="Email"
                      value={this.state.Email}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                      htmlFor="grid-nhanphong"
                    >
                      Ngày Nhận Phòng
                    </label>
                    <input
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                      id="grid-nhanphong"
                      type="datetime"
                      placeholder="11/20/2018"
                      name="NgayDen"
                      value={this.state.NgayDen}
                      onChange={this.handleInputChange}
                    />
                  </div>

                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                      htmlFor="grid-traphong"
                    >
                      Ngày Trả Phòng
                    </label>
                    <input
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                      id="grid-traphong"
                      type="datetime"
                      placeholder="12/20/2018"
                      name="NgayDi"
                      value={this.state.NgayDi}
                      onChange={this.handleInputChange}
                    />
                  </div>

                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                      htmlFor="grid-state"
                    >
                      Loại Phòng
                    </label>
                    <div className="relative">
                      <select
                        className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-grey"
                        id="grid-state"
                      >
                        {this.state.ListLoaiPhong.map(data => (
                          <option id={data._id}>{data.TenLoaiPhong}</option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                      htmlFor="grid-chuthich"
                    >
                      Chú thích
                    </label>
                    <textarea
                      className="h-full appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                      id="grid-chuthich"
                      type="text"
                      placeholder=""
                      name="ChuThich"
                      value={this.state.ChuThich}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-8 bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
                >
                  Đặt phòng ngay
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
