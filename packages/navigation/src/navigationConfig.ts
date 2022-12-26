export default {
	config: [
		{
			app: 'MAIN',
			path: '/',
			title: 'Main',
			authRequired: false
		},
		{
			app: 'TODO',
			path: '/todo',
			title: 'Todo',
			authRequired: false,
		},
		
		{
			app: 'DIARY',
			path: 'diary',
			title: 'Diary',
			authRequired: true,
		}
	]
	
}
