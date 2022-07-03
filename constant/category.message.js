const SUCESS = "Thêm sản phẩm thành công.";
const FAILED = "Thêm sản phẩm thất bại.";
const ONE_FAILED = "Lấy sản phẩm thất bại.";
const WARNING = "Lỗi hệ thống, vui lòng thử lại sau!!";
const GET_ONE_SUCCESS = "Tìm kiếm thành công.";
const GET_ALL = "Tìm kiếm thành công danh sách";
const DELETE_ONE = "Xóa thành công.";
const DELETE_ONE_FAILED = "Xóa thất bại!!";
const EXISTING = "Đã tồn tại trên hệ thống!!";
const UPDATE_FAIL = "Cập nhật thất bại, không tìm thấy dữ liêu cẩn cập nhật!"
const UPDATE_SUCCESS = "Cập nhật thành công!!"
const messageConstant = {
    success: SUCESS,
    failed: FAILED,
    warning: WARNING,
    get_one_success: GET_ONE_SUCCESS,
    get_all_success: GET_ALL,
    one_failed: ONE_FAILED,
    delete_one_failed: DELETE_ONE_FAILED,
    delete_one_success: DELETE_ONE,
    post_existing: EXISTING,
    update_fail:UPDATE_FAIL,
    update_success:UPDATE_SUCCESS
}

module.exports = {
    messageConstant
}