const config = {
    apiPath: "https://minipos-api-ap5g.onrender.com",
    headers: () => {
        return {
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        };
    },
};
export default config;