module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            'wpe-browser' : {
                src : [
                    'browser/EventEmitter.js',
                    'wpe/Utils.js',
                    'wpe/Stage.js',
                    'wpe/StageUtils.js',
                    'wpe/GeometryUtils.js',
                    'wpe/EventData.js',
                    'wpe/EventType.js',
                    'wpe/TextureManager.js',
                    'wpe/Texture.js',
                    'wpe/TextureSource.js',
                    'wpe/TextureAtlas.js',
                    'wpe/TextureAtlasTree.js',
                    'wpe/Component.js',
                    'wpe/ComponentTags.js',
                    'wpe/ComponentText.js',
                    'wpe/TextRenderer.js',
                    'wpe/TextRendererSettings.js',
                    'wpe/GenericTransition.js',
                    'wpe/Transition.js',
                    'wpe/GenericAnimation.js',
                    'wpe/AnimationAction.js',
                    'wpe/AnimationActionItems.js',
                    'wpe/Animation.js',
                    'wpe/Renderer.js',
                    'wpe/RenderItem.js',
                    'wpe/UComponent.js',
                    'wpe/UComponentContext.js',
                    'helpers/Tools.js',
                    'browser/WebAdapter.js'
                ],
                dest : 'dist/wpe.js'
            }
        },
        strip_code: {
            options: {
                patterns: [/var isNode[^}]+}\n/g, /if \(isNode\) {[^}]+}\n/g]
            },
            "wpe-browser": {
                src: 'dist/wpe.js'
            }
        },
        uglify : {
            options:{
                mangle: true
            },
            "wpe-browser": {
                files: {
                    'dist/wpe.min.js' : [ 'dist/wpe.js' ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-strip-code');
    grunt.registerTask('wpe-browser', [ 'concat:wpe-browser', 'strip_code:wpe-browser', 'uglify:wpe-browser' ]);
};
