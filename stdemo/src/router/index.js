import { createRouter, createWebHistory } from 'vue-router'



const  routes = [
    {
        path:'/s',
        component: () => import('../components/Index.vue'),
        children: [
            //我的课程部分
            {path:'attendance',component: () => import('../components/Student/Course/Attendance.vue')},
            {path:'coursetable',component: () => import('../components/Student/Course/CourseTable.vue')},
            {path:'gpa',component: () => import('../components/Student/Course/GPA.vue')},
            {path:'selection',component: () => import('../components/Student/Course/Selection.vue')},
            //我的班级
            {path:'menber',component: () => import('../components/Student/Classes/Member.vue')},
            //我的作业
            {path:'task',component: () => import('../components/Student/Work/Task.vue')},
            {path:'test',component: () => import('../components/Student/Work/Test.vue')},
            //我的校园
            {path:'ativity',component: () => import('../components/Student/Campus/Ativity.vue')},
            {path:'wall',component: () => import('../components/Student/Campus/Wall.vue')},
            //个人中心
            {path:'user',component: () => import('../components/Student/User/User.vue')},


        ]
    },
    {
        path:'/t',
        component: () => import('../components/Index.vue'),
        children: [
            //我的课程部分
            {path:'attendance',component: () => import('../components/Teacher/Course/Attendance.vue')},
            {path:'coursetable',component: () => import('../components/Teacher/Course/CourseTable.vue')},
            {path:'gpa',component: () => import('../components/Teacher/Course/GPA.vue')},
            {path:'selection',component: () => import('../components/Teacher/Course/Selection.vue')},
            //我的班级
            {path:'menber',component: () => import('../components/Teacher/Classes/Member.vue')},
            //我的作业
            {path:'task',component: () => import('../components/Teacher/Work/Task.vue')},
            {path:'test',component: () => import('../components/Teacher/Work/Test.vue')},
            //我的校园
            {path:'ativity',component: () => import('../components/Teacher/Campus/Ativity.vue')},
            {path:'wall',component: () => import('../components/Teacher/Campus/Wall.vue')},
            //个人中心
            {path:'user',component: () => import('../components/Teacher/User/User.vue')},


        ]
    },
    {
        path:'/login',
        component:() => import('../components/login.vue')
    },
    {
        path:'/fist',
        component:() => import('../components/fist.vue')
    },
    {
        path:'/index',
        component:() => import('../components/Index.vue')
    },
    {
        path:'/',
        component:() => import('../components/hooks/Selectclass.vue')
    },


]
const routerHistory = createWebHistory()
const routers = createRouter({
    history: routerHistory,
    routes: routes
})
export default routers