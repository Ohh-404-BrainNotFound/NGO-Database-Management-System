
import axios from "axios";

function seeNGO()
{

    axios.post({
        method: 'post',
        url:'/dashboard-user/ngo-list/ngo',
        data:{
            id:3
        }
    })
}