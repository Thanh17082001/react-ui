import CreateAxios  from "./index";

 class ProductServices {
    constructor(baseUrl = "http://localhost:3000/product") {
        this.api = CreateAxios(baseUrl);
    }

    async getProduct(){
        return (await this.api.get("/")).data;
    }
    async search(name){
        return (await this.api.get(`/search/${name}`)).data;
    }
 }
const productService =new ProductServices()

 export default productService;