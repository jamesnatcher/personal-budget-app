<script lang="ts">
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	export let data: PageData;

	const { form, errors } = superForm(data.updateUserProfileForm);
</script>

<div class="p-10">
	<div class="card bg-secondary shadow-xl">
		<form action="/profile/update?/updateUserProfile" method="post" class="card-body flex w-full">
			<div class="flex flex-col w-full lg:flex-row">
				<div class="grid flex-grow card rounded-box place-items-center">
					<div class="flex flex-col gap-4">
						<h2 class="card-title">Personal Information</h2>
						<h3>Please do not put any sensitive information here.</h3>
						<div></div>
						<div class="grid grid-cols-1 gap-4">
							<label class="form-control w-full max-w-xs">
								<div class="label">
									<span class="label-text">*First Name</span>
								</div>
								<input
									name="firstName"
									bind:value={$form.firstName}
									type="text"
									placeholder="Type here"
									class="input input-bordered w-full max-w-xs"
								/>
								{#if $errors.firstName}
									<small class="text-red-600">{$errors.firstName}</small>
								{/if}
							</label>
							<label class="form-control w-full max-w-xs">
								<div class="label">
									<span class="label-text">Nickname</span>
								</div>
								<input
									name="nickName"
									bind:value={$form.nickName}
									type="text"
									placeholder="Type here"
									class="input input-bordered w-full max-w-xs"
								/>
							</label>
							<label class="form-control w-full max-w-xs">
								<div class="label">
									<span class="label-text">*Last Name</span>
								</div>
								<input
									name="lastName"
									bind:value={$form.lastName}
									type="text"
									placeholder="Type here"
									class="input input-bordered w-full max-w-xs"
								/>
								{#if $errors.lastName}
									<small class="text-red-600">{$errors.lastName}</small>
								{/if}
							</label>
							<label class="form-control w-full max-w-xs">
								<div class="label">
									<span class="label-text">*Phone Number</span>
								</div>
								<input
									name="phoneNumber"
									bind:value={$form.phoneNumber}
									type="text"
									placeholder="Type here"
									class="input input-bordered w-full max-w-xs"
								/>
								{#if $errors.phoneNumber}
									<small class="text-red-600">{$errors.phoneNumber}</small>
								{/if}
							</label>
						</div>
					</div>
				</div>
				<div class="divider lg:divider-horizontal"></div>
				<div class="grid flex-grow card rounded-box place-items-center">
					<div class="flex flex-col gap-4">
						<h2 class="card-title">Profile Settings</h2>
						<h3>Modify settings related to the app.</h3>
						<div class="grid grid-cols-3">
							<div class="avatar">
								<div class="w-24 rounded-xl">
									<img
										src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
										alt="The user."
									/>
								</div>
							</div>
						</div>
						<label class="form-control w-full max-w-xs">
							<div class="label">
								<span class="label-text">Upload a photo</span>
							</div>
							<input type="file" class="file-input file-input-bordered w-full max-w-xs" />
						</label>
					</div>
				</div>
			</div>
			<div class="card-actions justify-end pt-5">
				<button type="submit" class="btn btn-primary">Listen</button>
			</div>
		</form>
	</div>
</div>
