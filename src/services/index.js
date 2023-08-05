import axios from "axios";

const CreateAxios = (baseURL) =>{
    const commonConfig = {
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    };
    return axios.create({
        baseURL,
        ...commonConfig,
    })
}
export default CreateAxios