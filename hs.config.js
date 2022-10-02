const hsConfig = {
  users: [
    // 用户配置，允许设置多个用户，任何一个用户都只能访问对应用户的数据
    {
      username: 'admin', // 用户名
      password: 'admin', // 用户密码
      uuid: 'admin', // 用户唯一标志符，
      name: 'Admin' // 用户显示名称
    }
  ],
  hexo: {
    // Hexo相关配置
    repo: 'Redish101/blog', // 博客源码所在的GitHub仓库
    gh_token: 'ghp' // Github Token
  }
}
export default hsConfig
