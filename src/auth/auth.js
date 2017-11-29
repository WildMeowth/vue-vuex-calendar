import Util from '../util/util.js'
const LOGIN_URL = 'user/login.do';
const REGISTER_URL = 'user/register.do';

export default{
    data:{
        authenticated:false
    },
    login(context,info){
        context.$http.post(LOGIN_URL,info).then(function(data){
            // console.log(data);
            // console.log(data["body"]["data"]["token"]);
            Util.setCookie('token',data["body"]["data"]["token"],1);
            Util.setCookie('name',data["body"]["data"]["name"],1);
            // sessionStorage.setItem('token',data["body"]["data"]["token"]);
            // sessionStorage.setItem('name',data["body"]["data"]["name"]);
            this.authenticated = true;
            window.location.reload();
            
        },function(err){
            console.log(err+","+err.body.message)
            context.error = err.body.message
        })
    },
    register(context,info){
        context.$http.post(REGISTER_URL,info).then(function(data){
            //TODO
            if(1){
                var loginInfo = {
                    username: info.username,
                    password: info.password
                }
                login(context, loginInfo);
            }
            
        },function(err){
            console.log(err+","+err.body.message)
            context.error = err.body.message
        })
    },
    getAuthHeader(){
        return {
            // 'Authorization':'Bearer '+sessionStorage.getItem('token')
            'Authorization':'Bearer '+ Util.getCookie('token')
        }
    },
    checkAuth(){
        // var token = sessionStorage.getItem('token');
        var token = Util.getCookie('token');
        if(token){
            this.authenticated = true
        }else{
            this.authenticated = false
        }
    },
    methods: {
        
       
    }
}
