const home={
	template: `
		<div class="text-center">
			<h1>Home</h1>
			<img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Crystal_Project_Folder_home.png">
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
		</div>
		`
}

const about={
	template: `
		<div class="text-center">
			<h1>About</h1>
			<img src="http://www.pfpenergy.co.uk/media/1188/about-us-title-2.png">
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
		</div>
	`
}

const blog={
	template: `
		<div class="text-center">
			<h1>Blog</h1>
			<img src="https://neilpatel.com/wp-content/uploads/2017/08/blog.jpg">
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
		</div>
	`
}

const faq={
	template: `
		<div class="text-center">
			<h1>FAQ</h1>
			<img src="http://www.leesdesignseries.com/wp-content/uploads/2016/06/faq-icon-1.png">
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
		</div>
	`
}

const contact={
	template: `
		<div class="text-center">
			<h1>Contact</h1>
			<img src="https://i2.wp.com/fcpp.org/wp-content/uploads/contact.jpg?fit=888%2C802&ssl=1">
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
		</div>
	`
}


const router = new VueRouter ({
	routes:[
		{
			path: '/home',
			component: home
		},
		{
			path: '/about',
			component: about
		},
		{
			path: '/blog',
			component: blog
		},
		{
			path: '/faq',
			component: faq
		},
		{
			path: '/contact',
			component: contact
		}
	]
})

var routeTest = new Vue({
	router,
	el: '#app',
	data: {
	},
	methods: {
	}
}).$mount('#app')