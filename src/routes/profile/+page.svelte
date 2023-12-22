<script lang="ts">
	import type { PageServerData } from './$types';
	import Icon from '@iconify/svelte';

	export let data: PageServerData;

	const userProfile = data.profile;
</script>

<div class="container mx-auto my-5 p-5">
	<div class="md:flex no-wrap md:-mx-2">
		<!-- Left Side -->
		<div class="w-full md:w-3/12 md:mx-2">
			<!-- Profile Card -->
			<div class="card bg-white p-3 border-t-4 border-secondary">
				<div class="image overflow-hidden">
					<img
						class="h-auto w-full mx-auto"
						src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
						alt=""
					/>
				</div>
				<h1 class="text-gray-900 font-bold text-xl leading-8 my-1">
					{userProfile.nickName ?? userProfile.firstName + ' ' + userProfile.lastName}
				</h1>
				<h3 class="text-gray-600 font-lg text-semibold leading-6">
					{userProfile.role?.toLocaleUpperCase()}
				</h3>
				<p class="text-sm text-gray-500 hover:text-gray-600 leading-6">(Description maybe?)</p>
				<ul
					class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm"
				>
					<li class="flex items-center py-3">
						<span>Status</span>
						<span class="ml-auto"
							><span class="bg-green-500 py-1 px-2 rounded text-white text-sm">Within Budget</span
							></span
						>
					</li>
					<li class="flex items-center py-3">
						<span>Member since</span>
						<span class="ml-auto">Nov 07, 2016</span>
					</li>
				</ul>
			</div>
			<!-- End of profile card -->
			<div class="my-4"></div>
			<!-- Friends card -->
			<div class="card bg-white p-3 hover:shadow">
				<div class="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
					<span class="text-green-500">
						<svg
							class="h-5 fill-current"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
							/>
						</svg>
					</span>
					<span>Similar Profiles</span>
				</div>
				<div class="grid grid-cols-3">
					<div class="text-center my-2">
						<img
							class="h-16 w-16 rounded-full mx-auto"
							src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
							alt=""
						/>
						<a href="/" class="text-main-color">Kojstantin</a>
					</div>
					<div class="text-center my-2">
						<img
							class="h-16 w-16 rounded-full mx-auto"
							src="https://avatars2.githubusercontent.com/u/24622175?s=60&amp;v=4"
							alt=""
						/>
						<a href="/" class="text-main-color">James</a>
					</div>
				</div>
			</div>
			<!-- End of friends card -->
		</div>
		<!-- Right Side -->
		<div class="w-full md:w-9/12 mx-2">
			<!-- Profile tab -->
			<!-- About Section -->
			<div class="card bg-white p-3 shadow-sm">
				<div class="flex items-center justify-between font-semibold text-gray-900 leading-8">
					<div class="flex items-center space-x-2">
						<span class="text-secondary">
							<svg
								class="h-5"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
								/>
							</svg>
						</span>
						<span class="tracking-wide">About</span>
					</div>
					<a href="/profile/update">
						<Icon icon="octicon:gear-16" class="text-secondary hover:text-accent" />
					</a>
				</div>
				<div class="text-gray-700">
					<div class="grid md:grid-cols-2 text-sm">
						<div class="grid grid-cols-2">
							<div class="px-4 py-2 font-semibold">First Name</div>
							<div class="px-4 py-2">{userProfile.firstName}</div>
						</div>
						<div class="grid grid-cols-2">
							<div class="px-4 py-2 font-semibold">Last Name</div>
							<div class="px-4 py-2">{userProfile.lastName}</div>
						</div>
						<div class="grid grid-cols-2">
							<div class="px-4 py-2 font-semibold">Gender</div>
							<div class="px-4 py-2">Female</div>
						</div>
						<div class="grid grid-cols-2">
							<div class="px-4 py-2 font-semibold">Contact No.</div>
							<div class="px-4 py-2">{userProfile.phoneNumber}</div>
						</div>
						<div class="grid grid-cols-2">
							<div class="px-4 py-2 font-semibold">Current Address</div>
							<div class="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
						</div>
						<div class="grid grid-cols-2">
							<div class="px-4 py-2 font-semibold">Permanant Address</div>
							<div class="px-4 py-2">Arlington Heights, IL, Illinois</div>
						</div>
						<div class="grid grid-cols-2">
							<div class="px-4 py-2 font-semibold">Email</div>
							<div class="px-4 py-2">
								<a class="text-blue-800" href="mailto:jane@example.com">jane@example.com</a>
							</div>
						</div>
						<div class="grid grid-cols-2">
							<div class="px-4 py-2 font-semibold">Birthday</div>
							<div class="px-4 py-2">Feb 06, 1998</div>
						</div>
					</div>
				</div>
			</div>
			<!-- End of about section -->

			<div class="my-4"></div>

			<!-- Experience and education -->
			<div class="card bg-white p-3 shadow-sm">
				<div class="grid grid-cols-3">
					<div class="col-span-1">
						<div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
							<span class="text-secondary">
								<svg
									class="h-5"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
									/>
								</svg>
							</span>
							<span class="tracking-wide">Statistics</span>
						</div>
						<div class="overflow-x-auto">
							<table class="table">
								<!-- head -->
								<thead>
									<tr>
										<th></th>
										<th>Ttile</th>
										<th>Amount</th>
										<th>Category</th>
									</tr>
								</thead>
								<tbody>
									<!-- row 1 -->
									<tr class="hover">
										<th>1</th>
										<td>Cy Ganderton</td>
										<td>Quality Control Specialist</td>
										<td>Blue</td>
									</tr>
									<!-- row 2 -->
									<tr class="hover">
										<th>2</th>
										<td>Hart Hagerty</td>
										<td>Desktop Support Technician</td>
										<td>Purple</td>
									</tr>
									<!-- row 3 -->
									<tr class="hover">
										<th>3</th>
										<td>Brice Swyre</td>
										<td>Tax Accountant</td>
										<td>Red</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="grid grid-cols-3 col-span-2">
						<div class="stat">
							<div class="stat-title">Total Page Views</div>
							<div class="stat-value">89,400</div>
							<div class="stat-desc">21% more than last month</div>
						</div>
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
								<div class="avatar online">
									<div class="w-16 rounded-full">
										<img
											src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
											alt="stock"
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
				<!-- End of Experience and education grid -->
			</div>
			<!-- End of profile tab -->
		</div>
	</div>
</div>
