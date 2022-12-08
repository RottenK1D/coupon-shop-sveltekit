<script>
	import stars from '../assets/Stars.svg';
	import arrowDown from '../assets/arrow-down-svgrepo-com 1.svg';
	import e1 from '../assets/Ellipse 1.svg';
	import e2 from '../assets/Ellipse 2.svg';
	import e3 from '../assets/Ellipse 3.svg';
	import e4 from '../assets/Ellipse 4.svg';
	import e5 from '../assets/Ellipse 5.svg';
	import e6 from '../assets/Ellipse 6.svg';
</script>

<section class="grid lg:grid-cols-2">
	<div
		class="flex md:justify-start justify-center lg:border-r-2 lg:border-b-0 border-b-2 border-black xl:pl-[160px] lg:px-[80px] md:px-[64px] px-[20px]"
	>
		<div class="my-[80px] flex flex-col items-center">
			<h1 class="sm:text-[45px] text-[35px] lg:text-left text-center font-bold mb-10 ">
				Shopping with coupons, applied automatically!
			</h1>
			<p class="pb-4">Used by over 500,000</p>
			<div class="flex md:flex-row flex-col items-center md:gap-0 gap-5">
				<div class="relative flex shrink-0 right-[-85px] md:right-0">
					<div class="relative z-[0]"><img src={e1} alt="" /></div>
					<div class="relative right-[42px] z-[1]"><img src={e2} alt="" /></div>
					<div class="relative right-[84px] z-[2]"><img src={e3} alt="" /></div>
					<div class="relative right-[126px] z-[3]"><img src={e4} alt="" /></div>
					<div class="relative right-[168px] z-[4]"><img src={e5} alt="" /></div>
				</div>
				<div
					class="flex items-center w-[290px] h-[74px] bg-white rounded-[35px] relative md:right-[150px] shrink-0"
				>
					<img src={e6} alt="" class="relative left-[3px]" />
					<div class="mx-5">
						<p>Hey, I saved $500</p>
						<p class="text-[12px] text-[#3C5033]">Jack</p>
					</div>
				</div>
			</div>
		</div>

		<!-- <img src={stars} alt="stars" /> -->
	</div>
	<div
		class="flex flex-col justify-center md:items-start items-center lg:pl-[80px] md:px-[64px] px-[20px]"
	>
		<div class="flex lg:flex-col md:flex-row flex-col pt-[20px] gap-10 lg:gap-3">
			<div class="flex md:flex-col lg:flex-row lg:gap-4 gap-2 mb-4">
				<div class="w-[20px] h-[20px] rounded-full bg-black flex justify-center items-center">
					<p class="text-white text-[12px]">1</p>
				</div>

				<p class="text-[16px] ">Download the Extension for Chrome or Firefox.</p>
			</div>
			<div class="flex md:flex-col lg:flex-row lg:gap-4 gap-2 mb-4">
				<div class="w-[20px] h-[20px] rounded-full bg-black flex justify-center items-center">
					<p class="text-white text-[12px]">2</p>
				</div>
				<p class="text-[16px]">Visit your favorite online retailers.</p>
			</div>
			<div class="flex md:flex-col lg:flex-row lg:gap-4 gap-2">
				<div class="w-[20px] h-[20px] rounded-full bg-black flex justify-center items-center">
					<p class="text-white text-[12px]">3</p>
				</div>
				<p class="text-[16px]">Save! Apply coupons from the toolbar.</p>
			</div>
		</div>
		<button
			class="flex gap-2 border-2 border-black rounded-sm py-2 px-4 bg-[#C6DBBD] hover:bg-[#A8C19D] lg:mt-10 mt-5 relative z-[1]"
		>
			Start Saving
			<img src={arrowDown} alt="arrow" />
		</button>
		<div class="relative w-[183px] h-[45px] bg-black z-[0] bottom-[42px] left-[3px] rounded-sm" />
	</div>
</section>
