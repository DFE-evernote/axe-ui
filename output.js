// {
//   mode: 'development',
//   context: '/Users/guojufeng/Documents/GitHub/xingorg1-ui',
//   node: {
//     setImmediate: false,
//     process: 'mock',
//     dgram: 'empty',
//     fs: 'empty',
//     net: 'empty',
//     tls: 'empty',
//     child_process: 'empty'
//   },
//   output: {
//     path: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/dist',
//     filename: 'js/[name].js',
//     publicPath: '/',
//     chunkFilename: 'js/[name].js'
//   },
//   resolve: {
//     alias: {
//       '@': '/Users/guojufeng/Documents/GitHub/xingorg1-ui/src',
//       vue$: 'vue/dist/vue.runtime.esm-bundler.js',
//       packages: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/packages',
//       comp: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/src/components',
//       style: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/styles'
//     },
//     extensions: [
//       '.mjs',
//       '.js',
//       '.jsx',
//       '.vue',
//       '.json',
//       '.wasm'
//     ],
//     modules: [
//       'node_modules',
//       '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules',
//       '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/@vue/cli-service/node_modules'
//     ],
//     plugins: [
//       {
//         apply: function nothing() {
//           // ¯\_(ツ)_/¯
//         },
//         makePlugin: function () { /* omitted long function */ },
//         moduleLoader: function () { /* omitted long function */ },
//         topLevelLoader: {
//           apply: function nothing() {
//             // ¯\_(ツ)_/¯
//           }
//         },
//         bind: function () { /* omitted long function */ },
//         tsLoaderOptions: function () { /* omitted long function */ },
//         forkTsCheckerOptions: function () { /* omitted long function */ }
//       }
//     ]
//   },
//   resolveLoader: {
//     modules: [
//       '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/@vue/cli-plugin-babel/node_modules',
//       'node_modules',
//       '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules',
//       '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/@vue/cli-service/node_modules'
//     ],
//     plugins: [
//       {
//         apply: function nothing() {
//           // ¯\_(ツ)_/¯
//         }
//       }
//     ]
//   },
//   module: {
//     noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
//     rules: [
//       /* config.module.rule('vue') */
//       {
//         test: /\.vue$/,
//         use: [
//           {
//             loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/cache-loader/dist/cjs.js',
//             options: {
//               cacheDirectory: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/.cache/vue-loader',
//               cacheIdentifier: '7f9336c4'
//             }
//           },
//           {
//             loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js',
//             options: {
//               cacheDirectory: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/.cache/vue-loader',
//               cacheIdentifier: '7f9336c4',
//               babelParserPlugins: [
//                 'jsx',
//                 'classProperties',
//                 'decorators-legacy'
//               ]
//             }
//           }
//         ]
//       },
//       /* config.module.rule('images') */
//       {
//         test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
//         use: [
//           {
//             loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/url-loader/dist/cjs.js',
//             options: {
//               limit: 4096,
//               fallback: {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/file-loader/dist/cjs.js',
//                 options: {
//                   name: 'img/[name].[hash:8].[ext]'
//                 }
//               }
//             }
//           }
//         ]
//       },
//       /* config.module.rule('svg') */
//       {
//         test: /\.(svg)(\?.*)?$/,
//         use: [
//           {
//             loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/file-loader/dist/cjs.js',
//             options: {
//               name: 'img/[name].[hash:8].[ext]'
//             }
//           }
//         ]
//       },
//       /* config.module.rule('media') */
//       {
//         test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
//         use: [
//           {
//             loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/url-loader/dist/cjs.js',
//             options: {
//               limit: 4096,
//               fallback: {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/file-loader/dist/cjs.js',
//                 options: {
//                   name: 'media/[name].[hash:8].[ext]'
//                 }
//               }
//             }
//           }
//         ]
//       },
//       /* config.module.rule('fonts') */
//       {
//         test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
//         use: [
//           {
//             loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/url-loader/dist/cjs.js',
//             options: {
//               limit: 4096,
//               fallback: {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/file-loader/dist/cjs.js',
//                 options: {
//                   name: 'fonts/[name].[hash:8].[ext]'
//                 }
//               }
//             }
//           }
//         ]
//       },
//       /* config.module.rule('pug') */
//       {
//         test: /\.pug$/,
//         oneOf: [
//           /* config.module.rule('pug').rule('pug-vue') */
//           {
//             resourceQuery: /vue/,
//             use: [
//               {
//                 loader: 'pug-plain-loader'
//               }
//             ]
//           },
//           /* config.module.rule('pug').rule('pug-template') */
//           {
//             use: [
//               {
//                 loader: 'raw-loader'
//               },
//               {
//                 loader: 'pug-plain-loader'
//               }
//             ]
//           }
//         ]
//       },
//       /* config.module.rule('css') */
//       {
//         test: /\.css$/,
//         oneOf: [
//           /* config.module.rule('css').rule('vue-modules') */
//           {
//             resourceQuery: /module/,
//             use: [
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/vue-style-loader/index.js',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/css-loader/dist/cjs.js',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2,
//                   modules: {
//                     localIdentName: '[name]_[local]_[hash:base64:5]'
//                   }
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/postcss-loader/src/index.js',
//                 options: {
//                   sourceMap: false,
//                   plugins: [
//                     function () { /* omitted long function */ }
//                   ]
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('css').rule('vue') */
//           {
//             resourceQuery: /\?vue/,
//             use: [
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/vue-style-loader/index.js',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/css-loader/dist/cjs.js',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/postcss-loader/src/index.js',
//                 options: {
//                   sourceMap: false,
//                   plugins: [
//                     function () { /* omitted long function */ }
//                   ]
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('css').rule('normal-modules') */
//           {
//             test: /\.module\.\w+$/,
//             use: [
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/vue-style-loader/index.js',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/css-loader/dist/cjs.js',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2,
//                   modules: {
//                     localIdentName: '[name]_[local]_[hash:base64:5]'
//                   }
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/postcss-loader/src/index.js',
//                 options: {
//                   sourceMap: false,
//                   plugins: [
//                     function () { /* omitted long function */ }
//                   ]
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('css').rule('normal') */
//           {
//             use: [
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/vue-style-loader/index.js',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/css-loader/dist/cjs.js',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/postcss-loader/src/index.js',
//                 options: {
//                   sourceMap: false,
//                   plugins: [
//                     function () { /* omitted long function */ }
//                   ]
//                 }
//               }
//             ]
//           }
//         ]
//       },
//       /* config.module.rule('postcss') */
//       {
//         test: /\.p(ost)?css$/,
//         oneOf: [
//           /* config.module.rule('postcss').rule('vue-modules') */
//           {
//             resourceQuery: /module/,
//             use: [
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/vue-style-loader/index.js',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/css-loader/dist/cjs.js',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2,
//                   modules: {
//                     localIdentName: '[name]_[local]_[hash:base64:5]'
//                   }
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/postcss-loader/src/index.js',
//                 options: {
//                   sourceMap: false,
//                   plugins: [
//                     function () { /* omitted long function */ }
//                   ]
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('postcss').rule('vue') */
//           {
//             resourceQuery: /\?vue/,
//             use: [
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/vue-style-loader/index.js',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/css-loader/dist/cjs.js',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/postcss-loader/src/index.js',
//                 options: {
//                   sourceMap: false,
//                   plugins: [
//                     function () { /* omitted long function */ }
//                   ]
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('postcss').rule('normal-modules') */
//           {
//             test: /\.module\.\w+$/,
//             use: [
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/vue-style-loader/index.js',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/css-loader/dist/cjs.js',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2,
//                   modules: {
//                     localIdentName: '[name]_[local]_[hash:base64:5]'
//                   }
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/postcss-loader/src/index.js',
//                 options: {
//                   sourceMap: false,
//                   plugins: [
//                     function () { /* omitted long function */ }
//                   ]
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('postcss').rule('normal') */
//           {
//             use: [
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/vue-style-loader/index.js',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/css-loader/dist/cjs.js',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/postcss-loader/src/index.js',
//                 options: {
//                   sourceMap: false,
//                   plugins: [
//                     function () { /* omitted long function */ }
//                   ]
//                 }
//               }
//             ]
//           }
//         ]
//       },
//       /* config.module.rule('scss') */
//       {
//         test: /\.scss$/,
//         oneOf: [
//           /* config.module.rule('scss').rule('vue-modules') */
//           {
//             resourceQuery: /module/,
//             use: [
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/vue-style-loader/index.js',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/css-loader/dist/cjs.js',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2,
//                   modules: {
//                     localIdentName: '[name]_[local]_[hash:base64:5]'
//                   }
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/postcss-loader/src/index.js',
//                 options: {
//                   sourceMap: false,
//                   plugins: [
//                     function () { /* omitted long function */ }
//                   ]
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/sass-loader/dist/cjs.js',
//                 options: {
//                   sourceMap: false,
//                   implementation: {
//                     render: function () {
//                       return _call(f, Array.prototype.slice.apply(arguments));
//                     },
//                     renderSync: function () {
//                       return _call(f, Array.prototype.slice.apply(arguments));
//                     },
//                     info: 'dart-sass\t1.28.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.10.3\t(Dart Compiler)\t[Dart]',
//                     types: {
//                       Boolean: function () {
//                         return _call(f, Array.prototype.slice.apply(arguments));
//                       },
//                       Color: function () {
//                         return _call(f, this, Array.prototype.slice.apply(arguments));
//                       },
//                       List: function () {
//                         return _call(f, this, Array.prototype.slice.apply(arguments));
//                       },
//                       Map: function () {
//                         return _call(f, this, Array.prototype.slice.apply(arguments));
//                       },
//                       Null: function () {
//                         return _call(f, Array.prototype.slice.apply(arguments));
//                       },
//                       Number: function () {
//                         return _call(f, this, Array.prototype.slice.apply(arguments));
//                       },
//                       String: function () {
//                         return _call(f, this, Array.prototype.slice.apply(arguments));
//                       },
//                       Error: function Error() { [native code] }
//                     },
//                     NULL: {
//                       toString: function () {
//                         return _call(f, Array.prototype.slice.apply(arguments));
//                       }
//                     },
//                     TRUE: {
//                       value: true
//                     },
//                     FALSE: {
//                       value: false
//                     },
//                     cli_pkg_main_0_: function () {
//                       return _call(f, Array.prototype.slice.apply(arguments));
//                     }
//                   }
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('scss').rule('vue') */
//           {
//             resourceQuery: /\?vue/,
//             use: [
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/vue-style-loader/index.js',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/css-loader/dist/cjs.js',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/postcss-loader/src/index.js',
//                 options: {
//                   sourceMap: false,
//                   plugins: [
//                     function () { /* omitted long function */ }
//                   ]
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/sass-loader/dist/cjs.js',
//                 options: {
//                   sourceMap: false,
//                   implementation: {
//                     render: function () {
//                       return _call(f, Array.prototype.slice.apply(arguments));
//                     },
//                     renderSync: function () {
//                       return _call(f, Array.prototype.slice.apply(arguments));
//                     },
//                     info: 'dart-sass\t1.28.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.10.3\t(Dart Compiler)\t[Dart]',
//                     types: {
//                       Boolean: function () {
//                         return _call(f, Array.prototype.slice.apply(arguments));
//                       },
//                       Color: function () {
//                         return _call(f, this, Array.prototype.slice.apply(arguments));
//                       },
//                       List: function () {
//                         return _call(f, this, Array.prototype.slice.apply(arguments));
//                       },
//                       Map: function () {
//                         return _call(f, this, Array.prototype.slice.apply(arguments));
//                       },
//                       Null: function () {
//                         return _call(f, Array.prototype.slice.apply(arguments));
//                       },
//                       Number: function () {
//                         return _call(f, this, Array.prototype.slice.apply(arguments));
//                       },
//                       String: function () {
//                         return _call(f, this, Array.prototype.slice.apply(arguments));
//                       },
//                       Error: function Error() { [native code] }
//                     },
//                     NULL: {
//                       toString: function () {
//                         return _call(f, Array.prototype.slice.apply(arguments));
//                       }
//                     },
//                     TRUE: {
//                       value: true
//                     },
//                     FALSE: {
//                       value: false
//                     },
//                     cli_pkg_main_0_: function () {
//                       return _call(f, Array.prototype.slice.apply(arguments));
//                     }
//                   }
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('scss').rule('normal-modules') */
//           {
//             test: /\.module\.\w+$/,
//             use: [
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/vue-style-loader/index.js',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/css-loader/dist/cjs.js',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2,
//                   modules: {
//                     localIdentName: '[name]_[local]_[hash:base64:5]'
//                   }
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/postcss-loader/src/index.js',
//                 options: {
//                   sourceMap: false,
//                   plugins: [
//                     function () { /* omitted long function */ }
//                   ]
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/sass-loader/dist/cjs.js',
//                 options: {
//                   sourceMap: false,
//                   implementation: {
//                     render: function () {
//                       return _call(f, Array.prototype.slice.apply(arguments));
//                     },
//                     renderSync: function () {
//                       return _call(f, Array.prototype.slice.apply(arguments));
//                     },
//                     info: 'dart-sass\t1.28.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.10.3\t(Dart Compiler)\t[Dart]',
//                     types: {
//                       Boolean: function () {
//                         return _call(f, Array.prototype.slice.apply(arguments));
//                       },
//                       Color: function () {
//                         return _call(f, this, Array.prototype.slice.apply(arguments));
//                       },
//                       List: function () {
//                         return _call(f, this, Array.prototype.slice.apply(arguments));
//                       },
//                       Map: function () {
//                         return _call(f, this, Array.prototype.slice.apply(arguments));
//                       },
//                       Null: function () {
//                         return _call(f, Array.prototype.slice.apply(arguments));
//                       },
//                       Number: function () {
//                         return _call(f, this, Array.prototype.slice.apply(arguments));
//                       },
//                       String: function () {
//                         return _call(f, this, Array.prototype.slice.apply(arguments));
//                       },
//                       Error: function Error() { [native code] }
//                     },
//                     NULL: {
//                       toString: function () {
//                         return _call(f, Array.prototype.slice.apply(arguments));
//                       }
//                     },
//                     TRUE: {
//                       value: true
//                     },
//                     FALSE: {
//                       value: false
//                     },
//                     cli_pkg_main_0_: function () {
//                       return _call(f, Array.prototype.slice.apply(arguments));
//                     }
//                   }
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('scss').rule('normal') */
//           {
//             use: [
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/vue-style-loader/index.js',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/css-loader/dist/cjs.js',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/postcss-loader/src/index.js',
//                 options: {
//                   sourceMap: false,
//                   plugins: [
//                     function () { /* omitted long function */ }
//                   ]
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/sass-loader/dist/cjs.js',
//                 options: {
//                   sourceMap: false,
//                   implementation: {
//                     render: function () {
//                       return _call(f, Array.prototype.slice.apply(arguments));
//                     },
//                     renderSync: function () {
//                       return _call(f, Array.prototype.slice.apply(arguments));
//                     },
//                     info: 'dart-sass\t1.28.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.10.3\t(Dart Compiler)\t[Dart]',
//                     types: {
//                       Boolean: function () {
//                         return _call(f, Array.prototype.slice.apply(arguments));
//                       },
//                       Color: function () {
//                         return _call(f, this, Array.prototype.slice.apply(arguments));
//                       },
//                       List: function () {
//                         return _call(f, this, Array.prototype.slice.apply(arguments));
//                       },
//                       Map: function () {
//                         return _call(f, this, Array.prototype.slice.apply(arguments));
//                       },
//                       Null: function () {
//                         return _call(f, Array.prototype.slice.apply(arguments));
//                       },
//                       Number: function () {
//                         return _call(f, this, Array.prototype.slice.apply(arguments));
//                       },
//                       String: function () {
//                         return _call(f, this, Array.prototype.slice.apply(arguments));
//                       },
//                       Error: function Error() { [native code] }
//                     },
//                     NULL: {
//                       toString: function () {
//                         return _call(f, Array.prototype.slice.apply(arguments));
//                       }
//                     },
//                     TRUE: {
//                       value: true
//                     },
//                     FALSE: {
//                       value: false
//                     },
//                     cli_pkg_main_0_: function () {
//                       return _call(f, Array.prototype.slice.apply(arguments));
//                     }
//                   }
//                 }
//               }
//             ]
//           }
//         ]
//       },
//       /* config.module.rule('sass') */
//       {
//         test: /\.sass$/,
//         oneOf: [
//           /* config.module.rule('sass').rule('vue-modules') */
//           {
//             resourceQuery: /module/,
//             use: [
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/vue-style-loader/index.js',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/css-loader/dist/cjs.js',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2,
//                   modules: {
//                     localIdentName: '[name]_[local]_[hash:base64:5]'
//                   }
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/postcss-loader/src/index.js',
//                 options: {
//                   sourceMap: false,
//                   plugins: [
//                     function () { /* omitted long function */ }
//                   ]
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/sass-loader/dist/cjs.js',
//                 options: {
//                   sourceMap: false,
//                   implementation: {
//                     render: function () {
//                       return _call(f, Array.prototype.slice.apply(arguments));
//                     },
//                     renderSync: function () {
//                       return _call(f, Array.prototype.slice.apply(arguments));
//                     },
//                     info: 'dart-sass\t1.28.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.10.3\t(Dart Compiler)\t[Dart]',
//                     types: {
//                       Boolean: function () {
//                         return _call(f, Array.prototype.slice.apply(arguments));
//                       },
//                       Color: function () {
//                         return _call(f, this, Array.prototype.slice.apply(arguments));
//                       },
//                       List: function () {
//                         return _call(f, this, Array.prototype.slice.apply(arguments));
//                       },
//                       Map: function () {
//                         return _call(f, this, Array.prototype.slice.apply(arguments));
//                       },
//                       Null: function () {
//                         return _call(f, Array.prototype.slice.apply(arguments));
//                       },
//                       Number: function () {
//                         return _call(f, this, Array.prototype.slice.apply(arguments));
//                       },
//                       String: function () {
//                         return _call(f, this, Array.prototype.slice.apply(arguments));
//                       },
//                       Error: function Error() { [native code] }
//                     },
//                     NULL: {
//                       toString: function () {
//                         return _call(f, Array.prototype.slice.apply(arguments));
//                       }
//                     },
//                     TRUE: {
//                       value: true
//                     },
//                     FALSE: {
//                       value: false
//                     },
//                     cli_pkg_main_0_: function () {
//                       return _call(f, Array.prototype.slice.apply(arguments));
//                     }
//                   },
//                   sassOptions: {
//                     indentedSyntax: true
//                   }
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('sass').rule('vue') */
//           {
//             resourceQuery: /\?vue/,
//             use: [
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/vue-style-loader/index.js',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/css-loader/dist/cjs.js',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/postcss-loader/src/index.js',
//                 options: {
//                   sourceMap: false,
//                   plugins: [
//                     function () { /* omitted long function */ }
//                   ]
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/sass-loader/dist/cjs.js',
//                 options: {
//                   sourceMap: false,
//                   implementation: {
//                     render: function () {
//                       return _call(f, Array.prototype.slice.apply(arguments));
//                     },
//                     renderSync: function () {
//                       return _call(f, Array.prototype.slice.apply(arguments));
//                     },
//                     info: 'dart-sass\t1.28.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.10.3\t(Dart Compiler)\t[Dart]',
//                     types: {
//                       Boolean: function () {
//                         return _call(f, Array.prototype.slice.apply(arguments));
//                       },
//                       Color: function () {
//                         return _call(f, this, Array.prototype.slice.apply(arguments));
//                       },
//                       List: function () {
//                         return _call(f, this, Array.prototype.slice.apply(arguments));
//                       },
//                       Map: function () {
//                         return _call(f, this, Array.prototype.slice.apply(arguments));
//                       },
//                       Null: function () {
//                         return _call(f, Array.prototype.slice.apply(arguments));
//                       },
//                       Number: function () {
//                         return _call(f, this, Array.prototype.slice.apply(arguments));
//                       },
//                       String: function () {
//                         return _call(f, this, Array.prototype.slice.apply(arguments));
//                       },
//                       Error: function Error() { [native code] }
//                     },
//                     NULL: {
//                       toString: function () {
//                         return _call(f, Array.prototype.slice.apply(arguments));
//                       }
//                     },
//                     TRUE: {
//                       value: true
//                     },
//                     FALSE: {
//                       value: false
//                     },
//                     cli_pkg_main_0_: function () {
//                       return _call(f, Array.prototype.slice.apply(arguments));
//                     }
//                   },
//                   sassOptions: {
//                     indentedSyntax: true
//                   }
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('sass').rule('normal-modules') */
//           {
//             test: /\.module\.\w+$/,
//             use: [
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/vue-style-loader/index.js',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/css-loader/dist/cjs.js',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2,
//                   modules: {
//                     localIdentName: '[name]_[local]_[hash:base64:5]'
//                   }
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/postcss-loader/src/index.js',
//                 options: {
//                   sourceMap: false,
//                   plugins: [
//                     function () { /* omitted long function */ }
//                   ]
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/sass-loader/dist/cjs.js',
//                 options: {
//                   sourceMap: false,
//                   implementation: {
//                     render: function () {
//                       return _call(f, Array.prototype.slice.apply(arguments));
//                     },
//                     renderSync: function () {
//                       return _call(f, Array.prototype.slice.apply(arguments));
//                     },
//                     info: 'dart-sass\t1.28.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.10.3\t(Dart Compiler)\t[Dart]',
//                     types: {
//                       Boolean: function () {
//                         return _call(f, Array.prototype.slice.apply(arguments));
//                       },
//                       Color: function () {
//                         return _call(f, this, Array.prototype.slice.apply(arguments));
//                       },
//                       List: function () {
//                         return _call(f, this, Array.prototype.slice.apply(arguments));
//                       },
//                       Map: function () {
//                         return _call(f, this, Array.prototype.slice.apply(arguments));
//                       },
//                       Null: function () {
//                         return _call(f, Array.prototype.slice.apply(arguments));
//                       },
//                       Number: function () {
//                         return _call(f, this, Array.prototype.slice.apply(arguments));
//                       },
//                       String: function () {
//                         return _call(f, this, Array.prototype.slice.apply(arguments));
//                       },
//                       Error: function Error() { [native code] }
//                     },
//                     NULL: {
//                       toString: function () {
//                         return _call(f, Array.prototype.slice.apply(arguments));
//                       }
//                     },
//                     TRUE: {
//                       value: true
//                     },
//                     FALSE: {
//                       value: false
//                     },
//                     cli_pkg_main_0_: function () {
//                       return _call(f, Array.prototype.slice.apply(arguments));
//                     }
//                   },
//                   sassOptions: {
//                     indentedSyntax: true
//                   }
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('sass').rule('normal') */
//           {
//             use: [
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/vue-style-loader/index.js',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/css-loader/dist/cjs.js',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/postcss-loader/src/index.js',
//                 options: {
//                   sourceMap: false,
//                   plugins: [
//                     function () { /* omitted long function */ }
//                   ]
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/sass-loader/dist/cjs.js',
//                 options: {
//                   sourceMap: false,
//                   implementation: {
//                     render: function () {
//                       return _call(f, Array.prototype.slice.apply(arguments));
//                     },
//                     renderSync: function () {
//                       return _call(f, Array.prototype.slice.apply(arguments));
//                     },
//                     info: 'dart-sass\t1.28.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.10.3\t(Dart Compiler)\t[Dart]',
//                     types: {
//                       Boolean: function () {
//                         return _call(f, Array.prototype.slice.apply(arguments));
//                       },
//                       Color: function () {
//                         return _call(f, this, Array.prototype.slice.apply(arguments));
//                       },
//                       List: function () {
//                         return _call(f, this, Array.prototype.slice.apply(arguments));
//                       },
//                       Map: function () {
//                         return _call(f, this, Array.prototype.slice.apply(arguments));
//                       },
//                       Null: function () {
//                         return _call(f, Array.prototype.slice.apply(arguments));
//                       },
//                       Number: function () {
//                         return _call(f, this, Array.prototype.slice.apply(arguments));
//                       },
//                       String: function () {
//                         return _call(f, this, Array.prototype.slice.apply(arguments));
//                       },
//                       Error: function Error() { [native code] }
//                     },
//                     NULL: {
//                       toString: function () {
//                         return _call(f, Array.prototype.slice.apply(arguments));
//                       }
//                     },
//                     TRUE: {
//                       value: true
//                     },
//                     FALSE: {
//                       value: false
//                     },
//                     cli_pkg_main_0_: function () {
//                       return _call(f, Array.prototype.slice.apply(arguments));
//                     }
//                   },
//                   sassOptions: {
//                     indentedSyntax: true
//                   }
//                 }
//               }
//             ]
//           }
//         ]
//       },
//       /* config.module.rule('less') */
//       {
//         test: /\.less$/,
//         oneOf: [
//           /* config.module.rule('less').rule('vue-modules') */
//           {
//             resourceQuery: /module/,
//             use: [
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/vue-style-loader/index.js',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/css-loader/dist/cjs.js',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2,
//                   modules: {
//                     localIdentName: '[name]_[local]_[hash:base64:5]'
//                   }
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/postcss-loader/src/index.js',
//                 options: {
//                   sourceMap: false,
//                   plugins: [
//                     function () { /* omitted long function */ }
//                   ]
//                 }
//               },
//               {
//                 loader: 'less-loader',
//                 options: {
//                   sourceMap: false
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('less').rule('vue') */
//           {
//             resourceQuery: /\?vue/,
//             use: [
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/vue-style-loader/index.js',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/css-loader/dist/cjs.js',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/postcss-loader/src/index.js',
//                 options: {
//                   sourceMap: false,
//                   plugins: [
//                     function () { /* omitted long function */ }
//                   ]
//                 }
//               },
//               {
//                 loader: 'less-loader',
//                 options: {
//                   sourceMap: false
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('less').rule('normal-modules') */
//           {
//             test: /\.module\.\w+$/,
//             use: [
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/vue-style-loader/index.js',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/css-loader/dist/cjs.js',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2,
//                   modules: {
//                     localIdentName: '[name]_[local]_[hash:base64:5]'
//                   }
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/postcss-loader/src/index.js',
//                 options: {
//                   sourceMap: false,
//                   plugins: [
//                     function () { /* omitted long function */ }
//                   ]
//                 }
//               },
//               {
//                 loader: 'less-loader',
//                 options: {
//                   sourceMap: false
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('less').rule('normal') */
//           {
//             use: [
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/vue-style-loader/index.js',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/css-loader/dist/cjs.js',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/postcss-loader/src/index.js',
//                 options: {
//                   sourceMap: false,
//                   plugins: [
//                     function () { /* omitted long function */ }
//                   ]
//                 }
//               },
//               {
//                 loader: 'less-loader',
//                 options: {
//                   sourceMap: false
//                 }
//               }
//             ]
//           }
//         ]
//       },
//       /* config.module.rule('stylus') */
//       {
//         test: /\.styl(us)?$/,
//         oneOf: [
//           /* config.module.rule('stylus').rule('vue-modules') */
//           {
//             resourceQuery: /module/,
//             use: [
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/vue-style-loader/index.js',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/css-loader/dist/cjs.js',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2,
//                   modules: {
//                     localIdentName: '[name]_[local]_[hash:base64:5]'
//                   }
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/postcss-loader/src/index.js',
//                 options: {
//                   sourceMap: false,
//                   plugins: [
//                     function () { /* omitted long function */ }
//                   ]
//                 }
//               },
//               {
//                 loader: 'stylus-loader',
//                 options: {
//                   sourceMap: false,
//                   preferPathResolver: 'webpack'
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('stylus').rule('vue') */
//           {
//             resourceQuery: /\?vue/,
//             use: [
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/vue-style-loader/index.js',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/css-loader/dist/cjs.js',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/postcss-loader/src/index.js',
//                 options: {
//                   sourceMap: false,
//                   plugins: [
//                     function () { /* omitted long function */ }
//                   ]
//                 }
//               },
//               {
//                 loader: 'stylus-loader',
//                 options: {
//                   sourceMap: false,
//                   preferPathResolver: 'webpack'
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('stylus').rule('normal-modules') */
//           {
//             test: /\.module\.\w+$/,
//             use: [
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/vue-style-loader/index.js',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/css-loader/dist/cjs.js',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2,
//                   modules: {
//                     localIdentName: '[name]_[local]_[hash:base64:5]'
//                   }
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/postcss-loader/src/index.js',
//                 options: {
//                   sourceMap: false,
//                   plugins: [
//                     function () { /* omitted long function */ }
//                   ]
//                 }
//               },
//               {
//                 loader: 'stylus-loader',
//                 options: {
//                   sourceMap: false,
//                   preferPathResolver: 'webpack'
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('stylus').rule('normal') */
//           {
//             use: [
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/vue-style-loader/index.js',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/css-loader/dist/cjs.js',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2
//                 }
//               },
//               {
//                 loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/postcss-loader/src/index.js',
//                 options: {
//                   sourceMap: false,
//                   plugins: [
//                     function () { /* omitted long function */ }
//                   ]
//                 }
//               },
//               {
//                 loader: 'stylus-loader',
//                 options: {
//                   sourceMap: false,
//                   preferPathResolver: 'webpack'
//                 }
//               }
//             ]
//           }
//         ]
//       },
//       /* config.module.rule('js') */
//       {
//         test: /\.m?jsx?$/,
//         exclude: [
//           function () { /* omitted long function */ }
//         ],
//         use: [
//           {
//             loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/cache-loader/dist/cjs.js',
//             options: {
//               cacheDirectory: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/.cache/babel-loader',
//               cacheIdentifier: '2838bdb4'
//             }
//           },
//           {
//             loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/babel-loader/lib/index.js'
//           }
//         ]
//       },
//       /* config.module.rule('eslint') */
//       {
//         enforce: 'pre',
//         test: /\.(vue|(j|t)sx?)$/,
//         exclude: [
//           /node_modules/,
//           '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/@vue/cli-service/lib'
//         ],
//         use: [
//           {
//             loader: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/eslint-loader/index.js',
//             options: {
//               extensions: [
//                 '.js',
//                 '.jsx',
//                 '.vue'
//               ],
//               cache: true,
//               cacheIdentifier: '2ba32c1a',
//               emitWarning: false,
//               emitError: false,
//               eslintPath: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/node_modules/eslint',
//               formatter: undefined
//             }
//           }
//         ]
//       }
//     ]
//   },
//   optimization: {
//     splitChunks: {
//       cacheGroups: {
//         vendors: {
//           name: 'chunk-vendors',
//           test: /[\\\/]node_modules[\\\/]/,
//           priority: -10,
//           chunks: 'initial'
//         },
//         common: {
//           name: 'chunk-common',
//           minChunks: 2,
//           priority: -20,
//           chunks: 'initial',
//           reuseExistingChunk: true
//         }
//       }
//     },
//     minimizer: [
//       {
//         options: {
//           test: /\.m?js(\?.*)?$/i,
//           chunkFilter: () => true,
//           warningsFilter: () => true,
//           extractComments: false,
//           sourceMap: true,
//           cache: true,
//           cacheKeys: defaultCacheKeys => defaultCacheKeys,
//           parallel: true,
//           include: undefined,
//           exclude: undefined,
//           minify: undefined,
//           terserOptions: {
//             compress: {
//               arrows: false,
//               collapse_vars: false,
//               comparisons: false,
//               computed_props: false,
//               hoist_funs: false,
//               hoist_props: false,
//               hoist_vars: false,
//               inline: false,
//               loops: false,
//               negate_iife: false,
//               properties: false,
//               reduce_funcs: false,
//               reduce_vars: false,
//               switches: false,
//               toplevel: false,
//               typeofs: false,
//               booleans: true,
//               if_return: true,
//               sequences: true,
//               unused: true,
//               conditionals: true,
//               dead_code: true,
//               evaluate: true
//             },
//             mangle: {
//               safari10: true
//             }
//           }
//         }
//       }
//     ]
//   },
//   plugins: [
//     /* config.plugin('vue-loader') */
//     new VueLoaderPlugin(),
//     /* config.plugin('feature-flags') */
//     new DefinePlugin(
//       {
//         __VUE_OPTIONS_API__: 'true',
//         __VUE_PROD_DEVTOOLS__: 'false'
//       }
//     ),
//     /* config.plugin('define') */
//     new DefinePlugin(
//       {
//         'process.env': {
//           NODE_ENV: '"development"',
//           BASE_URL: '"/"'
//         }
//       }
//     ),
//     /* config.plugin('case-sensitive-paths') */
//     new CaseSensitivePathsPlugin(),
//     /* config.plugin('friendly-errors') */
//     new FriendlyErrorsWebpackPlugin(
//       {
//         additionalTransformers: [
//           function () { /* omitted long function */ }
//         ],
//         additionalFormatters: [
//           function () { /* omitted long function */ }
//         ]
//       }
//     ),
//     /* config.plugin('html') */
//     new HtmlWebpackPlugin(
//       {
//         title: 'xingorg1-ui',
//         templateParameters: function () { /* omitted long function */ },
//         template: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/public/index.html'
//       }
//     ),
//     /* config.plugin('preload') */
//     new PreloadPlugin(
//       {
//         rel: 'preload',
//         include: 'initial',
//         fileBlacklist: [
//           /\.map$/,
//           /hot-update\.js$/
//         ]
//       }
//     ),
//     /* config.plugin('prefetch') */
//     new PreloadPlugin(
//       {
//         rel: 'prefetch',
//         include: 'asyncChunks'
//       }
//     ),
//     /* config.plugin('copy') */
//     new CopyPlugin(
//       [
//         {
//           from: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/public',
//           to: '/Users/guojufeng/Documents/GitHub/xingorg1-ui/dist',
//           toType: 'dir',
//           ignore: [
//             '.DS_Store',
//             {
//               glob: 'index.html',
//               matchBase: false
//             }
//           ]
//         }
//       ]
//     ),
//     {
//       options: {
//         template: 'public/index.html',
//         templateContent: false,
//         templateParameters: function () { /* omitted long function */ },
//         filename: 'index.html',
//         publicPath: 'auto',
//         hash: false,
//         inject: 'body',
//         scriptLoading: 'blocking',
//         compile: true,
//         favicon: false,
//         minify: 'auto',
//         cache: true,
//         showErrors: true,
//         chunks: 'all',
//         excludeChunks: [],
//         chunksSortMode: 'auto',
//         meta: {},
//         base: false,
//         title: '组件库',
//         xhtml: false
//       },
//       childCompilerHash: undefined,
//       assetJson: undefined,
//       hash: undefined,
//       version: 4
//     }
//   ],
//   entry: {
//     app: [
//       './src/main.js'
//     ]
//   }
// }
