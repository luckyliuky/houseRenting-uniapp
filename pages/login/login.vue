<template>
	<view class="topimg">
		<image src="@/static/images/img_1.jpg" mode="widthFix"></image>
	</view>
	<view class="sask">
		<image src="@/static/images/img_1.jpg" mode="widthFix"></image>
	</view>
	<view class="botview">
		<view class="p1">
			让我们为您找一个
		</view>
		<view class="p2">
			理想的家
		</view>
		<view class="login-btn" @click="wxLogin">
			登录
		</view>
	</view>
</template>

<script setup>
	const wxLogin = () => {
		wx.login({
			success: res => {
				console.log(res)
			}
		})
	}
</script>

<style scoped lang="scss">
	.sask {
		z-index: -1;
		position: absolute;
		top: 0;
		right: 0;
		width: 300rpx;
		height: 800rpx;
		overflow: hidden;

		image {
			width: 750rpx;
			position: absolute;
			right: 0;
			top: 0;
		}
	}

	.topimg {
		width: 100%;
		height: 600rpx;
		border-bottom-left-radius: 80rpx;
		overflow: hidden;

		image {
			width: 100%;
		}
	}

	.botview {
		width: 100%;
		height: 300rpx;
		position: relative;
		z-index: 2;
		border-top-right-radius: 80rpx;
		background: #fff;
		padding-top: 140rpx;

		.p1 {
			font-weight: bold;
			font-size: 60rpx;
			color: #282828;
			text-align: center;
		}

		.p2 {
			font-weight: bold;
			margin-top: 40rpx;
			font-size: 60rpx;
			color: #282828;
			text-align: center;
		}

		.login-btn {
			margin: 0 60rpx;
			margin-top: 160rpx;
			height: 80rpx;
			border-radius: 12rpx;
			line-height: 80rpx;
			background: rgb(65, 111, 201);
			font-size: 36rpx;
			font-weight: bold;
			color: #fff;
			text-align: center;
			letter-spacing: 36rpx;
		}
	}
</style>