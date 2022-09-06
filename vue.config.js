const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css:{
    loaderOptions:{
      sass:{
        //additionalData: `@import "~bulma/sass/utilities/_all"`
      }
    },
  },
  
})
