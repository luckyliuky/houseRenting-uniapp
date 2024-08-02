<template>
	<view class="content">

	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			wx.login({
				success: res => {
					if (res.code) {
						wx.request({
							url: 'http://localhost:3000/api/auth/wxLogin',
							method: 'POST',
							data: {
								code: res.code
							},
							success: (result) => {
								const {
									token
								} = result.data.data;
								wx.setStorageSync('token', token); // 将 token 存储到本地
							},
							fail: (error) => {
								console.error('登录失败：', error);
							}
						})
					}
				}
			})
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>