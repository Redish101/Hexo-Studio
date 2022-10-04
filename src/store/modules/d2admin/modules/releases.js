import util from '@/libs/util.js'

export default {
  namespaced: true,
  mutations: {
    /**
     * @description 显示版本信息
     * @param {Object} state state
     */
    versionShow () {
      util.log.capsule('Hexo Studio', `v${process.env.VUE_APP_VERSION}`)
      console.log('请不要吝啬您的 star，谢谢 ~')
    }
  }
}
