<script>
	import logo from '../assets/Logo.svg';
	import twitter from '../assets/Twitter.svg';
	import facebook from '../assets/Facebook.svg';
	import spotify from '../assets/mdi_spotify.svg';
</script>

<section
	class="flex flex-col xl:px-[160px] lg:px-[80px] md:px-[64px] px-[20px] py-[32px] items-center border-b-2 border-black gap-10"
>
	<div class="flex justify-between items-center w-full">
		<div class="flex items-center">
			<img src={logo} alt="coupon" class="w-[60px] h-[50px]" />
			<h1 class="text-[32px] font-bold">Couper</h1>
		</div>
		<ul class="flex md:gap-20 gap-4 md:text-[18px] text-[14px]">
			<li>
				<a href="/">About</a>
			</li>
			<li>
				<a href="/">Shop</a>
			</li>
			<li>
				<a href="/">Help</a>
			</li>
		</ul>
	</div>
	<div class="w-full flex md:flex-row flex-col gap-5 justify-between items-center">
		<div class="flex h-8 px-5 gap-5">
			<img src={twitter} alt="twitter" />
			<img src={facebook} alt="facebook" />
			<img src={spotify} alt="spotify" />
		</div>
		<div>
			<p class="text-[14px] text-gray-500">Copyright 2022-2023 @ Couper LLC</p>
		</div>
	</div>
</section>
