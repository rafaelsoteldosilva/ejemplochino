import axios from "axios";

const apiCall = axios.create({
    baseURL: "http://192.168.0.3:8000/api/v1",
});

// apiCall.interceptors.request.use(
//    async (config) => {
//       config.headers.Authorization =
//          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjcwNTM4Mjc0LCJleHAiOjE2NzMxMzAyNzR9.JEAXP-osfHIgbQiOxWqXjB9FNwCPhO6xJFwUlc5khRI";
//       return config;
//    },
//    (err) => {
//       return Promise.reject(err);
//    }
// );

export async function loadWholeMenuFromApi(restaurantId) {
    let data = {};
    try {
        const response = await apiCall.get(`/whole_menu/${restaurantId}`);
        return response.data;
    } catch (error) {
        alert(`loadWholeMenuFromApi failed: ${error}`);

        return error.message;
    }
}
