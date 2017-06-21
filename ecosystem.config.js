module.exports = {
  deploy: {
    imweb: {
      user: "root",
      host: "imweb.io",
      ref: "origin/master",
      repo: "git@git.coding.net:yisbug/datacenter.git",
      path: "/data/www/2017.imweb.io.tmp/",
      "post-deploy": "",
      env: {
        NODE_ENV: "production"
      }
    }
  }
}
