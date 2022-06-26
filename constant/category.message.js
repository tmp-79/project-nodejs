const SUCESS = "Thêm phân loại sản phẩm thành công.";
const FAILED = "Thêm phân loại sản phẩm thất bại.";
const ONE_FAILED = "Lấy phân loại sản phẩm thất bại.";
const WARNING = "Lỗi hệ thống, vui lòng thử lại sau!!";
const GET_ONE_SUCCESS = "Tìm kiếm thành công.";
const GET_ALL = "Tìm kiếm thành công danh sách phân loại";
const DELETE_ONE = "Xóa thành công một phân loại.";
const DELETE_ONE_FAILED = "Xóa thất bại!!";
const EXISTING = "Đã tồn tại phân loại này trên hệ thống!!"
const categoryMessage = {
    success: SUCESS,
    failed: FAILED,
    warning: WARNING,
    get_one_success: GET_ONE_SUCCESS,
    get_all_success: GET_ALL,
    one_failed: ONE_FAILED,
    delete_one_failed: DELETE_ONE_FAILED,
    delete_one_success: DELETE_ONE,
    post_existing: EXISTING
}

module.exports = {
    categoryMessage
}