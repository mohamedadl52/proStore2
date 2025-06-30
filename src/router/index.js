import {createRouter , createWebHistory} from 'vue-router'
import Home from '../veiws/HOme.vue'
import Starlink from '../veiws/ٍStarlinkPage.vue'
// import Starlink from '../veiws/ٍStarlinkPage.vue'
import tagdem from '../veiws/tagdemElec.vue'
// import About from '../veiws/abOut.vue'
import Login from '../veiws/loGin.vue'
// import Register from '../veiws/Register.vue'
import signup from '../veiws/signUp.vue'
import Profile from '../veiws/ProFile.vue'
import admin from '../veiws/admin/AdminPanel.vue'
import dashboard from '../veiws//admin/AdminDashboard.vue'
import users from '../veiws/admin/AdminUsers.vue'
import orders from '../veiws/admin/AdminOrders.vue'
import whous from '../veiws/howUs.vue'
import contact from '../veiws/contactUs.vue'

// rout for scam page  
//    import  scam from '../veiws/SCAM/inDex.vue'
const router = createRouter({
    history : createWebHistory() , 
    routes : [
        {path:'/' , name : 'Home' , component : Home } ,
        {path:'/starlink' , name : 'Starlink' , component : Starlink } ,
        {path:'/tagdem' , name : 'tagdem' , component : tagdem } ,
        {path:'/login' , name : 'Login' , component : Login } ,
        {path:'/signup' , name : 'signup' , component : signup } ,
        {path: '/profile' , name : 'profile' , component : Profile  } , 
        {path: '/admin' , name : 'admin' , component : admin  } , 
        {path: '/admin/dashboard' , name : 'dashboard' , component : dashboard  } , 
        {path: '/admin/users' , name : 'users' , component : users  } ,
        {path: '/admin/orders' , name : 'orders' , component : orders  } ,
        {path: '/contact' , name : 'contact' , component : contact  } ,
        {path: '/whous' , name : 'whosus' , component : whous  }
       ]
})

export default router