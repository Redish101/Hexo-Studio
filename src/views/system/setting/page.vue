<template>
    <d2-container>
        <template slot="header">设置</template>
        <el-form>
            <el-form-item class="text">本页面仅能查看设置，如需更改，请修改hs.config.js</el-form-item>
            <el-form-item label="当前版本:">
              {{$version}}
            </el-form-item>
            <el-form-item label="最新版本:">
              <div id="latest">加载中...</div>
            </el-form-item>
        </el-form>
    </d2-container>
</template>

<script>
import axios from 'axios'

var latestVersion = null

async function getLatestVersion () {
  try {
    const res = (await axios.get('https://registry.npmmirror.com/hexo-studio/latest')).data.version
    setTimeout(() => {
      document.getElementById('latest').innerHTML = res
    }, 1000)
  } catch (error) {
    setTimeout(() => {
      document.getElementById('latest').innerHTML = '获取出错'
    }, 1000)
  }
}

getLatestVersion()

export default {
  data () {
    return {
      latestVersion: latestVersion
    }
  }
}
</script>

<style>
    .text {
        color:  #999;
        font-size: 12px;
    }
</style>
