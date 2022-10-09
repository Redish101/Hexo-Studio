<template>
    <d2-container>
        <template slot="header">
            文章列表
        </template>
        <div id="post_list">
            <el-table>{{res}}</el-table>
        </div>
    </d2-container>
</template>

<script>
import { Octokit } from 'octokit'
import hsConfig from '@/../hs.config'
import { Message } from 'element-ui'

const octokit = new Octokit({ auth: hsConfig.hexo.gh_token })

var res = octokit.rest.git.getTree({
  repo: hsConfig.hexo.repo
}).catch((err) => {
  Message.error(err)
})
export default {
  data () {
    return {
      res: res
    }
  }
}
</script>
