class ApiResponse {

    static successMessage = 'Success';
    static errorMessage = 'Generic Error';
    static notFoundMessage = 'Not Found';


    static success(data, successMessage) {
        return {
            success: true,
            message: successMessage || ApiResponse.successMessage,
            data: data
        };
    }

    static error(res, data, errorMessage) {
        return {
            success: false,
            message: errorMessage || ApiResponse.errorMessage,
            data: data
        };
    }

    static notFound(res, data, notFoundMessage) {
        return {
            success: false,
            message: notFoundMessage || ApiResponse.notFoundMessage,
            data: data
        };
    }
}

module.exports = ApiResponse;