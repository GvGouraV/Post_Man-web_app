import axios from "axios";
let baseUrl = "https://murmuring-ocean-86166.herokuapp.com"
//let baseUrl = "http://localhost:2410"

function GET(url){
        return axios.get(baseUrl+url);
}

function POST(url, obj) {
               console.log(baseUrl+url)
        return axios.post(baseUrl+url, obj)
   
} 
function DELETEAPI(url){
    return axios.delete(url)
}
function PUT(url,obj){
   
        return axios.put(baseUrl+url, obj)
    }    

export default{
    GET,POST,DELETEAPI,PUT
};