const home={
	template: `
		<div class="text-center">
			<h1>Welcome!</h1>
			<img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Crystal_Project_Folder_home.png">
			<p>This is a dummy web page built using <a href="https://vuejs.org/" target="_blank">Vue.js</a>. 
			Take a look around!</p>
			<h1>What is <a href="https://vuejs.org/v2/guide/" target="_blank">Vue.js</a>?</h1>
			<p>Vue (pronounced /vjuː/, like <b>view</b>) is a <b>progressive framework</b> for building user interfaces. 
			Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. 
			The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. 
			On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with 
			<b>modern tooling</b> and <b>supporting libraries</b>. </p>
		</div>
		`
}

const about={
	template: `
		<div class="text-center">
			<h1>What we do</h1>
			<img src="http://www.pfpenergy.co.uk/media/1188/about-us-title-2.png">
			<p>The content is in this web site is loaded without having to reload the entire page.
			You will notice that the header does not change.</p>
		</div>
	`
}

const blog={
	template: `
		<div class="text-center">
			<h1>Blog</h1>
			<img src="https://neilpatel.com/wp-content/uploads/2017/08/blog.jpg">
			<p>Here is our blog. </p>
		</div>
	`
}

const faq={
	template: `
		<div class="text-center">
			<h1>FAQ</h1>
			<img src="http://www.leesdesignseries.com/wp-content/uploads/2016/06/faq-icon-1.png" alt="faq" class="w-50">
			<p>Here is our FAQ section.</p>
		</div>
	`
}

const contact={
	template: `
		<div class="text-center">
			<h1>Contact</h1>
			<img src="https://i2.wp.com/fcpp.org/wp-content/uploads/contact.jpg?fit=888%2C802&ssl=1" alt="contact us" class="w-50">
			<p>Contact us!</p>
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