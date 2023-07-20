import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PersonalPageView from '../views/user/me/PersonalPageView.vue'
import NotificationView from '../views/user/notifications/NotificationView.vue'
import SetCardsView from '../views/user/flashCards/SetCardsView.vue'
import ErrorView from '../views/ErrorView.vue'
import FlashCardsView from '../views/user/flashCards/FlashCardsView.vue'
import LoginView from '../views/authentication/LoginView.vue'
import FlashCardHomeView from '../views/user/flashCards/FlashCardHomeView.vue'
import RegisterView from '../views/authentication/RegisterView.vue'
import ForgotPasswordView from "../views/authentication/ForgotPasswordView.vue"
import  ResetPasswordView from '../views/authentication/ResetPasswordView.vue'
import NewPostView from '../views/user/blog/NewPostView.vue'

const routes =  [
    { path: '/login', name: 'login', component: LoginView },
    { path: '/register', name: 'register', component:  RegisterView},
    { path: '/forgot-password', name: 'forgot-password', component: ForgotPasswordView },
    { path: '/reset-password', name: 'reset-password', component: ResetPasswordView},
    { path: '/personal', component: PersonalPageView },
    { path: '/notification', component: NotificationView },
    { path: '/set-cards', component:  SetCardsView },
    { path: '/flash-cards/:cardsId/home', name: 'FlashCards', component:  FlashCardHomeView},
    { path: '/new-post', component: NewPostView},
    { path: '/', component: HomeView },
    { path: '/:catchAll(.*)', component: ErrorView }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})


export default router
