<script>
	import logo from '../assets/Logo.svg';
	import arrowDown from '../assets/arrow-down-svgrepo-com 1.svg';
	import { navLinks } from '../lib/index';
	import CiHamburger from '~icons/ci/hamburger';
	import CiCloseBig from '~icons/ci/close-big';
	import { slide } from 'svelte/transition';

	let current = 'Home';
	$: display = false;
</script>

<nav
	class="flex flex-1 justify-between xl:px-[160px] lg:px-[80px] md:px-[64px] px-[20px] md:py-[32px] py-[16px] items-center border-b-2 border-black"
>
	<div class="flex items-center">
		<img src={logo} alt="coupon" class="w-[60px] h-[50px]" />
		<h1 class="text-[32px] font-bold">Couper</h1>
	</div>

	<ul class="hidden md:flex xl:gap-20 lg:gap-14 gap-10 ">
		{#each navLinks as link}
			<li class={current === link.title ? 'selected' : ''} on:click={() => (current = link.title)}>
				<a href="/">{link.title}</a>
			</li>
		{/each}
	</ul>
	<button
		class="hidden md:flex gap-2 border-2 border-black rounded-sm py-2 px-4 bg-[#C6DBBD] hover:bg-[#A8C19D]"
	>
		Start Saving
		<img src={arrowDown} alt="arrow" />
	</button>

	{#if display}
		<div transition:slide class="fixed inset-0 w-full h-full z-40">
			<div class="absolute bg-white w-[70%] h-screen top-0 right-0 ">
				<div
					on:click={() => (display = !display)}
					class="cursor-pointer px-[20px] py-[24px] flex justify-end"
				>
					<CiCloseBig class="text-3xl" />
				</div>
				<ul class="flex flex-col items-center font-medium text-xl gap-10 pt-[100px]">
					{#each navLinks as link}
						<li
							class={current === link.title ? 'selected' : ''}
							on:click={() => (current = link.title)}
						>
							<a href="/">{link.title}</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	{:else}
		<div on:click={() => (display = !display)} class="cursor-pointer md:hidden">
			<CiHamburger class="text-3xl" />
		</div>
	{/if}
</nav>

<style>
	.selected {
		border-bottom: 2px solid black;
	}
</style>
