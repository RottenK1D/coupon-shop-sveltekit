<script>
	import amazon from '../assets/Amazon svg.svg';
	import bestBuy from '../assets/BestBuy.svg';
	import walmart from '../assets/Walmart svg.svg';
	import shopify from '../assets/Shopify svg.svg';
	import eyeSVG from '../assets/ic_baseline-remove-red-eye.svg';
</script>

<section class="md:h-[300px] h-[400px] bg-black xl:px-[160px] lg:px-[80px] md:px-[64px] px-[20px]">
	<div class="flex items-center justify-center py-[60px] gap-20">
		<div class="flex gap-10 flex-wrap items-center justify-between">
			<img src={amazon} alt="amazon logo" />
			<img src={bestBuy} alt="best-buy logo" />
			<img src={walmart} alt="walmart logo" />
			<img src={shopify} alt="shopify logo" />
		</div>
		<div class="flex hidden lg:block ml-auto">
			<div class="flex gap-2">
				<img src={eyeSVG} alt="eye icon" class="w-[20px] h-[20px]" />
				<a href="/" class="text-white underline">View all brands</a>
			</div>
		</div>
	</div>
</section>
