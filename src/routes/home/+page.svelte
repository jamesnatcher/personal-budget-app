<script lang="ts">
	import { PUBLIC_THE_NEWS_API_KEY } from '$env/static/public';
	import type { TheNewsArticle } from '$lib/types/index.js';
	import { onMount } from 'svelte';

	export let data;
	let userProfile = data.profile;
	let newsArticles: TheNewsArticle[];
	let pageNumber: number = 1;

	async function getNews(pageNumber: number | null = null, keyword: string | null = null) {
		const queryKeyword = keyword ? keyword : 'finances';

		const queryString = pageNumber
			? `https://api.thenewsapi.com/v1/news/top?api_token=${PUBLIC_THE_NEWS_API_KEY}&search=${queryKeyword}&locale=us&limit=4`
			: `https://api.thenewsapi.com/v1/news/top?api_token=${PUBLIC_THE_NEWS_API_KEY}&search=${queryKeyword}&locale=us&limit=4`;

		const response = await fetch(queryString);
		const news = await response.json();
		newsArticles = news.data;
	}

	onMount(async () => {
		await getNews(pageNumber);
	});

	$: getNews(pageNumber);
</script>

<div class="container mx-auto">
	<div class="flex flex-col md:flex-row">
		<div class="flex flex-col-reverse md:flex-col">
			<div class="card bg-white row-span-2 m-3 p-3 shadow">
				<div class="flex flex-col">
					<div class="flex p-5 gap-4">
						<div class="avatar">
							<div class="w-24 rounded-full">
								<img
									src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
									alt="User"
								/>
							</div>
						</div>
						<div class="text-md font-bold">
							{(userProfile.nickName ?? userProfile.firstName) + ' ' + userProfile.lastName}
						</div>
					</div>
					<div class="divider"></div>
					<div class="text-lg font-bold">Recent Expenses</div>
					<div class="overflow-auto h-96">
						<table class="table">
							<!-- head -->
							<thead>
								<tr>
									<th>Ttile</th>
									<th>Amount</th>
									<th>Category</th>
								</tr>
							</thead>
							<tbody>
								<tr class="hover">
									<td>Cy Ganderton</td>
									<td>Quality Control Specialist</td>
									<td>Blue</td>
								</tr>
								<tr class="hover">
									<td>Cy Ganderton</td>
									<td>Quality Control Specialist</td>
									<td>Blue</td>
								</tr>
								<tr class="hover">
									<td>Hart Hagerty</td>
									<td>Desktop Support Technician</td>
									<td>Purple</td>
								</tr>
								<tr class="hover">
									<td>Brice Swyre</td>
									<td>Tax Accountant</td>
									<td>Red</td>
								</tr>
								<tr class="hover">
									<td>Brice Swyre</td>
									<td>Tax Accountant</td>
									<td>Red</td>
								</tr>
								<tr class="hover">
									<td>Brice Swyre</td>
									<td>Tax Accountant</td>
									<td>Red</td>
								</tr>
								<tr class="hover">
									<td>Brice Swyre</td>
									<td>Tax Accountant</td>
									<td>Red</td>
								</tr>
								<tr class="hover">
									<td>Brice Swyre</td>
									<td>Tax Accountant</td>
									<td>Red</td>
								</tr>
								<tr class="hover">
									<td>Brice Swyre</td>
									<td>Tax Accountant</td>
									<td>Red</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div class="card bg-white m-3 p-3 shadow col-span-1">Quick entry</div>
		</div>
		<div>
			<div class="card bg-white m-3 p-3 font-bold shadow col-span-2">
				Statistics
				<div class="stats bg-white">
					<div class="stat">
						<div class="stat-figure text-primary">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								class="inline-block w-8 h-8 stroke-current"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
								></path></svg
							>
						</div>
						<div class="stat-title">Total Likes</div>
						<div class="stat-value text-primary">25.6K</div>
						<div class="stat-desc">21% more than last month</div>
					</div>

					<div class="stat">
						<div class="stat-figure text-secondary">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								class="inline-block w-8 h-8 stroke-current"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M13 10V3L4 14h7v7l9-11h-7z"
								></path></svg
							>
						</div>
						<div class="stat-title">Page Views</div>
						<div class="stat-value text-secondary">2.6M</div>
						<div class="stat-desc">21% more than last month</div>
					</div>

					<div class="stat">
						<div class="stat-figure text-secondary">
							<div class="avatar">
								<div class="w-16 rounded-full">
									<img
										src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
										alt="Test"
									/>
								</div>
							</div>
						</div>
						<div class="stat-value">86%</div>
						<div class="stat-title">Tasks done</div>
						<div class="stat-desc text-secondary">31 tasks remaining</div>
					</div>
				</div>
			</div>

			{#if newsArticles}
				<div class="card bg-white m-3 p-3 shadow row-span-3 col-span-2">
					<div class="relative w-full">
						<div class="carousel w-full rounded-md border">
							{#each newsArticles as newsArticle, index}
								<div id="news{index}" class="carousel-item relative w-full">
									<a href={newsArticle.url}>
										<img
											src={newsArticle.image_url}
											class="h-full w-full"
											alt={newsArticle.description}
										/>
										<div>
											<div
												class="absolute bottom-0 h-12 md:h-16 lg:h-24 w-full bg-white opacity-75"
											></div>
											<div class="absolute bottom-0 flex flex-col px-5 pb-3">
												<div class=" font-bold text-black">{newsArticle.title}</div>
												<div class="text-black hidden lg:block">{newsArticle.description}</div>
											</div>
										</div>

										<div
											class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
										>
											<a
												href="#news{(index - 1) % newsArticles.length < 0
													? newsArticles.length - 1
													: (index - 1) % 4}"
												class="btn btn-circle">❮</a
											>
											<a href="#news{(index + 1) % newsArticles.length}" class="btn btn-circle">❯</a
											>
										</div>
									</a>
								</div>
							{/each}
						</div>

						<div class="divider"></div>

						<div class="overflow-x-auto">
							<table class="table table-zebra">
								<!-- head -->
								<thead>
									<tr>
										<th>Date Published</th>
										<th>Title</th>
									</tr>
								</thead>
								<tbody>
									{#if newsArticles}
										{#each newsArticles as newsArticle}
											<tr>
												<td>{new Date(newsArticle.published_at).toLocaleDateString()}</td>
												<td><a href={newsArticle.url}>{newsArticle.title}</a></td>
											</tr>
										{/each}
									{/if}
								</tbody>
							</table>
						</div>

						<div class="flex justify-center pt-5">
							<div class="join grid grid-cols-2 rounded-sm w-52">
								<button
									class="join-item btn btn-outline text-primary"
									on:click={function () {
										pageNumber--;
										if (pageNumber <= 0) {
											pageNumber = 0;
										}
									}}>Previous page</button
								>
								<button
									class="join-item btn btn-outline text-primary"
									on:click={function () {
										pageNumber++;
										if (pageNumber >= 100) {
											pageNumber = 100;
										}
									}}>Next</button
								>
							</div>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>
