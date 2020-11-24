.PHONY: dist test
default: help

install:
	npm install

install-cn:
	npm install --registry=http://registry.npm.taobao.org

new:
	node build/bin/new.js $(filter-out $@,$(MAKECMDGOALS))

dev:
	npm run dev

dist: 
	npm run dist

pub:
	npm run pub

# deploy:
# 	# npm run deploy
	
test:
	npm run test:ui

help:
	@echo "   \033[35m make\033[0m \033[1m命令使用说明：\033[0m"
	@echo "   \033[35m make install\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  安装依赖"
	@echo "   \033[35m make install-cn\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  安装依赖"
	@echo "   \033[35m make new <component-name> [组件中文名]\033[0m\t---  创建新组件(组件英文名用中横线)例如 'make new button-group 按钮'"
	@echo "   \033[35m make dev\033[0m\t\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  启动开发"
	@echo "   \033[35m make test\033[0m\t\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  运行测试"
	@echo "   \033[35m make dist\033[0m\t\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  编译项目，构建目标文件"
	@echo "   \033[35m make pub\033[0m\t\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  发布到 npm 上"
