import { Octokit } from 'octokit'
import hsConfig from '@/../hs.config'

/**
 * 对octokit的封装与配置
 */
const octokit = new Octokit({ auth: hsConfig.hexo.gh_token })

export default octokit
