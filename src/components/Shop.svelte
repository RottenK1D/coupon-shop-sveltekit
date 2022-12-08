<script>
	import nikeShoes from '../assets/NikeShoes.png';
	import shades from '../assets/Shades.png';
	import headphones from '../assets/Headphones.png';
	import hats from '../assets/Hats.png';
	import mKeyboard from '../assets/MechanicalKeyboard.png';
	import lipstick from '../assets/Lipsticks.png';
	import IcBaselineRemoveRedEye from '~icons/ic/baseline-remove-red-eye';
</script>

<section class="bg-white">
	<div
		class="flex flex-col relative items-center top-[-100px] gap-10 xl:px-[160px] lg:px-[80px] md:px-[64px] "
	>
		<div class="flex gap-10 flex-wrap items-center justify-center">
			<div class="shrink-0 border-2 border-black rounded-md relative">
				<div class="relative z-[1] ">
					<div>
						<img src={nikeShoes} alt="" />
					</div>
					<div class="flex">
						<div class="bg-black flex items-center">
							<p class="text-white text-[18px] p-2 ">$67</p>
						</div>
						<div class="w-full bg-white rounded-br-md flex items-center justify-end">
							<p class="text-[22px] font-bold p-2 mx-4">Nike Shoes</p>
						</div>
					</div>
				</div>
				<div
					class="w-[489px] h-[258px] bg-black absolute right-[-5px] top-[2px] rounded-md z-[0]"
				/>
			</div>

			<div class="shrink-0 border-2 border-black rounded-md relative">
				<div class="relative z-[1]">
					<div class="flex">
						<div class="bg-black flex items-center">
							<p class="text-white text-[18px] p-2 ">$22</p>
						</div>
						<div class="w-full bg-white rounded-tr-md flex items-center justify-end">
							<p class="text-[22px] font-bold p-2 mx-4">Shades</p>
						</div>
					</div>
					<div>
						<img src={shades} alt="" />
					</div>
				</div>
				<div
					class="w-[295px] h-[258px] bg-black absolute right-[-5px] top-[2px] rounded-md z-[0]"
				/>
			</div>

			<div class="shrink-0 border-2 border-black rounded-md relative">
				<div class="relative z-[1]">
					<div class="flex">
						<div class="bg-black flex items-center">
							<p class="text-white text-[18px] p-2 ">$35</p>
						</div>
						<div class="w-full bg-white rounded-tr-md flex items-center justify-end">
							<p class="text-[22px] font-bold p-2 mx-4">Headphones</p>
						</div>
					</div>
					<div>
						<img src={headphones} alt="" />
					</div>
				</div>
				<div
					class="w-[295px] h-[258px] bg-black absolute right-[-5px] top-[2px] rounded-md z-[0]"
				/>
			</div>
			<div class="shrink-0 border-2 border-black rounded-md relative">
				<div class="relative z-[1]">
					<div class="flex">
						<div class="bg-black flex items-center">
							<p class="text-white text-[18px] p-2 ">$28</p>
						</div>
						<div class="w-full bg-white rounded-tr-md flex items-center justify-end">
							<p class="text-[22px] font-bold p-2 mx-4">Hats</p>
						</div>
					</div>
					<div>
						<img src={hats} alt="" />
					</div>
				</div>
				<div
					class="w-[295px] h-[258px] bg-black absolute right-[-5px] top-[2px] rounded-md z-[0]"
				/>
			</div>

			<div class="shrink-0 border-2 border-black rounded-md relative">
				<div class="relative z-[1]">
					<div>
						<img src={mKeyboard} alt="" />
					</div>
					<div class="flex">
						<div class="bg-black flex items-center">
							<p class="text-white text-[18px] p-2 ">$74</p>
						</div>
						<div class="w-full bg-white rounded-br-md flex items-center justify-end">
							<p class="text-[22px] font-bold p-2 mx-4">Mechanical Keyboards</p>
						</div>
					</div>
				</div>
				<div
					class="w-[489px] h-[258px] bg-black absolute right-[-5px] top-[2px] rounded-md z-[0]"
				/>
			</div>

			<div class="shrink-0 border-2 border-black rounded-md relative">
				<div class="relative z-[1]">
					<div class="flex">
						<div class="bg-black flex items-center">
							<p class="text-white text-[18px] p-2 ">$11</p>
						</div>
						<div class="w-full bg-white rounded-br-md flex items-center justify-end">
							<p class="text-[22px] font-bold p-2 mx-4">Lipsticks</p>
						</div>
					</div>
					<div>
						<img src={lipstick} alt="" />
					</div>
				</div>
				<div
					class="w-[295px] h-[258px] bg-black absolute right-[-5px] top-[2px] rounded-md z-[0]"
				/>
			</div>
		</div>
		<div class="flex gap-2 items-center">
			<IcBaselineRemoveRedEye />
			<a href="/" class="underline">View all brands</a>
		</div>
	</div>
</section>
