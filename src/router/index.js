import Vue from 'vue';
import VueRouter from 'vue-router';
import PersonsView from '@/views/persons/index.vue'; 
import GameView from '@/views/games/index.vue'; 
import NewGameView from '@/views/games/NewGame.vue';
import AccountView from '@/views/account/index.vue';


Vue.use(VueRouter);

const routes = [
	{ 
		path: '/',
		name: 'PersonsView',
		component: PersonsView 
	},
	{ 
		path: '/jogos',
		name: 'jogo',
		component: GameView 
	},
	{ 
		path: '/novo-jogo',
		name: 'NewGame',
		component: NewGameView 
	},
	{ 
		path: '/perfil',
		name: 'AccountView',
		component: AccountView 
	}
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router;